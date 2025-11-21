import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Build the Future</h2>
        <p className="text-hmi-text-muted max-w-2xl mx-auto mb-12">
          Open to opportunities in Smart Cockpit Design, HMI Systems, and Motion Interaction.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16">
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 group"
          >
            <Mail size={18} className="text-hmi-accent" />
            <span className="text-white group-hover:text-white">{CONTACT_INFO.email}</span>
          </a>
          
          <div className="flex items-center gap-3 px-6 py-3 text-gray-400">
            <MapPin size={18} className="text-hmi-accent" />
            <span>{CONTACT_INFO.location}</span>
          </div>

           <div className="flex items-center gap-3 px-6 py-3 text-gray-400 border border-white/5 rounded-full bg-white/5">
            <span className="text-xs font-mono text-hmi-accent">WECHAT</span>
            <span className="text-white">{CONTACT_INFO.wechat}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-gray-500">
          <a href="#" className="hover:text-hmi-accent transition-colors">
            <Linkedin size={24} />
          </a>
          {/* Assuming a placeholder for portfolio download or other link */}
          <a href="#" className="hover:text-hmi-accent transition-colors">
            <Github size={24} /> 
          </a>
        </div>

        <div className="mt-20 text-xs text-gray-600">
          © {new Date().getFullYear()} Nestor Mao. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;