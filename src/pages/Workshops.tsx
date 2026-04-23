import { motion } from 'motion/react';
import { WORKSHOPS } from '../constants/workshops';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Workshops() {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden bg-brand-cream">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blur-pink rounded-full blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        {/* Intro */}
        <header className="max-w-2xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif mb-8 text-brand-charcoal"
          >
            Workshops & <br/><span className="text-brand-rose italic">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed font-medium"
          >
            Teaching the ancient arts of felting, spinning, weaving, and seasonal crafts. Join us in the heart of the UK for a meditative session of slow textile creation.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Calendar List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-gray-200"></span>
              Upcoming 2026 Calendar
            </h2>
            
            <div className="space-y-6">
              {WORKSHOPS.map((ws) => (
                <motion.div 
                  key={ws.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="frosted-card p-10 rounded-[2.5rem] group hover:bg-white/60 transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-rose bg-white px-3 py-1 rounded-full shadow-sm">
                          {ws.date}
                        </span>
                        {ws.isTBC && (
                          <span className="text-[9px] uppercase tracking-widest font-bold text-gray-300">TBC</span>
                        )}
                      </div>
                      <h3 className="text-2xl font-serif text-brand-charcoal group-hover:text-brand-rose transition-colors duration-500">
                        {ws.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed italic">{ws.description}</p>
                      
                      <div className="flex flex-wrap gap-8 pt-4">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                          <MapPin size={14} className="text-brand-sage" />
                          {ws.location.split(',')[0]}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                          <Clock size={14} className="text-brand-sage" />
                          {ws.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end min-w-[140px]">
                      <span className="text-2xl font-serif text-brand-charcoal">{ws.price.split(' ')[0]}</span>
                      <a 
                        href="https://www.etsy.com/shop/PennyJaneDesigns"
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 bg-brand-charcoal text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-rose transition-all rounded-full shadow-xl shadow-black/10"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-40 space-y-12">
              <div className="bg-brand-charcoal p-10 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-brand-charcoal/30 relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-serif">Slow Revolution</h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light italic">
                    Classes fill up fast. Join the mailing list for early access to dates and exclusive subscriber discounts.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs outline-none focus:bg-white/10 transition-all placeholder:text-white/30"
                    />
                    <button className="w-full py-4 bg-white text-brand-charcoal rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-rose hover:text-white transition-all shadow-xl shadow-black/20">
                      Join the List
                    </button>
                  </form>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blob-organic pointer-events-none rotate-45" />
              </div>

              <div className="frosted-card p-10 rounded-[2.5rem] space-y-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 border-b border-gray-100 pb-4">Workshop Venues</h3>
                <div className="space-y-8">
                  {[
                    { name: 'Bewdley Museum', loc: 'DY12 2AE' },
                    { name: 'Warwickshire Artisans', loc: 'B95 6BY' },
                    { name: 'MAC Birmingham', loc: 'B12 9QH' },
                    { name: 'Cartlands Tearooms', loc: 'B14 7TQ' }
                  ].map((venue, i) => (
                    <div key={i} className="group">
                      <p className="font-serif text-lg text-brand-charcoal group-hover:text-brand-rose transition-colors">{venue.name}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-1">{venue.loc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 italic leading-relaxed pt-8 border-t border-gray-100">
                  Private bookings for groups or bespoke sessions available upon enquiry. <Link to="/contact" className="text-brand-rose font-bold hover:underline">Get in touch</Link>.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
