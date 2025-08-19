import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-600">GrowGrid</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Revolutionizing Academic Intelligence
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                GrowGrid represents the next evolution in academic research and learning. 
                By combining advanced AI technologies with deep understanding of educational needs, 
                we're creating a future where knowledge is more accessible, interactive, and meaningful.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're a student tackling complex research papers, an educator preparing 
                comprehensive materials, or a researcher exploring new frontiers of knowledge, 
                GrowGrid transforms static documents into dynamic, interactive resources.
              </p>
            </div>
          </div>

          {/* Right column - Benefits */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">For Students</h4>
                <p className="text-gray-300">Transform overwhelming research into manageable, interactive learning experiences</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">For Educators</h4>
                <p className="text-gray-300">Create comprehensive teaching materials and assessments with AI-powered insights</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                <Target size={24} className="text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">For Researchers</h4>
                <p className="text-gray-300">Navigate complex academic literature with precision and discover deeper insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;