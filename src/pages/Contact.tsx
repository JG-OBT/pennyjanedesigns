import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 bg-brand-cream relative min-h-screen">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blur-pink rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <header className="max-w-3xl mb-24 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif text-brand-charcoal"
          >
            Get in <span className="text-brand-rose italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-medium leading-relaxed italic"
          >
            Whether you have a question about a workshop, interested in a custom commission, or just want to say hello, I'd love to hear from you.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-brand-rose flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-brand-rose group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] items-center gap-2 uppercase tracking-[0.3em] font-bold text-gray-400">Email Me</h3>
                  <a href="mailto:pennyjane@blueyonder.co.uk" className="text-xl font-serif text-brand-charcoal hover:text-brand-rose transition-colors">pennyjane@blueyonder.co.uk</a>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-brand-rose flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-brand-rose group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Call Me</h3>
                  <div className="space-y-1">
                    <p className="text-xl font-serif text-brand-charcoal">0121 244 3569</p>
                    <p className="text-xl font-serif text-brand-charcoal">07746 879 261</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-brand-rose flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-brand-rose group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Location</h3>
                  <p className="text-lg font-serif italic text-brand-charcoal">Based in the West Midlands, UK. <br/> workshops held across the region.</p>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="aspect-[16/10] bg-gray-50 rounded-[3rem] overflow-hidden relative shadow-inner border-4 border-white group">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310620.1764669833!2d-2.2858805244569584!3d52.411756531478144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870ace099190161%3A0x6e39efd9518db6f2!2sWest%20Midlands!5e0!3m2!1sen!2suk!4v1713886742000!5m2!1sen!2suk" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="grayscale-[0.3] contrast-[0.9] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
               ></iframe>
               <div className="absolute bottom-8 left-8 right-8 frosted-card p-6 rounded-3xl shadow-2xl space-y-2 pointer-events-none">
                  <p className="text-[10px] font-bold text-brand-rose uppercase tracking-[0.2em]">Workshop Region</p>
                  <p className="text-sm font-serif italic text-brand-charcoal leading-relaxed">Serving Birmingham, Worcestershire, and Warwickshire.</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="frosted-card rounded-[3.5rem] p-12 md:p-16 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.08)]">
            <h3 className="text-3xl font-serif mb-10 text-brand-charcoal">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300 ml-4">First Name</label>
                  <input type="text" className="w-full px-8 py-4 rounded-2xl bg-white/50 border border-gray-100 focus:bg-white focus:shadow-lg focus:border-brand-rose transition-all outline-none text-sm" placeholder="Jane" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300 ml-4">Last Name</label>
                  <input type="text" className="w-full px-8 py-4 rounded-2xl bg-white/50 border border-gray-100 focus:bg-white focus:shadow-lg focus:border-brand-rose transition-all outline-none text-sm" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300 ml-4">Email Address</label>
                <input type="email" className="w-full px-8 py-4 rounded-2xl bg-white/50 border border-gray-100 focus:bg-white focus:shadow-lg focus:border-brand-rose transition-all outline-none text-sm" placeholder="jane@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-300 ml-4">How can I help?</label>
                <textarea rows={5} className="w-full px-8 py-4 rounded-2xl bg-white/50 border border-gray-100 focus:bg-white focus:shadow-lg focus:border-brand-rose transition-all outline-none text-sm resize-none" placeholder="Tell me about your project or inquiry..."></textarea>
              </div>
              <button className="w-full py-5 bg-brand-charcoal text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-rose transition-all shadow-2xl shadow-black/20 flex items-center justify-center gap-4">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
