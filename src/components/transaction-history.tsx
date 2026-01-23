import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
import { useState } from 'react';

interface TransactionHistoryProps {
  onBack: () => void;
}

interface Transaction {
  id: number;
  type: 'received' | 'sent';
  asset: string;
  amount: string;
  value: string;
  from?: string;
  to?: string;
  timestamp: string;
  status: string;
}

export function TransactionHistory({ onBack }: TransactionHistoryProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      type: 'received',
      asset: 'SOL',
      amount: '+2.5',
      value: '$488.25',
      from: '9xKQ...3mZR',
      timestamp: '2 hours ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'sent',
      asset: 'USDC',
      amount: '-150.00',
      value: '$150.00',
      to: '5hTL...8kWP',
      timestamp: '5 hours ago',
      status: 'completed',
    },
    {
      id: 3,
      type: 'received',
      asset: 'RAY',
      amount: '+25.5',
      value: '$76.50',
      from: '4jPM...9nXQ',
      timestamp: '1 day ago',
      status: 'completed',
    },
    {
      id: 4,
      type: 'sent',
      asset: 'SOL',
      amount: '-0.5',
      value: '$97.65',
      to: '8mWN...2kTP',
      timestamp: '2 days ago',
      status: 'completed',
    },
    {
      id: 5,
      type: 'received',
      asset: 'USDC',
      amount: '+500.00',
      value: '$500.00',
      from: '3nRK...5jYL',
      timestamp: '3 days ago',
      status: 'completed',
    },
  ]);

  const [editingTxId, setEditingTxId] = useState<number | null>(null);
  const [tempAmount, setTempAmount] = useState('');
  const [tempValue, setTempValue] = useState('');

  const handleEditTransaction = (tx: Transaction) => {
    setEditingTxId(tx.id);
    // Remove the +/- sign for editing
    setTempAmount(tx.amount.replace(/[+-]/g, ''));
    setTempValue(tx.value.replace('$', ''));
  };

  const handleSaveTransaction = (txId: number) => {
    setTransactions(transactions.map(tx => {
      if (tx.id === txId) {
        const sign = tx.type === 'received' ? '+' : '-';
        return {
          ...tx,
          amount: `${sign}${tempAmount}`,
          value: `$${tempValue}`,
        };
      }
      return tx;
    }));
    setEditingTxId(null);
  };

  return (
    <div className="px-6 pt-8 pb-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2>Transaction History</h2>
      </div>

      {/* Transactions List */}
      <div className="space-y-2">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === 'received'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}
              >
                {tx.type === 'received' ? (
                  <ArrowDownLeft className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </div>

              {/* Transaction Details */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="capitalize">{tx.type}</span>
                  <span className="text-sm text-gray-400">{tx.asset}</span>
                </div>
                <div className="text-sm text-gray-400">
                  {tx.type === 'received' ? `From ${tx.from}` : `To ${tx.to}`}
                </div>
              </div>

              {/* Amount & Time - Editable */}
              <div className="text-right">
                {editingTxId === tx.id ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <span className={tx.type === 'received' ? 'text-green-400' : 'text-white'}>
                        {tx.type === 'received' ? '+' : '-'}
                      </span>
                      <input
                        type="number"
                        value={tempAmount}
                        onChange={(e) => setTempAmount(e.target.value)}
                        className="w-20 bg-[#333336] px-2 py-1 rounded text-sm outline-none"
                        step="0.0001"
                      />
                      <span className="text-sm">{tx.asset}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">$</span>
                      <input
                        type="number"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        onBlur={() => handleSaveTransaction(tx.id)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveTransaction(tx.id)}
                        autoFocus
                        className="w-20 bg-[#333336] px-2 py-1 rounded text-sm outline-none"
                        step="0.01"
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditTransaction(tx)}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div
                      className={`mb-1 ${
                        tx.type === 'received' ? 'text-green-400' : 'text-white'
                      }`}
                    >
                      {tx.amount} {tx.asset}
                    </div>
                    <div className="text-sm text-gray-400">{tx.value}</div>
                  </button>
                )}
                <div className="text-sm text-gray-400 flex items-center justify-end gap-1 mt-1">
                  <Clock className="w-3 h-3" />
                  {tx.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no transactions) */}
      {transactions.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#2A2A2D] rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-gray-400 mb-2">No transactions yet</h3>
          <p className="text-sm text-gray-500">
            Your transaction history will appear here
          </p>
        </div>
      )}
    </div>
  );
}
