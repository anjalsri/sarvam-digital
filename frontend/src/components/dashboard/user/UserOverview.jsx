import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, ShoppingBag, Bell, ChevronRight } from 'lucide-react';

export default function UserOverview({ user }) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Welcome back, <span className="text-primary">{user?.name}</span>!</h2>
        <p className="text-foreground/70 mt-1">Here is a quick overview of your account activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20 shadow-inner flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1 text-blue-400">Active Projects</h3>
            <p className="text-3xl font-bold">2</p>
          </div>
          <FolderKanban className="h-10 w-10 text-blue-400 opacity-80" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-green-500/10 p-6 rounded-xl border border-green-500/20 shadow-inner flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1 text-green-400">Purchased Services</h3>
            <p className="text-3xl font-bold">4</p>
          </div>
          <ShoppingBag className="h-10 w-10 text-green-400 opacity-80" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/20 shadow-inner flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1 text-orange-400">Unread Notifications</h3>
            <p className="text-3xl font-bold">1</p>
          </div>
          <Bell className="h-10 w-10 text-orange-400 opacity-80" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-inner">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <h3 className="font-semibold text-lg">Project Status</h3>
            <button className="text-sm text-primary hover:underline flex items-center">View All <ChevronRight className="h-4 w-4" /></button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium">SEO Optimization Q4</span>
              <span className="text-blue-400 bg-blue-500/20 px-2 py-1 rounded">In Progress (65%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            
            <div className="flex justify-between items-center text-sm mt-4">
              <span className="font-medium">Web Redesign</span>
              <span className="text-green-400 bg-green-500/20 px-2 py-1 rounded">Review (90%)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-inner">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <h3 className="font-semibold text-lg">Recent Alerts</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1"><Bell className="h-4 w-4 text-primary" /></div>
              <div>
                <p className="text-sm font-medium text-foreground/90">Milestone 2 Completed</p>
                <p className="text-xs text-foreground/50 mt-1">10 mins ago</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1"><ShoppingBag className="h-4 w-4 text-green-400" /></div>
              <div>
                <p className="text-sm font-medium text-foreground/90">Payment Successful: TRX-9821</p>
                <p className="text-xs text-foreground/50 mt-1">Oct 24, 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
