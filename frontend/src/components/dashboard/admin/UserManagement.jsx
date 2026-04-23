import React, { useState } from 'react';
import { Search, Filter, Shield, Ban, Edit, MoreVertical } from 'lucide-react';

export default function UserManagement() {
  const [search, setSearch] = useState('');

  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", status: "Active" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "User", status: "Blocked" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4 flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-foreground/70 mt-1">Search, filter, and manage platform users.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Add New User
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search users by name or email..." 
            className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg flex items-center gap-2 hover:bg-white/5 transition-colors">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      <div className="overflow-x-auto bg-black/20 rounded-xl border border-white/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-foreground/70 text-sm bg-white/5">
              <th className="py-4 px-6 font-medium">User</th>
              <th className="py-4 px-6 font-medium">Role</th>
              <th className="py-4 px-6 font-medium">Status</th>
              <th className="py-4 px-6 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map(u => (
              <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{u.name.charAt(0)}</div>
                    <div>
                      <p className="font-medium">{u.name}</p>
                      <p className="text-sm text-foreground/50">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider ${u.role === 'Admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {u.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`text-sm flex items-center gap-2 ${u.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${u.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    {u.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-blue-400 tooltip" title="Assign Projects"><Shield className="h-4 w-4" /></button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-orange-400 tooltip" title="Block/Unblock"><Ban className="h-4 w-4" /></button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-foreground/70 tooltip" title="Edit"><Edit className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
