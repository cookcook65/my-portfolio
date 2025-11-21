import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

const App: React.FC = () => {
  return (
    <div className="bg-hmi-black min-h-screen selection:bg-hmi-accent selection:text-black relative">
      <InteractiveBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;