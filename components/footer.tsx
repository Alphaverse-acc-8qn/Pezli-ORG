import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-10">
      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1 animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <img
                    src="/pezli-logo.png"
                    alt="Pezli Logo"
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      e.currentTarget.nextElementSibling.style.display = "flex"
                    }}
                  />
                  <span className="text-secondary-foreground font-bold text-lg hidden">P</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Pezli</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                Engineering innovative solutions for Africa's technological advancement. Headquartered in Nairobi,
                Kenya.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-secondary mr-3" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-secondary mr-3" />
                  <span>contact@pezli.com</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-secondary mr-3" />
                  <span>+254 721 579 783</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/innovations" className="text-muted-foreground hover:text-secondary transition-colors">
                    Our Innovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/future-projects"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Future Projects
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-muted-foreground hover:text-secondary transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-muted-foreground hover:text-secondary transition-colors">
                    Engineering Insights
                  </Link>
                </li>
                <li>
                  <Link href="/build-with-us" className="text-muted-foreground hover:text-secondary transition-colors">
                    Build With Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-6">Our Solutions</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-muted-foreground">Smart Home Systems</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Medical Equipment</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Aerospace Technology</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Drone Manufacturing</span>
                </li>
                <li>
                  <span className="text-muted-foreground">IoT Infrastructure</span>
                </li>
                <li>
                  <span className="text-muted-foreground">Custom Engineering</span>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-6">Stay Connected</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Get updates on our latest innovations and African tech insights.
              </p>

              {/* Newsletter Signup */}
              <Card className="mb-6 glass-effect border-border">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Subscribe
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="p-2 glass-effect hover-lift bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 glass-effect hover-lift bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 glass-effect hover-lift bg-transparent">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 glass-effect hover-lift bg-transparent">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">© 2025 Pezli. All rights reserved.</p>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-muted-foreground hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-muted-foreground hover:text-secondary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">Made with ❤️ in Africa</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <span className="text-xs text-muted-foreground ml-2">Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
