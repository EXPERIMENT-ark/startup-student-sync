import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Users, Calendar as CalendarIcon, Brain, Trophy, Star, Zap } from "lucide-react";

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
  const [points, setPoints] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: string}>({});
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(true);
  };

  const quizzes = [
    {
      id: 1,
      title: "Cybersecurity Basics",
      category: "Cybersecurity",
      questions: [
        {
          question: "What does 'phishing' refer to in cybersecurity?",
          options: ["A type of malware", "Fraudulent attempt to obtain sensitive information", "A network protocol", "A programming language"],
          correct: 1
        },
        {
          question: "Which of these is the strongest password?",
          options: ["password123", "P@ssw0rd!", "MyPassword", "12345678"],
          correct: 1
        },
        {
          question: "What does VPN stand for?",
          options: ["Virtual Private Network", "Very Personal Network", "Verified Public Network", "Virtual Protected Node"],
          correct: 0
        }
      ],
      points: 30
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      category: "Programming",
      questions: [
        {
          question: "Which method is used to add an element to the end of an array?",
          options: ["push()", "add()", "append()", "insert()"],
          correct: 0
        },
        {
          question: "What does '===' operator do in JavaScript?",
          options: ["Assignment", "Loose equality", "Strict equality", "Comparison"],
          correct: 2
        },
        {
          question: "Which is NOT a JavaScript data type?",
          options: ["string", "boolean", "integer", "undefined"],
          correct: 2
        }
      ],
      points: 25
    },
    {
      id: 3,
      title: "Web Development Logic",
      category: "Programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
          correct: 0
        },
        {
          question: "Which CSS property is used to change text color?",
          options: ["font-color", "text-color", "color", "foreground-color"],
          correct: 2
        },
        {
          question: "What is the purpose of the 'alt' attribute in HTML img tags?",
          options: ["Alternative text for accessibility", "Alignment of image", "Alternative image source", "Animation type"],
          correct: 0
        }
      ],
      points: 20
    }
  ];

  const suggestedEvents = [
    {
      id: 1,
      title: "AI Startup Hackathon",
      type: "Hackathon",
      company: "TechVentures",
      skills: ["Python", "Machine Learning", "React"],
      deadline: "2024-08-15",
      location: "San Francisco, CA",
      minPoints: 50
    },
    {
      id: 2,
      title: "Frontend Developer Internship",
      type: "Internship",
      company: "StartupHub",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      deadline: "2024-08-20",
      location: "Remote",
      minPoints: 30
    },
    {
      id: 3,
      title: "Web3 Development Challenge",
      type: "Hackathon",
      company: "BlockchainCorp",
      skills: ["JavaScript", "Solidity", "Web3"],
      deadline: "2024-08-25",
      location: "New York, NY",
      minPoints: 40
    },
    {
      id: 4,
      title: "Senior Full Stack Position",
      type: "Full-time",
      company: "TechGiant",
      skills: ["React", "Node.js", "Database Design"],
      deadline: "2024-09-01",
      location: "Remote",
      minPoints: 75
    }
  ];

  const handleQuizSubmit = (quizId: number) => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      const userAnswer = parseInt(quizAnswers[`${quizId}_${index}`] || "-1");
      if (userAnswer === question.correct) {
        correctAnswers++;
      }
    });

    const earnedPoints = Math.floor((correctAnswers / quiz.questions.length) * quiz.points);
    setPoints(prev => prev + earnedPoints);
    setCompletedQuizzes(prev => [...prev, quizId]);
    setCurrentQuiz(null);
    setQuizAnswers({});
  };

  const handleAnswerChange = (quizId: number, questionIndex: number, answer: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [`${quizId}_${questionIndex}`]: answer
    }));
  };

  const getEligibleEvents = () => {
    return suggestedEvents.filter(event => points >= event.minPoints);
  };

  const getPointsLevel = () => {
    if (points >= 75) return { level: "Expert", color: "text-yellow-500", icon: Trophy };
    if (points >= 50) return { level: "Advanced", color: "text-blue-500", icon: Star };
    if (points >= 25) return { level: "Intermediate", color: "text-green-500", icon: Zap };
    return { level: "Beginner", color: "text-gray-500", icon: Brain };
  };

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
            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                <TabsTrigger value="quizzes">Brain Tests</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Points</p>
                          <p className="text-3xl font-bold text-primary">{points}</p>
                        </div>
                        <div className={`p-3 rounded-full bg-primary/10 ${getPointsLevel().color}`}>
                          {(() => {
                            const Icon = getPointsLevel().icon;
                            return <Icon className="w-6 h-6" />;
                          })()}
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Level: {getPointsLevel().level}</p>
                        <Progress value={(points % 25) * 4} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Quizzes Completed</p>
                          <p className="text-3xl font-bold">{completedQuizzes.length}</p>
                        </div>
                        <Brain className="w-6 h-6 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Available Opportunities</p>
                          <p className="text-3xl font-bold">{getEligibleEvents().length}</p>
                        </div>
                        <Trophy className="w-6 h-6 text-yellow-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">{studentDetails.name}</p>
                        <p className="text-sm text-muted-foreground">{studentDetails.email}</p>
                        <p className="text-sm text-muted-foreground">{studentDetails.university}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {studentDetails.skills.split(",").map((skill, index) => (
                            <Badge key={index} variant="outline">{skill.trim()}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="opportunities" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Available Opportunities</h2>
                  <div className="space-y-4">
                    {getEligibleEvents().map((event) => (
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
                            <Badge variant="outline" className="text-green-600">
                              ✓ Eligible ({event.minPoints} pts required)
                            </Badge>
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
                    {suggestedEvents.filter(event => points < event.minPoints).map((event) => (
                      <Card key={event.id} className="opacity-60">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                              <Badge variant="secondary" className="mb-2">
                                {event.type}
                              </Badge>
                              <p className="text-muted-foreground font-medium">{event.company}</p>
                            </div>
                            <Badge variant="destructive">
                              Need {event.minPoints - points} more points
                            </Badge>
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
                          
                          <Button className="w-full mt-4" disabled>
                            Complete quizzes to unlock
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="quizzes" className="space-y-6">
                {currentQuiz === null ? (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Brain Tests & Quizzes</h2>
                    <p className="text-muted-foreground mb-6">Test your knowledge and earn points to unlock more opportunities!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {quizzes.map((quiz) => (
                        <Card key={quiz.id} className={`card-hover ${completedQuizzes.includes(quiz.id) ? 'opacity-50' : ''}`}>
                          <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                              {quiz.title}
                              <Badge variant="outline">+{quiz.points} pts</Badge>
                            </CardTitle>
                            <CardDescription>{quiz.category}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Brain className="w-4 h-4" />
                                {quiz.questions.length} questions
                              </div>
                              {completedQuizzes.includes(quiz.id) ? (
                                <Button disabled className="w-full">
                                  ✓ Completed
                                </Button>
                              ) : (
                                <Button 
                                  onClick={() => setCurrentQuiz(quiz.id)}
                                  className="w-full btn-hero"
                                >
                                  Start Quiz
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-2xl mx-auto">
                    {(() => {
                      const quiz = quizzes.find(q => q.id === currentQuiz);
                      if (!quiz) return null;
                      
                      return (
                        <Card>
                          <CardHeader>
                            <CardTitle>{quiz.title}</CardTitle>
                            <CardDescription>Answer all questions to earn {quiz.points} points</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            {quiz.questions.map((question, questionIndex) => (
                              <div key={questionIndex} className="space-y-4">
                                <h3 className="font-medium">
                                  {questionIndex + 1}. {question.question}
                                </h3>
                                <div className="space-y-2">
                                  {question.options.map((option, optionIndex) => (
                                    <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer">
                                      <input
                                        type="radio"
                                        name={`question_${questionIndex}`}
                                        value={optionIndex}
                                        onChange={(e) => handleAnswerChange(currentQuiz, questionIndex, e.target.value)}
                                        className="text-primary"
                                      />
                                      <span>{option}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                            <div className="flex gap-4 pt-4">
                              <Button 
                                onClick={() => setCurrentQuiz(null)}
                                variant="outline"
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                              <Button 
                                onClick={() => handleQuizSubmit(currentQuiz)}
                                className="flex-1 btn-hero"
                              >
                                Submit Quiz
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })()}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="calendar" className="space-y-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        {getEligibleEvents().slice(0, 4).map((event, index) => (
                          <div key={event.id} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                            <div>
                              <p className="font-medium text-sm">{event.title}</p>
                              <p className="text-xs text-muted-foreground">{event.deadline}</p>
                            </div>
                            <Badge variant={index === 0 ? "destructive" : "secondary"} className="text-xs">
                              {index === 0 ? "3 days left" : `${7 + index * 3} days left`}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;