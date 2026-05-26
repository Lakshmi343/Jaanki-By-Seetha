import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import InstagramButton from '../components/InstagramButton';
import { ShopContext } from '../context/ShopContext';
import { FaTimes, FaShoppingBag, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useContext(ShopContext);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  const handleQuickAdd = () => {
    if (quickViewProduct) {
      const defaultSize = quickViewProduct.sizes && quickViewProduct.sizes.length > 0 
        ? quickViewProduct.sizes[0] 
        : 'Standard';
      addToCart(quickViewProduct, defaultSize, 1);
      setQuickViewProduct(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-brand-gold selection:text-brand-maroon">
      {/* Scroll Management via useEffect above */}

      {/* Sticky Global Navbar */}
      <Navbar />

      {/* Primary Page Canvas */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* High-end Footer */}
      <Footer />

      {/* Floating Commerce Action Buttons */}
      <WhatsAppButton type="general" variant="float" />
      <InstagramButton type="profile" variant="float" />

      {/* Global Quick View Product Modal Overlay */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div 
            onClick={handleCloseQuickView}
            className="absolute inset-0 bg-brand-maroon/60 backdrop-blur-md"
          />

          {/* Quick View Content Panel */}
          <div className="bg-brand-ivory border border-brand-gold max-w-3xl w-full rounded-none shadow-2xl relative z-10 overflow-hidden animate-fade-in max-h-[90vh] flex flex-col md:flex-row">
            {/* Close Button */}
            <button 
              onClick={handleCloseQuickView}
              className="absolute top-4 right-4 text-brand-maroon hover:text-brand-gold transition-colors z-20 p-2"
              title="Close Panel"
            >
              <FaTimes size={18} />
            </button>

            {/* Left Image Side */}
            <div className="w-full md:w-1/2 relative bg-brand-maroon/10 aspect-[4/5] md:aspect-auto">
              <img 
                src={quickViewProduct.images[0]} 
                alt={quickViewProduct.name} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Right Specifications Side */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                {/* Category & Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold">
                    {quickViewProduct.category.replace('-', ' ')}
                  </span>
                  {quickViewProduct.badge && (
                    <span className="bg-brand-maroon text-brand-gold text-[8px] tracking-widest font-cinzel px-2 py-0.5 border border-brand-gold/20 uppercase">
                      {quickViewProduct.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-base md:text-lg font-bold text-brand-maroon tracking-wider mb-2">
                  {quickViewProduct.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="font-sans text-base md:text-lg font-bold text-brand-maroon">
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="font-sans text-xs text-brand-maroon/40 line-through">
                      ₹{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                {/* Spacer line */}
                <div className="h-[1px] bg-brand-gold/20 w-full mb-4"></div>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-brand-maroon/90 leading-relaxed font-sans line-clamp-3">
                    {quickViewProduct.details}
                  </p>
                  <div className="text-[10px] text-brand-maroon/70 font-sans space-y-1 mt-2">
                    <p><strong>Fabric:</strong> {quickViewProduct.fabric}</p>
                    {quickViewProduct.zari && <p><strong>Zari Work:</strong> {quickViewProduct.zari}</p>}
                  </div>
                </div>

                {/* Sizing dropdown placeholder */}
                <div className="mb-4">
                  <span className="text-[9px] text-brand-gold font-sans font-semibold tracking-wider block mb-1 uppercase">
                    Select Measurement Size
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((sz) => (
                      <span 
                        key={sz}
                        className="px-3 py-1 text-[10px] border border-brand-gold text-brand-maroon bg-white font-semibold"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action trigger links */}
              <div className="flex flex-col gap-2 pt-4 border-t border-brand-gold/15 bg-brand-ivory">
                <button
                  onClick={handleQuickAdd}
                  className="w-full py-3 bg-brand-maroon text-brand-ivory hover:text-brand-gold border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaShoppingBag size={12} />
                  <span>Add to Bag</span>
                </button>
                
                <a
                  href={`https://wa.me/918848717017?text=${encodeURIComponent(
                    `Hi Janki by Seetha, I would like to book a piece of "${quickViewProduct.name}" (₹${quickViewProduct.price.toLocaleString('en-IN')}). Please verify delivery details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={14} />
                  <span>WhatsApp Reservation</span>
                </a>

                <Link
                  to={`/product/${quickViewProduct.id}`}
                  onClick={handleCloseQuickView}
                  className="w-full text-center py-2 text-brand-maroon hover:text-brand-gold text-[10px] font-cinzel tracking-wider uppercase transition-colors flex items-center justify-center gap-1 mt-1"
                >
                  <span>View Full Product Page</span>
                  <FaArrowRight size={8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
