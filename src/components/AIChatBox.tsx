import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! I'm your AI assistant. I can help you with opportunities, career advice, or answer any questions about our platform!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Based on your interests, I'd recommend checking out our latest tech startups in the cybersecurity field.",
        "I can help you find opportunities that match your skills. Have you completed any of our brain training games yet?",
        "For career growth, I suggest focusing on both technical skills and networking. Our platform has both!",
        "Interesting! Let me connect you with some relevant opportunities and study materials.",
        "That sounds like a perfect fit for our AI/ML startup opportunities. Would you like me to show you some?",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="btn-cyber w-16 h-16 rounded-full shadow-neon-yellow animate-neon-flicker"
            size="icon"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 card-neon glow-effect flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-accent/20">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-primary animate-neon-flicker" />
              <h3 className="font-bold text-gradient">AI Assistant</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                {!message.isUser && (
                  <Bot className="w-6 h-6 text-primary mt-1 animate-neon-flicker" />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 backdrop-blur-sm border border-accent/20"
                  }`}
                >
                  {message.text}
                </div>
                {message.isUser && (
                  <User className="w-6 h-6 text-accent mt-1" />
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <Bot className="w-6 h-6 text-primary mt-1 animate-neon-flicker" />
                <div className="bg-muted/50 backdrop-blur-sm border border-accent/20 p-3 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-accent/20">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-muted/30 border-accent/30 focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className="btn-neon"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};