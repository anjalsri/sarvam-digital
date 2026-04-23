import React from 'react';
import { Bell, CheckCircle2, AlertCircle, ShoppingBag, FolderKanban } from 'lucide-react';

export default function UserNotifications() {
  const notifications = [
    { id: 1, type: "success", title: "Milestone Completed", message: "The 'Design Phase' milestone for your Web Redesign project has been marked as complete.", date: "10 mins ago", icon: CheckCircle2, color: "text-green-400", bg: "bg-green-500/10" },
    { id: 2, type: "info", title: "Payment Successful", message: "Your payment of $500.00 for SEO Optimization was successful. Invoice available.", date: "Oct 24, 2023", icon: ShoppingBag, color: "text-blue-400", bg: "bg-blue-500/10" },
    { id: 3, type: "alert", title: "Action Required", message: "Please review the wireframes uploaded in your project dashboard to proceed to development.", date: "Oct 20, 2023", icon: AlertCircle, color: "text-orange-400", bg: "bg-orange-500/10" },
    { id: 4, type: "system", title: "Welcome to Sarvam Digital", message: "Your account has been successfully created. Explore your dashboard to get started.", date: "Oct 15, 2023", icon: Bell, color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl pb-10">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p className="text-foreground/70 mt-1">Updates on your projects, orders, and account.</p>
        </div>
        <button className="text-sm text-primary hover:underline font-medium">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className="glass p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors flex gap-4">
            <div className={`mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${notif.bg}`}>
              <notif.icon className={`h-5 w-5 ${notif.color}`} />
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold">{notif.title}</h3>
                <span className="text-xs text-foreground/50 ml-4">{notif.date}</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">{notif.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
