import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechnicalSection from './components/TechnicalSection';
import AboutSection from './components/AboutSection';
import UserInteractionSection from './components/UserInteractionSection';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'workspace'>('home');

  const handleExploreClick = () => {
    setCurrentView('workspace');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'workspace') {
    return (
      <div className="min-h-screen bg-black">
        <UserInteractionSection onBackToHome={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <HeroSection onExploreClick={handleExploreClick} />
      <CapabilitiesSection />
      <TechnicalSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;