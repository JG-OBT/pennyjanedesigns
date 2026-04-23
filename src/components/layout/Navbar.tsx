import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Workshops', path: '/workshops' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        scrolled ? 'frosted-nav py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className="text-2xl font-serif font-bold tracking-tight text-brand-charcoal">
            Penny Jane <span className="text-brand-rose italic">Designs</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-brand-rose transition-colors">
            Specialist Feltmaker • UK
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-brand-rose ${
                location.pathname === link.path 
                  ? 'text-brand-charcoal border-b-2 border-brand-charcoal pb-1' 
                  : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://www.etsy.com/shop/PennyJaneDesigns" 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-brand-charcoal text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-charcoal/80 transition-all shadow-lg shadow-black/10"
          >
            Shop on Etsy
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
