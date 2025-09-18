"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, Eye, Heart, Share2, Search, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of African Space Technology: Pezli's Vision for 2030",
    excerpt:
      "Exploring how indigenous African space programs are revolutionizing satellite technology and earth observation systems across the continent.",
    author: "Dr. Amara Okafor",
    date: "2025-01-15",
    readTime: "8 min read",
    views: "2.4k",
    likes: 156,
    category: "Aerospace",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Cities in Africa: IoT Infrastructure for Urban Development",
    excerpt:
      "How Internet of Things technology is transforming African cities, from Lagos to Nairobi, creating sustainable urban ecosystems.",
    author: "Kwame Asante",
    date: "2025-01-12",
    readTime: "6 min read",
    views: "1.8k",
    likes: 89,
    category: "Smart Cities",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Revolutionizing Healthcare: AI-Powered Medical Diagnostics",
    excerpt:
      "Breaking down barriers to healthcare access through artificial intelligence and machine learning in medical equipment design.",
    author: "Dr. Fatima Al-Rashid",
    date: "2025-01-10",
    readTime: "10 min read",
    views: "3.1k",
    likes: 234,
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148647-3e447244af8f?w=600&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Drone Technology for Agricultural Innovation in Sub-Saharan Africa",
    excerpt:
      "Precision agriculture meets African farming: How autonomous drones are increasing crop yields and reducing environmental impact.",
    author: "Joseph Mbeki",
    date: "2025-01-08",
    readTime: "7 min read",
    views: "1.5k",
    likes: 67,
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Sustainable Energy Solutions: Solar Innovation for African Communities",
    excerpt:
      "Next-generation photovoltaic systems designed specifically for African climate conditions and energy infrastructure needs.",
    author: "Aisha Kone",
    date: "2025-01-05",
    readTime: "9 min read",
    views: "2.7k",
    likes: 178,
    category: "Energy",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Blockchain for Supply Chain Transparency in African Markets",
    excerpt:
      "Leveraging distributed ledger technology to create transparent, efficient supply chains for African agricultural and manufacturing sectors.",
    author: "Samuel Ochieng",
    date: "2025-01-03",
    readTime: "5 min read",
    views: "1.2k",
    likes: 45,
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
  },
]

const categories = ["All", "Aerospace", "Smart Cities", "Healthcare", "Agriculture", "Energy", "Blockchain"]

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Engineering <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover the latest innovations, research breakthroughs, and technological advances shaping Africa's
              future.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring glass-effect"
                />
              </div>
              <Button variant="outline" className="glass-effect hover-lift bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`hover-lift ${selectedCategory === category ? "bg-secondary text-secondary-foreground" : "glass-effect"}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            <Card className="overflow-hidden border-border hover-lift animate-scale-in glass-effect">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">{featuredPost.category}</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl text-card-foreground mb-4 text-balance">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-pretty">{featuredPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {featuredPost.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {featuredPost.likes}
                        </div>
                      </div>
                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border-border hover-lift animate-scale-in glass-effect group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur">{post.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="glass-effect">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-secondary transition-colors text-balance">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-secondary hover:text-secondary/80 hover-lift">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" size="lg" className="glass-effect hover-lift bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-effect relative z-10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Stay Updated with African Innovation</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Get the latest insights, research findings, and technological breakthroughs delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring glass-effect"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
