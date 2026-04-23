import React from 'react';
import { Download, Clock, CheckCircle2, FileText } from 'lucide-react';

export default function ProjectTracking() {
  const milestones = [
    { id: 1, title: "Project Kickoff", status: "completed", date: "Oct 10, 2023" },
    { id: 2, title: "Design Phase", status: "completed", date: "Oct 20, 2023" },
    { id: 3, title: "Development Phase", status: "active", date: "Nov 05, 2023" },
    { id: 4, title: "Final Review", status: "pending", date: "Nov 15, 2023" },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-5xl">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Project Tracking</h2>
        <p className="text-foreground/70 mt-1">Monitor progress and download deliverables.</p>
      </div>

      <div className="glass p-6 rounded-xl border border-primary/20 shadow-lg shadow-primary/5">
        <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Web Redesign Campaign</h3>
            <p className="text-sm text-foreground/60 flex items-center gap-2">
              <Clock className="h-4 w-4" /> Estimated Completion: Nov 15, 2023
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium mb-2">In Progress</span>
            <p className="text-sm font-bold text-foreground/90">65% Complete</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Timeline */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/80">Project Milestones</h4>
            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div key={m.id} className="relative pl-6">
                  {idx !== milestones.length - 1 && (
                    <div className={`absolute left-2 top-6 bottom-[-24px] w-px ${m.status === 'completed' ? 'bg-primary' : 'bg-white/10'}`}></div>
                  )}
                  <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center ${
                    m.status === 'completed' ? 'border-primary text-primary' : 
                    m.status === 'active' ? 'border-blue-400 text-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]' : 'border-white/20'
                  }`}>
                    {m.status === 'completed' && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                    {m.status === 'active' && <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>}
                  </div>
                  
                  <div className={`${m.status === 'pending' ? 'opacity-50' : ''}`}>
                    <h5 className="font-medium text-sm">{m.title}</h5>
                    <p className="text-xs text-foreground/50 mt-1">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Files */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground/80">Deliverables & Files</h4>
            <div className="space-y-3">
              <div className="bg-secondary/50 border border-white/5 p-3 rounded-lg flex items-center justify-between group hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 text-blue-400 rounded"><FileText className="h-4 w-4" /></div>
                  <div>
                    <p className="text-sm font-medium">Design_Wireframes_v1.pdf</p>
                    <p className="text-xs text-foreground/50">4.2 MB • Oct 20</p>
                  </div>
                </div>
                <button className="text-foreground/50 hover:text-primary transition-colors p-2"><Download className="h-4 w-4" /></button>
              </div>
              
              <div className="bg-secondary/50 border border-white/5 p-3 rounded-lg flex items-center justify-between group hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 text-green-400 rounded"><FileText className="h-4 w-4" /></div>
                  <div>
                    <p className="text-sm font-medium">Project_Brief_Signed.pdf</p>
                    <p className="text-xs text-foreground/50">1.1 MB • Oct 10</p>
                  </div>
                </div>
                <button className="text-foreground/50 hover:text-primary transition-colors p-2"><Download className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
