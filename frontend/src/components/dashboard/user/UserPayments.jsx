import React from 'react';
import { Download, CreditCard } from 'lucide-react';

export default function UserPayments() {
  const transactions = [
    { id: "TRX-9821", amount: "$500.00", date: "Oct 24, 2023", status: "Completed", service: "SEO Optimization" },
    { id: "TRX-8742", amount: "$1500.00", date: "Sep 15, 2023", status: "Completed", service: "Web Development" },
  ];

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Payment History</h2>
        <p className="text-foreground/70 mt-1">View past transactions and download invoices.</p>
      </div>

      <div className="bg-secondary/20 rounded-xl border border-white/5 p-6 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <CreditCard className="text-primary h-6 w-6" />
          </div>
          <div>
            <p className="text-foreground/70 text-sm">Active Payment Method</p>
            <p className="font-bold flex items-center gap-2">Visa ending in **** 4242</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors border border-white/10">
          Update Method
        </button>
      </div>

      <div className="overflow-x-auto bg-black/20 rounded-xl border border-white/5">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-white/10 text-foreground/70 text-sm bg-white/5">
              <th className="py-4 px-6 font-medium">Transaction ID</th>
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
            {transactions.length === 0 && (
              <tr>
                <td colSpan="6" className="py-8 text-center text-foreground/50">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
