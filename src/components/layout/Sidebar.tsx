
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Brain, 
  MessageSquare, 
  Image, 
  MapPin, 
  CreditCard, 
  Crown,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/app/profile', icon: User },
  { name: 'AI Assistant', href: '/app/assistant', icon: Brain },
  { name: 'Memories', href: '/app/memories', icon: MessageSquare },
  { name: 'Avatar', href: '/app/avatar', icon: Image },
  { name: 'Locations', href: '/app/locations', icon: MapPin },
  { name: 'Virtual Card', href: '/app/card', icon: CreditCard },
  { name: 'Subscription', href: '/app/subscription', icon: Crown },
  { name: 'Settings', href: '/app/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-card border-r border-border">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-border">
        <h1 className="text-2xl font-bold text-gradient-primary">HumanTwin AI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth',
                isActive
                  ? 'bg-primary text-primary-foreground glow-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-smooth">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}