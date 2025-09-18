import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Network, Zap, Globe, Users, Target, Shield } from "lucide-react"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Navigation } from "@/components/navigation"

export default function MatrixPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FuturisticBackground />

      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              The Pezli
              <span className="text-secondary"> Matrix</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              A comprehensive ecosystem connecting African innovators, technologies, and opportunities through an
              intelligent network of collaboration and resource sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-on-hover">
                Enter the Matrix
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glow-on-hover bg-transparent">
                Explore Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">What is the Matrix?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The Pezli Matrix is our interconnected platform that maps, connects, and amplifies African innovation
              across all sectors and regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Connecting Africa's Innovation Ecosystem</h3>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                The Matrix serves as a living map of African technological capabilities, connecting researchers,
                entrepreneurs, manufacturers, and investors across the continent. It identifies collaboration
                opportunities, resource gaps, and innovation clusters.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Through advanced algorithms and network analysis, the Matrix reveals hidden connections and potential
                partnerships that can accelerate African technological development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2,847</div>
                  <div className="text-sm text-muted-foreground">Connected Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">54</div>
                  <div className="text-sm text-muted-foreground">African Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Network className="h-24 w-24 text-secondary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-card-foreground">Innovation Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Matrix Components</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Six interconnected layers that form the foundation of African innovation intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Talent Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive database of African engineers, researchers, entrepreneurs, and innovators with their
                  skills, expertise, and availability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Project Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time tracking of innovation projects across Africa, identifying synergies, resource needs, and
                  collaboration opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Resource Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Platform for sharing equipment, facilities, expertise, and funding opportunities across the African
                  innovation ecosystem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Market Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Analysis of African and global markets, identifying opportunities for African innovations and
                  technology transfer possibilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">IP & Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intellectual property tracking, standards development, and regulatory compliance support for African
                  innovations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow glow-on-hover">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive measurement of innovation impact on African development, sustainability, and economic
                  growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Matrix Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Matrix in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real-world applications of the Matrix that are already transforming African innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Cross-Border Collaboration Engine
                </CardTitle>
                <CardDescription>
                  AI-powered matching system that identifies optimal collaboration opportunities between African
                  innovators across different countries and sectors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Active Matches: 1,247 partnerships formed</div>
                  <div className="text-sm text-muted-foreground">Success Rate: 78% successful collaborations</div>
                  <div className="text-sm text-muted-foreground">Impact: $45M in joint project funding</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Explore Matches</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Innovation Gap Analysis
                </CardTitle>
                <CardDescription>
                  Systematic identification of technology gaps and opportunities across African markets, guiding
                  strategic innovation investments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Gaps Identified: 342 technology opportunities</div>
                  <div className="text-sm text-muted-foreground">Projects Launched: 89 gap-filling initiatives</div>
                  <div className="text-sm text-muted-foreground">Market Value: $2.3B addressable market</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Analysis</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Resource Optimization Network
                </CardTitle>
                <CardDescription>
                  Dynamic allocation system that maximizes utilization of research equipment, facilities, and expertise
                  across African institutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Equipment Shared: 1,847 high-value instruments</div>
                  <div className="text-sm text-muted-foreground">Utilization Increase: 340% average improvement</div>
                  <div className="text-sm text-muted-foreground">Cost Savings: $12M in avoided purchases</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">Access Network</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all cursor-pointer group glow-on-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground group-hover:text-secondary transition-colors">
                  Innovation Impact Tracker
                </CardTitle>
                <CardDescription>
                  Comprehensive monitoring system that measures the real-world impact of African innovations on
                  development goals and quality of life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-muted-foreground">Projects Tracked: 2,156 innovation initiatives</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted: 15.7M people reached</div>
                  <div className="text-sm text-muted-foreground">SDG Progress: 23% acceleration in key metrics</div>
                </div>
                <div className="flex items-center text-secondary">
                  <span className="text-sm font-medium">View Impact</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join the Matrix</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Become part of Africa's most comprehensive innovation network and amplify your impact.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Matrix Registration</CardTitle>
              <CardDescription>
                Register your organization, project, or expertise to join the Pezli Matrix network.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1">
                    Name/Organization
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name or organization"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-card-foreground mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your country"
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
                <label htmlFor="sector" className="block text-sm font-medium text-card-foreground mb-1">
                  Primary Sector
                </label>
                <select
                  id="sector"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Healthcare & Medical Technology</option>
                  <option>Energy & Sustainability</option>
                  <option>Agriculture & Food Security</option>
                  <option>Education & Digital Literacy</option>
                  <option>Transportation & Logistics</option>
                  <option>Financial Technology</option>
                  <option>Manufacturing & Industry</option>
                  <option>Space & Aerospace</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="expertise" className="block text-sm font-medium text-card-foreground mb-1">
                  Expertise & Resources
                </label>
                <textarea
                  id="expertise"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your expertise, resources, current projects, and what you're looking to collaborate on..."
                />
              </div>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Join the Matrix
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
