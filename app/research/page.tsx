import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Zap, Target, Award, Globe } from "lucide-react"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FuturisticBackground />

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop"
                alt="Advanced research laboratory with scientists working"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Research &<span className="text-secondary"> Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Advancing the frontiers of technology through cutting-edge research in hardware engineering, software
              development, and emerging technologies for African applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-on-hover">
                View Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glow-on-hover bg-transparent">
                Join Research Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Research Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our research spans multiple disciplines, addressing critical challenges in African technology development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
                alt="Solar panels and renewable energy research"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">Energy Systems</h3>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
                alt="AI and machine learning visualization"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">AI & Machine Learning</h3>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop"
                alt="Space technology and satellite systems"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">Space Technology</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Energy Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Renewable energy integration, smart grid technologies, and energy storage solutions optimized for
                  African climates and infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">IoT & Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Internet of Things solutions, low-power wide-area networks, and connectivity technologies for rural
                  and urban African environments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Artificial intelligence applications for healthcare, agriculture, and urban planning, with focus on
                  African data sets and use cases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Materials Science</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced materials research for harsh environments, sustainable manufacturing, and locally-sourced
                  material applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Human-Computer Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  User experience research for diverse African populations, multilingual interfaces, and
                  culturally-appropriate technology design.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Space Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Satellite systems, launch vehicle technologies, and space applications for Earth observation and
                  communications in Africa.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Active Research Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ongoing research initiatives that are pushing the boundaries of technology for African applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Adaptive Solar Panel Efficiency
                </CardTitle>
                <CardDescription>
                  Developing self-adjusting solar panels that optimize for dust, humidity, and varying light conditions
                  across Africa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Lead Researcher: Dr. Amara Okafor</div>
                  <div className="text-sm text-muted-foreground">Duration: 2023-2025</div>
                  <div className="text-sm text-muted-foreground">Funding: €2.5M EU-Africa Partnership</div>
                  <div className="text-sm text-muted-foreground">Status: Phase 2 - Field Testing</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Low-Cost Satellite Manufacturing
                </CardTitle>
                <CardDescription>
                  Research into affordable satellite production using locally-sourced materials and simplified
                  manufacturing processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Lead Researcher: Prof. Kwame Asante</div>
                  <div className="text-sm text-muted-foreground">Duration: 2024-2027</div>
                  <div className="text-sm text-muted-foreground">Funding: $3.2M African Space Agency</div>
                  <div className="text-sm text-muted-foreground">Status: Phase 1 - Design & Prototyping</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  AI-Powered Medical Diagnostics
                </CardTitle>
                <CardDescription>
                  Machine learning models trained on African medical data for improved diagnostic accuracy in
                  resource-limited settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Lead Researcher: Dr. Fatima Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">Duration: 2023-2026</div>
                  <div className="text-sm text-muted-foreground">Funding: $1.8M Gates Foundation</div>
                  <div className="text-sm text-muted-foreground">Status: Phase 3 - Clinical Trials</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Drone Swarm Coordination
                </CardTitle>
                <CardDescription>
                  Advanced algorithms for coordinating multiple drones in agricultural monitoring and disaster response
                  scenarios.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Lead Researcher: Dr. Joseph Mbeki</div>
                  <div className="text-sm text-muted-foreground">Duration: 2024-2026</div>
                  <div className="text-sm text-muted-foreground">Funding: $2.1M USAID Innovation Lab</div>
                  <div className="text-sm text-muted-foreground">Status: Phase 2 - Algorithm Development</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Patents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Research Output</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our research contributions to the global scientific community and intellectual property portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">127</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Publications</div>
              <div className="text-sm text-muted-foreground">Peer-reviewed papers in top-tier journals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">43</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Patents</div>
              <div className="text-sm text-muted-foreground">Granted and pending patent applications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">89</div>
              <div className="text-lg font-semibold text-card-foreground mb-2">Citations</div>
              <div className="text-sm text-muted-foreground">Average citations per publication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Research Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're always looking for talented researchers, PhD students, and postdocs to join our mission.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Research Opportunities</CardTitle>
              <CardDescription>
                Explore current openings in our research divisions and apply to join our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-card-foreground mb-1">
                  Position of Interest
                </label>
                <select
                  id="position"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>PhD Student</option>
                  <option>Postdoctoral Researcher</option>
                  <option>Research Scientist</option>
                  <option>Principal Investigator</option>
                  <option>Research Engineer</option>
                </select>
              </div>
              <div>
                <label htmlFor="research-area" className="block text-sm font-medium text-card-foreground mb-1">
                  Research Area
                </label>
                <select
                  id="research-area"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Energy Systems</option>
                  <option>IoT & Connectivity</option>
                  <option>AI & Machine Learning</option>
                  <option>Materials Science</option>
                  <option>Human-Computer Interaction</option>
                  <option>Space Technology</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">
                  Research Interests & Background
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your research background, interests, and why you want to join Pezli..."
                />
              </div>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
