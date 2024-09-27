import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./pages/Home";
import Footer from "./Components/assets/Footer/Footer";
import Earbuds from "./pages/Earbuds";
import Neckband from "./pages/Neckband";
import Tower from "./pages/Tower";
import Party from "./pages/Party";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AccesoryCategory from "./pages/AccesoryCategory";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import ProductEarbudsDetails from "./pages/ProductEarbudsDetails";
import ProductNeckbandDetails from "./pages/productNeckbandDetails";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const initialCartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartCount, setCartCount] = useState(initialCartCount);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);

    if (itemExists) {
      // Item already in cart, show a message
      setMessage(`${product.name} is already in your cart.`);
      setShowMessage(true);

      setTimeout(() => setShowMessage(false), 3000);
      return;
    }
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems); // Add the product to the cart
    setCartCount(cartCount + 1); // Increment the cart count

    setMessage(`${product.name} has been added to your cart!`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount + 1));
  };
  
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount - 1));

    setMessage(`${product.name} has been removed from your cart.`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const storedCartCount = JSON.parse(localStorage.getItem("cartCount"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      setCartCount(storedCartCount);
    }
  }, []);
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar cartCount={cartCount} />
        <div className="messageitem">
          {message && <div className="cart-message">{message}</div>}
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/earbuds" element={<Earbuds />}></Route>
          <Route path="/neckband" element={<Neckband />}></Route>
          <Route path="/tower" element={<Tower />}></Route>
          <Route path="/party" element={<Party />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/signup" element={<Signup />}></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeitem={removeFromCart} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/productearbuds/:id"
            element={<ProductEarbudsDetails addToCart={addToCart} />}
          />
          <Route
            path="/productneckband/:id"
            element={<ProductNeckbandDetails addToCart={addToCart} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
