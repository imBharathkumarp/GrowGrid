import React from 'react';
import { Search, BarChart3, FileText, BookOpen } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Search,
      title: "Precision Q&A",
      description: "Extract accurate, context-aware answers from complex materials"
    },
    {
      icon: BarChart3,
      title: "Intelligent Summarization",
      description: "Distill key insights from lengthy papers"
    },
    {
      icon: FileText,
      title: "Automated Assessment",
      description: "Generate curriculum-aligned MCQs with explanations"
    },
    {
      icon: BookOpen,
      title: "Concept Exploration",
      description: "Receive nuanced explanations of topics with source-based credibility"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key <span className="text-green-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover how GrowGrid revolutionizes academic research and learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group relative">
              {/* Glassmorphism card */}
              <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors duration-300">
                    <capability.icon size={32} className="text-green-600" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;