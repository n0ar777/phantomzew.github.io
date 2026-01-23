import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Token } from '../App';
import solLogo from 'figma:asset/bac6174fa9d4dcb7d71ac6543621a9bf39867b1d.png';
import usdcLogo from 'figma:asset/77fdbd46699ce732685b57762eec11035c593279.png';
import usdtLogo from 'figma:asset/7ac130480b2755271a29ee0bfbc27bceac61ee6f.png';
import ethLogo from 'figma:asset/530fe216384080da62fe3130b5900cb61e10fb8c.png';
import btcLogo from 'figma:asset/d7a65a278575b7db43741bc4e33a7c130406d1a5.png';
import rayLogo from 'figma:asset/c9e9cc1a785b65cea11085ea0c3849541217e39e.png';

interface BuyScreenProps {
  onBack: () => void;
  tokens: Token[];
  updateTokenAmount: (tokenId: string, newAmount: number) => void;
  addToProfit: (amount: number) => void;
}

export function BuyScreen({ onBack, tokens, updateTokenAmount, addToProfit }: BuyScreenProps) {
  const [amount, setAmount] = useState('');
  const [selectedTokenId, setSelectedTokenId] = useState(tokens[0].id);
  const [showTokenList, setShowTokenList] = useState(false);

  // Helper function to get token logo
  const getTokenLogo = (symbol: string) => {
    const logos: { [key: string]: string } = {
      'SOL': solLogo,
      'USDC': usdcLogo,
      'USDT': usdtLogo,
      'ETH': ethLogo,
      'BTC': btcLogo,
      'RAY': rayLogo,
    };
    return logos[symbol];
  };

  const selectedToken = tokens.find(t => t.id === selectedTokenId) || tokens[0];
  const usdAmount = parseFloat(amount) || 0;
  const tokenAmount = usdAmount / selectedToken.price;

  const handleBuy = () => {
    if (!amount || usdAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    const newAmount = selectedToken.amount + tokenAmount;
    updateTokenAmount(selectedToken.id, newAmount);
    
    // Add the purchase amount to the profit display
    addToProfit(usdAmount);
    
    alert(`Successfully bought ${tokenAmount.toFixed(4)} ${selectedToken.symbol} for $${usdAmount.toFixed(2)}!`);
    setAmount('');
    onBack();
  };

  const quickAmounts = [10, 50, 100, 500];

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
        <h2>Buy Crypto</h2>
      </div>

      {/* Token Selection */}
      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Select Token</label>
        <button 
          onClick={() => setShowTokenList(!showTokenList)}
          className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src={getTokenLogo(selectedToken.symbol)} 
                alt={selectedToken.symbol} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div>{selectedToken.name}</div>
              <div className="text-sm text-gray-400">${selectedToken.price.toFixed(2)}</div>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>

        {/* Token List Dropdown */}
        {showTokenList && (
          <div className="mt-2 bg-[#2A2A2D] rounded-xl overflow-hidden">
            {tokens.map((token) => (
              <button
                key={token.id}
                onClick={() => {
                  setSelectedTokenId(token.id);
                  setShowTokenList(false);
                }}
                className="w-full p-4 hover:bg-[#333336] transition-colors flex items-center gap-3 border-b border-[#333336] last:border-b-0"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src={getTokenLogo(token.symbol)} 
                    alt={token.symbol} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div>{token.name}</div>
                  <div className="text-sm text-gray-400">{token.symbol}</div>
                </div>
                <div className="text-right">
                  <div>${token.price.toFixed(2)}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">Amount (USD)</label>
        <div className="bg-[#2A2A2D] rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl text-gray-400">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 bg-transparent text-3xl outline-none"
              step="0.01"
            />
          </div>
          <div className="text-sm text-gray-400">
            ≈ {tokenAmount.toFixed(4)} {selectedToken.symbol}
          </div>
        </div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="mb-8">
        <label className="block text-sm text-gray-400 mb-2">Quick Select</label>
        <div className="grid grid-cols-4 gap-2">
          {quickAmounts.map((quickAmount) => (
            <button
              key={quickAmount}
              onClick={() => setAmount(quickAmount.toString())}
              className="bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl py-3"
            >
              ${quickAmount}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-[#2A2A2D] rounded-xl p-4 mb-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Price per {selectedToken.symbol}</span>
          <span>${selectedToken.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">You will receive</span>
          <span>{tokenAmount.toFixed(4)} {selectedToken.symbol}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Total</span>
          <span>${usdAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
        <p className="text-sm text-blue-400">
          This is a simulated purchase. No real money will be charged. Your token balance will be updated instantly.
        </p>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        disabled={!amount || usdAmount <= 0}
        className="w-full bg-gradient-to-r from-[#AB9FF2] to-[#6B5DD3] hover:from-[#C0B3FF] hover:to-[#7B6DE3] disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl py-4"
      >
        Buy {selectedToken.symbol}
      </button>
    </div>
  );
}