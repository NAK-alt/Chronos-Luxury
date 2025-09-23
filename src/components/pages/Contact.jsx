import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['123 Luxury Avenue', 'Geneva, Switzerland', 'CH-1200']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+41 22 123 4567', '+1 (555) 123-4567', 'Mon-Sat: 9AM-7PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@chronosluxury.com', 'sales@chronosluxury.com', 'support@chronosluxury.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 7PM', 'Saturday: 10AM - 6PM', 'Sunday: 12PM - 5PM']
    }
  ]

  const subjects = [
    'General Inquiry',
    'Product Information',
    'Sales Support',
    'After-Sales Service',
    'Warranty Claim',
    'Partnership Inquiry'
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're here to help you find the perfect timepiece or answer any questions about our collection. 
            Our experts are ready to provide personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <info.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-medium mb-3">Why Choose Chronos Luxury?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-1">Expert Consultation</p>
                    <p>Our watch specialists provide personalized recommendations</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Lifetime Support</p>
                    <p>Comprehensive after-sales service and maintenance</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Authenticity Guarantee</p>
                    <p>Every timepiece comes with certification of authenticity</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Global Shipping</p>
                    <p>Secure delivery to over 40 countries worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}