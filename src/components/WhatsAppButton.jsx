import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ 
  type = 'general', 
  productName = '', 
  productUrl = '', 
  variant = 'float',
  className = '' 
}) => {
  const getWhatsAppLink = () => {
    const phoneNumber = "918848717017"; // Verified business phone line
    let message = "";

    switch(type) {
      case 'product':
        message = `Hi Janki by Seetha, I am deeply interested in purchasing the elegant "${productName}". Could you please guide me on size availability and shipping? Link: ${productUrl || window.location.href}`;
        break;
      case 'custom':
        message = "Hi Janki by Seetha, I would like to book a luxury video consultation for a customized Bridal Couture lehenga/saree. Please share open slots.";
        break;
      default:
        message = "Hi Janki by Seetha, I just explored your stunning Kerala traditional boutique. I would love to receive your catalog for the latest festive releases.";
    }

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  if (variant === 'float') {
    return (
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 flex items-center justify-center ${className}`}
        title="Inquire on WhatsApp"
        id="whatsapp-floating-trigger"
      >
        <FaWhatsapp size={24} />
      </a>
    );
  }

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 border border-brand-gold/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95 ${className}`}
    >
      <FaWhatsapp className="text-lg" />
      <span>WhatsApp Inquiry</span>
    </a>
  );
};

export default WhatsAppButton;
