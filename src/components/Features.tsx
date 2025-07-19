import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Calendar, 
  Award, 
  Building, 
  Lightbulb,
  Clock,
  MessageSquare,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Smart Matching",
    description: "AI-powered algorithm matches students with opportunities based on skills, experience, and preferences.",
    category: "For Students"
  },
  {
    icon: Building,
    title: "Quality Opportunities",
    description: "Access curated internships, hackathons, and startup positions from verified organizations.",
    category: "For Students"
  },
  {
    icon: Award,
    title: "Portfolio Builder",
    description: "Showcase your skills, projects, and experiences in a professional digital portfolio.",
    category: "For Students"
  },
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Connect with a diverse pool of skilled students ready to contribute to your projects.",
    category: "For Organizers"
  },
  {
    icon: Clock,
    title: "Quick Posting",
    description: "Post opportunities with skill requirements, deadlines, and contact details in minutes.",
    category: "For Organizers"
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Track applications, engagement, and find the best candidates for your organization.",
    category: "For Organizers"
  }
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Event Management",
    description: "Organize hackathons, workshops, and networking events with integrated planning tools."
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Built-in messaging system for seamless communication between students and organizers."
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description: "Access learning resources and skill assessments to continuously improve your capabilities."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Connect & Grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to bridge the gap between talented students and innovative opportunities.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="card-elevated">
              <CardHeader>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};