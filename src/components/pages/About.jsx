import { Award, Users, Clock, Globe } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function About() {
  const stats = [
    { icon: Clock, label: 'Years of Excellence', value: '50+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Users, label: 'Master Craftsmen', value: '100+' },
    { icon: Globe, label: 'Countries Served', value: '40+' }
  ]

  const values = [
    {
      title: 'Craftsmanship',
      description: 'Every timepiece is meticulously crafted by master artisans who have dedicated their lives to the art of horology.'
    },
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of watchmaking technology while respecting traditional techniques.'
    },
    {
      title: 'Heritage',
      description: 'Our legacy spans generations, with each watch carrying forward the traditions of fine Swiss watchmaking.'
    },
    {
      title: 'Excellence',
      description: 'We accept nothing less than perfection in every aspect of our watches, from design to final assembly.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697890666805-7843e3caa38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBjbG9zZXVwfGVufDF8fHx8MTc1ODYzMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury watch craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            For over five decades, Chronos Luxury has been at the forefront of horological excellence, 
            creating timepieces that represent the perfect fusion of tradition and innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-medium mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">
                A Legacy of Precision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1973 by master watchmaker Heinrich Zimmermann, Chronos Luxury began as 
                  a small atelier in the Swiss Alps. With an unwavering commitment to precision and 
                  artistry, Heinrich set out to create timepieces that would stand the test of time.
                </p>
                <p>
                  Today, we continue his legacy with the same dedication to excellence. Each watch 
                  that bears our name undergoes hundreds of hours of meticulous handcrafting, ensuring 
                  that every component meets our exacting standards.
                </p>
                <p>
                  Our master craftsmen, trained in the traditional Swiss methods, work alongside 
                  cutting-edge technology to create watches that are not just instruments of time, 
                  but works of art that will be treasured for generations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685736384747-10323d20c8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbGVnYW50JTIwd2F0Y2glMjBkaXNwbGF5fGVufDF8fHx8MTc1ODYzMjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Watchmaking craftsmanship"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every timepiece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium mb-4">
            Become Part of Our Story
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover the perfect timepiece that will become part of your own legacy. 
            Each watch is more than an accessory—it's a companion for life's most important moments.
          </p>
        </div>
      </section>
    </div>
  )
}