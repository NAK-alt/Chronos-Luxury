import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../CartContext'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto" />
          <h2 className="text-2xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground">Discover our luxury timepieces and find your perfect watch.</p>
          <Button asChild>
            <Link to="/products">
              Shop Now
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-medium mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.brand}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium">
                            ${(item.price * item.quantity).toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ${item.price.toLocaleString()} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Order Summary</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${cart.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${(cart.total * 0.1).toLocaleString()}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium text-lg mb-6">
                  <span>Total</span>
                  <span>${(cart.total * 1.1).toLocaleString()}</span>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/products">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-6 text-xs text-muted-foreground space-y-1">
                  <p>• Free shipping on orders over $1,000</p>
                  <p>• 30-day return policy</p>
                  <p>• Lifetime warranty included</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}