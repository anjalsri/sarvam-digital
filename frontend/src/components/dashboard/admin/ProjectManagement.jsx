import React from 'react';
import { Plus, Clock, CheckCircle2, AlertCircle, FileUp, MoreHorizontal } from 'lucide-react';

export default function ProjectManagement() {
  const projects = [
    { id: 1, name: "TechFlow SEO Campaign", client: "John Doe", status: "In Progress", progress: 65, dueDate: "Oct 30" },
    { id: 2, name: "GrowthStack Website", client: "Alice Smith", status: "Review", progress: 90, dueDate: "Nov 15" },
    { id: 3, name: "E-commerce App", client: "Bob Wilson", status: "Pending", progress: 10, dueDate: "Dec 01" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'text-blue-400 bg-blue-500/20';
      case 'Review': return 'text-purple-400 bg-purple-500/20';
      case 'Pending': return 'text-orange-400 bg-orange-500/20';
      default: return 'text-foreground/70 bg-white/10';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'In Progress': return <Clock className="h-4 w-4" />;
      case 'Review': return <AlertCircle className="h-4 w-4" />;
      case 'Pending': return <Clock className="h-4 w-4" />;
      default: return <CheckCircle2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Project Management</h2>
          <p className="text-foreground/70 mt-1">Track active projects, assign tasks, and upload deliverables.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map(project => (
          <div key={project.id} className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <span className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)} {project.status}
                </span>
              </div>
              <p className="text-sm text-foreground/60">Client: {project.client} • Due: {project.dueDate}</p>
            </div>
            
            <div className="w-full md:w-48">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-secondary/50 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2">
                <FileUp className="h-4 w-4" /> Upload
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <MoreHorizontal className="h-5 w-5 text-foreground/70" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
