import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LuxuryButton from './LuxuryButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1920",
    signature: "The Heritage Edit",
    title: "Swarna Mayil Handlooms",
    subtitle: "Pristine white handwoven cotton adorned with 24k pure gold thread zari peacocks.",
    ctaText: "Shop the Kasavu",
    categoryLink: "kerala-kasavu"
  },
  {
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1920",
    signature: "Royal Matrimony",
    title: "The Rukmini Bridal Silk",
    subtitle: "Made-to-order rich crimson brocades, hand-woven in Kanchipuram and studded with temple zardosi.",
    ctaText: "Book Consultation",
    categoryLink: "bridal-wear"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1920",
    signature: "Artisan Soul",
    title: "Organic Indigo Ajrakh",
    subtitle: "Double-sided premium Gaji silk blockprints using natural madder root and indigo colors.",
    ctaText: "Explore Prints",
    categoryLink: "ajrak-collection"
  }
];

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[85vh] md:h-screen bg-brand-maroon-dark overflow-hidden">
      {/* Absolute floating bottom details */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        {/* Floating lamp icon / glowing dot */}
        <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-lamp-glow mb-2"></div>
        <span className="font-cinzel text-[9px] md:text-xs tracking-[0.25em] text-brand-gold uppercase">
          Slide to Explore Heritage
        </span>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }}
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            {/* Background Zoom Image */}
            <div className="absolute inset-0 bg-cover bg-center animate-pulse-slow">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover object-top filter brightness-[0.55]" 
              />
            </div>

            {/* Custom Overlay Grid */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-12 z-10">
              <div className="max-w-4xl mx-auto space-y-6">
                
                {/* Signature Brand Script */}
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-signature text-3xl md:text-5xl text-brand-gold block font-medium"
                >
                  {slide.signature}
                </motion.span>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-cinzel text-3xl md:text-7xl font-semibold tracking-wider text-brand-ivory leading-tight uppercase"
                >
                  {slide.title}
                </motion.h1>

                {/* Gold Accent Spacer */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-[2px] bg-brand-gold mx-auto"
                />

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="font-sans text-xs md:text-lg text-brand-ivory/80 font-light tracking-wide max-w-xl mx-auto leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="pt-6 flex flex-wrap justify-center gap-4"
                >
                  <LuxuryButton 
                    variant="primary" 
                    onClick={() => navigate(`/shop?category=${slide.categoryLink}`)}
                  >
                    {slide.ctaText}
                  </LuxuryButton>
                  <LuxuryButton 
                    variant="outline" 
                    onClick={() => navigate('/contact')}
                  >
                    Book Consultation
                  </LuxuryButton>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 text-brand-gold/60 hover:text-brand-gold hover:scale-110 transition-all font-light text-2xl border border-brand-gold/25 p-3 rounded-full bg-brand-maroon/20 hover:bg-brand-maroon/50 cursor-pointer">
          &larr;
        </button>
        <button className="swiper-button-next-custom hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 text-brand-gold/60 hover:text-brand-gold hover:scale-110 transition-all font-light text-2xl border border-brand-gold/25 p-3 rounded-full bg-brand-maroon/20 hover:bg-brand-maroon/50 cursor-pointer">
          &rarr;
        </button>
      </Swiper>

      {/* Styled Swiper Bullets */}
      <style>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }
        .custom-bullet {
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 50%;
          background: rgba(250, 249, 246, 0.4);
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .custom-bullet-active {
          background: #d4af37 !important;
          transform: scale(1.3);
          box-shadow: 0 0 10px #d4af37;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
