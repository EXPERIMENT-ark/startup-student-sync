import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Brain, 
  Trophy, 
  Star, 
  Rocket, 
  Target,
  Sparkles,
  Bot
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const InteractiveButtons = () => {
  const handleQuickAction = (action: string) => {
    toast({
      title: "Action Activated! ⚡",
      description: `${action} feature is now active. Get ready for an awesome experience!`,
    });
  };

  const quickActions = [
    {
      icon: Brain,
      label: "Brain Boost",
      description: "Enhance your cognitive abilities",
      onClick: () => handleQuickAction("Brain Boost"),
      className: "btn-neon"
    },
    {
      icon: Zap,
      label: "Power Mode",
      description: "Activate high-performance mode",
      onClick: () => handleQuickAction("Power Mode"),
      className: "btn-cyber"
    },
    {
      icon: Trophy,
      label: "Achievement Hunt",
      description: "Track your progress and wins",
      onClick: () => handleQuickAction("Achievement Hunt"),
      className: "btn-gradient"
    },
    {
      icon: Star,
      label: "Star Network",
      description: "Connect with top performers",
      onClick: () => handleQuickAction("Star Network"),
      className: "btn-hero"
    },
  ];

  return (
    <section className="py-16 bg-background relative">
      <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neon mb-4 animate-neon-flicker">
            <Sparkles className="w-8 h-8 inline mr-2" />
            Quick Actions Hub
          </h2>
          <p className="text-xl text-muted-foreground">
            Supercharge your experience with these instant features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="card-neon glow-effect group">
              <div className="p-6 text-center">
                <action.icon className="w-12 h-12 mx-auto mb-4 text-primary animate-neon-flicker" />
                <h3 className="text-lg font-bold text-gradient mb-2">
                  {action.label}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {action.description}
                </p>
                <Button
                  onClick={action.onClick}
                  className={action.className}
                  size="sm"
                >
                  Activate
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Special CTA Section */}
        <div className="mt-16 text-center">
          <Card className="card-elevated glow-effect max-w-2xl mx-auto">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Bot className="w-16 h-16 text-primary animate-neon-flicker mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-neon">AI-Powered Future</h3>
                  <p className="text-muted-foreground">Experience the next generation</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-cyber"
                  onClick={() => handleQuickAction("AI Assistant")}
                >
                  <Target className="w-4 h-4 mr-2" />
                  Launch AI Assistant
                </Button>
                <Button 
                  className="btn-neon"
                  onClick={() => handleQuickAction("Future Mode")}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Enter Future Mode
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};