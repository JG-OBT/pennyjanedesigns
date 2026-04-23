import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import badgeGold from '../../assets/images/badge-gold.png';
import badgeIfa from '../../assets/images/badge-ifa.png';

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-gray-100 pt-24 pb-12 overflow-hidden relative font-sans">
      {/* Background Blobs */}
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-blur-green rounded-full blur-[100px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="text-2xl font-serif font-bold text-brand-charcoal">
              Penny Jane <span className="text-brand-rose italic">Designs</span>
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-bold leading-relaxed">
              Beautiful handmade felt goods <br/> to make you feel cherished.
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com" className="text-gray-300 hover:text-brand-rose transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-brand-rose transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 border-b border-gray-50 pb-2">Connect</h4>
            <ul className="space-y-4 text-brand-charcoal text-xs font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-brand-rose transition-colors">Story</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-rose transition-colors">Gallery</Link></li>
              <li><Link to="/workshops" className="hover:text-brand-rose transition-colors">Workshops</Link></li>
              <li><a href="https://www.etsy.com/shop/PennyJaneDesigns" target="_blank" rel="noreferrer" className="hover:text-brand-rose transition-colors">Etsy Shop</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 border-b border-gray-50 pb-2">Say Hello</h4>
            <div className="space-y-2 text-sm font-medium text-gray-500">
              <p className="hover:text-brand-rose transition-colors cursor-pointer">pennyjane@blueyonder.co.uk</p>
              <p>0121 244 3569 • 07746 879 261</p>
              <p className="italic text-gray-400">West Midlands, UK</p>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 border-b border-gray-50 pb-2">Credentials</h4>
            <div className="flex gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-3 shadow-sm border border-gray-50">
                  <img src={badgeGold} alt="Gold Certificate" className="max-h-full" />
               </div>
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-3 shadow-sm border border-gray-50">
                  <img src={badgeIfa} alt="IFA Member" className="max-h-full" />
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[9px] uppercase tracking-[0.2em] text-gray-300 font-bold">
            <p>&copy; {new Date().getFullYear()} Penny Jane Designs</p>
            <Link to="/privacy-policy" className="hover:text-brand-rose">Privacy</Link>
            <Link to="/cookie-policy" className="hover:text-brand-rose">Cookies</Link>
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-gray-300 font-bold">
             <Link to="/mailing-list" className="hover:text-brand-rose">Newsletter</Link>
             <span>Handmade in the UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
