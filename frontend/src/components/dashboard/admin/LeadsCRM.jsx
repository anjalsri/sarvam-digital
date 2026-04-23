import React from 'react';
import { Mail, Phone, Calendar, MoreVertical } from 'lucide-react';

export default function LeadsCRM() {
  const leads = [
    { id: 1, name: "Acme Corp", contact: "sarah@acme.com", phone: "+1 234 567 890", status: "New", date: "2 hrs ago", notes: "Interested in full rebrand." },
    { id: 2, name: "GlobalTech", contact: "david@global.tech", phone: "+44 7700 900077", status: "Contacted", date: "1 day ago", notes: "Sent pricing PDF." },
    { id: 3, name: "Startup Inc", contact: "founder@startup.io", phone: "-", status: "Converted", date: "3 days ago", notes: "Signed contract." },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Leads CRM</h2>
        <p className="text-foreground/70 mt-1">Manage incoming inquiries and contact form submissions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary/20 p-4 rounded-xl border border-white/5 h-[600px] overflow-y-auto">
          <h3 className="font-semibold mb-4 text-orange-400 border-b border-orange-500/20 pb-2">New Leads</h3>
          <div className="space-y-4">
            {leads.filter(l => l.status === 'New').map(lead => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>
        
        <div className="bg-secondary/20 p-4 rounded-xl border border-white/5 h-[600px] overflow-y-auto">
          <h3 className="font-semibold mb-4 text-blue-400 border-b border-blue-500/20 pb-2">Contacted</h3>
          <div className="space-y-4">
            {leads.filter(l => l.status === 'Contacted').map(lead => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>

        <div className="bg-secondary/20 p-4 rounded-xl border border-white/5 h-[600px] overflow-y-auto">
          <h3 className="font-semibold mb-4 text-green-400 border-b border-green-500/20 pb-2">Converted</h3>
          <div className="space-y-4">
            {leads.filter(l => l.status === 'Converted').map(lead => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadCard({ lead }) {
  return (
    <div className="bg-background/80 p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors shadow-lg cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-lg">{lead.name}</h4>
        <button className="text-foreground/50 hover:text-foreground"><MoreVertical className="h-4 w-4" /></button>
      </div>
      <div className="space-y-2 text-sm text-foreground/70 mb-4">
        <p className="flex items-center gap-2"><Mail className="h-3 w-3" /> {lead.contact}</p>
        <p className="flex items-center gap-2"><Phone className="h-3 w-3" /> {lead.phone}</p>
        <p className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {lead.date}</p>
      </div>
      <div className="bg-white/5 p-2 rounded text-xs italic text-foreground/60 border border-white/5">
        "{lead.notes}"
      </div>
    </div>
  );
}
