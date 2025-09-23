import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Truck } from 'lucide-react'
import { featuredWatches } from '../data/watches'
import WatchCard from '../WatchCard'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function Home() {
  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Each timepiece is crafted with the finest materials and attention to detail.'
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'We stand behind our watches with comprehensive warranty coverage.'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary worldwide shipping on all orders over $1,000.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzU4NjE4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury watches collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover the world's most exquisite luxury timepieces, crafted with precision and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link to="/products">
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Why Choose Chronos Luxury</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional quality and service that matches the prestige of our timepieces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Featured Timepieces</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections from our most coveted collections, each representing the pinnacle of horological excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                View All Watches <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium mb-4">
            Experience Luxury Like Never Before
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our exclusive community and be the first to discover new arrivals, limited editions, and special offers.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}