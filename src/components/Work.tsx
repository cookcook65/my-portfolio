import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layers, Zap, Box, X, PlayCircle } from 'lucide-react';
import type { ProjectItem } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Radial Glow behind grid content */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hmi-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
             <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 bg-hmi-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
                <span className="text-hmi-accent font-mono text-xs tracking-[0.2em] uppercase">Selected Projects</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Experience <span className="text-gray-500">In Motion</span>
            </h2>
          </div>
           <div className="mt-6 md:mt-0 text-right hidden md:block">
              <p className="text-xs font-mono text-gray-500">
                [ SYSTEM ] : PORTFOLIO_MODULE_LOADED<br/>
                [ VIEW ] : GRID_LAYOUT_V2
              </p>
           </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative bg-hmi-black/40 backdrop-blur-md border border-white/10 hover:border-hmi-accent/50 transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-black">
                {/* Tech Overlay UI */}
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                     <span className="px-2 py-1 bg-black/60 border border-white/10 text-[10px] font-mono text-white rounded backdrop-blur-sm uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
                
                {/* Image with interactions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                
                {/* Video Indicator if available */}
                {project.video && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-hmi-accent/20 backdrop-blur-sm flex items-center justify-center border border-hmi-accent">
                            <PlayCircle className="text-hmi-accent w-6 h-6" />
                        </div>
                    </div>
                )}

                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hmi-accent/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20 pointer-events-none"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/10 rounded-tr-lg"></div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-gray-500">NO.0{index + 1}</span>
                    <div className="flex gap-1">
                        {index % 2 === 0 ? <Layers size={12} className="text-gray-600"/> : <Box size={12} className="text-gray-600"/>}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-hmi-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 border-l border-white/10 pl-4 group-hover:border-hmi-accent/50 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/5 text-gray-400 rounded group-hover:text-white group-hover:border-white/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-white/20 transition-colors">
                     <span className="text-xs font-semibold text-gray-500 group-hover:text-white transition-colors flex items-center gap-2">
                       <Zap size={12} className="text-hmi-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                       VIEW MEDIA
                     </span>
                     <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-hmi-accent group-hover:text-black transition-all">
                        <ArrowUpRight size={16} />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
            <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-hmi-accent animate-slide"></div>
            </div>
        </div>
      </div>
      
      {/* Modal Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" 
                onClick={() => setSelectedProject(null)}
            ></div>
            
            <div className="relative w-full max-w-6xl bg-hmi-gray border border-white/10 rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300 h-[80vh] md:h-[70vh]">
                
                {/* Close Button Mobile */}
                <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white md:hidden"
                >
                    <X size={20} />
                </button>

                {/* Media Section */}
                <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative overflow-hidden group">
                     {selectedProject.video ? (
                        <video 
                            src={selectedProject.video} 
                            controls 
                            autoPlay 
                            className="w-full h-full object-contain"
                        />
                     ) : (
                        <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-contain"
                        />
                     )}
                     {/* Decorative lines */}
                     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>

                {/* Details Sidebar */}
                <div className="w-full md:w-1/4 bg-hmi-gray/95 border-l border-white/10 p-6 md:p-8 flex flex-col overflow-y-auto relative">
                    <div className="hidden md:flex justify-end mb-6">
                         <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mb-1">
                        <span className="text-hmi-accent text-xs font-mono tracking-wider uppercase">{selectedProject.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {selectedProject.description}
                    </p>

                    <div className="mt-auto">
                         <div className="text-xs font-mono text-gray-500 mb-3 uppercase">Technologies</div>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/10 text-gray-300 rounded border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Work;