import React from 'react';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';
import AnimatedWrapper from '../components/AnimatedWrapper';
import { categories } from '../data/mockData';

const Categories = () => {
  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      
      {/* Decorative Gold Elements background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-maroon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <AnimatedWrapper>
          <SectionHeading
            title="The Royal Archives"
            subtitle="Browse our carefully compiled traditional edits. From pure gold handwoven cottons to plush bridal velvet brocades, explore the ultimate heritage luxury."
            signature="Heritage Collections"
          />
        </AnimatedWrapper>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-10">
          {categories.map((category, idx) => (
            <AnimatedWrapper key={category.id} delay={0.15 * idx}>
              <div className="relative">
                <CategoryCard category={category} />
                
                {/* Decorative subtext block */}
                <div className="bg-white/90 border-t border-brand-gold/20 p-4 border-l border-r border-b border-brand-gold/15 shadow-sm">
                  <div className="flex justify-between items-center text-[10px] tracking-widest font-cinzel font-bold text-brand-maroon">
                    <span>HANDCRAFTED HERITAGE</span>
                    <span className="text-brand-gold">BALARAMAPURAM WEAVE</span>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Dynamic storytelling card */}
        <AnimatedWrapper delay={0.4} className="mt-20 glass-light max-w-4xl mx-auto p-8 md:p-12 border border-brand-gold/30 gold-shadow text-center relative z-10">
          {/* Gold corner ornaments */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-brand-gold"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-brand-gold"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-brand-gold"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-brand-gold"></div>
          
          <h3 className="font-cinzel text-xl md:text-2xl text-brand-maroon tracking-wider font-semibold uppercase mb-4">
            Bespoke Custom Weaving
          </h3>
          <p className="font-serif italic text-brand-maroon/80 text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            "Don't limit your imagination. Our family weavers are ready to realize your specific heritage visions. Choose custom dyes, personalized zari threads, and unique handloom motifs."
          </p>
          <a
            href="https://wa.me/918848717017?text=Hi%20Janki%20by%20Seetha%2C%20I%20am%20interested%20in%20creating%20a%20bespoke%20customized%20weaving%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-maroon hover:bg-brand-maroon-light text-brand-ivory hover:text-brand-gold border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300"
          >
            Start Custom Weave Order
          </a>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Categories;
