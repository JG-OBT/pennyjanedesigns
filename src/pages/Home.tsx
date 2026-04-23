import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Calendar, Sparkles } from 'lucide-react';
import { WORKSHOPS } from '../constants/workshops';
import heroImg from '../assets/images/hero.jpg';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';

const featuredWorkshops = WORKSHOPS.slice(0, 2);

export default function Home() {
  return (
    <div className="overflow-hidden bg-brand-cream relative">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] bg-blur-pink rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-100px] w-[600px] h-[600px] bg-blur-green rounded-full blur-[150px] opacity-30 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] text-brand-charcoal">
              Beautiful handmade <br/> felt goods to make <br/>
              you <span className="italic text-brand-rose">feel cherished.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Each piece is unique, hand-crafted with intention in the heart of the UK. Join the slow revolution and embrace the tactile beauty of sustainable craft.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/workshops"
                className="px-8 py-3.5 bg-brand-sage text-white rounded-full font-bold shadow-xl shadow-brand-sage/20 hover:scale-105 transition-all text-sm uppercase tracking-widest"
              >
                View Workshops
              </Link>
              <Link 
                to="/about"
                className="px-8 py-3.5 bg-white/60 backdrop-blur-md border border-gray-100 rounded-full font-bold text-brand-charcoal hover:bg-white transition-all text-sm uppercase tracking-widest"
              >
                The Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-blob-organic overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white relative z-10 blob-organic">
               <img 
                 src={heroImg} 
                 alt="Felt Detail" 
                 className="w-full h-full object-cover grayscale-[0.2]"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-rose/10 to-transparent" />
            </div>
            {/* Info Floating Card */}
            <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="absolute -bottom-8 -left-8 bg-white/80 backdrop-blur-lg p-5 rounded-2xl border border-white/50 shadow-2xl max-w-[240px] z-20"
            >
               <p className="text-xs leading-relaxed text-gray-500 italic font-medium">
                "Slow process, one-of-a-kind fibers, purely organic textile art."
               </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Workshops (Frosted Grid Style) */}
      <section className="py-32 px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Rest, Stay Awhile</h3>
            <h2 className="text-4xl font-serif text-brand-charcoal leading-tight">
              Learn the ancient <br/> art of <span className="text-brand-rose italic">felting.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Explore upcoming workshops held in historic locations across the West Midlands.
            </p>
            <Link to="/workshops" className="inline-block text-brand-charcoal border-b border-brand-charcoal pb-1 text-xs font-bold uppercase tracking-widest hover:text-brand-rose hover:border-brand-rose transition-all">
              Full 2026 Calendar
            </Link>
          </div>

          <div className="lg:col-span-1 frosted-card p-8 rounded-3xl space-y-6">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 border-b border-gray-100 pb-3">Available Dates</h3>
            <div className="space-y-6">
              {featuredWorkshops.map((ws) => (
                <div key={ws.id} className="flex justify-between items-start group cursor-pointer">
                  <div className="space-y-1">
                    <p className="font-bold text-sm group-hover:text-brand-rose transition-colors">{ws.title}</p>
                    <p className="text-[11px] text-gray-400">{ws.date} • {ws.location.split(',')[0]}</p>
                  </div>
                  <span className="text-xs font-bold text-brand-rose">{ws.price.split(' ')[0]}</span>
                </div>
              ))}
            </div>
            <Link to="/workshops" className="w-full py-3 bg-brand-charcoal text-white rounded-xl text-[10px] uppercase tracking-widest font-bold text-center block hover:bg-gray-800 transition-all">
              Book a Workshop
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-brand-charcoal p-8 rounded-3xl text-white space-y-4 shadow-2xl shadow-brand-charcoal/20">
              <h3 className="text-xs font-bold uppercase tracking-widest">Slow Revolution</h3>
              <p className="text-xs text-white/60 leading-relaxed italic">
                Get exclusive early access to workshop dates, studio updates, and behind-the-scenes stories.
              </p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-xs flex-1 outline-none focus:border-white/40 transition-all"
                />
                <button className="bg-white text-brand-charcoal p-2.5 rounded-xl hover:scale-105 transition-transform">
                  <ArrowRight size={16} />
                </button>
              </form>
              <p className="text-[9px] text-white/30">Beautiful things only. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight (Organic Shapes) */}
      <section className="py-32 px-12 relative z-10 bg-white/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex justify-between items-center border-b border-gray-100 pb-8">
            <h2 className="text-4xl font-serif text-brand-charcoal">The Studio Gallery</h2>
            <Link to="/gallery" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-brand-rose transition-colors">See All Work</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`aspect-square overflow-hidden shadow-xl border-4 border-white ${i === 1 ? 'blob-organic rounded-[60%_40%_30%_70%]' : 'rounded-3xl'}`}>
                   <img src={img} className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0 group-hover:scale-110 duration-700" />
                </div>
                <div className="mt-6 text-center">
                   <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Edition {i + 1}</p>
                   <p className="text-sm font-serif italic text-brand-charcoal mt-1">One-of-a-kind handmade felt</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
