import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Home, Heart, Calendar, Users, MapPin } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function InnovationsPage() {
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
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Current Innovations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the groundbreaking projects we've completed and the ongoing innovations that are transforming
              industries across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="overflow-hidden border-border">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/smart-home-interface.jpg" alt="Smart Home System" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Featured Project</Badge>
                  <Badge variant="outline">Completed</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">PezliHome Smart Hub</CardTitle>
                <CardDescription className="text-base">
                  Our flagship smart home solution deployed across 500+ homes in Lagos, Nairobi, and Cape Town.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The PezliHome Smart Hub integrates IoT devices, energy management, security systems, and climate
                    control into a single, locally-manufactured platform designed for African power grids and internet
                    infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary mr-2" />
                      <span>Launched 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-secondary mr-2" />
                      <span>2,000+ Users</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-secondary mr-2" />
                      <span>5 Countries</span>
                    </div>
                    <div className="flex items-center">
                      <Home className="h-4 w-4 text-secondary mr-2" />
                      <span>500+ Homes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img
                  src="/medical-diagnostics.jpg"
                  alt="Medical Diagnostic Device"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Featured Project</Badge>
                  <Badge variant="outline">In Production</Badge>
                </div>
                <CardTitle className="text-2xl text-card-foreground">MediScan Portable Diagnostics</CardTitle>
                <CardDescription className="text-base">
                  AI-powered diagnostic equipment for remote healthcare delivery in underserved communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    MediScan combines advanced sensors, machine learning, and telemedicine capabilities to provide
                    accurate diagnostics in areas with limited healthcare infrastructure.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-secondary mr-2" />
                      <span>Launched 2023</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-secondary mr-2" />
                      <span>50+ Clinics</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-secondary mr-2" />
                      <span>8 Countries</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 text-secondary mr-2" />
                      <span>10,000+ Patients</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Projects Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">All Current Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete portfolio of innovations across all four core areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/drone-swarm.jpg" alt="Agricultural Drone" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">AgriDrone Pro</CardTitle>
                  <Badge variant="secondary">Drone Tech</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Precision agriculture drones with advanced sensors for crop monitoring, spraying, and yield
                  optimization across 1,000+ farms.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Kenya, Ghana, Nigeria
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/space-technology.jpg" alt="Satellite Launch System" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">AfriSat Launch System</CardTitle>
                  <Badge variant="secondary">Aerospace</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Small satellite launch platform designed for African space agencies and research institutions.
                  Successfully launched 3 satellites.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    South Africa, Morocco
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/medical-diagnostics.jpg" alt="Cardiac Monitor" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">CardioMonitor</CardTitle>
                  <Badge variant="secondary">Medical Tech</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Wearable cardiac monitoring device with satellite connectivity for remote patient monitoring in rural
                  areas.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Tanzania, Uganda, Rwanda
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/solar-megafarm.jpg" alt="Solar Grid Manager" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">SolarGrid Manager</CardTitle>
                  <Badge variant="secondary">Smart Energy</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Intelligent solar energy management system for residential and commercial properties with battery
                  optimization.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Nigeria, Ghana, Senegal
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/drone-animation.gif" alt="Delivery Drone Network" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">DeliveryDrone Network</CardTitle>
                  <Badge variant="secondary">Logistics</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Autonomous drone delivery network for medical supplies and essential goods in remote areas. Operating
                  24/7 service.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    Rwanda, Botswana
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <img src="/smart-home-interface.jpg" alt="Secure Home Pro" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">SecureHome Pro</CardTitle>
                  <Badge variant="secondary">Security</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced home security system with AI-powered threat detection, facial recognition, and mobile alerts.
                </CardDescription>
                <div className="mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    South Africa, Kenya
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Innovate Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building the next generation of African technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Start a Project
              </Button>
            </Link>
            <Link href="/future-projects">
              <Button variant="outline" size="lg">
                View Future Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
