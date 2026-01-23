import { TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { Token } from '../App';
import verifiedBadge from 'figma:asset/a1fe17acf18df1a46f890ffff54e9d360180ba14.png';
import solLogo from 'figma:asset/bac6174fa9d4dcb7d71ac6543621a9bf39867b1d.png';
import usdcLogo from 'figma:asset/77fdbd46699ce732685b57762eec11035c593279.png';
import usdtLogo from 'figma:asset/7ac130480b2755271a29ee0bfbc27bceac61ee6f.png';
import ethLogo from 'figma:asset/530fe216384080da62fe3130b5900cb61e10fb8c.png';
import btcLogo from 'figma:asset/d7a65a278575b7db43741bc4e33a7c130406d1a5.png';
import rayLogo from 'figma:asset/c9e9cc1a785b65cea11085ea0c3849541217e39e.png';

interface AssetListProps {
  tokens: Token[];
  updateTokenAmount: (tokenId: string, newAmount: number) => void;
  updateTokenPrice: (tokenId: string, newPrice: number) => void;
}

export function AssetList({ tokens, updateTokenAmount, updateTokenPrice }: AssetListProps) {
  const [editingTokenId, setEditingTokenId] = useState<string | null>(null);
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [tempAmount, setTempAmount] = useState('');
  const [tempPrice, setTempPrice] = useState('');

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

  const handleEdit = (token: Token) => {
    setEditingTokenId(token.id);
    setTempAmount(token.amount.toString());
  };

  const handleEditPrice = (token: Token) => {
    setEditingPriceId(token.id);
    setTempPrice(token.price.toString());
  };

  const handleSave = (tokenId: string) => {
    const newAmount = parseFloat(tempAmount) || 0;
    updateTokenAmount(tokenId, newAmount);
    setEditingTokenId(null);
  };

  const handleSavePrice = (tokenId: string) => {
    const newPrice = parseFloat(tempPrice) || 0;
    if (newPrice > 0) {
      updateTokenPrice(tokenId, newPrice);
    }
    setEditingPriceId(null);
  };

  return (
    <div className="space-y-2">
      {tokens.map((token) => {
        const value = token.amount * token.price;
        const isPositive = token.change >= 0;
        
        // Calculate portfolio variation (value change based on price change)
        // If amount is 0, no portfolio change
        const portfolioChangeAmount = token.amount > 0 
          ? (value * token.change) / 100 
          : 0;
        const portfolioChangePercent = token.change;
        
        return (
          <div
            key={token.id}
            className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl p-4 flex items-center gap-4"
          >
            {/* Icon */}
            <button
              onClick={() => handleEditPrice(token)}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:ring-2 hover:ring-[#AB9FF2] transition-all overflow-hidden"
              title="Click to edit price"
            >
              <img 
                src={getTokenLogo(token.symbol)} 
                alt={token.symbol} 
                className="w-full h-full object-cover"
              />
            </button>

            {/* Asset Info */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                {editingPriceId === token.id ? (
                  <div className="flex items-center gap-2">
                    <span>{token.symbol}</span>
                    <span className="text-sm text-gray-400">$</span>
                    <input
                      type="number"
                      value={tempPrice}
                      onChange={(e) => setTempPrice(e.target.value)}
                      onBlur={() => handleSavePrice(token.id)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSavePrice(token.id)}
                      autoFocus
                      className="w-24 bg-[#333336] px-2 py-1 rounded outline-none text-sm"
                      step="0.01"
                      placeholder="Enter price"
                    />
                  </div>
                ) : (
                  <>
                    <span>{token.symbol}</span>
                    <img src={verifiedBadge} alt="Verified" className="w-5 h-5" />
                    <span className="text-sm text-gray-400">{token.name}</span>
                  </>
                )}
              </div>
              {editingTokenId === token.id ? (
                <input
                  type="number"
                  value={tempAmount}
                  onChange={(e) => setTempAmount(e.target.value)}
                  onBlur={() => handleSave(token.id)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave(token.id)}
                  autoFocus
                  className="w-24 bg-[#333336] px-2 py-1 rounded text-sm outline-none"
                  step="0.0001"
                />
              ) : (
                <button
                  onClick={() => handleEdit(token)}
                  className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {token.amount.toFixed(4)}
                </button>
              )}
            </div>

            {/* Value & Change */}
            <div className="text-right">
              <div className="mb-1">
                <span>${value.toFixed(2)}</span>
              </div>
              {token.amount > 0 ? (
                <div
                  className={`text-sm flex items-center justify-end gap-1 ${
                    isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  {isPositive ? '+' : ''}{portfolioChangeAmount >= 0.01 || portfolioChangeAmount <= -0.01 
                    ? `$${Math.abs(portfolioChangeAmount).toFixed(2)}`
                    : `$${Math.abs(portfolioChangeAmount).toFixed(4)}`}
                </div>
              ) : (
                <div className="text-sm text-gray-500">
                  $0.00
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}