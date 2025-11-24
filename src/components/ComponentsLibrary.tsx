import React, { useState } from 'react';
import { Power, Settings, Volume2, Move } from 'lucide-react';

interface ComponentCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  lottieSrc?: string; // Placeholder for future Lottie integration
  className?: string;
}

const NeumorphicCard: React.FC<ComponentCardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div className={`p-8 rounded-2xl bg-hmi-gray relative group overflow-hidden ${className}`}
         style={{
           background: '#1a1a1a',
           boxShadow: '8px 8px 16px #0d0d0d, -8px -8px 16px #272727'
         }}
    >
      <div className="relative z-10 flex flex-col h-full items-center justify-between">
        <div className="w-full h-40 flex items-center justify-center mb-6">
          {children}
        </div>
        <div className="text-center w-full">
          <h3 className="text-white font-medium mb-1 tracking-wide">{title}</h3>
          <p className="text-xs text-gray-500 font-mono">{description}</p>
        </div>
      </div>
      
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-hmi-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

// Demo 1: Soft Switch
const DemoSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out relative flex items-center ${
        isOn ? 'bg-hmi-accent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]' : 'bg-[#1a1a1a] shadow-[inset_4px_4px_8px_#0d0d0d,inset_-4px_-4px_8px_#272727]'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-8 bg-white' : 'translate-x-0 bg-gray-400'
        }`}
      />
    </button>
  );
};

// Demo 2: Haptic Button
const DemoButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className="w-16 h-16 rounded-full flex items-center justify-center text-hmi-accent transition-all duration-150 outline-none"
      style={{
        background: '#1a1a1a',
        boxShadow: isPressed 
          ? 'inset 6px 6px 12px #0d0d0d, inset -6px -6px 12px #272727'
          : '6px 6px 12px #0d0d0d, -6px -6px 12px #272727'
      }}
    >
      <Power size={24} className={isPressed ? 'scale-95 opacity-80' : 'scale-100'} />
    </button>
  );
};

// Demo 3: Slider / Volume
const DemoSlider = () => {
  const [value, setValue] = useState(60);
  return (
    <div className="w-48 flex items-center gap-4">
      <Volume2 size={16} className="text-gray-500" />
      <div className="flex-1 h-3 rounded-full relative cursor-pointer" 
           style={{
             background: '#1a1a1a',
             boxShadow: 'inset 3px 3px 6px #0d0d0d, inset -3px -3px 6px #272727'
           }}
           onClick={(e) => {
             const rect = e.currentTarget.getBoundingClientRect();
             const x = e.clientX - rect.left;
             const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
             setValue(pct);
           }}
      >
        <div 
          className="absolute top-0 left-0 h-full rounded-full bg-hmi-accent shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-300"
          style={{ width: `${value}%` }}
        ></div>
        <div 
           className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-hmi-gray transition-all duration-300"
           style={{ left: `${value}%`, transform: 'translate(-50%, -50%)', boxShadow: '3px 3px 6px #0d0d0d, -3px -3px 6px #272727' }}
        ></div>
      </div>
    </div>
  );
};

// Demo 4: Loader
const DemoLoader = () => {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center rounded-full"
       style={{
         background: '#1a1a1a',
         boxShadow: '6px 6px 12px #0d0d0d, -6px -6px 12px #272727'
       }}
    >
       <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-hmi-accent/80 border-r-hmi-accent/30 animate-spin"></div>
       <div className="text-xs font-mono text-gray-500 animate-pulse">LOAD</div>
    </div>
  );
};

const ComponentsLibrary: React.FC = () => {
  return (
    <section id="components" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
             <div className="w-1.5 h-1.5 bg-hmi-accent rounded-full animate-pulse"></div>
             <span className="text-hmi-accent font-mono text-xs tracking-[0.2em] uppercase">Interactive Library</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
             HMI <span className="text-gray-600">Components</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of micro-interactions and atomic design elements crafted for automotive smart cockpits.
            Exploring neumorphism, tactility, and fluid feedback.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <NeumorphicCard 
            title="Smart Toggle" 
            description="State transitions with soft light cues"
          >
            <DemoSwitch />
          </NeumorphicCard>

          <NeumorphicCard 
            title="Haptic Control" 
            description="Simulated physical depth press"
          >
            <DemoButton />
          </NeumorphicCard>

          <NeumorphicCard 
            title="Fluid Slider" 
            description="Precision scrubbing with glow"
            className="col-span-1 md:col-span-2"
          >
            <DemoSlider />
          </NeumorphicCard>

          <NeumorphicCard 
            title="System Status" 
            description="Ambient loading states"
          >
            <DemoLoader />
          </NeumorphicCard>

          {/* Placeholder for future Lottie Animation */}
          <NeumorphicCard 
            title="Gesture Area" 
            description="Touch feedback visualization"
          >
            <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-gray-600 border border-dashed border-gray-700 hover:border-hmi-accent/50 hover:text-hmi-accent transition-colors cursor-crosshair">
                <Move size={32} />
            </div>
          </NeumorphicCard>
          
           <div className="col-span-1 md:col-span-2 lg:col-span-1 p-8 rounded-2xl border border-white/5 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
               <Settings className="text-hmi-accent mb-4" />
               <h3 className="text-white font-bold mb-2">More Coming Soon</h3>
               <p className="text-sm text-gray-500">
                 Currently migrating 3D vehicle status and climate control animations from After Effects to Lottie/Rive.
               </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default ComponentsLibrary;