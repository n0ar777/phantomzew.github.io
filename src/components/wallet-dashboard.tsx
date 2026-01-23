import { Copy, QrCode, Send, Repeat, DollarSign, Clock, Search, RefreshCw } from 'lucide-react';
import { useState, useRef } from 'react';
import { AssetList } from './asset-list';
import { Token } from '../App';
import profileImage from 'figma:asset/f4f672eff19f154c4e4fb40cfeb89cd3e18679f5.png';

interface WalletDashboardProps {
  onNavigate: (screen: 'send' | 'receive' | 'history' | 'buy') => void;
  tokens: Token[];
  updateTokenAmount: (tokenId: string, newAmount: number) => void;
  updateTokenPrice: (tokenId: string, newPrice: number) => void;
  refreshPrices: () => void;
  walletName: string;
  setWalletName: (name: string) => void;
  accountName: string;
  setAccountName: (name: string) => void;
  profileEmoji: string;
  setProfileEmoji: (emoji: string) => void;
  profitAmount: string;
  profitPercentage: string;
  updateProfit: (amount: string, percentage: string) => void;
  addToProfit: (amount: number) => void;
}

export function WalletDashboard({ 
  onNavigate, 
  tokens, 
  updateTokenAmount,
  updateTokenPrice,
  refreshPrices,
  walletName,
  setWalletName,
  accountName,
  setAccountName,
  profileEmoji,
  setProfileEmoji,
  profitAmount,
  profitPercentage,
  updateProfit,
  addToProfit
}: WalletDashboardProps) {
  const [showBalance, setShowBalance] = useState(true);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAccountName, setIsEditingAccountName] = useState(false);
  const [isEditingProfit, setIsEditingProfit] = useState(false);
  const [tempName, setTempName] = useState(walletName);
  const [tempAccountName, setTempAccountName] = useState(accountName);
  const [tempProfit, setTempProfit] = useState(profitAmount);
  const [tempPercentage, setTempPercentage] = useState(profitPercentage);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalBalance = tokens.reduce((sum, token) => sum + (token.amount * token.price), 0);

  const handleNameSave = () => {
    setWalletName(tempName);
    setIsEditingName(false);
  };

  const handleAccountNameSave = () => {
    setAccountName(tempAccountName);
    setIsEditingAccountName(false);
  };

  const handleProfitSave = () => {
    updateProfit(tempProfit, tempPercentage);
    setIsEditingProfit(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - touchStartY.current;
      if (distance > 0 && pullDistance < 100) {
        setPullDistance(distance);
      }
    }
  };

  const handleTouchEnd = () => {
    if (pullDistance > 50) {
      setIsRefreshing(true);
      setTimeout(() => {
        refreshPrices(); // Apply price variations
        addToProfit(0.0001);
        setIsRefreshing(false);
        setPullDistance(0);
      }, 300); // Reduced from 1000ms to 300ms for faster refresh
    } else {
      setPullDistance(0);
    }
  };

  return (
    <div>
      {/* Pull to Refresh Indicator */}
      {pullDistance > 0 && (
        <div 
          className="fixed top-0 left-0 right-0 w-full flex justify-center pt-4 z-10"
          style={{ transform: `translateY(${Math.min(pullDistance - 50, 50)}px)` }}
        >
          <div className="bg-[#2A2A2D] rounded-full p-2">
            <RefreshCw 
              className={`w-6 h-6 text-[#AB9FF2] ${isRefreshing ? 'animate-spin-fast' : ''}`}
              style={{ 
                transform: isRefreshing ? undefined : `rotate(${pullDistance * 3}deg)`,
                transition: isRefreshing ? 'none' : 'transform 0.1s'
              }}
            />
          </div>
        </div>
      )}

      {/* Header Section - Darker shade */}
      <div 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="px-6 pt-8 pb-6 bg-[#16161A]"
        style={{ 
          transform: `translateY(${Math.min(pullDistance, 100)}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s' : 'none'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              {isEditingName ? (
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onBlur={handleNameSave}
                  onKeyDown={(e) => e.key === 'Enter' && handleNameSave()}
                  autoFocus
                  className="text-sm text-gray-400 bg-[#2A2A2D] px-2 py-1 rounded outline-none"
                />
              ) : (
                <div 
                  className="text-sm text-gray-400 cursor-pointer hover:text-gray-300"
                  onClick={() => {
                    setIsEditingName(true);
                    setTempName(walletName);
                  }}
                >
                  {walletName}
                </div>
              )}
              {isEditingAccountName ? (
                <input
                  type="text"
                  value={tempAccountName}
                  onChange={(e) => setTempAccountName(e.target.value)}
                  onBlur={handleAccountNameSave}
                  onKeyDown={(e) => e.key === 'Enter' && handleAccountNameSave()}
                  autoFocus
                  className="bg-[#2A2A2D] px-2 py-1 rounded outline-none"
                />
              ) : (
                <h1 
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => {
                    setIsEditingAccountName(true);
                    setTempAccountName(accountName);
                  }}
                >
                  {accountName}
                </h1>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('history')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Clock className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section - Lighter shade */}
      <div 
        className="px-6 pt-6 pb-6 bg-[#1A1A1D]"
        style={{ 
          transform: `translateY(${Math.min(pullDistance, 100)}px)`,
          transition: pullDistance === 0 ? 'transform 0.3s' : 'none'
        }}
      >
        {/* Balance */}
        <div className="mb-2">
          {showBalance ? (
            <h2 className="text-5xl">${totalBalance.toFixed(2)}</h2>
          ) : (
            <div className="text-5xl">••••••</div>
          )}
        </div>

        {/* Profit - Editable */}
        {isEditingProfit ? (
          <div className="flex items-center gap-2 mb-6">
            <span className="text-green-400">+$</span>
            <input
              type="number"
              value={tempProfit}
              onChange={(e) => setTempProfit(e.target.value)}
              className="w-24 bg-[#2A2A2D] px-2 py-1 rounded outline-none text-green-400"
              step="0.0001"
            />
            <span className="bg-green-400/20 text-green-400 px-2 py-0.5 rounded-full text-sm flex items-center gap-1">
              +
              <input
                type="number"
                value={tempPercentage}
                onChange={(e) => setTempPercentage(e.target.value)}
                onBlur={handleProfitSave}
                onKeyDown={(e) => e.key === 'Enter' && handleProfitSave()}
                className="w-12 bg-transparent outline-none"
                step="0.01"
              />
              %
            </span>
          </div>
        ) : (
          <div 
            className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80"
            onClick={() => {
              setIsEditingProfit(true);
              setTempProfit(profitAmount);
              setTempPercentage(profitPercentage);
            }}
          >
            <span className="text-green-400">+${profitAmount}</span>
            <span className="bg-green-400/20 text-green-400 px-2 py-0.5 rounded-full text-sm">
              +{profitPercentage}%
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => onNavigate('receive')}
            className="flex-1 bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-lg py-3 flex flex-col items-center justify-center gap-1.5"
          >
            <QrCode className="w-6 h-6 text-[#AB9FF2]" />
            <span className="text-xs">Recevoir</span>
          </button>
          <button
            onClick={() => onNavigate('send')}
            className="flex-1 bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-lg py-3 flex flex-col items-center justify-center gap-1.5"
          >
            <Send className="w-6 h-6 text-[#AB9FF2]" />
            <span className="text-xs">Envoyer</span>
          </button>
          <button className="flex-1 bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-lg py-3 flex flex-col items-center justify-center gap-1.5">
            <Repeat className="w-6 h-6 text-[#AB9FF2]" />
            <span className="text-xs">Échanger</span>
          </button>
          <button
            onClick={() => onNavigate('buy')}
            className="flex-1 bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-lg py-3 flex flex-col items-center justify-center gap-1.5"
          >
            <DollarSign className="w-6 h-6 text-[#AB9FF2]" />
            <span className="text-xs">Acheter</span>
          </button>
        </div>

        {/* Tokens Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3>Jetons &gt;</h3>
          </div>
          <AssetList tokens={tokens} updateTokenAmount={updateTokenAmount} updateTokenPrice={updateTokenPrice} />
        </div>
      </div>
    </div>
  );
}