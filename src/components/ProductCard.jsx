import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaHeart, FaRegHeart, FaSearchPlus, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import LuxuryButton from './LuxuryButton';

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart, setQuickViewProduct } = useContext(ShopContext);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const isFavorite = isInWishlist(product.id);

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hi Janki by Seetha, I am inquiring about the gorgeous "${product.name}" priced at ₹${product.price.toLocaleString('en-IN')}. Is this in stock? Link: ${window.location.origin}/product/${product.id}`;
    window.open(`https://wa.me/918848717017?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to the first available size
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
    addToCart(product, defaultSize, 1);
  };

  return (
    <div 
      className="group relative flex flex-col bg-white border border-brand-gold/15 hover:border-brand-gold transition-all duration-700 gold-shadow hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] transform hover:-translate-y-1 h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badges Panel */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        {product.badge && (
          <span className="bg-brand-maroon text-brand-gold text-[9px] font-cinzel font-bold tracking-widest px-2.5 py-1 border border-brand-gold/30 uppercase shadow-md">
            {product.badge}
          </span>
        )}
        {product.isTrending && (
          <span className="bg-brand-gold text-brand-maroon text-[9px] font-cinzel font-bold tracking-widest px-2.5 py-1 border border-brand-maroon/20 uppercase shadow-md animate-pulse">
            Trending
          </span>
        )}
        {product.stock <= 2 && (
          <span className="bg-amber-950 text-brand-beige text-[8px] font-sans font-bold px-2 py-0.5 uppercase tracking-wider">
            Rare - Only {product.stock} Left
          </span>
        )}
      </div>

      {/* Action Triggers Overlays */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {/* Wishlist Heart Toggle */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
          className="p-2.5 bg-brand-ivory/80 hover:bg-brand-maroon text-brand-maroon hover:text-brand-gold rounded-full transition-all duration-300 shadow-md border border-brand-gold/20"
          title={isFavorite ? "Remove from Saved" : "Save Piece"}
        >
          {isFavorite ? <FaHeart size={14} className="text-red-700 hover:text-brand-gold" /> : <FaRegHeart size={14} />}
        </button>

        {/* Quick View */}
        <button
          onClick={handleQuickView}
          className="p-2.5 bg-brand-ivory/80 hover:bg-brand-maroon text-brand-maroon hover:text-brand-gold rounded-full transition-all duration-300 shadow-md border border-brand-gold/20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          title="Quick View Details"
        >
          <FaSearchPlus size={14} />
        </button>
      </div>

      {/* Product Image swap on Hover */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[3/4] w-full overflow-hidden bg-brand-ivory border-b border-brand-gold/15">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover object-top transition-all duration-1000 ${
            hovered && product.images[1] ? 'opacity-0 scale-102' : 'opacity-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} Alternate`}
            className={`w-full h-full object-cover object-top absolute inset-0 transition-all duration-1000 ${
              hovered ? 'opacity-100 scale-105' : 'opacity-0'
            }`}
          />
        )}

        {/* Glassmorphic Sliding Drawer with Quick Checkout Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-brand-maroon/90 to-brand-maroon/20 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 z-10 flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 bg-brand-gold hover:bg-brand-maroon text-brand-maroon hover:text-brand-gold text-[10px] md:text-xs font-cinzel tracking-widest font-bold border border-brand-maroon hover:border-brand-gold transition-all duration-300 uppercase active:scale-95 shadow-lg cursor-pointer"
          >
            Add to Bag
          </button>
          
          <button
            onClick={handleWhatsAppInquiry}
            className="px-2.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-[10px] md:text-xs transition-all duration-300 flex items-center justify-center border border-white/10 active:scale-95 shadow-lg cursor-pointer"
            title="Inquire via WhatsApp"
          >
            <FaWhatsapp size={15} />
          </button>
        </div>
      </Link>

      {/* Descriptions Section */}
      <div className="p-4 md:p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Category breadcrumb */}
          <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-semibold block mb-1">
            {product.category.replace('-', ' ')}
          </span>
          
          {/* Name */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-cinzel text-xs md:text-sm font-bold text-brand-maroon tracking-wider group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          {/* Fabric line */}
          <p className="font-serif italic text-brand-maroon/60 text-[10px] md:text-xs mt-1 line-clamp-1">
            {product.fabric}
          </p>
        </div>

        {/* Price Tag Details */}
        <div className="mt-3 pt-3 border-t border-brand-gold/10 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="font-sans text-sm md:text-base font-bold text-brand-maroon">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-xs text-brand-maroon/40 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Social shares */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (navigator.share) {
                navigator.share({
                  title: product.name,
                  url: `${window.location.origin}/product/${product.id}`
                });
              } else {
                navigator.clipboard.writeText(`${window.location.origin}/product/${product.id}`);
                alert("Product link copied to clipboard!");
              }
            }}
            className="text-brand-maroon/50 hover:text-brand-gold p-1"
            title="Share with friends"
          >
            <FaInstagram size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
// Note: If dynamic reels are integrated, this card will connect directly.
