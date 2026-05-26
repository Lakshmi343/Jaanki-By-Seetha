import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, signature, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {signature && (
        <span className="font-signature text-3xl text-brand-gold block mb-1">
          {signature}
        </span>
      )}
      <h2 className="font-cinzel text-xl xs:text-2xl sm:text-3xl md:text-4xl text-brand-maroon tracking-wider font-semibold relative inline-block pb-4 uppercase">
        {title}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-32 xs:w-40 sm:w-48">
          <div className="h-[1px] bg-brand-gold/45 flex-grow"></div>
          <div className="mx-2 w-2.5 h-2.5 rotate-45 border border-brand-gold bg-brand-maroon flex-shrink-0 shadow-sm animate-pulse-slow"></div>
          <div className="h-[1px] bg-brand-gold/45 flex-grow"></div>
        </div>
      </h2>
      {subtitle && (
        <p className="mt-5 text-brand-maroon/70 font-sans tracking-wide text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
