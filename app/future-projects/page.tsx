import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Rocket, Brain, Satellite, Factory, Calendar, Target } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function FutureProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="mb-8 relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
                alt="Futuristic cityscape with advanced technology"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              The Future We're Building
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our ambitious roadmap of upcoming projects that will define the next decade of African
              technological advancement and global competitiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Our 2030 Vision</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              By 2030, Pezli will be Africa's leading technology conglomerate, with our innovations powering smart
              cities, revolutionizing healthcare, enabling space exploration, and driving sustainable development across
              the continent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">$10B+</div>
                <div className="text-sm text-muted-foreground">Economic Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Future Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Flagship Future Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most ambitious initiatives that will transform entire industries and establish new technological
              paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="overflow-hidden border-border">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop"
                  alt="Space rocket launch"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Flagship Project</Badge>
                  <Badge variant="outline">2026-2030</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">African Space Consortium</CardTitle>
                <CardDescription className="text-base">
                  Continental space program with launch facilities, satellite manufacturing, and Mars mission
                  capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    A comprehensive space program that will establish Africa as a major space power, including launch
                    facilities in Kenya and Morocco, satellite manufacturing hubs, and participation in Mars exploration
                    missions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary mr-2" />
                      <span>Launch: 2026</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-secondary mr-2" />
                      <span>$5B Investment</span>
                    </div>
                    <div className="flex items-center">
                      <Satellite className="h-4 w-4 text-secondary mr-2" />
                      <span>100+ Satellites</span>
                    </div>
                    <div className="flex items-center">
                      <Rocket className="h-4 w-4 text-secondary mr-2" />
                      <span>3 Launch Sites</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
                  alt="AI and neural networks visualization"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Flagship Project</Badge>
                  <Badge variant="outline">2025-2028</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">AfriAI Research Institute</CardTitle>
                <CardDescription className="text-base">
                  Continental AI research hub developing African-language models and ethical AI frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    A world-class AI research institute focused on developing AI solutions for African contexts,
                    including multilingual models for 2,000+ African languages and ethical AI governance frameworks.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary mr-2" />
                      <span>Launch: 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-secondary mr-2" />
                      <span>$2B Investment</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-4 w-4 text-secondary mr-2" />
                      <span>500+ Researchers</span>
                    </div>
                    <div className="flex items-center">
                      <Factory className="h-4 w-4 text-secondary mr-2" />
                      <span>10 Research Centers</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Future Projects */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Future Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive pipeline of innovations across all sectors and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Smart City Platform</CardTitle>
                  <Badge variant="secondary">2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive smart city infrastructure for Lagos, Nairobi, and Cape Town including IoT networks,
                  traffic management, and citizen services.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $500M Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Quantum Computing Lab</CardTitle>
                  <Badge variant="secondary">2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Africa's first quantum computing research facility focused on cryptography, drug discovery, and
                  climate modeling applications.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $300M Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Ocean Cleanup Drones</CardTitle>
                  <Badge variant="secondary">2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Autonomous marine drones for ocean cleanup and plastic waste collection along African coastlines,
                  powered by renewable energy.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $150M Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Vertical Farm Network</CardTitle>
                  <Badge variant="secondary">2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-controlled vertical farming facilities in urban areas using 90% less water and producing 10x more
                  food per square meter.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $200M Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Hyperloop Africa</CardTitle>
                  <Badge variant="secondary">2029</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High-speed transportation network connecting major African cities with 1000+ km/h travel speeds using
                  magnetic levitation technology.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $10B Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Desert Solar Megafarm</CardTitle>
                  <Badge variant="secondary">2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Massive solar installation in the Sahara Desert capable of powering 100 million homes across Africa
                  and Europe via underwater cables.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $8B Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Biotech Manufacturing</CardTitle>
                  <Badge variant="secondary">2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced biotechnology facilities for vaccine production, gene therapy, and personalized medicine
                  manufacturing across Africa.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $1B Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Atmospheric Water Generators</CardTitle>
                  <Badge variant="secondary">2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Solar-powered systems that extract clean drinking water from air humidity, providing water security
                  for arid regions across Africa.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $400M Investment
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">Robotic Surgery Network</CardTitle>
                  <Badge variant="secondary">2028</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered robotic surgery systems deployed across African hospitals with remote operation
                  capabilities and expert surgeon telepresence.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    $600M Investment
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Development Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our strategic roadmap for the next decade of innovation and expansion.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2025
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Foundation Phase</h3>
                  <p className="text-muted-foreground">
                    Launch AfriAI Institute, Smart City Platform, and Vertical Farm Network
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2026
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Expansion Phase</h3>
                  <p className="text-muted-foreground">
                    Deploy African Space Consortium, Ocean Cleanup Drones, and Desert Solar Megafarm
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2027
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Innovation Phase</h3>
                  <p className="text-muted-foreground">
                    Establish Quantum Computing Lab and Biotech Manufacturing facilities
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2028
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Integration Phase</h3>
                  <p className="text-muted-foreground">
                    Launch Robotic Surgery Network and complete AfriAI Research Institute
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2029
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Transformation Phase</h3>
                  <p className="text-muted-foreground">
                    Deploy Hyperloop Africa and achieve continental technology leadership
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <Badge variant="secondary" className="text-sm">
                    2030
                  </Badge>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">Global Phase</h3>
                  <p className="text-muted-foreground">
                    Complete African Space Consortium and establish global technology partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Us in Building Tomorrow</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These ambitious projects require partnerships, investment, and collaboration. Be part of Africa's
            technological revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Partner With Us
              </Button>
            </Link>
            <Link href="/innovations">
              <Button variant="outline" size="lg">
                View Current Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
