import React from 'react';
import { FaInstagram, FaShareAlt } from 'react-icons/fa';

const InstagramButton = ({ 
  type = 'profile', 
  reelUrl = '', 
  productName = '',
  variant = 'button',
  className = '' 
}) => {
  const defaultProfileUrl = "https://www.instagram.com/jaankibyseetha/"; // Verified business handle
  
  const handleClick = (e) => {
    if (type === 'share') {
      e.preventDefault();
      if (navigator.share) {
        navigator.share({
          title: `Janki by Seetha - ${productName}`,
          text: `Take a look at this stunning Kerala designer piece: ${productName}`,
          url: window.location.href,
        }).catch((err) => console.log(err));
      } else {
        // Fallback: Copy link
        navigator.clipboard.writeText(window.location.href);
        alert("Product link copied to clipboard! Ready to share on your Instagram Stories.");
      }
    }
  };

  const getTargetUrl = () => {
    if (type === 'reel') return reelUrl || "https://www.instagram.com/reels/";
    return defaultProfileUrl;
  };

  if (variant === 'float') {
    return (
      <a
        href={getTargetUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-24 right-6 z-50 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-4 rounded-full shadow-[0_0_20px_rgba(238,42,123,0.4)] hover:shadow-[0_0_30px_rgba(238,42,123,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 flex items-center justify-center ${className}`}
        title="View on Instagram"
      >
        <FaInstagram size={24} />
      </a>
    );
  }

  if (type === 'share') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-brand-maroon/5 text-brand-maroon border border-brand-maroon/30 font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 active:scale-95 ${className}`}
      >
        <FaShareAlt className="text-sm" />
        <span>Share to Instagram</span>
      </button>
    );
  }

  return (
    <a
      href={getTargetUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-brand-maroon text-brand-gold hover:text-brand-ivory border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 ${className}`}
    >
      <FaInstagram className="text-lg" />
      <span>{type === 'reel' ? 'View Instagram Reel' : 'Follow Our Instagram'}</span>
    </a>
  );
};

export default InstagramButton;
