import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Users, Calendar, MapPin, Mail, Phone, Globe, Star } from "lucide-react";

const OrganizerPortal = () => {
  const [organizerData, setOrganizerData] = useState({
    companyName: "",
    companyType: "",
    industry: "",
    location: "",
    website: "",
    email: "",
    phone: "",
    description: "",
    teamSize: "",
    foundedYear: ""
  });

  // Mock student data for demonstration
  const mockStudents = [
    {
      id: 1,
      name: "Alex Johnson",
      university: "MIT",
      major: "Computer Science",
      year: "Junior",
      skills: ["React", "Node.js", "Python", "Machine Learning"],
      experience: "2 years",
      gpa: "3.8",
      projects: 5,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      university: "Stanford",
      major: "Design",
      year: "Senior",
      skills: ["UI/UX", "Figma", "Adobe Suite", "User Research"],
      experience: "3 years",
      gpa: "3.9",
      projects: 8,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      university: "UC Berkeley",
      major: "Business",
      year: "Sophomore",
      skills: ["Marketing", "Analytics", "Sales", "Strategy"],
      experience: "1 year",
      gpa: "3.7",
      projects: 3,
      avatar: "/placeholder.svg"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setOrganizerData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-4">
            Organizer Portal
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Post opportunities, browse talented students, and build your dream team
          </p>
        </div>

        <Tabs defaultValue="profile" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Company Profile</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Student Pool</span>
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Post Opportunities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>Company Information</span>
                </CardTitle>
                <CardDescription>
                  Tell students about your company and what makes it special
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={organizerData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyType">Company Type</Label>
                    <Select onValueChange={(value) => handleInputChange("companyType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="agency">Agency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      value={organizerData.industry}
                      onChange={(e) => handleInputChange("industry", e.target.value)}
                      placeholder="e.g., Technology, Healthcare, Finance"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={organizerData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, State/Country"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={organizerData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="https://your-company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="200+">200+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    value={organizerData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your company, mission, and culture..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={organizerData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={organizerData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <Button className="btn-hero">Save Company Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Student Pool</span>
                </CardTitle>
                <CardDescription>
                  Browse and connect with talented students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockStudents.map((student) => (
                    <Card key={student.id} className="hover-scale">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">{student.university}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {student.major} • {student.year}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 mr-1" />
                            GPA: {student.gpa} • {student.projects} projects
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {student.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {student.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{student.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button variant="outline" className="w-full">
                            View Full Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Post New Opportunity</span>
                </CardTitle>
                <CardDescription>
                  Create internships, hackathons, or project opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="oppTitle">Opportunity Title</Label>
                    <Input
                      id="oppTitle"
                      placeholder="e.g., Frontend Developer Intern"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="oppType">Opportunity Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="hackathon">Hackathon</SelectItem>
                        <SelectItem value="project">Project</SelectItem>
                        <SelectItem value="fulltime">Full-time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      placeholder="e.g., 3 months, 2 weeks"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oppDescription">Description</Label>
                  <Textarea
                    id="oppDescription"
                    placeholder="Describe the role, responsibilities, and what students will learn..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Required Skills</Label>
                  <Input
                    id="requirements"
                    placeholder="e.g., React, Python, Design Thinking (comma separated)"
                  />
                </div>
                <Button className="btn-hero">Post Opportunity</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrganizerPortal;