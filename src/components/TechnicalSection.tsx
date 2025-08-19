import React from 'react';
import { Settings, Puzzle, Search, Cpu } from 'lucide-react';

const TechnicalSection = () => {
  const technologies = [
    {
      icon: Settings,
      title: "Llama APIs",
      description: "Powered by enterprise-grade reasoning capabilities"
    },
    {
      icon: Puzzle,
      title: "LangChain",
      description: "Built on sophisticated document processing framework"
    },
    {
      icon: Search,
      title: "FAISS Vector Search",
      description: "Uses precise retrieval for optimal results"
    },
    {
      icon: Cpu,
      title: "HuggingFace Embeddings",
      description: "Employs deep understanding models"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-yellow-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge AI technologies for unparalleled performance and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors duration-300">
                    <tech.icon size={28} className="text-green-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;