import React from 'react';
import { ArrowRight, GraduationCap, Bot } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Hero Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <GraduationCap size={40} className="text-yellow-400" />
          </div>
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Bot size={40} className="text-yellow-400" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-yellow-400">GrowGrid</span>
          <span className="block text-3xl md:text-4xl mt-2">AI-Powered Academic Intelligence</span>
          <span className="text-4xl md:text-5xl block mt-4">🤖</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transforming static documents into dynamic, interactive knowledge resources.
        </p>

        {/* CTA Button */}
        <button 
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/25"
        >
          Explore GrowGrid
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;