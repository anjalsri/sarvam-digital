import React from 'react';
import { Download, Filter, Search, ArrowUpRight } from 'lucide-react';

export default function PaymentTool() {
  const transactions = [
    { id: "TRX-9821", user: "John Doe", amount: "$500.00", date: "Oct 24, 2023", status: "Completed", service: "SEO Optimization" },
    { id: "TRX-9822", user: "Alice Smith", amount: "$1500.00", date: "Oct 22, 2023", status: "Pending", service: "Web Development" },
    { id: "TRX-9823", user: "Bob Wilson", amount: "$250.00", date: "Oct 20, 2023", status: "Failed", service: "Consulting" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Payments & Transactions</h2>
        <p className="text-foreground/70 mt-1">View revenue history and download invoices.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex gap-4">
          <div className="bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-xl">
            <p className="text-sm text-green-400 font-medium mb-1">Total Revenue</p>
            <p className="text-2xl font-bold">$45,230</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-xl">
            <p className="text-sm text-blue-400 font-medium mb-1">This Month</p>
            <p className="text-2xl font-bold">$8,450</p>
          </div>
        </div>

        <div className="flex gap-2 items-end">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 h-4 w-4" />
            <input type="text" placeholder="Search TRX ID..." className="bg-background border border-white/10 rounded-lg pl-9 pr-4 py-2 focus:border-primary transition-colors text-sm" />
          </div>
          <button className="p-2 bg-secondary/50 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-black/20 rounded-xl border border-white/5 mt-4">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-white/10 text-foreground/70 text-sm bg-white/5">
              <th className="py-4 px-6 font-medium">Transaction ID</th>
              <th className="py-4 px-6 font-medium">Client</th>
              <th className="py-4 px-6 font-medium">Service</th>
              <th className="py-4 px-6 font-medium">Amount</th>
              <th className="py-4 px-6 font-medium">Date</th>
              <th className="py-4 px-6 font-medium">Status</th>
              <th className="py-4 px-6 font-medium text-right">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(trx => (
              <tr key={trx.id} className="border-b border-white/5 hover:bg-white/5 transition-colors text-sm">
                <td className="py-4 px-6 font-mono text-primary/80">{trx.id}</td>
                <td className="py-4 px-6 font-medium">{trx.user}</td>
                <td className="py-4 px-6 text-foreground/70">{trx.service}</td>
                <td className="py-4 px-6 font-bold">{trx.amount}</td>
                <td className="py-4 px-6 text-foreground/60">{trx.date}</td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-1 rounded text-xs ${
                    trx.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 
                    trx.status === 'Pending' ? 'bg-orange-500/20 text-orange-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {trx.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-foreground/50 hover:text-primary transition-colors inline-flex items-center gap-1">
                    <Download className="h-4 w-4" /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
