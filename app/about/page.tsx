import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Target, Award, Globe, Lightbulb, Heart, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { FuturisticBackground } from "@/components/futuristic-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                alt="Pezli Team - African Innovation Leaders"
                className="mx-auto rounded-2xl shadow-2xl max-w-full h-auto hover-lift"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-up">
              About <span className="text-secondary">Pezli</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in">
              We are a pioneering African technology company headquartered in Nairobi, Kenya, dedicated to engineering
              innovative solutions that transform lives across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                Founded in the heart of East Africa, Pezli emerged from a simple yet powerful vision: to position Africa
                at the forefront of global technological innovation. Our journey began with a team of passionate
                engineers and visionaries who believed that Africa's challenges could become the catalyst for
                groundbreaking solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                From our headquarters in Nairobi, Kenya, we've grown into a multidisciplinary team that combines deep
                technical expertise with an intimate understanding of African markets, cultures, and needs. We don't
                just adapt existing technologies – we create entirely new solutions designed specifically for African
                contexts.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Today, Pezli stands as a testament to African ingenuity, with our innovations reaching across 15+
                countries and impacting millions of lives through smarter homes, better healthcare, advanced aerospace
                technology, and revolutionary drone applications.
              </p>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Nairobi Tech Hub - Pezli Headquarters"
                className="rounded-2xl shadow-xl w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Driving Africa's technological renaissance through innovation, excellence, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To engineer cutting-edge technology solutions that address Africa's unique challenges while competing
                  on the global stage. We are committed to creating products that enhance quality of life, drive
                  economic growth, and position Africa as a leader in technological innovation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be Africa's premier technology company, recognized globally for our innovative solutions and our
                  role in transforming the continent into a hub of technological excellence. We envision an Africa where
                  locally-designed technology drives sustainable development and prosperity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do at Pezli.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We constantly push boundaries, challenge conventions, and create breakthrough solutions that leapfrog
                  traditional limitations.
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
                  We maintain the highest standards in engineering, design, and delivery to compete effectively on the
                  global stage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every solution we create is designed to make a meaningful difference in African communities and
                  contribute to continental development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in the power of partnerships, working closely with local communities, governments, and
                  international partners.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Meet the visionaries driving Pezli's mission to transform Africa through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                    alt="Beauttah Kipruto - CEO & Founder"
                    className="rounded-full w-24 h-24 mx-auto object-cover"
                  />
                </div>
                <CardTitle className="text-card-foreground">Beauttah Kipruto</CardTitle>
                <CardDescription className="text-secondary font-medium">
                  Chief Executive Officer & Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visionary leader driving Pezli's mission to position Africa at the forefront of global technology
                  innovation, with expertise in strategic planning and African market development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                    alt="CTO"
                    className="rounded-full w-24 h-24 mx-auto object-cover"
                  />
                </div>
                <CardTitle className="text-card-foreground">Chief Technology Officer</CardTitle>
                <CardDescription className="text-secondary font-medium">Engineering Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Overseeing our technical architecture and ensuring our solutions meet the highest engineering
                  standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover-lift animate-scale-in">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                    alt="Head of Innovation"
                    className="rounded-full w-24 h-24 mx-auto object-cover"
                  />
                </div>
                <CardTitle className="text-card-foreground">Head of Innovation</CardTitle>
                <CardDescription className="text-secondary font-medium">Future Technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Spearheading our research initiatives and identifying emerging technologies for African applications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">Visit Our Headquarters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Nairobi's thriving tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Nairobi Headquarters</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">contact@pezli.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span className="text-muted-foreground">+254 721 579 783</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/build-with-us">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/innovations">
                  <Button variant="outline" className="w-full hover-lift bg-transparent">
                    Explore Our Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
                alt="Nairobi Skyline - Pezli Headquarters Location"
                className="rounded-2xl shadow-xl w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
