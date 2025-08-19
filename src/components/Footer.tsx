import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Grow<span className="text-green-600">Grid</span>
            </h3>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-green-600/20 hover:border-green-600/40 transition-all duration-300 group"
            >
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group"
            >
              <Linkedin size={20} className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group"
              <Mail size={20} className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
            </a>
          </div>
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-green-600/20 hover:border-green-600/40 transition-all duration-300 group"
          {/* Copyright */}
            <Linkedin size={20} className="text-gray-300 group-hover:text-green-600 transition-colors duration-300" />
            <p className="text-gray-400 text-sm">
              © 2025 GrowGrid. All rights reserved.
            </p>
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-green-600/20 hover:border-green-600/40 transition-all duration-300 group"
              Transforming education through AI innovation
            <Mail size={20} className="text-gray-300 group-hover:text-green-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;