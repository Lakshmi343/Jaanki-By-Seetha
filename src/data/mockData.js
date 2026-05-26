// Premium Mock Data for Janki by Seetha luxury e-commerce

// Import local premium assets added by the patron
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';

export const categories = [
  {
    id: "kerala-kasavu",
    name: "Kerala Kasavu",
    image: img1,
    description: "The pristine white and shimmering gold handlooms of God's own country.",
    featured: true
  },
  {
    id: "bridal-wear",
    name: "Bridal Wear",
    image: img3,
    description: "Intricately hand-embroidered, royal ensembles designed to make you feel like royalty.",
    featured: true
  },
  {
    id: "sarees",
    name: "Luxury Sarees",
    image: img2,
    description: "Pure Kanchipuram silks, Banarasis, and flowy hand-painted organzas.",
    featured: true
  },
  {
    id: "salwar-sets",
    name: "Salwar Sets",
    image: img4,
    description: "Elegant silhouettes, designer dupattas, and intricate yoke needlework.",
    featured: false
  },
  {
    id: "kurtis",
    name: "Designer Kurtis",
    image: img5,
    description: "Luxury everyday kurtis that blend modern comfort with cultural heritage.",
    featured: false
  },
  {
    id: "ajrak-collection",
    name: "Ajrak Collection",
    image: img5,
    description: "Traditional double-sided block prints using deep madder and indigo natural dyes.",
    featured: true
  },
  {
    id: "cotton-collection",
    name: "Fine Cottons",
    image: img6,
    description: "Breathable handwoven linen and mulmuls detailed with antique gold borders.",
    featured: false
  },
  {
    id: "party-wear",
    name: "Festive Glamour",
    image: img6,
    description: "Contemporary royal fusion silhouettes studded with hand-sewn sequins and pearls.",
    featured: false
  }
];

export const products = [
  {
    id: "jbs-001",
    name: "Swarna Mayil Handloom Kasavu Saree",
    category: "kerala-kasavu",
    price: 18500,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 24,
    badge: "Royal Collection",
    stock: 3,
    images: [img1, img2, img3],
    fabric: "100% Pure Handloom Balaramapuram Cotton",
    zari: "Pure 24k Gold Zari thread weave (4-inch border)",
    details: "This signature Janki masterwork features beautifully woven gold peacock motifs ('Mayil') across the pallu, set against pure fine-spun ivory cotton. Handcrafted over 14 days by state award artisans in Balaramapuram.",
    care: "Dry Clean Only. Store in pristine cotton muslin bags inside cool closets.",
    colors: ["Ivory & Antique Gold"],
    sizes: ["Unstitched (6.2 Meters with Blouse Piece)"],
    isTrending: true,
    isNew: true,
    instagramUrl: "https://www.instagram.com/reel/DYWrVvBTAzl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: [
      { author: "Anjali Menon", rating: 5, date: "April 12, 2026", comment: "The golden zari shines so elegantly under temple lightings. Felt like a queen wearing it for my sister's wedding!" },
      { author: "Deepthi Pillai", rating: 5, date: "May 03, 2026", comment: "Outstanding authentic weave. The Balaramapuram standard is visible in every single thread. Beautifully packaged too." }
    ]
  },
  {
    id: "jbs-002",
    name: "Rukmini Royal Brocade Bridal Lehenga",
    category: "bridal-wear",
    price: 84000,
    rating: 5.0,
    reviewsCount: 18,
    badge: "Exclusive Couture",
    stock: 1, // Made to order
    images: [img3, img4, img5],
    fabric: "Kanchipuram Silk & Velvet Blouse with Zardosi Borders",
    zari: "Heavy handloom pure gold thread zari work",
    details: "Named after Rukmini's timeless grace, this bridal masterpiece consists of a deep crimson silk lehenga skirt decorated with hand-embroidered temple spires, a custom-fitted plush velvet blouse, and an organza gold-dusted dupatta.",
    care: "Dry clean only. Delicate professional press under soft parchment sheet.",
    colors: ["Deep Maroon", "Rosewood Red"],
    sizes: ["S", "M", "L", "Custom Measurements"],
    isTrending: true,
    isNew: false,
    instagramUrl: "https://www.instagram.com/reel/DYrRTaTI2ul/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: [
      { author: "Shruthi Nair", rating: 5, date: "March 18, 2026", comment: "Extremely responsive custom design fitting. Seetha personally approved my blouse alterations. Truly luxury service!" }
    ]
  },
  {
    id: "jbs-003",
    name: "Madhuri Indigo Ajrakh Silk Saree",
    category: "ajrak-collection",
    price: 16200,
    originalPrice: 19500,
    rating: 4.8,
    reviewsCount: 15,
    badge: "Handblock Print",
    stock: 5,
    images: [img5, img6, img1],
    fabric: "Premium Gaji Silk",
    zari: "Minimal antique gold thread linings on boundaries",
    details: "Deep, rich indigo and madder root red block prints, hand-pressed using age-old organic resist pastes. A luxurious flowy drape with an gorgeous sheen, perfect for high-class ethnic evening gatherings.",
    care: "Dry clean recommended for the first two washes to protect natural dye saturation.",
    colors: ["Natural Indigo Blue & Terracotta"],
    sizes: ["Standard Saree (5.5 Meters + 80cm Blouse)"],
    isTrending: false,
    isNew: true,
    instagramUrl: "https://www.instagram.com/reel/DX_OXu2zbjs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: [
      { author: "Kavya Nair", rating: 4.5, date: "May 10, 2026", comment: "The drape of Gaji silk is absolute butter! Highly recommended for long wear during premium evening celebrations." }
    ]
  },
  {
    id: "jbs-004",
    name: "Athira Golden Zari Salwar Suit",
    category: "salwar-sets",
    price: 9800,
    rating: 4.7,
    reviewsCount: 32,
    badge: "Best Seller",
    stock: 12,
    images: [img2, img4, img6],
    fabric: "Chanderi Silk Kameez, Cotton Satin Bottoms, Organza Dupatta",
    zari: "Gota Patti and fine gold tissue thread edges",
    details: "In a stunning warm cream hue, this salwar set is complete with elaborate gold embroidery framing the V-neckline. The lightweight organza dupatta floats elegantly, reflecting soft candlelit sparkles.",
    care: "Dry Clean or gentle hand wash with baby shampoo in icy-cold water.",
    colors: ["Ivory Cream", "Sand Beige"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isTrending: true,
    isNew: false,
    instagramUrl: "https://www.instagram.com/reel/DXyagxLTSRq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: []
  },
  {
    id: "jbs-005",
    name: "Bhadra Emerald Velvet Kurti Set",
    category: "kurtis",
    price: 7400,
    originalPrice: 8500,
    rating: 4.6,
    reviewsCount: 11,
    badge: "Trending Now",
    stock: 8,
    images: [img4, img5, img2],
    fabric: "Royal Micro Velvet with Silk Satin Pant",
    zari: "Minimal antique golden needle highlights",
    details: "A sleek, minimally structured velvet A-line kurti boasting exquisite handloom embroidery on sleeve cuffs and collar. Deep emerald hues resonate perfectly with traditional temple festivals.",
    care: "Professional Dry Clean Only.",
    colors: ["Deep Emerald Green", "Royal Burgundy"],
    sizes: ["S", "M", "L", "XL"],
    isTrending: false,
    isNew: true,
    instagramUrl: "https://www.instagram.com/reel/DYrRTaTI2ul/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: []
  },
  {
    id: "jbs-006",
    name: "Janaki Traditional Temple Border Saree",
    category: "kerala-kasavu",
    price: 14500,
    rating: 4.9,
    reviewsCount: 42,
    badge: "Artisan Heritage",
    stock: 4,
    images: [img6, img1, img3],
    fabric: "Fine Handloom Mercerized Cotton & Pure Ghee-treated Silk Borders",
    zari: "Classic temple pattern ('Gopuram') gold weave",
    details: "The crown jewel of Kerala traditional wear. Inspired directly by the step-architecture of historic Padmanabhaswamy temple. Features pristine mercerized cotton for a crisp structure that remains effortless.",
    care: "Dry wash only. Avoid direct hot steam ironing on golden borders.",
    colors: ["Natural Cream & Gold"],
    sizes: ["Free Size Saree (6.3 Meters with Blouse Piece)"],
    isTrending: true,
    isNew: false,
    instagramUrl: "https://www.instagram.com/reel/DYWrVvBTAzl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    reviews: [
      { author: "Lakshmi Warrier", rating: 5, date: "May 20, 2026", comment: "Simply stunning. It has the authentic rustle that only true Keralan handlooms have. Pure class!" }
    ]
  }
];

export const reels = [
  {
    id: "reel-001",
    title: "Unveiling the Rukmini Bridal Weave",
    videoThumbnail: img3,
    likes: "12.8k",
    views: "245k",
    productId: "jbs-002",
    instagramUrl: "https://www.instagram.com/reel/DYrRTaTI2ul/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "reel-002",
    title: "Pristine Kasavu Peacocks in Motion",
    videoThumbnail: img1,
    likes: "8.4k",
    views: "112k",
    productId: "jbs-001",
    instagramUrl: "https://www.instagram.com/reel/DYWrVvBTAzl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "reel-003",
    title: "Chanderi Gold Lining Autumn Edit",
    videoThumbnail: img4,
    likes: "15.2k",
    views: "389k",
    productId: "jbs-004",
    instagramUrl: "https://www.instagram.com/reel/DX_OXu2zbjs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "reel-004",
    title: "Deep Emerald Velvet Craftsmanship",
    videoThumbnail: img5,
    likes: "6.9k",
    views: "98k",
    productId: "jbs-005",
    instagramUrl: "https://www.instagram.com/reel/DXyagxLTSRq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Arundhati Nair",
    location: "Kochi, Kerala",
    review: "Janki by Seetha has completely redefined the traditional Kasavu. The intricate gold peacock detailing on my Swarna Mayil saree felt incredibly personal and beautifully elevated. It is ethnic heritage crafted for the modern luxury drawer.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Meera Ramaswamy",
    location: "London, UK",
    review: "Living abroad, I wanted my bridal lehenga to carry the breeze and temple elegance of Kerala. The Rukmini bridal set custom ordered through WhatsApp exceeded every expectation. Custom fits were perfect and Seetha's updates kept me absolutely reassured.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Parvathy Seshadri",
    location: "Bangalore",
    review: "The Indigo Ajrakh Saree has the most divine gaji silk weight I've ever felt. It fits like skin and gets me a flurry of compliments every time I wear it. Authentic luxury in its purest form.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];
