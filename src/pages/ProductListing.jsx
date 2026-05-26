import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import AnimatedWrapper from '../components/AnimatedWrapper';
import { products, categories } from '../data/mockData';
import { FaFilter, FaTimes, FaSlidersH, FaSearch } from 'react-icons/fa';

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // States for filters
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState(100000);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state with URL search params on mount / param changes
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
    
    if (searchParam) {
      setSearchTerm(searchParam);
    } else {
      setSearchTerm("");
    }
  }, [searchParams]);

  // Size list options
  const sizesOptions = ["XS", "S", "M", "L", "XL", "Unstitched (6.2 Meters with Blouse Piece)", "Standard Saree (5.5 Meters + 80cm Blouse)", "Free Size Saree (6.3 Meters with Blouse Piece)", "Custom Measurements"];
  
  // Color list options
  const colorsOptions = ["Ivory & Antique Gold", "Deep Maroon", "Natural Indigo Blue & Terracotta", "Ivory Cream", "Deep Emerald Green", "Natural Cream & Gold"];

  // Handle clearing all filters
  const handleClearFilters = () => {
    setSelectedCategory("all");
    setPriceRange(100000);
    setSelectedSize("all");
    setSelectedColor("all");
    setSortBy("default");
    setSearchTerm("");
    setSearchParams({});
  };

  // Filter and sort items logic
  const filteredProducts = products.filter(product => {
    // Category match
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    // Price match
    const priceMatch = product.price <= priceRange;
    
    // Size match
    const sizeMatch = selectedSize === "all" || product.sizes.some(s => s.toLowerCase().includes(selectedSize.toLowerCase()));
    
    // Color match
    const colorMatch = selectedColor === "all" || product.colors.some(c => c.toLowerCase().includes(selectedColor.toLowerCase()));
    
    // Search match
    const searchMatch = !searchTerm.trim() || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.fabric.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.details.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && priceMatch && sizeMatch && colorMatch && searchMatch;
  }).sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price;
    if (sortBy === "price-high-low") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "newest") {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
    }
    return 0; // Default sorting
  });

  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      
      {/* Decorative Gold Glow elements */}
      <div className="absolute top-24 right-12 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Page Headings */}
        <AnimatedWrapper>
          <SectionHeading
            title="The Luxury Catalog"
            subtitle="Meticulously crafted designer ensembles. Filter through our premium range of handwoven sarees, rich lehengas, kurtis, and unstitched collections."
            signature="Boutique Shop"
          />
        </AnimatedWrapper>

        {/* Mobile Filter Toggles */}
        <div className="flex lg:hidden justify-between items-center bg-white border border-brand-gold/20 p-4 mb-6 shadow-sm">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 font-cinzel text-xs tracking-widest text-brand-maroon uppercase font-bold"
          >
            <FaFilter className="text-brand-gold" />
            <span>Refine Search</span>
          </button>
          
          <div className="flex items-center gap-2 border-l border-brand-gold/20 pl-4">
            <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-maroon/60">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-cinzel font-bold text-brand-maroon bg-transparent border-none outline-none cursor-pointer"
            >
              <option value="default">Heritage Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>

        {/* Grid Canvas */}
        <div className="flex flex-col lg:flex-row gap-10 mt-12 items-start relative z-10">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 bg-white border border-brand-gold/20 p-8 shadow-md sticky top-28 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-brand-gold/15 mb-6">
              <h3 className="font-cinzel text-sm tracking-widest text-brand-maroon font-bold uppercase flex items-center gap-2">
                <FaSlidersH className="text-brand-gold" size={14} />
                <span>Filters</span>
              </h3>
              <button 
                onClick={handleClearFilters}
                className="text-[10px] font-cinzel font-bold text-brand-gold hover:text-brand-maroon transition-colors uppercase tracking-widest"
              >
                Clear All
              </button>
            </div>

            {/* Keyword Search */}
            <div className="mb-6 pb-6 border-b border-brand-gold/10">
              <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-2">
                Search Catalog
              </span>
              <div className="flex items-center border border-brand-gold/30 px-3 py-1 bg-brand-ivory/30">
                <input
                  type="text"
                  placeholder="Type to search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none outline-none py-1.5 text-xs text-brand-maroon font-sans"
                />
                <FaSearch className="text-brand-maroon/40" size={10} />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6 pb-6 border-b border-brand-gold/10">
              <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-3">
                Collections Area
              </span>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group text-xs text-brand-maroon font-sans">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "all"}
                    onChange={() => setSelectedCategory("all")}
                    className="accent-brand-gold"
                  />
                  <span className="group-hover:text-brand-gold transition-colors font-medium">All Collections</span>
                </label>
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer group text-xs text-brand-maroon font-sans">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="accent-brand-gold"
                    />
                    <span className="group-hover:text-brand-gold transition-colors font-medium">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Scale */}
            <div className="mb-6 pb-6 border-b border-brand-gold/10">
              <div className="flex justify-between items-center mb-3">
                <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold">
                  Maximum Budget
                </span>
                <span className="font-sans text-xs font-bold text-brand-maroon">
                  ₹{priceRange.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-brand-maroon h-[2px] bg-brand-gold/30 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-brand-maroon/40 font-mono mt-1">
                <span>₹5k</span>
                <span>₹50k</span>
                <span>₹100k</span>
              </div>
            </div>

            {/* Size scale */}
            <div className="mb-6 pb-6 border-b border-brand-gold/10">
              <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-3">
                Sizing Format
              </span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-brand-gold/30 bg-transparent text-xs font-sans text-brand-maroon outline-none"
              >
                <option value="all">Any Size / Fitting</option>
                {sizesOptions.map(sz => (
                  <option key={sz} value={sz}>{sz}</option>
                ))}
              </select>
            </div>

            {/* Colors scale */}
            <div>
              <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-3">
                Color Palette
              </span>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full p-2 border border-brand-gold/30 bg-transparent text-xs font-sans text-brand-maroon outline-none"
              >
                <option value="all">Any Colorway</option>
                {colorsOptions.map(col => (
                  <option key={col} value={col}>{col}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="flex-1 w-full">
            
            {/* Desktop Sort Header banner */}
            <div className="hidden lg:flex justify-between items-center bg-white border border-brand-gold/15 p-4 mb-8 shadow-sm">
              <p className="font-sans text-xs text-brand-maroon/60">
                Displaying <strong className="text-brand-maroon">{filteredProducts.length}</strong> unique designer pieces.
              </p>
              
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-[10px] tracking-widest uppercase text-brand-maroon/60">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs font-cinzel font-bold text-brand-maroon bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value="default">Heritage Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Empty Showcase fallbacks */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-brand-gold/15 p-16 text-center shadow-md">
                <h3 className="font-cinzel text-lg tracking-wider text-brand-maroon font-semibold uppercase mb-2">
                  No Heritage Pieces Found
                </h3>
                <p className="font-serif italic text-brand-maroon/60 text-sm max-w-sm mx-auto mb-6">
                  Unfortunately, no items in our registry fit your exact combination of search terms.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-brand-maroon text-brand-ivory border border-brand-gold hover:text-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              // Items grid
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map((prod, idx) => (
                  <AnimatedWrapper key={prod.id} delay={(idx % 3) * 0.1} y={20}>
                    <ProductCard product={prod} />
                  </AnimatedWrapper>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Filter Slide-in */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-start lg:hidden">
          {/* Backdrop overlay */}
          <div 
            onClick={() => setIsMobileFilterOpen(false)}
            className="absolute inset-0 bg-brand-maroon/40 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <div className="w-full max-w-xs h-full bg-white relative z-10 p-6 flex flex-col justify-between overflow-y-auto animate-slide-left">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-brand-gold/20 mb-6">
                <h3 className="font-cinzel text-sm tracking-widest text-brand-maroon font-bold uppercase flex items-center gap-2">
                  <FaSlidersH className="text-brand-gold" size={14} />
                  <span>Refine Catalog</span>
                </h3>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-brand-maroon hover:text-brand-gold p-2"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Keyword Search */}
              <div className="mb-6 pb-6 border-b border-brand-gold/10">
                <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-2">
                  Search Catalog
                </span>
                <div className="flex items-center border border-brand-gold/30 px-3 py-1 bg-brand-ivory/30">
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-none outline-none py-1 text-xs text-brand-maroon font-sans"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-brand-gold/10">
                <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-3">
                  Collections Area
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-brand-maroon font-sans">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "all"}
                      onChange={() => { setSelectedCategory("all"); setIsMobileFilterOpen(false); }}
                      className="accent-brand-gold"
                    />
                    <span>All Collections</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer text-xs text-brand-maroon font-sans">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => { setSelectedCategory(cat.id); setIsMobileFilterOpen(false); }}
                        className="accent-brand-gold"
                      />
                      <span>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Scale */}
              <div className="mb-6 pb-6 border-b border-brand-gold/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold">
                    Maximum Budget
                  </span>
                  <span className="font-sans text-xs font-bold text-brand-maroon">
                    ₹{priceRange.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-brand-maroon h-[2px] bg-brand-gold/30 rounded-lg cursor-pointer"
                />
              </div>

              {/* Sizing */}
              <div className="mb-6 pb-6 border-b border-brand-gold/10">
                <span className="font-cinzel text-[10px] tracking-widest uppercase font-bold text-brand-gold block mb-2">
                  Sizes Select
                </span>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border border-brand-gold/30 bg-transparent text-xs font-sans text-brand-maroon outline-none"
                >
                  <option value="all">Any Size</option>
                  {sizesOptions.map(sz => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear button footer */}
            <div className="pt-4 border-t border-brand-gold/20">
              <button 
                onClick={() => { handleClearFilters(); setIsMobileFilterOpen(false); }}
                className="w-full py-3 bg-brand-maroon text-brand-ivory border border-brand-gold font-cinzel text-xs tracking-widest font-semibold uppercase"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
