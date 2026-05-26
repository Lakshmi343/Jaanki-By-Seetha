import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaPinterest, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import LuxuryButton from './LuxuryButton';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-maroon-dark text-brand-ivory border-t border-brand-gold/40 relative">
      {/* Floating Gold Glow Effect in Footer Background */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Newsletter Block */}
      <div className="border-b border-brand-gold/20 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-cinzel text-xl md:text-2xl text-brand-gold tracking-widest uppercase mb-4">
            Join the Janki Circle
          </h3>
          <p className="font-serif italic text-brand-ivory/70 text-sm max-w-lg mx-auto mb-6">
            Subscribe to receive royal updates on our handcrafted handlooms, bespoke bridal collections, and private heritage showcases.
          </p>
          
          {subscribed ? (
            <div className="font-cinzel text-xs tracking-widest text-brand-gold border border-brand-gold/40 p-4 max-w-md mx-auto bg-brand-maroon/20">
              Welcome to the family. Your royal invitation has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 bg-brand-maroon/40 border border-brand-gold/30 outline-none text-sm text-brand-ivory font-sans focus:border-brand-gold focus:bg-brand-maroon transition-all"
              />
              <LuxuryButton type="submit" variant="primary" className="py-3 px-6">
                Subscribe
              </LuxuryButton>
            </form>
          )}
        </div>
      </div>

      {/* Main Grid Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Legacy column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Janki by Seetha Logo" 
              className="h-12 w-12 rounded-full object-cover border border-brand-gold/30 shadow-md group-hover:border-brand-gold transition-all duration-300"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="font-cinzel text-xl font-bold tracking-[0.12em] text-brand-gold uppercase">
                Janki
              </span>
              <span className="font-signature text-2xl text-brand-gold/70 lowercase relative -top-1.5">
                by seetha
              </span>
            </div>
          </Link>
          <p className="font-sans text-xs md:text-sm text-brand-ivory/70 leading-relaxed">
            Meticulously handcrafting the pristine white and gold heritage of Balaramapuram handloom and Kanchipuram royal silks. Combining traditional temple art with contemporary, high-fashion silhouettes.
          </p>
          {/* Social icons */}
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com/jaankibyseetha" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-maroon hover:bg-brand-gold text-brand-gold hover:text-brand-maroon border border-brand-gold/25 transition-all duration-300 rounded-full" title="Instagram Handle">
              <FaInstagram size={14} />
            </a>
            <a href="https://wa.me/918848717017" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-maroon hover:bg-brand-gold text-brand-gold hover:text-brand-maroon border border-brand-gold/25 transition-all duration-300 rounded-full" title="WhatsApp Business Line">
              <FaWhatsapp size={14} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-maroon hover:bg-brand-gold text-brand-gold hover:text-brand-maroon border border-brand-gold/25 transition-all duration-300 rounded-full" title="Pinterest Board">
              <FaPinterest size={14} />
            </a>
          </div>
        </div>

        {/* Collections links */}
        <div>
          <h4 className="font-cinzel text-xs md:text-sm tracking-widest text-brand-gold uppercase font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">
            The Collections
          </h4>
          <ul className="space-y-3 font-sans text-xs md:text-sm text-brand-ivory/70">
            <li><Link to="/shop?category=kerala-kasavu" className="hover:text-brand-gold transition-colors">Kerala Kasavu Handlooms</Link></li>
            <li><Link to="/shop?category=bridal-wear" className="hover:text-brand-gold transition-colors">Bridal Velvet & Silk Lehenga</Link></li>
            <li><Link to="/shop?category=sarees" className="hover:text-brand-gold transition-colors">Kanchipuram & Organza Sarees</Link></li>
            <li><Link to="/shop?category=ajrak-collection" className="hover:text-brand-gold transition-colors">Organic Ajrak Block Prints</Link></li>
            <li><Link to="/shop?category=cotton-collection" className="hover:text-brand-gold transition-colors">Linen & Mulmul Fine Cottons</Link></li>
          </ul>
        </div>

        {/* Site links */}
        <div>
          <h4 className="font-cinzel text-xs md:text-sm tracking-widest text-brand-gold uppercase font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">
            Useful Links
          </h4>
          <ul className="space-y-3 font-sans text-xs md:text-sm text-brand-ivory/70">
            <li><Link to="/dashboard" className="hover:text-brand-gold transition-colors">My Profile Dashboard</Link></li>
            <li><Link to="/dashboard?tab=orders" className="hover:text-brand-gold transition-colors">Track Custom Orders</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Heritage Craft Story</Link></li>
            <li><Link to="/reels" className="hover:text-brand-gold transition-colors">Instagram Commerce Reels</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Store Directions & Map</Link></li>
          </ul>
        </div>

        {/* Online Boutique column */}
        <div className="space-y-4 font-sans text-xs md:text-sm text-brand-ivory/70">
          <h4 className="font-cinzel text-xs md:text-sm tracking-widest text-brand-gold uppercase font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-brand-gold">
            Online Boutique
          </h4>
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-brand-gold shrink-0" size={14} />
            <span>WhatsApp Inquiry: +91 88487 17017</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-brand-gold shrink-0" size={14} />
            <span>Instagram DM: @jaankibyseetha</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-brand-gold shrink-0" size={12} />
            <span>couture@jaankibyseetha.com</span>
          </div>
        </div>
      </div>

      {/* Copyright stamp */}
      <div className="bg-brand-maroon-darker text-brand-ivory/50 py-6 text-center text-[10px] md:text-xs tracking-wider border-t border-brand-gold/10 px-4">
        © {new Date().getFullYear()} Janki by Seetha. Handcrafted in God's Own Country. All Rights Reserved. Designed for Cultural Royalty.
      </div>
    </footer>
  );
};

export default Footer;
