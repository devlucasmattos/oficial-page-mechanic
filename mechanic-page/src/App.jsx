import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Address/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;