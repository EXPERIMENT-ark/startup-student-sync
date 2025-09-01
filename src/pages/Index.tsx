import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { AIChatBox } from "@/components/AIChatBox";
import { InteractiveButtons } from "@/components/InteractiveButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <InteractiveButtons />
      <Features />
      <HowItWorks />
      <Footer />
      <AIChatBox />
    </div>
  );
};

export default Index;
