import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-light p-6 md:p-8 flex flex-col justify-between border border-brand-gold/25 relative gold-shadow h-full hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow duration-500">
      
      {/* Absolute gold decorative motif */}
      <div className="absolute top-2 right-2 text-brand-gold/15 pointer-events-none">
        <FaQuoteLeft size={36} />
      </div>

      <div className="space-y-4">
        {/* Gold Star Ratings */}
        <div className="flex space-x-1 text-brand-gold">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={12} />
          ))}
        </div>

        {/* Review Body */}
        <p className="font-serif italic text-brand-maroon/80 text-sm md:text-base leading-relaxed">
          "{testimonial.review}"
        </p>
      </div>

      {/* Customer profile banner */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-gold/15">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover border border-brand-gold/30 shadow-inner"
        />
        <div>
          <h4 className="font-cinzel text-xs font-bold text-brand-maroon tracking-widest uppercase">
            {testimonial.name}
          </h4>
          <span className="text-[10px] text-brand-gold font-sans font-semibold tracking-wide block">
            {testimonial.location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
