import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Share2, 
  Copy, 
  Mail, 
  Gift,
  Star,
  Trophy,
  Sparkles
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ReferFriend = () => {
  const [friendEmail, setFriendEmail] = useState("");
  const [referralCode, setReferralCode] = useState("TALENT2024");

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!friendEmail) return;
    
    toast({
      title: "Invitation Sent! 🚀",
      description: `Your friend will receive an invite at ${friendEmail}`,
    });
    setFriendEmail("");
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied! 📋",
      description: "Referral code copied to clipboard",
    });
  };

  const copyReferralLink = () => {
    const link = `https://talentbridge.lovable.app/?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied! 🔗",
      description: "Referral link copied to clipboard",
    });
  };

  const shareToSocial = (platform: string) => {
    const message = "Join me on TalentBridge - the ultimate platform connecting students with startups!";
    const link = `https://talentbridge.lovable.app/?ref=${referralCode}`;
    
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(link)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message + " " + link)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank");
      toast({
        title: "Sharing to " + platform + "! 📱",
        description: "Opening share dialog...",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-cyber">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neon mb-4 animate-neon-flicker">
            <Users className="w-8 h-8 inline mr-2" />
            Refer Your Friends
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share the opportunity! Invite friends and earn rewards together on your journey to success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Referral Benefits */}
            <Card className="card-neon glow-effect">
              <div className="p-8">
                <div className="text-center mb-6">
                  <Gift className="w-16 h-16 mx-auto text-primary animate-neon-flicker mb-4" />
                  <h3 className="text-2xl font-bold text-gradient mb-2">Earn Rewards</h3>
                  <p className="text-muted-foreground">
                    Get amazing benefits for every friend you refer!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                    <Star className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold">500 Points</div>
                      <div className="text-sm text-muted-foreground">For each successful referral</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                    <Trophy className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">Premium Access</div>
                      <div className="text-sm text-muted-foreground">Unlock exclusive opportunities</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold">Special Badge</div>
                      <div className="text-sm text-muted-foreground">Show off your influence</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Referral Actions */}
            <Card className="card-elevated glow-effect">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-neon mb-6 text-center">
                  Start Referring Now!
                </h3>

                {/* Send Email Invite */}
                <form onSubmit={handleSendInvite} className="mb-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Send Email Invitation</label>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="friend@example.com"
                        value={friendEmail}
                        onChange={(e) => setFriendEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" className="btn-hero" disabled={!friendEmail}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Referral Code */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Your Referral Code</label>
                  <div className="flex gap-2">
                    <Input
                      value={referralCode}
                      readOnly
                      className="flex-1 font-mono text-center"
                    />
                    <Button onClick={copyReferralCode} className="btn-neon" size="icon">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Share Options */}
                <div className="space-y-4">
                  <Button onClick={copyReferralLink} className="btn-cyber w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Copy Referral Link
                  </Button>

                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={() => shareToSocial("twitter")}
                      variant="outline"
                      size="sm"
                      className="btn-neon"
                    >
                      Twitter
                    </Button>
                    <Button
                      onClick={() => shareToSocial("linkedin")}
                      variant="outline"
                      size="sm"
                      className="btn-neon"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => shareToSocial("whatsapp")}
                      variant="outline"
                      size="sm"
                      className="btn-neon"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress Tracker */}
          <Card className="card-neon mt-8">
            <div className="p-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gradient mb-4">Your Referral Progress</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Friends Invited</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">1,500</div>
                    <div className="text-sm text-muted-foreground">Points Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">Gold</div>
                    <div className="text-sm text-muted-foreground">Current Tier</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};