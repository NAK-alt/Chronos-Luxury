export const watches = [
  {
    id: '1',
    name: 'Submariner Classic',
    brand: 'Oceanus',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzU4NjE4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A timeless diving watch with exceptional water resistance and precision.',
    category: 'diving',
    features: ['Water resistant to 300m', 'Automatic movement', 'Ceramic bezel', 'Luminous markers']
  },
  {
    id: '2',
    name: 'Royal Heritage',
    brand: 'Majesty',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1697890666805-7843e3caa38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBjbG9zZXVwfGVufDF8fHx8MTc1ODYzMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'An elegant dress watch featuring gold accents and Swiss craftsmanship.',
    category: 'dress',
    features: ['18k gold case', 'Swiss movement', 'Sapphire crystal', 'Leather strap']
  },
  {
    id: '3',
    name: 'Speedmaster Pro',
    brand: 'Velocity',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1685736384747-10323d20c8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbGVnYW50JTIwd2F0Y2glMjBkaXNwbGF5fGVufDF8fHx8MTc1ODYzMjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional chronograph with racing heritage and precise timing.',
    category: 'sport',
    features: ['Chronograph function', 'Tachymeter scale', 'Manual wind', 'Steel bracelet']
  },
  {
    id: '4',
    name: 'Explorer Elite',
    brand: 'Adventure',
    price: 7800,
    image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzU4NjE4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Built for adventure with rugged design and superior durability.',
    category: 'sport',
    features: ['Shock resistant', 'GMT function', 'Titanium case', 'Anti-magnetic']
  },
  {
    id: '5',
    name: 'Constellation Luxury',
    brand: 'Stellar',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1697890666805-7843e3caa38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBjbG9zZXVwfGVufDF8fHx8MTc1ODYzMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The epitome of luxury with diamond hour markers and precious metals.',
    category: 'luxury',
    features: ['Diamond hour markers', 'Platinum case', 'Co-axial movement', 'Alligator strap']
  },
  {
    id: '6',
    name: 'Diver Master',
    brand: 'DeepSea',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1685736384747-10323d20c8bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbGVnYW50JTIwd2F0Y2glMjBkaXNwbGF5fGVufDF8fHx8MTc1ODYzMjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional diving watch with helium escape valve and deep-sea capabilities.',
    category: 'diving',
    features: ['Water resistant to 500m', 'Helium escape valve', 'Unidirectional bezel', 'Super-LumiNova']
  }
]

export const featuredWatches = watches.slice(0, 3)

export const getWatchById = (id) => {
  return watches.find(watch => watch.id === id)
}

export const getWatchesByCategory = (category) => {
  if (category === 'all') return watches
  return watches.filter(watch => watch.category === category)
}