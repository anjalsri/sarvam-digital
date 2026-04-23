import React, { useState, useEffect, useRef } from 'react';
import { Send, HeadphonesIcon } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

export default function UserChat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  
  // Assume Admin is ID 1 for this demo
  const ADMIN_ID = 1;

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem('access_token');
    
    // Fetch History
    axios.get(`http://localhost:8000/api/v1/chat/sarvam-ai/history/${ADMIN_ID}`)
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching chat history", err));

    // Connect WebSocket
    ws.current = new WebSocket(`ws://localhost:8000/api/v1/chat/ws/sarvam-ai/${user.id}?token=${token}`);
    
    ws.current.onmessage = (event) => {
      const newMsg = JSON.parse(event.data);
      setMessages(prev => {
        // Prevent duplicate messages if server echoes our own message
        if (prev.find(m => m.id === newMsg.id)) return prev;
        return [...prev, newMsg];
      });
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || !ws.current) return;
    
    const payload = {
      receiver_id: ADMIN_ID,
      message: input.trim()
    };
    
    ws.current.send(JSON.stringify(payload));
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const formatTime = (isoString) => {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="animate-fade-in flex flex-col h-[calc(100vh-12rem)] min-h-[500px]">
      <div className="border-b border-white/10 pb-4 mb-4">
        <h2 className="text-2xl font-bold">Sarvam AI Chat</h2>
        <p className="text-foreground/70 mt-1">Chat directly with your account manager.</p>
      </div>

      <div className="flex flex-col flex-grow border border-white/10 rounded-xl overflow-hidden bg-black/20 max-w-4xl">
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/5">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <HeadphonesIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold">Sarvam Digital Support</h3>
            <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Online (Usually replies instantly)</p>
          </div>
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-background/30">
          {messages.map((msg, idx) => {
            const isMe = msg.sender_id === user?.id;
            return (
              <div key={msg.id || idx} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`${isMe ? 'bg-primary text-primary-foreground rounded-tr-sm shadow-md' : 'bg-secondary/50 border border-white/5 rounded-tl-sm'} p-3 rounded-2xl max-w-[80%] text-sm`}>
                  {msg.content}
                  <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-primary-foreground/60' : 'text-foreground/40'}`}>
                    {msg.timestamp ? formatTime(msg.timestamp) : 'Sending...'}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..." 
              className="flex-grow bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" 
            />
            <button onClick={sendMessage} className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-lg transition-colors">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
