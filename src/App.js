import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { AuthContextProvider, UserAuth } from "./AuthContext";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from './pages/Home'
import ProductPage from "./pages/ProductPage";
import Store from "./pages/Store";
import products from "./products";


export const AppContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product, qty) {
    const cartFind = cart.find(item => item.id === product.id)
    const cartIndex = cart.indexOf(cartFind)
    if (cartFind) {
      setCart(prevState => cart.map(item =>
        item.id === product.id ? {
          ...item,
          quantity: prevState[cartIndex].quantity + +qty
        } :
          item
      ))
    } else {
      setCart([...cart, { ...product, quantity: qty }])
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => (+item?.id !== +id)))
  }


  return (
    <div className="App">
      <AuthContextProvider>
        <AppContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart removeFromCart={removeFromCart} />} />
            <Route path="/shop" element={<Store products={products} />} />
            <Route path="/shop/:url" element={<ProductPage products={products} />} />
          </Routes>
          <Footer />
        </AppContext.Provider>


      </AuthContextProvider>

    </div>
  );
}

export default App;
