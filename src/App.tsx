import { useState, useEffect } from 'react';
import { WalletDashboard } from './components/wallet-dashboard';
import { SendScreen } from './components/send-screen';
import { ReceiveScreen } from './components/receive-screen';
import { TransactionHistory } from './components/transaction-history';
import { Settings } from './components/settings';
import { BuyScreen } from './components/buy-screen';
import { Footer } from './components/footer';
import { registerServiceWorker } from './register-sw';

type Screen = 'home' | 'send' | 'receive' | 'history' | 'settings' | 'buy';

export interface Token {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  price: number;
  color: string;
  change: number;
}

export default function App() {
  // Enregistrer le Service Worker au chargement
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // Charger les données depuis localStorage au démarrage
  const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [walletName, setWalletName] = useState(() => loadFromStorage('walletName', '@anon666vendor'));
  const [accountName, setAccountName] = useState(() => loadFromStorage('accountName', 'Account 1'));
  const [profileEmoji, setProfileEmoji] = useState(() => loadFromStorage('profileEmoji', '👻'));
  const [profitAmount, setProfitAmount] = useState(() => loadFromStorage('profitAmount', '0.0007'));
  const [profitPercentage, setProfitPercentage] = useState(() => loadFromStorage('profitPercentage', '0.53'));
  const [tokens, setTokens] = useState<Token[]>(() => loadFromStorage('tokens', [
    {
      id: '1',
      symbol: 'SOL',
      name: 'Solana',
      amount: 0,
      price: 195.08,
      change: 5.24,
      color: '#9945FF',
    },
    {
      id: '2',
      symbol: 'USDC',
      name: 'USD Coin',
      amount: 0,
      price: 1.0,
      change: 0.01,
      color: '#2775CA',
    },
    {
      id: '3',
      symbol: 'USDT',
      name: 'Tether',
      amount: 0,
      price: 1.0,
      change: 0.0,
      color: '#26A17B',
    },
    {
      id: '4',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 0,
      price: 3421.15,
      change: 2.89,
      color: '#627EEA',
    },
    {
      id: '5',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0,
      price: 94250.42,
      change: 1.45,
      color: '#F7931A',
    },
    {
      id: '6',
      symbol: 'RAY',
      name: 'Raydium',
      amount: 0,
      price: 2.98,
      change: -2.18,
      color: '#8C3FC4',
    },
  ]));

  // Sauvegarder automatiquement dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('walletName', JSON.stringify(walletName));
  }, [walletName]);

  useEffect(() => {
    localStorage.setItem('accountName', JSON.stringify(accountName));
  }, [accountName]);

  useEffect(() => {
    localStorage.setItem('profileEmoji', JSON.stringify(profileEmoji));
  }, [profileEmoji]);

  useEffect(() => {
    localStorage.setItem('profitAmount', JSON.stringify(profitAmount));
  }, [profitAmount]);

  useEffect(() => {
    localStorage.setItem('profitPercentage', JSON.stringify(profitPercentage));
  }, [profitPercentage]);

  useEffect(() => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }, [tokens]);

  const updateTokenAmount = (tokenId: string, newAmount: number) => {
    setTokens(tokens.map(token => 
      token.id === tokenId ? { ...token, amount: newAmount } : token
    ));
  };

  const updateTokenPrice = (tokenId: string, newPrice: number) => {
    setTokens(tokens.map(token => 
      token.id === tokenId ? { ...token, price: newPrice } : token
    ));
  };

  const refreshPrices = () => {
    setTokens(tokens.map(token => {
      // Generate a random variation between -0.3% and +0.3% for realistic small changes
      const variation = (Math.random() * 0.6 - 0.3) / 100;
      const newPrice = token.price * (1 + variation);
      const newChange = parseFloat((variation * 100).toFixed(2));
      return { ...token, price: newPrice, change: newChange };
    }));
  };

  const updateProfit = (amount: string, percentage: string) => {
    setProfitAmount(amount);
    setProfitPercentage(percentage);
  };

  const addToProfit = (additionalAmount: number) => {
    const currentProfit = parseFloat(profitAmount);
    const newProfit = currentProfit + additionalAmount;
    const totalBalance = tokens.reduce((sum, token) => sum + (token.amount * token.price), 0);
    const newPercentage = totalBalance > 0 ? ((newProfit / totalBalance) * 100).toFixed(2) : '0';
    setProfitAmount(newProfit.toFixed(4));
    setProfitPercentage(newPercentage);
  };

  return (
    <div className="min-h-screen bg-[#0F0F11] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1A1A1D] rounded-3xl shadow-2xl overflow-hidden">
        {/* Main Content */}
        <div className="pb-20">
          {currentScreen === 'home' && (
            <WalletDashboard 
              onNavigate={setCurrentScreen}
              tokens={tokens}
              updateTokenAmount={updateTokenAmount}
              updateTokenPrice={updateTokenPrice}
              refreshPrices={refreshPrices}
              walletName={walletName}
              setWalletName={setWalletName}
              accountName={accountName}
              setAccountName={setAccountName}
              profileEmoji={profileEmoji}
              setProfileEmoji={setProfileEmoji}
              profitAmount={profitAmount}
              profitPercentage={profitPercentage}
              updateProfit={updateProfit}
              addToProfit={addToProfit}
            />
          )}
          {currentScreen === 'send' && <SendScreen onBack={() => setCurrentScreen('home')} />}
          {currentScreen === 'receive' && <ReceiveScreen onBack={() => setCurrentScreen('home')} />}
          {currentScreen === 'buy' && (
            <BuyScreen 
              onBack={() => setCurrentScreen('home')}
              tokens={tokens}
              updateTokenAmount={updateTokenAmount}
              addToProfit={addToProfit}
            />
          )}
          {currentScreen === 'history' && <TransactionHistory onBack={() => setCurrentScreen('home')} />}
          {currentScreen === 'settings' && <Settings onBack={() => setCurrentScreen('home')} />}
        </div>

        {/* Bottom Navigation */}
        <Footer activeScreen="home" />
      </div>
    </div>
  );
}