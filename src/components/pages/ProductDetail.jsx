import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Heart, Share2, Check } from 'lucide-react'
import { getWatchById } from '../data/watches'
import { useCart } from '../CartContext'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function ProductDetail() {
  const { id } = useParams()
  const [watch, setWatch] = useState(null)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    if (id) {
      const foundWatch = getWatchById(id)
      setWatch(foundWatch || null)
    }
  }, [id])

  const handleAddToCart = () => {
    if (watch) {
      addToCart(watch)
      setIsAddedToCart(true)
      setTimeout(() => setIsAddedToCart(false), 2000)
    }
  }

  if (!watch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Watch not found</h2>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <ImageWithFallback
                src={watch.image}
                alt={watch.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 capitalize">
                {watch.category}
              </Badge>
              <h1 className="text-3xl font-medium mb-2">{watch.name}</h1>
              <p className="text-xl text-muted-foreground">{watch.brand}</p>
            </div>

            <div className="text-4xl font-medium">
              ${watch.price.toLocaleString()}
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {watch.description}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Features</h3>
              <ul className="space-y-2">
                {watch.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart} 
                size="lg" 
                className="w-full"
                disabled={isAddedToCart}
              >
                {isAddedToCart ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Save to Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Free shipping</span>
                    <span>On orders over $1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Warranty</span>
                    <span>Lifetime coverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Returns</span>
                    <span>30-day policy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Authenticity</span>
                    <span>Guaranteed genuine</span>
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