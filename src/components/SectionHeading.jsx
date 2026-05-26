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
      <h2 className="font-cinzel text-3xl md:text-4xl text-brand-maroon tracking-wider font-semibold relative inline-block pb-3 uppercase">
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-brand-gold"></span>
        <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-maroon border border-brand-gold"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-maroon/70 font-sans tracking-wide text-sm md:text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
