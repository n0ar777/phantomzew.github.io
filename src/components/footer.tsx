import { Home, Wallet, Repeat, MessageCircle, Search } from 'lucide-react';

interface FooterProps {
  activeScreen: 'home' | 'wallet' | 'swap' | 'messages' | 'search';
  onNavigate?: (screen: string) => void;
}

export function Footer({ activeScreen, onNavigate }: FooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#16161A] border-t border-[#2A2A2D] px-6 py-4">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => onNavigate?.('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeScreen === 'home' ? 'text-[#AB9FF2]' : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <Home className="w-6 h-6" fill={activeScreen === 'home' ? '#AB9FF2' : 'none'} />
        </button>
        
        <button
          onClick={() => onNavigate?.('wallet')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeScreen === 'wallet' ? 'text-[#AB9FF2]' : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <Wallet className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => onNavigate?.('swap')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeScreen === 'swap' ? 'text-[#AB9FF2]' : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <Repeat className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => onNavigate?.('messages')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeScreen === 'messages' ? 'text-[#AB9FF2]' : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => onNavigate?.('search')}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeScreen === 'search' ? 'text-[#AB9FF2]' : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
