import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Rocket, Home, Heart, Zap, Mail, Phone, MapPin, Users, Award, Target } from "lucide-react"
import Link from "next/link"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FuturisticBackground />

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8 animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
                alt="Pezli Innovation - African Technology Solutions"
                className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto hover-lift"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-up">
              Engineering the Future of
              <span className="text-secondary"> Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in">
              Pezli combines cutting-edge hardware and software engineering to create innovative solutions for smart
              homes, medical equipment, aerospace technology, and drone manufacturing across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/innovations">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
                  Explore Our Innovations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="hover-lift bg-transparent">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-6">
                Pioneering African Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Founded with the vision of transforming Africa's technological landscape, Pezli stands at the
                intersection of hardware and software engineering. We believe that the future of African development
                lies in locally-designed, globally-competitive technology solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Our multidisciplinary team of engineers, designers, and innovators work tirelessly to create products
                that address real African challenges while pushing the boundaries of what's possible in technology.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center animate-scale-in">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center animate-scale-in">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="African Engineers at Pezli"
                className="rounded-2xl shadow-xl w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We specialize in four key areas that are critical to Africa's technological advancement and economic
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-shadow hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
                    alt="Smart Home Technology"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Smart Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intelligent home automation systems that enhance comfort, security, and energy efficiency for modern
                  African households.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
                    alt="Medical Equipment"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Medical Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced medical devices and diagnostic equipment specifically designed for African healthcare
                  infrastructure and needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop"
                    alt="Aerospace Technology"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Aerospace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rocket launch systems and space technology development to support Africa's growing space industry and
                  satellite programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop"
                    alt="Drone Technology"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Drone Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom drone manufacturing for agriculture, surveillance, delivery, and mapping applications across
                  diverse African terrains.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Driven by purpose, guided by innovation, and committed to African excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We push the boundaries of what's possible, creating breakthrough solutions that leapfrog traditional
                  technology limitations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">African Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every solution we create is designed with African contexts, challenges, and opportunities at its core.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We maintain the highest standards in engineering, design, and delivery to compete on the global stage.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Explore Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our current innovations and future projects that are shaping Africa's technological landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/innovations">
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer group hover-lift animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                    Current Innovations
                  </CardTitle>
                  <CardDescription>
                    Explore our completed and ongoing projects that are already making an impact across Africa.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-secondary">
                    <span className="text-sm font-medium">View Innovations</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/future-projects">
              <Card className="border-border hover:shadow-lg transition-all cursor-pointer group hover-lift animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                    Future Projects
                  </CardTitle>
                  <CardDescription>
                    Get a glimpse of our ambitious upcoming projects and long-term vision for African technology.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-secondary">
                    <span className="text-sm font-medium">View Future Projects</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to discuss your next innovative project? Get in touch with our engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">contact@pezli.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">+254 721 579 783</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <Card className="border-border hover-lift animate-scale-in">
              <CardHeader>
                <CardTitle className="text-card-foreground">Start a Project</CardTitle>
                <CardDescription>
                  Tell us about your engineering challenge and let's explore solutions together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <label htmlFor="project" className="block text-sm font-medium text-card-foreground mb-1">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Smart Home Solutions</option>
                    <option>Medical Equipment</option>
                    <option>Aerospace Technology</option>
                    <option>Drone Manufacturing</option>
                    <option>Custom Engineering</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
