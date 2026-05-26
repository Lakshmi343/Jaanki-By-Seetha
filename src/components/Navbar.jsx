import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes, FaMinus, FaPlus, FaTrash, FaSearch } from 'react-icons/fa';
import LuxuryButton from './LuxuryButton';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const { 
    cart, 
    wishlist, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateCartQuantity, 
    getCartTotal, 
    getCartCount 
  } = useContext(ShopContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/categories', label: 'Collections' },
    { path: '/shop', label: 'Shop' },
    { path: '/reels', label: 'Reels' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Banner Alert Bar */}
      <div className="bg-brand-maroon text-brand-gold text-[10px] md:text-xs tracking-[0.2em] uppercase py-2 text-center border-b border-brand-gold/30">
        Complimentary International Delivery Above ₹15,000 | Festive Season Order Dispatch in 5 Days
      </div>

      {/* Primary Header Navbar */}
      <header className="sticky top-0 z-40 w-full glass-light border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-maroon hover:text-brand-gold transition-colors p-2"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Luxury Signature Branding */}
          <div className="flex-1 md:flex-initial text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 group">
              <img 
                src={logo} 
                alt="Janki by Seetha Logo" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-brand-gold/30 shadow-md group-hover:border-brand-gold transition-all duration-300"
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.12em] text-brand-maroon uppercase group-hover:text-brand-gold transition-colors duration-300">
                  Janki
                </span>
                <span className="font-signature text-xl md:text-2xl text-brand-gold lowercase relative -top-1.5">
                  by seetha
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `font-cinzel text-xs md:text-sm tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-brand-gold ${
                    isActive 
                      ? 'text-brand-gold font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-gold' 
                      : 'text-brand-maroon/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Icons Panel */}
          <div className="flex items-center space-x-4 md:space-x-6">
            
            {/* Search Trigger */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-brand-maroon hover:text-brand-gold transition-colors p-2"
              title="Search Catalog"
            >
              <FaSearch size={16} />
            </button>

            {/* Customer Profile Icon */}
            <Link 
              to="/dashboard" 
              className="text-brand-maroon hover:text-brand-gold transition-colors p-2 hidden sm:inline-block"
              title="Customer Account"
            >
              <FaUser size={16} />
            </Link>

            {/* Wishlist Link */}
            <Link 
              to="/dashboard?tab=wishlist" 
              className="text-brand-maroon hover:text-brand-gold transition-colors p-2 relative"
              title="Saved Pieces"
            >
              <FaHeart size={16} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-maroon text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-brand-ivory font-sans shadow-md">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-brand-maroon hover:text-brand-gold transition-colors p-2 relative"
              title="Cart Summary"
            >
              <FaShoppingBag size={16} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-maroon text-brand-gold text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-brand-gold/30 font-sans shadow-md">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Search Modal Dropdown */}
        {isSearchOpen && (
          <div className="bg-brand-ivory border-b border-brand-gold/25 w-full py-4 px-6 absolute top-20 left-0 shadow-lg animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto flex items-center border border-brand-gold/40 bg-white px-3 py-1">
              <input
                type="text"
                placeholder="Search Sarees, Bridal sets, Kurtis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none py-2 text-brand-maroon text-sm font-sans"
                autoFocus
              />
              <button type="submit" className="text-brand-maroon hover:text-brand-gold p-2">
                <FaSearch size={16} />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Menu Panel Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-brand-maroon/90 backdrop-blur-md flex flex-col justify-center items-center text-center p-6 md:hidden animate-fade-in">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 left-6 text-brand-gold p-2"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-cinzel text-xl tracking-widest text-brand-ivory hover:text-brand-gold transition-colors uppercase font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-cinzel text-xl tracking-widest text-brand-gold hover:text-brand-ivory transition-colors uppercase font-semibold border-t border-brand-gold/20 pt-4"
            >
              My Account
            </Link>
          </div>
        </div>
      )}

      {/* Luxury Cart Drawer Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop overlay */}
          <div 
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-brand-maroon/40 backdrop-blur-sm"
          />

          {/* Slide-out Panel */}
          <div className="w-full max-w-md h-full bg-brand-ivory border-l border-brand-gold/30 shadow-2xl relative z-10 flex flex-col justify-between animate-slide-left p-6 md:p-8">
            <div>
              {/* Header */}
              <div className="flex justify-between items-center pb-6 border-b border-brand-gold/20">
                <h3 className="font-cinzel text-lg tracking-wider text-brand-maroon font-semibold uppercase">
                  Your Bridal Bag
                </h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-brand-maroon hover:text-brand-gold transition-colors p-2"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="overflow-y-auto max-h-[60vh] mt-6 pr-2 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-serif italic text-brand-maroon/60 text-lg mb-6">
                      Your silk and gold dreams await...
                    </p>
                    <LuxuryButton variant="primary" onClick={() => { setIsCartOpen(false); navigate('/shop'); }}>
                      Browse Collection
                    </LuxuryButton>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4 pb-6 border-b border-brand-gold/10">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-20 h-24 object-cover border border-brand-gold/20"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-cinzel text-xs font-semibold text-brand-maroon tracking-wider">
                            {item.product.name}
                          </h4>
                          <p className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold mt-1">
                            Size: {item.size}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          {/* Qty selectors */}
                          <div className="flex items-center border border-brand-gold/30">
                            <button 
                              onClick={() => updateCartQuantity(item.product.id, item.size, item.quantity - 1)}
                              className="px-2 py-1 text-xs text-brand-maroon hover:bg-brand-maroon/5"
                            >
                              <FaMinus size={8} />
                            </button>
                            <span className="px-3 py-1 text-xs font-semibold font-mono text-brand-maroon">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateCartQuantity(item.product.id, item.size, item.quantity + 1)}
                              className="px-2 py-1 text-xs text-brand-maroon hover:bg-brand-maroon/5"
                            >
                              <FaPlus size={8} />
                            </button>
                          </div>
                          
                          {/* Delete & Price */}
                          <div className="flex items-center gap-3">
                            <span className="font-sans text-xs md:text-sm font-semibold text-brand-maroon">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                            <button 
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-red-800 hover:text-red-900 transition-colors p-1"
                              title="Remove piece"
                            >
                              <FaTrash size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Total Footer Tally */}
            {cart.length > 0 && (
              <div className="border-t border-brand-gold/25 pt-6 bg-brand-ivory">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-cinzel text-sm tracking-widest text-brand-maroon font-semibold uppercase">
                    Subtotal Amount
                  </span>
                  <span className="font-sans text-lg font-bold text-brand-maroon">
                    ₹{getCartTotal().toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex flex-col space-y-3">
                  <a
                    href={`https://wa.me/918848717017?text=${encodeURIComponent(
                      `Hi Janki by Seetha, I would like to purchase these items from my bag:\n\n${cart.map(item => `- ${item.product.name} (Size: ${item.size}, Qty: ${item.quantity})`).join('\n')}\n\nTotal: ₹${getCartTotal().toLocaleString('en-IN')}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 bg-brand-maroon text-brand-ivory border border-brand-gold hover:text-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                  >
                    Direct WhatsApp Checkout
                  </a>
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/dashboard'); }}
                    className="w-full py-3.5 bg-transparent border border-brand-gold/30 hover:bg-brand-maroon/5 text-brand-maroon font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300"
                  >
                    View Account & Wishlist
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
