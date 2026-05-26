import React, { useContext } from 'react';
import HeroSlider from '../components/HeroSlider';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ReelCard from '../components/ReelCard';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedWrapper from '../components/AnimatedWrapper';
import LuxuryButton from '../components/LuxuryButton';
import { categories, products, reels, testimonials } from '../data/mockData';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowRight, FaInstagram, FaQuoteLeft } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  
  // Extract featured collections
  const featuredCategories = categories.filter(c => c.featured);
  
  // Extract trending items
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 3);
  
  // Get all reels
  const featuredReels = reels.slice(0, 4);

  return (
    <div className="bg-brand-ivory min-h-screen relative overflow-hidden pb-12">
      
      {/* Cinematic Hero Header Slider */}
      <HeroSlider />

      {/* Brand Heritage Story Banner */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white relative border-b border-brand-gold/15">
        <div className="absolute top-0 right-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <AnimatedWrapper delay={0.2} className="relative aspect-[4/5] overflow-hidden border border-brand-gold/25 gold-shadow w-full max-w-sm mx-auto lg:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80&w=800" 
              alt="Artisanal Handloom Saree" 
              className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
            />
            {/* Interior gold line */}
            <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 border border-brand-gold/10"></div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4} className="space-y-4 md:space-y-6 text-center lg:text-left">
            <span className="font-signature text-2xl md:text-4xl text-brand-gold block font-medium">
              Woven by Divine Hands
            </span>
            <h2 className="font-cinzel text-xl md:text-4xl text-brand-maroon tracking-widest font-semibold uppercase leading-snug">
              The Legend of Balaramapuram
            </h2>
            <div className="w-16 h-[2px] bg-brand-gold my-3 md:my-4 mx-auto lg:mx-0"></div>
            
            <p className="font-serif italic text-brand-maroon/80 text-xs md:text-base leading-relaxed">
              "We believe that a garment is not merely stitched fabric—it is a collection of memories, a whisper of cultural heritage, and the heartbeat of our weavers."
            </p>
            
            <p className="font-sans text-xs md:text-sm text-brand-maroon/70 leading-relaxed">
              Every single piece in the Janki boutique undergoes meticulous checks under the personal eye of Seetha. Utilizing certified organic natural cotton fibres and genuine Kanchipuram mulberry silks, each saree embodies the ancient architectural elements of South Indian temples.
            </p>

            <div className="pt-2 md:pt-4">
              <LuxuryButton variant="secondary" onClick={() => navigate('/about')} className="px-6 py-3 text-xs md:px-8 md:py-3.5 md:text-sm">
                Read Our Legacy
              </LuxuryButton>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Featured Categories Carousel Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-3 xs:px-4 md:px-12 max-w-7xl mx-auto">
        <AnimatedWrapper>
          <SectionHeading 
            title="The Curated Edit" 
            subtitle="Browse our hand-picked cultural collections engineered for grand occasions and everyday elegance."
            signature="Heritage Collections"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {featuredCategories.map((cat, idx) => (
            <AnimatedWrapper key={cat.id} delay={0.2 * idx}>
              <CategoryCard category={cat} />
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      {/* Luxury Bridal Special Showcase Divider */}
      <section className="w-full py-16 sm:py-20 md:py-28 relative bg-cover bg-center overflow-hidden border-t border-b border-brand-gold/30 px-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1920')` }}>
        {/* Dark Tint overlay */}
        <div className="absolute inset-0 bg-brand-maroon/75 backdrop-blur-[1px]"></div>
        
        {/* Decorative corner highlights */}
        <div className="absolute top-4 left-4 right-4 bottom-4 sm:top-6 sm:left-6 sm:right-6 sm:bottom-6 border border-brand-gold/15 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 px-2 space-y-4 md:space-y-6">
          <span className="font-signature text-2xl md:text-5xl text-brand-gold block font-medium">
            Bridal Couture
          </span>
          <h2 className="font-cinzel text-xl md:text-5xl text-brand-ivory tracking-widest font-semibold uppercase leading-tight">
            The Royal Rukmini Trousseau
          </h2>
          <p className="font-serif italic text-brand-beige text-xs md:text-lg max-w-xl mx-auto leading-relaxed">
            A bridal trouseau woven with temple borders, customized gold embroidery details, and standard heavy zari detailing to keep Kerala heritage alive on your special day.
          </p>
          <div className="pt-2 md:pt-4 flex flex-wrap justify-center gap-3 xs:gap-4">
            <LuxuryButton variant="gold" onClick={() => navigate('/shop?category=bridal-wear')} className="px-5 py-2.5 text-xs md:px-8 md:py-3.5 md:text-sm">
              View Bridal Catalog
            </LuxuryButton>
            
            <a
              href="https://wa.me/918848717017?text=Hi%20Janki%20by%20Seetha%2C%20I%20would%20love%20to%20discuss%20customized%20bridal%20lehengas%20and%20sarees%20for%20my%20wedding."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 border border-brand-gold font-cinzel text-xs md:text-sm tracking-widest font-semibold uppercase transition-all duration-300 text-white flex items-center justify-center cursor-pointer"
            >
              Direct bridal consult
            </a>
          </div>
        </div>
      </section>

      {/* Trending Collections Cards Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-3 xs:px-4 md:px-12 max-w-7xl mx-auto">
        <AnimatedWrapper>
          <SectionHeading 
            title="The Trending Edit" 
            subtitle="Explore our most coveted traditional masterpieces, selected by hand by Seetha for high-fashion elegance."
            signature="Boutique Favourites"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 min-[370px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
          {trendingProducts.map((product, idx) => (
            <AnimatedWrapper key={product.id} delay={0.2 * idx}>
              <ProductCard product={product} />
            </AnimatedWrapper>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <LuxuryButton variant="primary" onClick={() => navigate('/shop')} className="px-6 py-3 text-xs md:px-8 md:py-3.5 md:text-sm">
            Explore Complete Catalog
          </LuxuryButton>
        </div>
      </section>

      {/* Instagram Reels Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-b border-brand-gold/15 px-3 xs:px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedWrapper>
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <span className="font-signature text-2xl md:text-3xl text-brand-gold block font-medium">
                  Instagram Boutique
                </span>
                <h2 className="font-cinzel text-xl md:text-3xl text-brand-maroon tracking-wider font-semibold uppercase">
                  Reels in Motion
                </h2>
              </div>
              <Link to="/reels" className="font-cinzel text-xs md:text-sm tracking-widest uppercase font-semibold text-brand-gold hover:text-brand-maroon transition-colors flex items-center gap-2">
                <span>View All Reels</span>
                <FaArrowRight size={10} />
              </Link>
            </div>
          </AnimatedWrapper>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-6">
            {featuredReels.map((reel, idx) => (
              <AnimatedWrapper key={reel.id} delay={0.15 * idx}>
                <ReelCard reel={reel} />
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* High Society Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-3 xs:px-4 md:px-12 max-w-7xl mx-auto">
        <AnimatedWrapper>
          <SectionHeading 
            title="Patron Diaries" 
            subtitle="Hear what our esteemed global client base has to say about their custom bespoke fittings and Janki luxury silk quality."
            signature="Praise & Gratitude"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {testimonials.map((test, idx) => (
            <AnimatedWrapper key={test.id} delay={0.2 * idx}>
              <TestimonialCard testimonial={test} />
            </AnimatedWrapper>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
