import React from 'react';
import { EXPERIENCES, SKILLS } from '../constants';
import { GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-transparent to-black/90">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Experience & Skills</h2>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {SKILLS.map((group) => (
            <div key={group.category} className="bg-hmi-black/40 backdrop-blur-sm p-6 rounded border border-white/5">
              <h3 className="text-sm font-mono text-hmi-accent uppercase tracking-wider mb-6 border-b border-white/10 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/5 rounded hover:border-white/20 transition-colors text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-0">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="mb-16 pl-8 md:pl-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-hmi-black border-2 border-hmi-accent"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-hmi-text-muted mt-1 sm:mt-0">{exp.period}</span>
              </div>
              
              <div className="text-lg text-gray-300 mb-4 font-medium">{exp.company}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-start">
                    <span className="mr-2 text-hmi-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-hmi-accent mr-3" size={24} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div>
            <div className="text-lg font-bold text-white">Tongji University</div>
            <div className="text-gray-400">Vehicle Engineering (5-Year Bachelor)</div>
            <div className="text-sm font-mono text-hmi-text-muted mt-1">2010 - 2016</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;