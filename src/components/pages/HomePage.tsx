import React from 'react';
import { Button } from '../ui/button.tsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card.tsx';
import { Badge } from '../ui/badge.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar.tsx';
import { ArrowRight, Users, FolderKanban, Target, TrendingUp, Award, Zap } from 'lucide-react';
import { mockProjects } from '../data/mockData';
import { ImageWithFallback } from '../styles/ImageWithFallback';
interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Top contributors mock data
const topContributors = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    role: 'Full Stack Dev',
    projects: 12,
    contributions: 248
  },
  {
    id: '2',
    name: 'Marcus Williams',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    role: 'UI/UX Designer',
    projects: 8,
    contributions: 186
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    role: 'ML Engineer',
    projects: 6,
    contributions: 174
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    role: 'Backend Dev',
    projects: 10,
    contributions: 162
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="mb-2">
                🚀 Join 10,000+ Developers Worldwide
              </Badge>
              <h1 className="text-5xl md:text-6xl !leading-tight">
                Build Your Dream Team
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with talented developers, designers, and innovators. Collaborate on projects that matter and turn your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" onClick={() => onNavigate('signup')} className="text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('login')} className="text-lg px-8">
                  Explore Projects
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl mb-1">1,200+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">10K+</div>
                  <div className="text-sm text-muted-foreground">Contributors</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzAzNjEwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <Card className="absolute -bottom-6 -left-6 w-64 shadow-xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Fast Matching</p>
                      <p className="text-sm text-muted-foreground">Find teammates in minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Start collaborating in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative border-2 hover:border-primary/50 transition-all">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  1
                </div>
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Create Your Profile</CardTitle>
                <CardDescription className="text-base">
                  Sign up and showcase your skills, experience, and interests. Let others know what you bring to the table.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:border-primary/50 transition-all">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  2
                </div>
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FolderKanban className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Discover Projects</CardTitle>
                <CardDescription className="text-base">
                  Browse through hundreds of active projects or create your own. Use filters to find the perfect match for your skills.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:border-primary/50 transition-all">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  3
                </div>
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Start Collaborating</CardTitle>
                <CardDescription className="text-base">
                  Join teams, contribute to projects, and build amazing things together. Track progress and celebrate wins.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Projects Preview */}
      <section className="py-20 bg-muted/30 border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl mb-2">Live Projects</h2>
              <p className="text-xl text-muted-foreground">Join these active projects today</p>
            </div>
            <Button variant="outline" size="lg" onClick={() => onNavigate('signup')}>
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.slice(0, 6).map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50"
                onClick={() => onNavigate('signup')}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                    <Badge variant={project.status === 'recruiting' ? 'default' : 'outline'}>
                      {project.status === 'recruiting' ? 'Open' : project.status}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.teamSize} members
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {project.progress}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-2">Top Contributors</h2>
            <p className="text-xl text-muted-foreground">Meet our most active community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <Card key={contributor.id} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="relative inline-block mx-auto mb-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <CardDescription>{contributor.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xl mb-1">{contributor.projects}</div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl mb-1">{contributor.contributions}</div>
                      <div className="text-muted-foreground">Commits</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers and creators collaborating on exciting projects
          </p>
          <Button size="lg" variant="secondary" onClick={() => onNavigate('signup')} className="text-lg px-8">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FolderKanban className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg">CollabHub</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of collaborative development, one project at a time.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Features</li>
                <li className="hover:text-foreground cursor-pointer">Pricing</li>
                <li className="hover:text-foreground cursor-pointer">Security</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">About</li>
                <li className="hover:text-foreground cursor-pointer">Blog</li>
                <li className="hover:text-foreground cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Documentation</li>
                <li className="hover:text-foreground cursor-pointer">Help Center</li>
                <li className="hover:text-foreground cursor-pointer">Community</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 CollabHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
