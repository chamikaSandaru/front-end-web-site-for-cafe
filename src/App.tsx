import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;