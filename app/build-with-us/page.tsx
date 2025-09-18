import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Lightbulb, Rocket, Code, Wrench, Globe } from "lucide-react"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function BuildWithUsPage() {
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                alt="Team collaboration and partnership"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Build the Future
              <span className="text-secondary"> Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join Pezli's collaborative ecosystem where visionaries, engineers, and innovators come together to create
              groundbreaking solutions for Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-on-hover">
                Start a Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glow-on-hover bg-transparent">
                View Open Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Partnership Models</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Multiple ways to collaborate with Pezli and contribute to Africa's technological advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Co-Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Partner with us on joint development projects. Share expertise, resources, and create innovative
                  solutions together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Innovation Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join our innovation labs where researchers, engineers, and entrepreneurs collaborate on breakthrough
                  technologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Technical Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage our expertise for your projects. Get technical guidance, engineering support, and strategic
                  advice.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Talent Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Exchange talent and expertise. Share engineers, researchers, and specialists across projects and
                  organizations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Startup Incubation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Launch your tech startup with our support. Get mentorship, resources, and access to our network of
                  partners.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Global Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with international partners. Bridge African innovation with global markets and opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Open Collaboration Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Current projects seeking partners, contributors, and collaborators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
                alt="Smart grid technology and power systems"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Smart Grid Initiative</h3>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop"
                alt="Medical drone delivering supplies"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Medical Drone Network</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  African Smart Grid Initiative
                </CardTitle>
                <CardDescription>
                  Developing intelligent power distribution systems for rural African communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Seeking: Power Systems Engineers, IoT Specialists</div>
                  <div className="text-sm text-muted-foreground">Timeline: 18 months</div>
                  <div className="text-sm text-muted-foreground">Impact: 50+ communities</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Join Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Medical Drone Network
                </CardTitle>
                <CardDescription>
                  Building autonomous drone systems for medical supply delivery in remote areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Seeking: Aerospace Engineers, AI Developers</div>
                  <div className="text-sm text-muted-foreground">Timeline: 24 months</div>
                  <div className="text-sm text-muted-foreground">Impact: Healthcare access for millions</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Join Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Satellite Manufacturing Hub
                </CardTitle>
                <CardDescription>
                  Establishing Africa's first commercial satellite manufacturing facility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">
                    Seeking: Space Systems Engineers, Manufacturing Partners
                  </div>
                  <div className="text-sm text-muted-foreground">Timeline: 36 months</div>
                  <div className="text-sm text-muted-foreground">Impact: African space industry</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Join Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Open Source Hardware Platform
                </CardTitle>
                <CardDescription>Creating open-source hardware designs for African manufacturing.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">
                    Seeking: Hardware Designers, Open Source Contributors
                  </div>
                  <div className="text-sm text-muted-foreground">Timeline: Ongoing</div>
                  <div className="text-sm text-muted-foreground">Impact: Democratized hardware access</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Join Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Ready to Collaborate?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Let's discuss how we can work together to build innovative solutions for Africa's future.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Partnership Inquiry</CardTitle>
              <CardDescription>
                Tell us about your organization and how you'd like to collaborate with Pezli.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-card-foreground mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your organization"
                  />
                </div>
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
                <label htmlFor="partnership" className="block text-sm font-medium text-card-foreground mb-1">
                  Partnership Type
                </label>
                <select
                  id="partnership"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Co-Development</option>
                  <option>Innovation Labs</option>
                  <option>Technical Consulting</option>
                  <option>Talent Exchange</option>
                  <option>Startup Incubation</option>
                  <option>Global Partnerships</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">
                  Partnership Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your partnership idea, goals, and how you'd like to collaborate..."
                />
              </div>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Submit Partnership Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
