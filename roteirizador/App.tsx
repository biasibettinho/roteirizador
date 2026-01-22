
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Credibility from './components/Credibility';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Concept />
        <Benefits />
        <HowItWorks />
        <Credibility />
      </main>
      <Footer />
    </div>
  );
}

export default App;
