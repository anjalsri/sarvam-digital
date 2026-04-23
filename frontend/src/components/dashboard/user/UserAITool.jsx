import React, { useState } from 'react';
import { Bot, Sparkles, Copy, Check } from 'lucide-react';

export default function UserAITool() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Mock API call
    setTimeout(() => {
      setResult(`Based on your request, here is a suggested caption:\n\n"Excited to announce our new product launch! 🚀 We've been working hard behind the scenes to bring you the best experience possible. Stay tuned for more details dropping tomorrow! #Innovation #TechLaunch #Growth"`);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Bot className="text-primary" /> AI Assistant
        </h2>
        <p className="text-foreground/70 mt-1">Use our AI to generate content, captions, and ideas for your brand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl border border-white/10 shadow-xl space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">I want to generate a...</label>
            <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors appearance-none">
              <option>Social Media Caption</option>
              <option>Short Blog Post Idea</option>
              <option>Email Subject Line</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Describe what it's about</label>
            <textarea 
              rows="5" 
              placeholder="A new product launch happening tomorrow..." 
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
            className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Sparkles className="h-5 w-5" />}
            {isGenerating ? 'Generating...' : 'Generate Magic'}
          </button>
        </div>

        <div className="glass p-6 rounded-xl border border-white/10 shadow-xl flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-foreground/80">AI Output</label>
            {result && (
              <button onClick={handleCopy} className="text-foreground/50 hover:text-primary transition-colors flex items-center gap-1 text-sm">
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy text'}
              </button>
            )}
          </div>
          
          <div className="flex-grow bg-background/50 border border-white/10 rounded-lg p-4 font-mono text-sm overflow-y-auto whitespace-pre-wrap relative min-h-[200px]">
            {result ? (
              <span className="text-foreground/90 leading-relaxed">{result}</span>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground/30">
                <Bot className="h-12 w-12 mb-2 opacity-50" />
                <p>Content will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
