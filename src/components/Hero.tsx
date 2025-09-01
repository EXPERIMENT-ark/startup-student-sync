import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Zap } from "lucide-react";
import { LoginModal } from "@/components/LoginModal";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const [loginModal, setLoginModal] = useState<{ isOpen: boolean; userType: "student" | "organizer" | null }>({
    isOpen: false,
    userType: null,
  });

  const openLoginModal = (userType: "student" | "organizer") => {
    setLoginModal({ isOpen: true, userType });
  };

  const closeLoginModal = () => {
    setLoginModal({ isOpen: false, userType: null });
  };
  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bridge the Gap Between{" "}
              <span className="text-neon animate-neon-flicker">Talent & Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Connect skilled students with startups, hackathons, and internships. 
              Find the perfect match based on skills, interests, and availability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-4 glow-effect"
                onClick={() => openLoginModal("student")}
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Student
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="btn-neon text-lg px-8 py-4"
                onClick={() => openLoginModal("organizer")}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Post Opportunities
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Startups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
            </div>
          </div>

          <div className="relative floating">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl glow-effect"></div>
            <img
              src={heroImage}
              alt="Students and startups connecting"
              className="relative rounded-2xl shadow-elevated w-full"
            />
            <div className="absolute inset-0 bg-gradient-cyber rounded-2xl opacity-20"></div>
          </div>
        </div>

        {/* Login Modal */}
        {loginModal.userType && (
          <LoginModal
            isOpen={loginModal.isOpen}
            onClose={closeLoginModal}
            userType={loginModal.userType}
          />
        )}
      </div>
    </section>
  );
};