import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 md:left-auto md:max-w-md z-50"
        >
          <div className="frosted-card p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-brand-rose/10 rounded-full flex items-center justify-center text-brand-rose flex-shrink-0">
                <Cookie size={24} />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-brand-charcoal text-lg italic">A little treat?</h3>
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    We use tiny digital crumbles (cookies) to help our website run smoothly and understand how you interact with our artisanal world. Is that okay?
                  </p>
                </div>
                <div className="flex gap-4 pt-2">
                  <button 
                    onClick={handleAccept}
                    className="px-6 py-2 bg-brand-charcoal text-white rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-brand-rose transition-all shadow-lg shadow-black/10"
                  >
                    Yes, please
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-2 bg-white/50 text-gray-400 rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-gray-100 transition-all"
                  >
                    No, thanks
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-300 hover:text-brand-charcoal transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
