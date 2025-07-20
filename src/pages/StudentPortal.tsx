import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar as CalendarIcon } from "lucide-react";

const StudentPortal = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    email: "",
    university: "",
    skills: "",
    experience: "",
    interests: ""
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(true);
  };

  const suggestedEvents = [
    {
      id: 1,
      title: "AI Startup Hackathon",
      type: "Hackathon",
      company: "TechVentures",
      skills: ["Python", "Machine Learning", "React"],
      deadline: "2024-08-15",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "Frontend Developer Internship",
      type: "Internship",
      company: "StartupHub",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      deadline: "2024-08-20",
      location: "Remote"
    },
    {
      id: 3,
      title: "Web3 Development Challenge",
      type: "Hackathon",
      company: "BlockchainCorp",
      skills: ["JavaScript", "Solidity", "Web3"],
      deadline: "2024-08-25",
      location: "New York, NY"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">Student Portal</h1>
            <p className="text-muted-foreground text-lg">
              Build your profile and discover opportunities that match your skills
            </p>
          </div>

          {!showSuggestions ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Create Your Profile</CardTitle>
                <CardDescription>
                  Tell us about yourself to get personalized opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={studentDetails.name}
                        onChange={(e) => setStudentDetails({...studentDetails, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={studentDetails.email}
                        onChange={(e) => setStudentDetails({...studentDetails, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="university">University/College</Label>
                    <Input
                      id="university"
                      value={studentDetails.university}
                      onChange={(e) => setStudentDetails({...studentDetails, university: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (comma-separated)</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., React, Python, Machine Learning, Design"
                      value={studentDetails.skills}
                      onChange={(e) => setStudentDetails({...studentDetails, skills: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience & Projects</Label>
                    <Textarea
                      id="experience"
                      placeholder="Describe your projects, internships, and relevant experience..."
                      value={studentDetails.experience}
                      onChange={(e) => setStudentDetails({...studentDetails, experience: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Textarea
                      id="interests"
                      placeholder="What type of opportunities are you looking for?"
                      value={studentDetails.interests}
                      onChange={(e) => setStudentDetails({...studentDetails, interests: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    Create Profile & Find Opportunities
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Suggested Opportunities */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Suggested Opportunities</h2>
                  <div className="space-y-4">
                    {suggestedEvents.map((event) => (
                      <Card key={event.id} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                              <Badge variant="secondary" className="mb-2">
                                {event.type}
                              </Badge>
                              <p className="text-muted-foreground font-medium">{event.company}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              Deadline: {event.deadline}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {event.skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <Button className="w-full mt-4 btn-hero">
                            Apply Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Event Calendar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5" />
                      Event Calendar
                    </CardTitle>
                    <CardDescription>
                      Important deadlines and events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-sm">AI Hackathon</p>
                          <p className="text-xs text-muted-foreground">Aug 15, 2024</p>
                        </div>
                        <Badge variant="destructive" className="text-xs">
                          3 days left
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-sm">Frontend Internship</p>
                          <p className="text-xs text-muted-foreground">Aug 20, 2024</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          8 days left
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;