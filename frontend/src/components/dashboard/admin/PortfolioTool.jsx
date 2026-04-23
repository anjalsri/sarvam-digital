import React from 'react';
import { Plus, Image as ImageIcon, Edit2, Trash2 } from 'lucide-react';

export default function PortfolioTool() {
  const portfolioItems = [
    { id: 1, title: "TechFlow Rebrand", category: "Branding", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
    { id: 2, title: "Growth Web App", category: "Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
    { id: 3, title: "Social Campaign X", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Portfolio Management</h2>
          <p className="text-foreground/70 mt-1">Manage public case studies and project galleries.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upload Placeholder */}
        <div className="glass rounded-xl border border-dashed border-white/20 flex flex-col items-center justify-center p-8 text-foreground/50 hover:text-foreground hover:border-primary transition-all cursor-pointer min-h-[250px] group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon className="h-8 w-8" />
          </div>
          <p className="font-medium text-center">Click or drag to upload<br/>new portfolio image</p>
        </div>

        {/* Existing Items */}
        {portfolioItems.map(item => (
          <div key={item.id} className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg h-[250px]">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Actions */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-black/60 hover:bg-primary rounded-lg text-white transition-colors backdrop-blur-sm"><Edit2 className="h-4 w-4" /></button>
              <button className="p-2 bg-black/60 hover:bg-red-500 rounded-lg text-white transition-colors backdrop-blur-sm"><Trash2 className="h-4 w-4" /></button>
            </div>

            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold bg-primary/80 text-white px-2 py-1 rounded backdrop-blur-md mb-2 inline-block">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
