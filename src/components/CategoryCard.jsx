import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/shop?category=${category.id}`} 
      className="group relative h-96 w-full block overflow-hidden border border-brand-gold/30 hover:border-brand-gold transition-colors duration-500 gold-shadow"
    >
      {/* Background Image with Slow Zoom on Active Hover */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.8]"
      />

      {/* Kerala Texture Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/90 via-brand-maroon/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

      {/* Internal Golden Border Line */}
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-brand-gold/25 pointer-events-none group-hover:border-brand-gold/50 transition-colors duration-500"></div>
      
      {/* Decorative gold temple motif details in corners */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-brand-gold/40"></div>
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-brand-gold/40"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-brand-gold/40"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-brand-gold/40"></div>

      {/* Category Text & Badges */}
      <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-center md:text-left">
        <h3 className="font-cinzel text-lg xs:text-xl md:text-2xl text-brand-gold tracking-widest uppercase font-semibold">
          {category.name}
        </h3>
        
        {/* Border line */}
        <div className="w-12 h-[1px] bg-brand-gold/60 my-3 mx-auto md:mx-0 group-hover:w-20 transition-all duration-500"></div>
        
        <p className="font-serif italic text-brand-ivory/80 text-xs md:text-sm line-clamp-2 leading-relaxed">
          {category.description}
        </p>

        {/* Glassmorphic "Explore Collection" button overlay */}
        <div className="mt-4 inline-block px-4 py-2 glass-light text-brand-maroon font-cinzel text-[10px] tracking-widest uppercase font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500 border border-brand-gold/30">
          Explore Collection
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
