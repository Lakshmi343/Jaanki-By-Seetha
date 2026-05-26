import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedWrapper from '../components/AnimatedWrapper';
import LuxuryButton from '../components/LuxuryButton';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-brand-ivory min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      
      {/* Decorative Ornaments background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Heading */}
        <AnimatedWrapper>
          <SectionHeading
            title="The Weave & The Soul"
            subtitle="The legacy of Janki by Seetha. How we preserve God's Own Country's ancient loom coordinates and bring Indian heritage to the global forefront."
            signature="Our Legacy"
          />
        </AnimatedWrapper>

        {/* Storyboard Block 1: The Core Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center border-b border-brand-gold/15 pb-16">
          <AnimatedWrapper delay={0.2} className="relative aspect-[4/5] border border-brand-gold/25 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" 
              alt="Seetha Weaving Consultation" 
              className="w-full h-full object-cover object-top filter brightness-95 hover:scale-105 transition-transform duration-[1.5s]" 
            />
            {/* Corner highlights */}
            <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 border border-brand-gold/10"></div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4} className="space-y-6 text-brand-maroon">
            <span className="font-signature text-3xl text-brand-gold block font-medium">
              A Designer's Calling
            </span>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold uppercase tracking-wider">
              Seetha's Vision of Cultural Royalty
            </h3>
            <div className="w-12 h-[1px] bg-brand-gold my-2"></div>
            <p className="font-serif italic text-sm md:text-base leading-relaxed text-brand-maroon/90">
              "To dress in Janki is to wrap yourself in the pristine air of Kerala's lagoons, the shimmering oil lamps of temple sanctums, and the proud history of our state's handloom weavers."
            </p>
            <p className="font-sans text-xs md:text-sm text-brand-maroon/70 leading-relaxed">
              Growing up amid the lush plantations of central Kerala, Seetha watched with grief as traditional handloom weavers in Balaramapuram abandoned their wooden shuttles for industrial mills. In 2018, **Janki** was conceived—named after Seetha's maternal grandmother—to celebrate pure handloom artistry.
            </p>
            <p className="font-sans text-xs md:text-sm text-brand-maroon/70 leading-relaxed">
              Every gold thread ('Zari') used in our sarees is certified 24k silver-gilded, and each mercerized cotton fibre is custom ghee-treated to maintain its pristine crispness across generations.
            </p>
          </AnimatedWrapper>
        </div>

        {/* Storyboard Block 2: The Artistry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center border-b border-brand-gold/15 pb-16">
          <AnimatedWrapper delay={0.4} className="space-y-6 text-brand-maroon order-2 lg:order-1">
            <span className="font-signature text-3xl text-brand-gold block font-medium">
              Weavers of Padmanabha
            </span>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold uppercase tracking-wider">
              Ancient Architecture in Every Shuttle
            </h3>
            <div className="w-12 h-[1px] bg-brand-gold my-2"></div>
            <p className="font-serif italic text-sm md:text-base leading-relaxed text-brand-maroon/90">
              Our designs borrow directly from structural accents of historic Kerala temples—the Gopuram tiers, the intricate peacock carvings, and the clean geometric steps of sacred ponds.
            </p>
            <p className="font-sans text-xs md:text-sm text-brand-maroon/70 leading-relaxed">
              Preserving local arts requires active commitment. Janki by Seetha partners directly with over 40 traditional artisan families in Trivandrum and Balaramapuram. We guarantee ethical fair wages, provide direct medical funds, and fund schooling programs for our weaver's daughters.
            </p>
            <p className="font-sans text-xs md:text-sm text-brand-maroon/70 leading-relaxed">
              When you purchase a Janki piece, you aren't just engaging in e-commerce commerce—you are securing a livelihood and supporting an unbroken generational thread.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2} className="relative aspect-[4/5] border border-brand-gold/25 overflow-hidden shadow-2xl order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=800" 
              alt="Traditional Kerala Loom details" 
              className="w-full h-full object-cover object-top filter brightness-95 hover:scale-105 transition-transform duration-[1.5s]" 
            />
            {/* Corner highlights */}
            <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 border border-brand-gold/10"></div>
          </AnimatedWrapper>
        </div>

        {/* Storyboard Block 3: Signature Stamp */}
        <AnimatedWrapper delay={0.4} className="mt-20 text-center space-y-6">
          <span className="font-signature text-5xl md:text-6xl text-brand-gold block font-semibold">
            Seetha Nair
          </span>
          <h4 className="font-cinzel text-xs tracking-[0.2em] font-bold text-brand-maroon uppercase">
            Founder & Lead Designer, Janki by Seetha
          </h4>
          <p className="font-sans text-[10px] text-brand-maroon/50">
            Handcrafted with Pride in Kochi, Kerala. Established 2018.
          </p>
          <div className="pt-6">
            <LuxuryButton variant="primary" onClick={() => navigate('/shop')}>
              Browse Our Masterpieces
            </LuxuryButton>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default About;
