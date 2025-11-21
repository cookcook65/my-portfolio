import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-glow-gradient opacity-30 pointer-events-none z-0"></div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center z-20">
        <div className="inline-block mb-4 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-xs font-medium text-hmi-accent tracking-wider uppercase">User Experience Motion Designer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
          Creating the <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Soul of Machines
          </span>
        </h1>

        <p className="text-lg md:text-xl text-hmi-text-muted max-w-2xl mx-auto leading-relaxed mb-12">
          I am <strong className="text-white">Nestor Mao</strong>. An expert in Smart Cockpit Experience with 9 years of creating systematic motion languages for mass production and future concepts.
        </p>

        <div className="flex justify-center gap-4">
           <a 
             href="#work" 
             className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
           >
             View Projects
           </a>
           <a 
             href="#contact" 
             className="px-8 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors backdrop-blur-sm"
           >
             Contact Me
           </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/30">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;