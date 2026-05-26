import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products } from '../data/mockData';
import SectionHeading from '../components/SectionHeading';
import AnimatedWrapper from '../components/AnimatedWrapper';
import LuxuryButton from '../components/LuxuryButton';
import { FaUser, FaReceipt, FaHeart, FaMapMarkerAlt, FaSignOutAlt, FaWhatsapp, FaTrash, FaCheckCircle } from 'react-icons/fa';

const CustomerDashboard = () => {
  const [searchParams] = useSearchParams();
  const { wishlist, toggleWishlist, cart, addToCart } = useContext(ShopContext);
  
  // Set default active tab
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  // Extract saved wishlist products
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  // Premium Mock Order History
  const mockOrders = [
    {
      id: "JBS-ORD-9021",
      date: "May 14, 2026",
      status: "In Weaving Loom",
      deliveryDate: "June 05, 2026",
      item: {
        name: "Swarna Mayil Handloom Kasavu Saree",
        price: 18500,
        qty: 1,
        size: "Free Size (6.3m)",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=200"
      },
      measurements: "Classic 42-inch unstitched blouse piece"
    },
    {
      id: "JBS-ORD-8742",
      date: "April 02, 2026",
      status: "Delivered",
      deliveryDate: "April 18, 2026",
      item: {
        name: "Athira Golden Zari Salwar Suit",
        price: 9800,
        qty: 1,
        size: "Medium",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=200"
      },
      measurements: "Chest: 38, Waist: 32, Sleeve: 15 (Standard M Fit)"
    }
  ];

  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      
      {/* Decorative Ornaments background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <AnimatedWrapper>
          <SectionHeading
            title="The Patron's Chamber"
            subtitle="Welcome back to your private lounge, esteemed customer. View your active weaving statuses, saved bridal wishlists, and manage your shipping coordinates."
            signature="VIP Patrons Lounge"
          />
        </AnimatedWrapper>

        {/* Dashboard Grid Panel */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16 items-start relative z-10">
          
          {/* LEFT Sidebar Navigation Tabs */}
          <nav className="w-full lg:w-64 bg-white border border-brand-gold/20 p-6 shadow-md space-y-1 shrink-0">
            <div className="pb-4 border-b border-brand-gold/15 mb-4 text-center">
              <span className="font-signature text-2xl text-brand-gold block font-medium">
                Srimati
              </span>
              <h4 className="font-cinzel text-xs font-bold text-brand-maroon tracking-widest uppercase">
                Arundhati Nair
              </h4>
              <span className="text-[9px] text-brand-maroon/40 font-mono">Patron ID: #JBS-VIP-9002</span>
            </div>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-4 py-3 text-xs font-cinzel tracking-widest uppercase transition-all duration-300 flex items-center gap-3 border ${
                activeTab === "profile" 
                  ? 'bg-brand-maroon text-brand-gold font-bold border-brand-gold shadow-md' 
                  : 'bg-transparent text-brand-maroon border-transparent hover:bg-brand-maroon/5'
              }`}
            >
              <FaUser size={12} />
              <span>Patron Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-3 text-xs font-cinzel tracking-widest uppercase transition-all duration-300 flex items-center gap-3 border ${
                activeTab === "orders" 
                  ? 'bg-brand-maroon text-brand-gold font-bold border-brand-gold shadow-md' 
                  : 'bg-transparent text-brand-maroon border-transparent hover:bg-brand-maroon/5'
              }`}
            >
              <FaReceipt size={12} />
              <span>Weaving Loom (Orders)</span>
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`w-full text-left px-4 py-3 text-xs font-cinzel tracking-widest uppercase transition-all duration-300 flex items-center gap-3 border ${
                activeTab === "wishlist" 
                  ? 'bg-brand-maroon text-brand-gold font-bold border-brand-gold shadow-md' 
                  : 'bg-transparent text-brand-maroon border-transparent hover:bg-brand-maroon/5'
              }`}
            >
              <FaHeart size={12} />
              <span>Saved Pieces ({wishlist.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className={`w-full text-left px-4 py-3 text-xs font-cinzel tracking-widest uppercase transition-all duration-300 flex items-center gap-3 border ${
                activeTab === "address" 
                  ? 'bg-brand-maroon text-brand-gold font-bold border-brand-gold shadow-md' 
                  : 'bg-transparent text-brand-maroon border-transparent hover:bg-brand-maroon/5'
              }`}
            >
              <FaMapMarkerAlt size={12} />
              <span>Shipping Directory</span>
            </button>

            <button
              onClick={() => handleClearFilters}
              className="w-full text-left px-4 py-3 text-xs font-cinzel tracking-widest uppercase text-red-800 hover:bg-red-50 transition-all duration-300 flex items-center gap-3 border border-transparent pt-6 mt-6 border-t border-brand-gold/15"
            >
              <FaSignOutAlt size={12} />
              <span>Sign Out</span>
            </button>
          </nav>

          {/* RIGHT Content Display Panel */}
          <div className="flex-1 w-full bg-white border border-brand-gold/20 p-6 md:p-10 shadow-md">
            
            {/* TAB: Patron Profile */}
            {activeTab === "profile" && (
              <AnimatedWrapper className="space-y-6">
                <div className="border-b border-brand-gold/15 pb-4">
                  <h3 className="font-cinzel text-base text-brand-maroon font-bold uppercase tracking-wider">
                    Patron Profile Details
                  </h3>
                  <p className="font-serif italic text-brand-maroon/50 text-xs">
                    View and update your verified boutique membership credentials.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-brand-maroon">
                  <div className="space-y-1.5">
                    <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-gold block">Full Legal Name</span>
                    <input type="text" defaultValue="Dr. Arundhati Nair" className="w-full p-2.5 bg-brand-ivory/20 border border-brand-gold/25 outline-none font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-gold block">Email Address</span>
                    <input type="email" defaultValue="dr.arundhati.n@gmail.com" className="w-full p-2.5 bg-brand-ivory/20 border border-brand-gold/25 outline-none font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-gold block">Primary Phone</span>
                    <input type="tel" defaultValue="+91 98460 12345" className="w-full p-2.5 bg-brand-ivory/20 border border-brand-gold/25 outline-none font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-gold block">Preferred Fabric</span>
                    <input type="text" defaultValue=" Mercerized Handloom Kasavu Cotton" className="w-full p-2.5 bg-brand-ivory/20 border border-brand-gold/25 outline-none font-sans" />
                  </div>
                </div>

                <div className="pt-4">
                  <LuxuryButton variant="primary">
                    Update Patron Records
                  </LuxuryButton>
                </div>
              </AnimatedWrapper>
            )}

            {/* TAB: Weaving Loom Orders */}
            {activeTab === "orders" && (
              <AnimatedWrapper className="space-y-6">
                <div className="border-b border-brand-gold/15 pb-4">
                  <h3 className="font-cinzel text-base text-brand-maroon font-bold uppercase tracking-wider">
                    Weaving Loom History
                  </h3>
                  <p className="font-serif italic text-brand-maroon/50 text-xs">
                    Track the stages of your hand-woven silk and custom tailored blouses.
                  </p>
                </div>

                <div className="space-y-8">
                  {mockOrders.map((order) => (
                    <div 
                      key={order.id}
                      className="border border-brand-gold/20 bg-brand-ivory/5 p-6 relative shadow-sm"
                    >
                      {/* Gold outline internal border */}
                      <div className="absolute top-1 left-1 right-1 bottom-1 border border-brand-gold/5 pointer-events-none"></div>

                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-brand-gold/15 mb-4 text-xs font-cinzel text-brand-maroon tracking-wider font-semibold">
                        <span>Receipt ID: {order.id}</span>
                        <span className="text-brand-gold uppercase mt-1 md:mt-0 font-bold">{order.date}</span>
                      </div>

                      {/* Item Content details */}
                      <div className="flex gap-4">
                        <img src={order.item.image} alt={order.item.name} className="w-16 h-20 object-cover border border-brand-gold/15" />
                        <div className="text-xs space-y-1">
                          <h4 className="font-cinzel font-bold text-brand-maroon tracking-wider">
                            {order.item.name}
                          </h4>
                          <p className="text-[10px] text-brand-gold uppercase font-semibold">Fitted Size: {order.item.size}</p>
                          <p className="text-brand-maroon/60 font-mono">Price: ₹{order.item.price.toLocaleString('en-IN')}</p>
                          <p className="text-[9px] text-brand-maroon/50 italic">Custom Spec: {order.measurements}</p>
                        </div>
                      </div>

                      {/* Status Tracker Bar */}
                      <div className="mt-6 pt-4 border-t border-brand-gold/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${order.status === 'Delivered' ? 'bg-emerald-600' : 'bg-brand-gold animate-pulse'}`}></span>
                          <span className="font-cinzel font-bold text-brand-maroon tracking-wider">
                            Status: <strong className="text-brand-gold uppercase">{order.status}</strong>
                          </span>
                        </div>

                        {/* WhatsApp consultation trigger */}
                        <a
                          href={`https://wa.me/918848717017?text=${encodeURIComponent(
                            `Hi Janki by Seetha, I am checking the status of my custom weave ID ${order.id}. Could you please share a photo/update?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-transparent hover:bg-brand-maroon text-brand-gold hover:text-brand-ivory border border-brand-gold text-[10px] font-cinzel tracking-widest font-bold uppercase transition-all duration-300 flex items-center gap-2"
                        >
                          <FaWhatsapp size={12} />
                          <span>Status consult</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>
            )}

            {/* TAB: Wishlist Saved Pieces */}
            {activeTab === "wishlist" && (
              <AnimatedWrapper className="space-y-6">
                <div className="border-b border-brand-gold/15 pb-4">
                  <h3 className="font-cinzel text-base text-brand-maroon font-bold uppercase tracking-wider">
                    Your Curated Vault ({wishlistProducts.length})
                  </h3>
                  <p className="font-serif italic text-brand-maroon/50 text-xs">
                    Your collection of handloom dreams. Book them before they exit our loom grids.
                  </p>
                </div>

                {wishlistProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-serif italic text-brand-maroon/60 text-lg mb-6">
                      Your vault is currently empty...
                    </p>
                    <LuxuryButton variant="primary" onClick={() => navigate('/shop')}>
                      Unroll Weaves
                    </LuxuryButton>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wishlistProducts.map((prod) => (
                      <div 
                        key={prod.id}
                        className="flex gap-4 border border-brand-gold/15 p-4 bg-brand-ivory/5 relative"
                      >
                        <img src={prod.images[0]} alt={prod.name} className="w-20 h-26 object-cover border border-brand-gold/15" />
                        <div className="flex-grow flex flex-col justify-between text-xs text-brand-maroon">
                          <div>
                            <h4 className="font-cinzel font-bold tracking-wider line-clamp-1">{prod.name}</h4>
                            <p className="font-mono text-brand-maroon/60 mt-1">₹{prod.price.toLocaleString('en-IN')}</p>
                            <p className="text-[10px] text-brand-gold font-sans font-medium">{prod.fabric}</p>
                          </div>
                          
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => {
                                const defaultSize = prod.sizes && prod.sizes.length > 0 ? prod.sizes[0] : 'Standard';
                                addToCart(prod, defaultSize, 1);
                              }}
                              className="px-3 py-1.5 bg-brand-maroon hover:bg-brand-maroon-light text-brand-ivory hover:text-brand-gold border border-brand-gold/20 text-[9px] font-cinzel font-bold tracking-wider uppercase transition-colors"
                            >
                              Add to Bag
                            </button>
                            <button
                              onClick={() => toggleWishlist(prod.id)}
                              className="p-1.5 bg-transparent border border-red-700/20 hover:border-red-700 text-red-700 hover:bg-red-50 text-[10px]"
                              title="Delete piece"
                            >
                              <FaTrash size={10} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </AnimatedWrapper>
            )}

            {/* TAB: Address management */}
            {activeTab === "address" && (
              <AnimatedWrapper className="space-y-6">
                <div className="border-b border-brand-gold/15 pb-4">
                  <h3 className="font-cinzel text-base text-brand-maroon font-bold uppercase tracking-wider">
                    Shipping Addresses
                  </h3>
                  <p className="font-serif italic text-brand-maroon/50 text-xs">
                    Coordinate your secure shipping destinations for secure dispatches.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-brand-maroon">
                  <div className="border border-brand-gold/20 bg-brand-ivory/5 p-6 space-y-3 relative shadow-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-brand-gold/10">
                      <span className="font-cinzel font-bold tracking-wider">Primary Residence</span>
                      <span className="bg-brand-gold/15 text-brand-gold-dark text-[8px] font-mono px-2 py-0.5 uppercase tracking-wider">Primary</span>
                    </div>
                    <div className="space-y-1 leading-relaxed">
                      <p className="font-bold">Dr. Arundhati Nair</p>
                      <p>Heritage Manor, Flat 4B</p>
                      <p>Sasthamangalam Circle</p>
                      <p>Trivandrum, Kerala - 695010</p>
                      <p>Mobile: +91 98460 12345</p>
                    </div>
                  </div>

                  <div className="border border-brand-gold/15 bg-brand-ivory/5 p-6 flex flex-col justify-center items-center text-center border-dashed border-2 cursor-pointer hover:bg-white transition-colors duration-300">
                    <FaMapMarkerAlt className="text-brand-gold/40 mb-2" size={24} />
                    <span className="font-cinzel text-xs font-bold text-brand-maroon/60 tracking-widest uppercase">Add New Shipping Address</span>
                  </div>
                </div>
              </AnimatedWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
