
import { Brain, Image, MapPin, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground glow-primary">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-primary-foreground/80">Your AI twin is ready to assist you today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border hover:border-primary transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Assistant Quick Chat */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Brain className="w-5 h-5 text-primary" />
              AI Assistant
            </CardTitle>
            <CardDescription>Quick chat with your digital twin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-foreground">
                  "What should I focus on today?"
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-foreground">
                  Based on your schedule and goals, I recommend focusing on your project presentation 
                  and scheduling time for exercise this afternoon.
                </p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Conversation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Memories */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <MessageSquare className="w-5 h-5 text-secondary" />
              Recent Memories
            </CardTitle>
            <CardDescription>Your latest saved moments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-smooth cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <memory.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{memory.title}</p>
                    <p className="text-xs text-muted-foreground">{memory.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Zap className="w-5 h-5 text-accent" />
            Quick Actions
          </CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto flex-col gap-2 p-4 border-border hover:border-primary hover:bg-primary/5"
              >
                <action.icon className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const stats = [
  { title: 'Total Memories', value: '1,234', change: '+12% this week', icon: MessageSquare },
  { title: 'AI Conversations', value: '89', change: '+23% this week', icon: Brain },
  { title: 'Locations Saved', value: '45', change: '+5 new places', icon: MapPin },
  { title: 'Avatar Views', value: '567', change: '+34% this week', icon: Image },
];

const memories = [
  { title: 'Morning workout session', time: '2 hours ago', icon: Zap },
  { title: 'Coffee with Sarah', time: '5 hours ago', icon: MessageSquare },
  { title: 'Project brainstorming', time: 'Yesterday', icon: Brain },
  { title: 'Beach sunset photo', time: '2 days ago', icon: Image },
];

const quickActions = [
  { label: 'Add Memory', icon: MessageSquare },
  { label: 'Chat with AI', icon: Brain },
  { label: 'Save Location', icon: MapPin },
  { label: 'View Avatar', icon: Image },
];