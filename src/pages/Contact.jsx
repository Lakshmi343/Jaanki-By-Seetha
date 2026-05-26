import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedWrapper from '../components/AnimatedWrapper';
import LuxuryButton from '../components/LuxuryButton';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "bridal",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      
      const typeText = {
        general: "General Boutique Inquiry",
        weave: "Bespoke Custom Weaving",
        bridal: "Bridal Couture Consultation",
        reels: "Instagram Stylings Request"
      };
      
      const whatsappText = `Hi Janki by Seetha, I would like to make an inquiry:\n\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Query Type: ${typeText[formData.type]}\n- Notes: ${formData.message}`;
      
      window.open(`https://wa.me/918848717017?text=${encodeURIComponent(whatsappText)}`, '_blank');
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "bridal",
        message: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-maroon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Page Heading */}
        <AnimatedWrapper>
          <SectionHeading
            title="Secure Consultation"
            subtitle="Coordinate with Seetha's lead designers. Book a personal digital consult, inquire about custom weaving patterns, or request specific lookbook edits."
            signature="E-Boutique Registry"
          />
        </AnimatedWrapper>

        {/* Dynamic Digital Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mt-12">
          <AnimatedWrapper delay={0.1} className="glass-light p-5 text-center border border-brand-gold/25 shadow-sm">
            <FaWhatsapp className="text-brand-gold mx-auto mb-2" size={20} />
            <h4 className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-maroon">WhatsApp Line</h4>
            <a href="https://wa.me/918848717017" target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-semibold text-brand-gold hover:text-brand-maroon transition-colors mt-1 block">
              +91 88487 17017
            </a>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2} className="glass-light p-5 text-center border border-brand-gold/25 shadow-sm">
            <FaInstagram className="text-brand-gold mx-auto mb-2" size={20} />
            <h4 className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-maroon">Instagram DM</h4>
            <a href="https://instagram.com/jaankibyseetha" target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-semibold text-brand-gold hover:text-brand-maroon transition-colors mt-1 block">
              @jaankibyseetha
            </a>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3} className="glass-light p-5 text-center border border-brand-gold/25 shadow-sm">
            <FaEnvelope className="text-brand-gold mx-auto mb-2" size={20} />
            <h4 className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-maroon">Couture Mail</h4>
            <a href="mailto:couture@jaankibyseetha.com" className="text-[10px] font-sans font-semibold text-brand-gold hover:text-brand-maroon transition-colors mt-1 block truncate">
              couture@jaankibyseetha.com
            </a>
          </AnimatedWrapper>
        </div>

        {/* Central Request Registry Form Card */}
        <AnimatedWrapper delay={0.4} className="bg-white border border-brand-gold/20 p-8 md:p-12 shadow-md">
          {/* Gold corner ornaments */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-gold/30"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-gold/30"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-gold/30"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-gold/30"></div>

          <h3 className="font-cinzel text-sm text-brand-maroon font-bold uppercase tracking-wider border-b border-brand-gold/15 pb-4 mb-8 text-center">
            Digital Request Registry
          </h3>

          {submitted ? (
            <div className="font-cinzel text-xs tracking-widest text-brand-gold border border-brand-gold/45 p-8 bg-brand-maroon/5 text-center leading-relaxed">
              Thank you for coordinating. <br />Your inquiry details have been formatted. <br />Opening your private WhatsApp chat pre-fill...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs text-brand-maroon">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-cinzel text-[9px] tracking-widest uppercase font-bold text-brand-gold block">
                    Patron Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Arundhati Menon"
                    className="w-full p-3 bg-brand-ivory/20 border border-brand-gold/30 outline-none focus:border-brand-gold font-sans focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="font-cinzel text-[9px] tracking-widest uppercase font-bold text-brand-gold block">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98460 00000"
                    className="w-full p-3 bg-brand-ivory/20 border border-brand-gold/30 outline-none focus:border-brand-gold font-sans focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="font-cinzel text-[9px] tracking-widest uppercase font-bold text-brand-gold block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. arundhati@gmail.com"
                  className="w-full p-3 bg-brand-ivory/20 border border-brand-gold/30 outline-none focus:border-brand-gold font-sans focus:bg-white transition-all duration-300"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="font-cinzel text-[9px] tracking-widest uppercase font-bold text-brand-gold block">
                  Registry Request Category
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-brand-ivory/20 border border-brand-gold/30 outline-none focus:border-brand-gold font-sans text-brand-maroon focus:bg-white transition-all duration-300"
                >
                  <option value="bridal">Bridal Couture Consultation</option>
                  <option value="weave">Bespoke Handloom Weaving</option>
                  <option value="general">Boutique Ready-to-Wear Catalog</option>
                  <option value="reels">Lookbook Reels Stylings Query</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="font-cinzel text-[9px] tracking-widest uppercase font-bold text-brand-gold block">
                  Customization Specifications
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Share your specific fabric preferences, custom measurements parameters, or desired lookbook items..."
                  className="w-full p-3 bg-brand-ivory/20 border border-brand-gold/30 outline-none focus:border-brand-gold font-sans focus:bg-white transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <LuxuryButton type="submit" variant="primary" className="w-full py-4 text-center flex items-center justify-center gap-2">
                  <FaWhatsapp size={14} />
                  <span>Submit to Private Consultation Queue</span>
                </LuxuryButton>
              </div>
            </form>
          )}
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Contact;
