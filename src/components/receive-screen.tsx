import { ArrowLeft, Copy, Share2 } from 'lucide-react';
import { useState } from 'react';

interface ReceiveScreenProps {
  onBack: () => void;
}

export function ReceiveScreen({ onBack }: ReceiveScreenProps) {
  const [copied, setCopied] = useState(false);
  const walletAddress = '7xKXPvGhHg4FqKWnYqJQYjZWn9mZQ42D8vH3pTcK5rLm';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <h2>Receive</h2>
      </div>

      {/* QR Code Container */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-white p-6 rounded-2xl mb-6">
          <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
            {/* QR Code Placeholder */}
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 ${
                    Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 mb-2">
          Scan this QR code to send crypto to your wallet
        </p>
      </div>

      {/* Wallet Address */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Your Address</label>
        <div className="bg-[#2A2A2D] rounded-xl p-4">
          <p className="break-all text-sm mb-3">{walletAddress}</p>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 bg-[#AB9FF2] hover:bg-[#C0B3FF] transition-colors rounded-lg py-2.5 flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Copy Address'}</span>
            </button>
            <button className="bg-[#333336] hover:bg-[#3D3D40] transition-colors rounded-lg px-4 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <p className="text-sm text-yellow-400">
          Only send Solana (SOL) and SPL tokens to this address. Sending other assets may result in permanent loss.
        </p>
      </div>
    </div>
  );
}
