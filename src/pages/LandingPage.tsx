
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Mic, User, MapPin, Sparkles, Crown } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6 animate-float">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Your Personal AI Twin</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient-primary">
              HumanTwin AI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Clone your voice, create your 3D avatar, and let AI make decisions like you.
              Store memories, track locations, and experience the future of personal AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-secondary">
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-smooth glass"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 glow-primary">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient-primary">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  'p-8 rounded-xl border transition-smooth',
                  plan.featured
                    ? 'bg-gradient-primary border-primary glow-primary scale-105'
                    : 'bg-card border-border hover:border-primary'
                )}
              >
                {plan.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5 text-primary-foreground" />
                    <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                  </div>
                )}
                
                <h3 className={cn(
                  'text-2xl font-bold mb-2',
                  plan.featured ? 'text-primary-foreground' : 'text-foreground'
                )}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={cn(
                    'text-4xl font-bold',
                    plan.featured ? 'text-primary-foreground' : 'text-foreground'
                  )}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && (
                    <span className={cn(
                      'text-muted-foreground ml-2',
                      plan.featured && 'text-primary-foreground/80'
                    )}>
                      /month
                    </span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={cn(
                      'flex items-start gap-2',
                      plan.featured ? 'text-primary-foreground' : 'text-muted-foreground'
                    )}>
                      <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  className={cn(
                    'w-full',
                    plan.featured
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: Mic,
    title: 'Voice Cloning',
    description: 'Clone your voice with advanced AI. Your digital twin speaks exactly like you.',
  },
  {
    icon: User,
    title: '3D Avatar',
    description: 'Generate a realistic 3D avatar from your photos. Animate and customize it.',
  },
  {
    icon: Brain,
    title: 'AI Assistant',
    description: 'Personal AI that learns your preferences and makes decisions like you.',
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'Track your journey, save favorite places, and get location-based insights.',
  },
  {
    icon: Sparkles,
    title: 'Memory Storage',
    description: 'Store unlimited memories, photos, videos, and voice notes securely.',
  },
  {
    icon: Crown,
    title: 'Premium Features',
    description: 'Unlock advanced AI capabilities, unlimited storage, and exclusive features.',
  },
];

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    featured: false,
    features: [
      'Limited AI responses',
      '10 memories storage',
      'Basic profile',
      'Community access',
    ],
  },
  {
    name: 'Pro',
    price: '$2.99',
    featured: true,
    features: [
      'Voice cloning',
      'Unlimited chat',
      'Basic 3D avatar',
      'View public profiles',
      'Priority support',
    ],
  },
  {
    name: 'Premium',
    price: '$4.99',
    featured: false,
    features: [
      'Advanced voice cloning',
      'Full 3D avatar + animation',
      'Unlimited storage',
      'Access all profiles',
      'Smart recommendations',
      'Decision engine',
    ],
  },
];

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}