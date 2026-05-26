import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products } from '../data/mockData';
import { FaHeart, FaRegHeart, FaShoppingBag, FaWhatsapp, FaInstagram, FaShareAlt, FaTruck, FaUndoAlt, FaStar, FaInfoCircle } from 'react-icons/fa';
import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specifications");
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setActiveImage(selectedProduct.images[0]);
      setSelectedSize(selectedProduct.sizes[0]);
      setSelectedColor(selectedProduct.colors[0]);
      setQuantity(1);
    } else {
      // Fallback
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="bg-brand-ivory min-h-screen flex items-center justify-center">
        <div className="text-center font-cinzel text-brand-maroon tracking-widest uppercase py-12 animate-pulse">
          Unrolling Silk Scrolls...
        </div>
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);

  // Filter similar items
  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  // WhatsApp deeply linked preorder
  const getPreorderWhatsAppText = () => {
    const message = `Hi Janki by Seetha, I am absolutely in love with your masterpiece "${product.name}". I would like to book this order under the following details:\n\n- Product Code: ${product.id}\n- Selected Size: ${selectedSize}\n- Selected Color: ${selectedColor}\n- Preorder Quantity: ${quantity}\n- Price Tally: ₹${(product.price * quantity).toLocaleString('en-IN')}\n\nPlease guide me on completing the payment reservation. Page Link: ${window.location.href}`;
    return `https://wa.me/918848717017?text=${encodeURIComponent(message)}`;
  };

  const handleZoom = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Detail Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          
          {/* LEFT: Cinematic Gallery */}
          <div className="space-y-4">
            
            {/* Active zoom frame */}
            <div 
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleZoom}
              className="relative aspect-[3/4] w-full overflow-hidden border border-brand-gold/20 bg-white gold-shadow cursor-zoom-in"
            >
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover object-top transition-transform duration-300"
                style={{
                  transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                }}
              />
              <div className="absolute top-4 left-4 bg-brand-maroon text-brand-gold text-[8px] tracking-widest font-cinzel px-2.5 py-1 border border-brand-gold/20 uppercase shadow-md pointer-events-none">
                Artisan Specimen
              </div>
            </div>

            {/* Thumbnail row selectors */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[3/4] border transition-all duration-300 relative ${
                    activeImage === img ? 'border-brand-gold ring-1 ring-brand-gold' : 'border-brand-gold/15 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: High-end Specifications panel */}
          <div className="bg-white border border-brand-gold/20 p-6 md:p-10 shadow-md space-y-6">
            
            {/* Headers breadcrumb */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-semibold block mb-1">
                  {product.category.replace('-', ' ')}
                </span>
                <h1 className="font-cinzel text-xl md:text-2xl font-bold text-brand-maroon tracking-wider">
                  {product.name}
                </h1>
              </div>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="p-3 bg-brand-ivory/60 hover:bg-brand-maroon text-brand-maroon hover:text-brand-gold rounded-full border border-brand-gold/10 transition-colors shadow-sm shrink-0"
                title={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                {isFavorite ? <FaHeart size={16} className="text-red-700" /> : <FaRegHeart size={16} />}
              </button>
            </div>

            {/* Price section */}
            <div className="flex items-baseline space-x-3 pt-2 border-t border-brand-gold/10">
              <span className="font-sans text-xl md:text-2xl font-bold text-brand-maroon">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-sans text-sm text-brand-maroon/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-emerald-800 font-cinzel tracking-wider font-bold">
                    ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Heritage Benefit)
                  </span>
                </>
              )}
            </div>

            {/* Stock alert details */}
            <div className="flex items-center gap-2 text-xs font-sans">
              <span className={`w-2.5 h-2.5 rounded-full ${product.stock <= 2 ? 'bg-amber-600 animate-ping' : 'bg-emerald-600'}`}></span>
              <span className="text-brand-maroon/70">
                {product.stock <= 2 ? `Extremely Limited - Only ${product.stock} pieces remain in Seetha's collection` : 'In stock - Custom stitched within 5 days'}
              </span>
            </div>

            {/* Dynamic Sizing selector buttons */}
            <div className="space-y-2">
              <span className="text-[10px] text-brand-gold font-sans font-bold tracking-widest uppercase block">
                Select Fitted Size
              </span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 border text-xs tracking-wider transition-all duration-300 font-sans ${
                      selectedSize === sz
                        ? 'border-brand-maroon bg-brand-maroon text-brand-ivory font-bold shadow-md'
                        : 'border-brand-gold/20 bg-brand-ivory/20 hover:border-brand-gold text-brand-maroon hover:bg-white'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors picker */}
            <div className="space-y-2">
              <span className="text-[10px] text-brand-gold font-sans font-bold tracking-widest uppercase block">
                Select Base Shade
              </span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`px-4 py-2 border text-xs tracking-wider transition-all duration-300 font-sans ${
                      selectedColor === col
                        ? 'border-brand-maroon bg-brand-maroon text-brand-ivory font-bold shadow-md'
                        : 'border-brand-gold/20 bg-brand-ivory/20 hover:border-brand-gold text-brand-maroon hover:bg-white'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-brand-gold font-sans font-bold tracking-widest uppercase">
                Quantity
              </span>
              <div className="flex items-center border border-brand-gold/30 bg-brand-ivory/10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-brand-maroon hover:bg-brand-maroon/5 font-bold"
                >
                  -
                </button>
                <span className="px-5 py-2 font-mono text-sm font-semibold text-brand-maroon">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 text-brand-maroon hover:bg-brand-maroon/5 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Checkout & inquiry Buttons */}
            <div className="pt-6 border-t border-brand-gold/15 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                
                {/* Add to bag */}
                <button
                  onClick={() => addToCart(product, selectedSize, quantity)}
                  className="flex-1 py-4 bg-brand-maroon text-brand-ivory hover:text-brand-gold border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <FaShoppingBag size={12} />
                  <span>Add to Bridal Bag</span>
                </button>

                {/* Preorder direct checkout */}
                <a
                  href={getPreorderWhatsAppText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <FaWhatsapp size={14} />
                  <span>Book via WhatsApp</span>
                </a>
              </div>

              {/* Instagram view triggers */}
              {product.instagramUrl && (
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={product.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/5 font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaInstagram size={14} />
                    <span>Watch Style Reel</span>
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: product.name, url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Product link copied!");
                      }
                    }}
                    className="flex-1 py-3 bg-transparent border border-brand-gold/20 hover:border-brand-gold/40 text-brand-maroon/70 hover:text-brand-maroon font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShareAlt size={12} />
                    <span>Share Piece</span>
                  </button>
                </div>
              )}
            </div>

            {/* Luxury editorial tabs */}
            <div className="pt-6">
              <div className="flex border-b border-brand-gold/20 text-xs font-cinzel font-bold tracking-widest uppercase">
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`flex-1 pb-3 text-center transition-colors relative ${
                    activeTab === "specifications" ? 'text-brand-maroon font-extrabold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-brand-gold' : 'text-brand-maroon/40'
                  }`}
                >
                  Details & Zari
                </button>
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex-1 pb-3 text-center transition-colors relative ${
                    activeTab === "delivery" ? 'text-brand-maroon font-extrabold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-brand-gold' : 'text-brand-maroon/40'
                  }`}
                >
                  Shipping & Return
                </button>
              </div>

              {/* Tab views */}
              <div className="pt-6 text-xs text-brand-maroon/80 font-sans leading-relaxed space-y-4">
                {activeTab === "specifications" ? (
                  <>
                    <p>{product.details}</p>
                    <div className="bg-brand-ivory/40 p-4 border border-brand-gold/10 space-y-2 mt-4 text-[11px]">
                      <p><strong>Fabric Specification:</strong> {product.fabric}</p>
                      {product.zari && <p><strong>Zari Artistry:</strong> {product.zari}</p>}
                      <p><strong>Bespoke Wash:</strong> {product.care}</p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <FaTruck className="text-brand-gold shrink-0 mt-0.5" size={14} />
                      <p><strong>Premium Delivery Timelines:</strong> Complimentry domestic delivery across India. International dispatches are secured using DHL Express. Stitched blouses require an additional 5 days design tailing.</p>
                    </div>
                    <div className="flex gap-3 items-start border-t border-brand-gold/10 pt-3">
                      <FaUndoAlt className="text-brand-gold shrink-0 mt-0.5" size={14} />
                      <p><strong>Delicate Return Philosophy:</strong> Being organic handwoven craftworks, exchange requests are honored only within 7 days of shipment. Tailor stitched items are bespoke and final sale.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <AnimatedWrapper className="mt-20 border-t border-brand-gold/15 pt-16 bg-white p-6 md:p-10 border border-brand-gold/20 shadow-md">
          <h3 className="font-cinzel text-lg tracking-wider text-brand-maroon font-bold uppercase mb-6 flex items-center gap-2">
            <FaStar className="text-brand-gold" size={16} />
            <span>Patron Reviews ({product.reviews.length})</span>
          </h3>

          {product.reviews.length === 0 ? (
            <p className="font-serif italic text-brand-maroon/50 text-sm py-4">
              Be the first to leave a review under this cultural piece after checkout.
            </p>
          ) : (
            <div className="divide-y divide-brand-gold/10">
              {product.reviews.map((rev, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-cinzel text-xs font-bold text-brand-maroon tracking-wider">
                        {rev.author}
                      </span>
                      <div className="flex text-brand-gold">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FaStar key={i} size={8} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-brand-maroon/40 font-sans">
                      {rev.date}
                    </span>
                  </div>
                  <p className="font-serif italic text-brand-maroon/80 text-sm leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </AnimatedWrapper>

        {/* Similar collections Showcase */}
        {similarProducts.length > 0 && (
          <section className="mt-24">
            <AnimatedWrapper>
              <SectionHeading 
                title="Related Creations" 
                subtitle="Complete your collection with these complementary handlooms woven in the same tradition."
                signature="Complete the Look"
              />
            </AnimatedWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10">
              {similarProducts.map((p, idx) => (
                <AnimatedWrapper key={p.id} delay={0.2 * idx}>
                  <ProductCard product={p} />
                </AnimatedWrapper>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
// Dynamic reel connections are active.
