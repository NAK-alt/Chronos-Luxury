import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ProductDetail from './components/pages/ProductDetail'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart'

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}