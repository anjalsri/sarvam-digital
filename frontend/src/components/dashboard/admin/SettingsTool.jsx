import React from 'react';
import { Save, Globe, Mail, Phone, Key, Palette } from 'lucide-react';

export default function SettingsTool() {
  return (
    <div className="space-y-6 animate-fade-in max-w-4xl pb-10">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Platform Settings</h2>
          <p className="text-foreground/70 mt-1">Configure global website settings and integrations.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="space-y-6">
          <h3 className="font-semibold text-lg flex items-center gap-2 border-b border-white/10 pb-2"><Globe className="h-5 w-5 text-primary" /> General Contact Info</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80 flex items-center gap-2"><Mail className="h-4 w-4" /> Support Email</label>
              <input type="email" defaultValue="support@sarvamdigital.com" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80 flex items-center gap-2"><Phone className="h-4 w-4" /> Business Phone</label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80 flex items-center gap-2"><Globe className="h-4 w-4" /> Office Address</label>
              <textarea rows="3" defaultValue="123 Innovation Drive&#10;Tech City, TC 90210" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* API Keys */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 border-b border-white/10 pb-2"><Key className="h-5 w-5 text-purple-400" /> API Integrations</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Stripe Secret Key (Payments)</label>
                <input type="password" defaultValue="sk_test_1234567890" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors font-mono" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">OpenAI API Key (AI Tools)</label>
                <input type="password" defaultValue="sk-xxxx-xxxx-xxxx" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors font-mono" />
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 border-b border-white/10 pb-2"><Palette className="h-5 w-5 text-pink-400" /> Branding & Theme</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground/80">Primary Color HEX</label>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded bg-[#8a2be2] border border-white/20"></div>
                  <input type="text" defaultValue="#8a2be2" className="flex-grow bg-background border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition-colors font-mono uppercase" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-white/10">
                <div>
                  <h4 className="font-medium">Maintenance Mode</h4>
                  <p className="text-xs text-foreground/50">Show a "coming soon" page to non-admins.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
