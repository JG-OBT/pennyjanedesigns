import { motion } from 'motion/react';
import { ShoppingBag, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import shop1 from '../assets/images/gallery-1.jpg';
import shop2 from '../assets/images/gallery-2.jpg';
import shop3 from '../assets/images/gallery-3.jpg';
import shop4 from '../assets/images/gallery-4.jpg';

const mockShopItems = [
  { id: 1, name: 'Hand-felted Nuno Silk Scarf', price: '£85.00', image: shop1 },
  { id: 2, name: 'Organic Wool Felt Bowl', price: '£45.00', image: shop2 },
  { id: 3, name: 'Textile Art Picture', price: '£120.00', image: shop3 },
  { id: 4, name: 'Needle Felting Kit', price: '£25.00', image: shop4 },
];

export default function Shop() {
  return (
    <div className="pt-40 pb-24 bg-brand-cream relative min-h-screen">
      {/* Background Blobs */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-blur-pink rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-serif text-brand-charcoal"
            >
              Shop <span className="text-brand-rose italic">Handmade</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 font-light italic leading-relaxed"
            >
              Each item is a unique labor of love. I sell exclusively through my Etsy shop to ensure a secure and smooth experience for all my customers globally.
            </motion.p>
          </div>
          <a 
            href="https://www.etsy.com/shop/PennyJaneDesigns"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-4 bg-brand-charcoal text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-rose transition-all shadow-xl shadow-black/10"
          >
            Visit Etsy Store
          </a>
        </header>

        {/* Featured Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {mockShopItems.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="frosted-card rounded-[2.5rem] overflow-hidden group hover:bg-white/60 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden bg-gray-50 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold shadow-sm text-brand-charcoal">
                  Original
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-serif text-lg text-brand-charcoal italic">{item.name}</h3>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-brand-rose font-serif text-lg">{item.price}</span>
                  <a 
                    href="https://www.etsy.com/shop/PennyJaneDesigns" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-brand-charcoal transition-colors"
                  >
                    Etsy Shop
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="frosted-card rounded-[4rem] p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group">
           <div className="relative z-10 space-y-8">
              <Sparkles className="mx-auto text-brand-rose mb-6" size={40} />
              <h2 className="text-4xl font-serif text-brand-charcoal italic">Looking for something <br/> truly bespoke?</h2>
              <p className="text-gray-500 mb-8 max-w-xl mx-auto italic font-light leading-relaxed">
                I love working on custom commissions—whether it's a specific colorway for a scarf or a large-scale wall hanging. Let's create something beautiful together.
              </p>
              <Link 
                to="/contact" 
                className="px-12 py-4 bg-brand-charcoal text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-rose transition-all shadow-xl shadow-black/10 inline-block"
              >
                Inquire about a commission
              </Link>
           </div>
           {/* Blob decor */}
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-rose/5 to-brand-sage/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </div>
  );
}
