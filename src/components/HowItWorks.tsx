import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  FileText, 
  Search, 
  Handshake,
  Building2,
  Users,
  ArrowRight
} from "lucide-react";

const studentSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description: "Sign up and build your comprehensive portfolio with skills, projects, and experiences."
  },
  {
    icon: FileText,
    step: "02", 
    title: "Complete Your Portfolio",
    description: "Add your technical skills, previous work, academic achievements, and career interests."
  },
  {
    icon: Search,
    step: "03",
    title: "Discover Opportunities",
    description: "Browse curated internships, hackathons, and startup positions matched to your profile."
  },
  {
    icon: Handshake,
    step: "04",
    title: "Connect & Apply",
    description: "Apply to opportunities and connect directly with organizers and founders."
  }
];

const organizerSteps = [
  {
    icon: Building2,
    step: "01",
    title: "Register Your Organization",
    description: "Create an organizer account and verify your startup, organization, or event."
  },
  {
    icon: FileText,
    step: "02",
    title: "Post Opportunities",
    description: "Create detailed listings with skill requirements, deadlines, and contact information."
  },
  {
    icon: Users,
    step: "03",
    title: "Review Candidates",
    description: "Browse matched student profiles and review applications from qualified candidates."
  },
  {
    icon: Handshake,
    step: "04",
    title: "Connect & Hire",
    description: "Reach out to promising students and build your team with fresh talent."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How <span className="text-gradient">TalentBridge</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect talented students with amazing opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Students */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">For Students</h3>
            </div>
            
            <div className="space-y-6">
              {studentSteps.map((step, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold">STEP {step.step}</div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="btn-hero w-full sm:w-auto">
                <Users className="w-4 h-4 mr-2" />
                Start as Student
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* For Organizers */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">For Organizers</h3>
            </div>
            
            <div className="space-y-6">
              {organizerSteps.map((step, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold">STEP {step.step}</div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full sm:w-auto hover:shadow-card transition-all">
                <Building2 className="w-4 h-4 mr-2" />
                Start as Organizer
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};