import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

//CSS
import styles from "./App.module.css";

//Components
import Header from "./Components/Header.js/Header";
import Footer from "./Components/FooterComponents/Footer";
import HomePage from "./Components/ProductsComponents/HomePage";
import Details from "./Components/DetailsComponents/Details";
import Cart from "./Components/CartComponents/Cart";

//Contexts
import ProductsContextProvider from "./Components/Conexts/ProductsContextProvider";
import CartContextProvider from "./Components/Conexts/CartContextProvider";

const App = () => {
  return (
    <div className={styles.App}>
      <div className="container">
        <ProductsContextProvider>
          <CartContextProvider>
            <Header />
            <Routes>
              <Route path="/products" element={<HomePage />} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/" element={<Navigate to="/products" />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </ProductsContextProvider>
      </div>
    </div>
  );
};

export default App;
