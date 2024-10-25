// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <ProductSection />
              <ProductDetails />
              <ContactForm />
            </>
          } />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;