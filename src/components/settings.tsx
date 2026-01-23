import {
  ArrowLeft,
  ChevronRight,
  Shield,
  Key,
  Globe,
  Bell,
  HelpCircle,
  LogOut,
  Wallet,
} from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

const settingsItems = [
  {
    id: 1,
    icon: Wallet,
    label: 'Manage Wallets',
    description: 'Add or remove wallets',
  },
  {
    id: 2,
    icon: Shield,
    label: 'Security & Privacy',
    description: 'Password, biometrics, auto-lock',
  },
  {
    id: 3,
    icon: Key,
    label: 'Secret Recovery Phrase',
    description: 'View your recovery phrase',
  },
  {
    id: 4,
    icon: Globe,
    label: 'Network',
    description: 'Mainnet',
  },
  {
    id: 5,
    icon: Bell,
    label: 'Notifications',
    description: 'Manage notification preferences',
  },
  {
    id: 6,
    icon: HelpCircle,
    label: 'Help & Support',
    description: 'Get help and support',
  },
];

export function Settings({ onBack }: SettingsProps) {
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
        <h2>Settings</h2>
      </div>

      {/* Settings List */}
      <div className="space-y-2 mb-6">
        {settingsItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-[#333336] rounded-full flex items-center justify-center text-[#AB9FF2]">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <div className="mb-1">{item.label}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          );
        })}
      </div>

      {/* App Info */}
      <div className="bg-[#2A2A2D] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-400">Version</span>
          <span>1.0.0</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Build</span>
          <span>2024.11.26</span>
        </div>
      </div>

      {/* Lock & Logout Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-[#2A2A2D] hover:bg-[#333336] transition-colors rounded-xl py-4 flex items-center justify-center gap-2">
          <Shield className="w-5 h-5" />
          <span>Lock Wallet</span>
        </button>
        <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors rounded-xl py-4 flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
