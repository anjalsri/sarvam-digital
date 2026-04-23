import React from 'react';
import { User, Mail, Lock, Save, UserCircle } from 'lucide-react';

export default function ProfileTool({ user }) {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl pb-10">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Profile Settings</h2>
        <p className="text-foreground/70 mt-1">Update your personal information and password.</p>
      </div>

      <div className="glass p-8 rounded-xl border border-white/10 shadow-xl">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            {user?.name?.charAt(0) || <UserCircle className="h-12 w-12" />}
          </div>
          <div>
            <h3 className="text-2xl font-bold">{user?.name || 'User'}</h3>
            <p className="text-foreground/50">{user?.email}</p>
            <button className="mt-3 text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded transition-colors">
              Change Avatar
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80 flex items-center gap-2"><User className="h-4 w-4" /> Full Name</label>
              <input type="text" defaultValue={user?.name} className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80 flex items-center gap-2"><Mail className="h-4 w-4" /> Email Address</label>
              <input type="email" defaultValue={user?.email} className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-foreground/50" disabled />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h4 className="font-semibold mb-4 flex items-center gap-2"><Lock className="h-4 w-4" /> Change Password</h4>
            <div className="space-y-4 max-w-md">
              <div>
                <input type="password" placeholder="Current Password" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <input type="password" placeholder="New Password" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <input type="password" placeholder="Confirm New Password" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button type="button" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
