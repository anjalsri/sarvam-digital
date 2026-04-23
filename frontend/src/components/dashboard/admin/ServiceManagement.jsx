import React from 'react';
import { Plus, Edit3, Trash2, Power } from 'lucide-react';

export default function ServiceManagement() {
  const mockServices = [
    { id: 1, name: "SEO Optimization", price: "$500", status: true, category: "Marketing" },
    { id: 2, name: "Web Development", price: "$1500", status: true, category: "Development" },
    { id: 3, name: "Social Media Ads", price: "$800", status: false, category: "Marketing" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Service Management</h2>
          <p className="text-foreground/70 mt-1">Add, edit, and configure pricing for services.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus className="h-4 w-4" /> Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockServices.map(service => (
          <div key={service.id} className={`glass p-6 rounded-xl border ${service.status ? 'border-primary/30 shadow-primary/5' : 'border-white/5 opacity-70'} transition-all relative group`}>
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-black/40 hover:bg-black/60 rounded-lg text-white transition-colors"><Edit3 className="h-4 w-4" /></button>
              <button className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
            </div>
            
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded">{service.category}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-2xl font-light text-foreground/80 mb-6">{service.price}</p>
            
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className={`text-sm ${service.status ? 'text-green-400' : 'text-foreground/50'}`}>
                {service.status ? 'Active' : 'Disabled'}
              </span>
              <button className={`p-2 rounded-full transition-colors ${service.status ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-white/5 text-foreground/50 hover:bg-white/10'}`}>
                <Power className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
