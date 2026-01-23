import { ArrowLeft, ChevronDown, QrCode } from 'lucide-react';
import { useState } from 'react';

interface SendScreenProps {
  onBack: () => void;
}

export function SendScreen({ onBack }: SendScreenProps) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('SOL');

  const handleSend = () => {
    // Mock send functionality
    alert(`Sending ${amount} ${selectedAsset} to ${recipient}`);
    onBack();
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
        <h2>Send</h2>
      </div>

      {/* Asset Selection */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Select Asset</label>
        <button className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#9945FF] flex items-center justify-center">
              <span>S</span>
            </div>
            <div className="text-left">
              <div>Solana</div>
              <div className="text-sm text-gray-400">12.5834 SOL</div>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Amount</label>
        <div className="bg-[#2A2A2D] rounded-xl p-4">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-transparent text-3xl outline-none"
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-400">≈ $0.00</span>
            <button className="text-sm text-[#AB9FF2] hover:text-[#C0B3FF] transition-colors">
              Max
            </button>
          </div>
        </div>
      </div>

      {/* Recipient Input */}
      <div className="mb-8">
        <label className="block text-sm text-gray-400 mb-2">Send To</label>
        <div className="bg-[#2A2A2D] rounded-xl p-4 flex items-center gap-3">
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Wallet address or domain"
            className="flex-1 bg-transparent outline-none"
          />
          <button className="text-[#AB9FF2] hover:text-[#C0B3FF] transition-colors">
            <QrCode className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-[#2A2A2D] rounded-xl p-4 mb-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Network Fee</span>
          <span>0.000005 SOL</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Total</span>
          <span>{amount || '0.00'} SOL</span>
        </div>
      </div>

      {/* Send Button */}
      <button
        onClick={handleSend}
        disabled={!amount || !recipient}
        className="w-full bg-gradient-to-r from-[#AB9FF2] to-[#6B5DD3] hover:from-[#C0B3FF] hover:to-[#7B6DE3] disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl py-4"
      >
        Review Send
      </button>
    </div>
  );
}
