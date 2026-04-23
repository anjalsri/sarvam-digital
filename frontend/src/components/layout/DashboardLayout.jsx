import React, { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';

export default function DashboardLayout({ title, user, sidebarItems, activeTab, setActiveTab, onLogout, children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        
        {/* Mobile menu toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-secondary/50 rounded-lg text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar */}
        <div className={`w-full md:w-64 flex-shrink-0 flex-col gap-4 ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          <div className="glass p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-foreground/60 truncate">{user?.email}</p>
          </div>
          
          <div className="glass p-4 rounded-2xl border border-white/10 shadow-xl flex-grow flex flex-col max-h-[calc(100vh-8rem)]">
            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left w-full
                      ${isActive 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'hover:bg-white/5 text-foreground/80 hover:text-foreground'}`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-8 pt-4 border-t border-white/10">
              <button 
                onClick={onLogout} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors text-left w-full"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl min-h-[500px]">
             {children}
          </div>
        </div>

      </div>
    </div>
  );
}
