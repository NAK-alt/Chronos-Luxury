import { Link } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from './CartContext'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function WatchCard({ watch }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(watch)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${watch.id}`}>
        <div className="aspect-square overflow-hidden">
          <ImageWithFallback
            src={watch.image}
            alt={watch.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <Badge variant="secondary" className="mb-2 capitalize">
                {watch.category}
              </Badge>
              <h3 className="font-medium mb-1">{watch.name}</h3>
              <p className="text-sm text-muted-foreground">{watch.brand}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {watch.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">
              ${watch.price.toLocaleString()}
            </span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}