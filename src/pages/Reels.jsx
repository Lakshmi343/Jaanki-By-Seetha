import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ReelCard from '../components/ReelCard';
import AnimatedWrapper from '../components/AnimatedWrapper';
import { reels } from '../data/mockData';
import { FaInstagram, FaFilm } from 'react-icons/fa';

const Reels = () => {
  return (
    <div className="bg-brand-ivory min-h-screen py-12 sm:py-16 md:py-20 px-3 xs:px-4 md:px-12 relative overflow-hidden">
      
      {/* Background soft glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-maroon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Header */}
        <AnimatedWrapper>
          <SectionHeading
            title="Reels in Motion"
            subtitle="Explore our cinematic high-fashion lookbooks and behind-the-scenes handloom stories. Click on any video to follow our digital gallery on Instagram, or shop featured looks instantly."
            signature="Instagram Live Commerce"
          />
        </AnimatedWrapper>

        {/* Video Reels Grid Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-6 mt-10 md:mt-16 relative z-10">
          {reels.map((reel, idx) => (
            <AnimatedWrapper key={reel.id} delay={0.1 * idx}>
              <div className="relative group">
                <ReelCard reel={reel} />
                
                {/* Decorative border tags under the card */}
                <div className="bg-white border-t border-brand-gold/20 p-3 md:p-4 border-l border-r border-b border-brand-gold/15 shadow-sm">
                  <div className="flex justify-between items-center text-[9px] tracking-widest font-cinzel font-bold text-brand-maroon">
                    <span className="flex items-center gap-1">
                      <FaFilm className="text-brand-gold" />
                      CINEMATIC EDIT
                    </span>
                    <a
                      href={reel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-gold text-brand-gold/80 transition-colors uppercase"
                    >
                      OPEN APP &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Dynamic dynamic showcase callout */}
        <AnimatedWrapper delay={0.3} className="mt-20 glass-light max-w-4xl mx-auto p-8 md:p-12 border border-brand-gold/30 gold-shadow text-center relative z-10">
          <FaInstagram className="text-brand-gold mx-auto mb-4 animate-lamp-glow" size={32} />
          <h3 className="font-cinzel text-lg md:text-xl text-brand-maroon tracking-wider font-semibold uppercase mb-3">
            Tag Us to Be Featured
          </h3>
          <p className="font-serif italic text-brand-maroon/80 text-xs md:text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            "Drape yourself in our royal Kerala borders, capture a slow-motion video, and tag @jaankibyseetha. Let us showcase your timeless moments to our global family."
          </p>
          <a
            href="https://instagram.com/jaankibyseetha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-maroon hover:bg-brand-maroon-light text-brand-ivory hover:text-brand-gold border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300"
          >
            Visit Our Instagram Channel
          </a>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Reels;
