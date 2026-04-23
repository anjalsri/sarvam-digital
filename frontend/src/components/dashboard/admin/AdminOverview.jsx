import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, FolderKanban, Target, TrendingUp } from 'lucide-react';

export default function AdminOverview({ user }) {
  const stats = [
    { label: "Total Users", value: "1,245", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Total Revenue", value: "$45,230", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
    { label: "Active Projects", value: "32", icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { label: "New Leads", value: "128", icon: Target, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <p className="text-foreground/70 mt-1">Welcome back, <span className="text-primary">{user?.name}</span>. Here is your system snapshot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${stat.bg} p-6 rounded-xl border ${stat.border} shadow-inner flex items-center justify-between`}
          >
            <div>
              <h3 className={`font-semibold mb-1 ${stat.color}`}>{stat.label}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            <stat.icon className={`h-10 w-10 ${stat.color} opacity-80`} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-inner">
          <h3 className="font-semibold mb-4 text-lg border-b border-white/10 pb-2">Recent Signups</h3>
          <ul className="space-y-4">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">U</div>
                  <span>User {i}</span>
                </div>
                <span className="text-foreground/50">2 mins ago</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-inner">
          <h3 className="font-semibold mb-4 text-lg border-b border-white/10 pb-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 transition-colors flex flex-col items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm font-medium">Generate Report</span>
            </button>
            <button className="p-4 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/20 transition-colors flex flex-col items-center justify-center gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm font-medium">Add User</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
