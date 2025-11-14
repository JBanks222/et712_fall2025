import './App.css';
import ProductCard from './components/ProductCard';
import pexelImage from './images/pexel.jpg';

function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', image: pexelImage, price: 79.99, inStock: true },
    { id: 2, name: 'USB-C Cable', image: pexelImage, price: 12.99, inStock: true },
    { id: 3, name: 'Phone Case', image: pexelImage, price: 24.99, inStock: false },
    { id: 4, name: 'Screen Protector', image: pexelImage, price: 9.99, inStock: true },
    { id: 5, name: 'Portable Charger', image: pexelImage, price: 34.99, inStock: true },
    { id: 6, name: 'Keyboard', image: pexelImage, price: 89.99, inStock: false },
    { id: 7, name: 'Mouse Pad', image: pexelImage, price: 14.99, inStock: true },
    { id: 8, name: 'Webcam', image: pexelImage, price: 59.99, inStock: true },
    { id: 9, name: 'Desk Lamp', image: pexelImage, price: 44.99, inStock: true },
    { id: 10, name: 'Monitor Stand', image: pexelImage, price: 39.99, inStock: false },
    { id: 11, name: 'Laptop Stand', image: pexelImage, price: 49.99, inStock: true },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Store</h1>
        <p>Explore our collection of tech products</p>
        <p className="app-credit">by Jalen Banks</p>
      </header>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
