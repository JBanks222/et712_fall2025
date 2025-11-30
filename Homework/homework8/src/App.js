import './App.css';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // find if the product already exists in the cart
  const addToCart = (product) => {
    const exist = cart.find((item)=>item.id===product.id)
    // if product exists, increase the quantity
    if(exist){
      setCart(
        cart.map((item) => {
          if(item.id === product.id){
            return {...item, qty: item.qty + 1}
          }
          else{
            return item
          }
        })
      )
    }
    // if product does not exist, add new item
    else{
      setCart([...cart, {...product, qty: 1}])
    }
  }

  // remove item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item)=>item.id !== id))
  }

  return (
    <div className="App">
      <h1 className='apptitle'>Welcome to Jalen Banks's Tech Store</h1>
      <Navigation cartCount={cart.length} />
      <Routes>
        <Route 
          path="/" 
          element={<ProductList addToCart={addToCart}/>} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} removeFromCart={removeFromCart}/>} 
        />
      </Routes>
    </div>
  );
}

export default App;
