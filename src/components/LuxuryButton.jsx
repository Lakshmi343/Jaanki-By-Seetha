import React from 'react';

const LuxuryButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = '',
  disabled = false
}) => {
  const baseStyles = "px-8 py-3.5 font-cinzel text-xs md:text-sm tracking-widest font-semibold uppercase transition-all duration-500 relative overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-maroon text-brand-ivory border border-brand-gold hover:text-brand-gold gold-shadow hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    secondary: "bg-transparent text-brand-maroon border border-brand-gold hover:bg-brand-maroon hover:text-brand-ivory hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]",
    gold: "bg-brand-gold text-brand-maroon font-bold border border-brand-maroon hover:bg-brand-maroon hover:text-brand-gold hover:border-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    outline: "bg-transparent text-brand-gold border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold/5"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {/* Golden Thread Corner Borders */}
      <span className="absolute top-1 left-1 right-1 bottom-1 border border-brand-gold/10 pointer-events-none z-0"></span>
    </button>
  );
};

export default LuxuryButton;
