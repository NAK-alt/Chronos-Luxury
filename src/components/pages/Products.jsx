import { useState, useEffect } from 'react'
import { watches, getWatchesByCategory } from '../data/watches'
import WatchCard from '../WatchCard'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Card, CardContent } from '../ui/card'

export default function Products() {
  const [filteredWatches, setFilteredWatches] = useState(watches)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const categories = [
    { value: 'all', label: 'All Watches' },
    { value: 'diving', label: 'Diving Watches' },
    { value: 'dress', label: 'Dress Watches' },
    { value: 'sport', label: 'Sport Watches' },
    { value: 'luxury', label: 'Luxury Watches' }
  ]

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'brand', label: 'Brand' }
  ]

  useEffect(() => {
    let filtered = getWatchesByCategory(selectedCategory)
    
    // Sort watches
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price)
        break
      case 'brand':
        filtered = filtered.sort((a, b) => a.brand.localeCompare(b.brand))
        break
      case 'name':
      default:
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
    
    setFilteredWatches(filtered)
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-4">Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated selection of luxury timepieces, each representing decades of craftsmanship and innovation.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {filteredWatches.length} {filteredWatches.length === 1 ? 'watch' : 'watches'} found
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        {filteredWatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWatches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No watches found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory('all')
                setSortBy('name')
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}