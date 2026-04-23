import React from 'react';
import { Send, Users, User, AlertCircle } from 'lucide-react';

export default function NotificationTool() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Push Notifications</h2>
        <p className="text-foreground/70 mt-1">Send alerts and updates to users.</p>
      </div>

      <div className="glass p-6 rounded-xl border border-white/10 shadow-xl space-y-6">
        
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground/80">Recipient Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 bg-secondary/50 px-4 py-3 rounded-lg border border-primary/50 cursor-pointer w-1/2">
              <input type="radio" name="recipient" defaultChecked className="text-primary focus:ring-primary bg-background border-white/20" />
              <Users className="h-5 w-5 text-primary" />
              <span className="font-medium">All Users (Bulk)</span>
            </label>
            <label className="flex items-center gap-2 bg-secondary/50 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 cursor-pointer w-1/2 transition-colors">
              <input type="radio" name="recipient" className="text-primary focus:ring-primary bg-background border-white/20" />
              <User className="h-5 w-5 text-foreground/70" />
              <span className="font-medium text-foreground/70">Specific User</span>
            </label>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Notification Title</label>
            <input type="text" placeholder="e.g., Scheduled Maintenance" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Message Content</label>
            <textarea rows="4" placeholder="Type your message here..." className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Notification Type</label>
            <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors appearance-none">
              <option>Info (Blue)</option>
              <option>Success (Green)</option>
              <option>Warning (Yellow)</option>
              <option>Danger (Red)</option>
            </select>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center">
          <p className="text-xs text-foreground/50 flex items-center gap-1">
            <AlertCircle className="h-4 w-4" /> This will instantly notify all active users.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            <Send className="h-4 w-4" /> Send Notification
          </button>
        </div>

      </div>
    </div>
  );
}
