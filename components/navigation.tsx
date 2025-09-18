"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/innovations", label: "Innovations" },
  { href: "/future-projects", label: "Future Projects" },
  { href: "/build-with-us", label: "Build with us" },
  { href: "/research", label: "Research" },
  { href: "/matrix", label: "Matrix" },
  { href: "/blogs", label: "Blogs" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <img
                  src="/pezli-logo.png"
                  alt="Pezli Logo"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    // Fallback to text logo if image not found
                    e.currentTarget.style.display = "none"
                    e.currentTarget.nextElementSibling.style.display = "flex"
                  }}
                />
                <span className="text-secondary-foreground font-bold text-sm hidden">P</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Pezli</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <img
                        src="/pezli-logo.png"
                        alt="Pezli Logo"
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                          e.currentTarget.nextElementSibling.style.display = "flex"
                        }}
                      />
                      <span className="text-secondary-foreground font-bold text-sm hidden">P</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Pezli</h2>
                  </div>
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-secondary px-4 py-3 rounded-md text-base font-medium transition-colors border-b border-border last:border-b-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
