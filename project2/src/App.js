
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity = (newCart[existingItemIndex].quantity || 1) + 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(`Added ${product.name} to cart`);
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleUpdateQuantity = (index, change) => {
    const newCart = [...cart];
    const newQuantity = (newCart[index].quantity || 1) + change;
    
    if (newQuantity <= 0) {
      handleRemoveItem(index);
    } else {
      newCart[index].quantity = newQuantity;
      setCart(newCart);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="App">
      <Header 
        cartCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      
      <main className="main-content">
        <section className="products-section" id="products">
          <h2 className="section-title">Our Collection</h2>
          
          <div className="filter-container">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Products
            </button>
            <button 
              className={`filter-btn ${filter === 'houses' ? 'active' : ''}`}
              onClick={() => setFilter('houses')}
            >
              Gingerbread Houses
            </button>
            <button 
              className={`filter-btn ${filter === 'people' ? 'active' : ''}`}
              onClick={() => setFilter('people')}
            >
              Gingerbread People
            </button>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

export default App;
