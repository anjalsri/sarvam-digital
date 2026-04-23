import React from 'react';
import { ShoppingCart, CheckCircle2, Star } from 'lucide-react';

export default function ServicesTool() {
  const services = [
    { id: 1, name: "SEO Optimization", price: "$500", rating: "4.9", category: "Marketing", desc: "Rank higher on Google and drive organic traffic to your site." },
    { id: 2, name: "Web Development", price: "$1500", rating: "5.0", category: "Development", desc: "Fast, responsive, and beautiful websites built with modern tech." },
    { id: 3, name: "Social Media Ads", price: "$800", rating: "4.8", category: "Marketing", desc: "Data-driven ad campaigns on Google and Facebook to maximize ROI." },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Services & Plans</h2>
        <p className="text-foreground/70 mt-1">Browse and purchase new digital services to scale your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="glass p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                <Star className="h-3 w-3 fill-current" /> {service.rating}
              </span>
            </div>
            <div className="mb-4 mt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">{service.category}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-sm text-foreground/70 mb-6 flex-grow">{service.desc}</p>
            
            <div className="flex items-end justify-between mt-auto border-t border-white/10 pt-4">
              <div>
                <p className="text-xs text-foreground/50 mb-1">Starting from</p>
                <p className="text-2xl font-bold text-gradient">{service.price}</p>
              </div>
              <button className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 group-hover:scale-105">
                <ShoppingCart className="h-4 w-4" /> Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
