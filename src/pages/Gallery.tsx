import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Search } from 'lucide-react';

import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import gallery7 from '../assets/images/gallery-7.jpg';
import gallery8 from '../assets/images/gallery-8.jpg';

const galleryItems = [
  { id: 1, title: 'Hand-felted cape', type: 'Garment', url: gallery1 },
  { id: 2, title: 'Nuno scarf in process', type: 'Workshop', url: gallery2 },
  { id: 3, title: 'Wet felted vessel', type: 'Sculpture', url: gallery3 },
  { id: 4, title: 'Textile landscape', type: 'Picture', url: gallery4 },
  { id: 5, title: 'Indigo dyed wool', type: 'Materials', url: gallery5 },
  { id: 6, title: 'Workshop memories', type: 'Workshop', url: gallery6 },
  { id: 7, title: 'Felted wrap detail', type: 'Garment', url: gallery7 },
  { id: 8, title: 'Botanical print felt', type: 'Art', url: gallery8 },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-40 pb-24 bg-brand-cream relative min-h-screen">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blur-pink rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <header className="text-center mb-20 max-w-2xl mx-auto space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif text-brand-charcoal"
          >
            The Studio <span className="text-brand-rose italic">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 italic font-medium"
          >
            A showcase of finished felt garments, accessories, and moments from our workshops. Exploring the tactile journey of wool and silk.
          </motion.p>
        </header>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(item.url)}
            >
              <div className="overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-sm shadow-xl border-4 border-white transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-all flex flex-col justify-end p-10 text-white opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-rose bg-white inline-block px-3 py-1 rounded-full w-fit mb-3">{item.type}</span>
                    <h3 className="text-2xl font-serif italic">{item.title}</h3>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-charcoal opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                  <Search size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage} 
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
