import React, { useState } from 'react';
import { FaPlay, FaHeart, FaEye, FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ReelCard = ({ reel }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleProductCheckout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${reel.productId}`);
  };

  return (
    <a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[9/16] w-full bg-brand-maroon overflow-hidden border border-brand-gold/20 hover:border-brand-gold transition-all duration-700 gold-shadow hover:shadow-[0_20px_50px_rgba(212,175,55,0.45)] transform hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Reel cover */}
      <img
        src={reel.videoThumbnail}
        alt={reel.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] filter brightness-[0.7] group-hover:brightness-[0.8]"
      />

      {/* Radial shade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0"></div>

      {/* Floating borders */}
      <div className="absolute top-3 left-3 right-3 bottom-3 border border-brand-gold/15 pointer-events-none group-hover:border-brand-gold/45 duration-500 transition-colors z-10"></div>

      {/* Top Banner tag */}
      <div className="absolute top-5 left-5 z-10 pointer-events-none">
        <span className="bg-brand-gold text-brand-maroon text-[8px] font-cinzel font-bold tracking-widest px-2 py-0.5 border border-brand-maroon/20 uppercase shadow-md animate-pulse">
          Reel Edit
        </span>
      </div>

      {/* Central Pulsing Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span className={`p-4 bg-brand-ivory/80 group-hover:bg-brand-gold text-brand-maroon rounded-full transition-all duration-500 shadow-xl border border-brand-gold/30 ${
          hovered ? 'scale-110 rotate-180' : 'scale-100'
        }`}>
          <FaPlay size={14} className="relative left-[1px] text-brand-maroon" />
        </span>
      </div>

      {/* Hover Shop Featured Product Tag */}
      {reel.productId && (
        <button
          onClick={handleProductCheckout}
          className="absolute bottom-16 left-3 right-3 xs:left-5 xs:right-5 z-20 py-2 bg-brand-ivory/95 hover:bg-brand-maroon text-brand-maroon hover:text-brand-gold text-[9px] font-cinzel tracking-widest font-bold border border-brand-gold/30 transition-all duration-300 uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 flex items-center justify-center gap-1.5 shadow-xl cursor-pointer"
        >
          <FaShoppingBag size={10} />
          <span>Shop This Look</span>
        </button>
      )}

      {/* Footer Title, Views and Likes */}
      <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none text-brand-ivory space-y-2">
        <h4 className="font-cinzel text-xs font-semibold tracking-wider line-clamp-1 group-hover:text-brand-gold transition-colors duration-300">
          {reel.title}
        </h4>
        
        {/* Metatags */}
        <div className="flex items-center space-x-4 text-[9px] font-sans text-brand-ivory/80">
          <span className="flex items-center gap-1">
            <FaEye className="text-brand-gold" />
            {reel.views}
          </span>
          <span className="flex items-center gap-1">
            <FaHeart className="text-red-600" />
            {reel.likes}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ReelCard;
