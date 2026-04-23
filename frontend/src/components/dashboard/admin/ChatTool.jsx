import React, { useState, useEffect, useRef } from 'react';
import { Send, UserCircle2, Search } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

export default function ChatTool() {
  const { user: adminUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch all users on mount
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/')
      .then(res => {
        // Filter out the current admin from the list (optional, but good practice)
        setUsers(res.data.filter(u => u.id !== adminUser?.id));
      })
      .catch(err => console.error("Error fetching users:", err));
  }, [adminUser]);

  // Connect WebSocket
  useEffect(() => {
    if (!adminUser) return;
    const token = localStorage.getItem('access_token');
    
    ws.current = new WebSocket(`ws://localhost:8000/api/v1/chat/ws/sarvam-ai/${adminUser.id}?token=${token}`);
    
    ws.current.onmessage = (event) => {
      const newMsg = JSON.parse(event.data);
      // We receive a message. Add it to our active chat ONLY IF it belongs to the selected user.
      setMessages(prev => {
        // Check if duplicate
        if (prev.find(m => m.id === newMsg.id)) return prev;
        
        // Use a functional state update to access the current selectedUser from the closure
        // However, selectedUser might be stale here if we just use it directly. 
        // We will use a ref or just always append, but filter in render.
        // For simplicity, we append it. We'll filter in the render.
        return [...prev, newMsg];
      });
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [adminUser]);

  // Fetch history when a user is selected
  useEffect(() => {
    if (selectedUser) {
      axios.get(`http://localhost:8000/api/v1/chat/sarvam-ai/history/${selectedUser.id}`)
        .then(res => setMessages(res.data))
        .catch(err => console.error("Error fetching chat history", err));
    } else {
      setMessages([]);
    }
  }, [selectedUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || !ws.current || !selectedUser) return;
    
    const payload = {
      receiver_id: selectedUser.id,
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

  // Filter messages to only show the ones between Admin and the Selected User
  const activeChatMessages = messages.filter(
    msg => (msg.sender_id === selectedUser?.id) || (msg.receiver_id === selectedUser?.id)
  );

  return (
    <div className="animate-fade-in flex flex-col h-[calc(100vh-12rem)] min-h-[500px]">
      <div className="border-b border-white/10 pb-4 mb-4">
        <h2 className="text-2xl font-bold">Sarvam AI Chat (Admin)</h2>
        <p className="text-foreground/70 mt-1">Real-time messaging with clients.</p>
      </div>

      <div className="flex flex-grow border border-white/10 rounded-xl overflow-hidden bg-black/20">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 h-4 w-4" />
              <input type="text" placeholder="Search clients..." className="w-full bg-background/50 border border-white/10 rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-primary text-sm" />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            {users.map((u) => (
              <div 
                key={u.id} 
                onClick={() => setSelectedUser(u)}
                className={`p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors flex items-center gap-3 ${selectedUser?.id === u.id ? 'bg-primary/10 border-l-2 border-l-primary' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <UserCircle2 className="h-6 w-6 text-foreground/50" />
                </div>
                <div className="flex-grow overflow-hidden">
                  <h4 className="font-semibold text-sm truncate">{u.name || u.email}</h4>
                  <p className="text-xs text-foreground/60 truncate">Client ID: {u.id}</p>
                </div>
              </div>
            ))}
            {users.length === 0 && <p className="p-4 text-center text-sm text-foreground/50">No users found.</p>}
          </div>
        </div>

        {/* Chat Area */}
        <div className="w-2/3 flex flex-col bg-background/30">
          {selectedUser ? (
            <>
              <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {(selectedUser.name || selectedUser.email).charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold">{selectedUser.name || selectedUser.email}</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Online / Away</p>
                </div>
              </div>

              <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
                {activeChatMessages.map((msg, idx) => {
                  const isMe = msg.sender_id === adminUser?.id;
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
                    placeholder={`Reply to ${selectedUser.name || selectedUser.email}...`} 
                    className="flex-grow bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary" 
                  />
                  <button onClick={sendMessage} className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-lg transition-colors">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center text-foreground/50 flex-col">
              <UserCircle2 className="h-16 w-16 mb-4 opacity-20" />
              <p>Select a user from the sidebar to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
