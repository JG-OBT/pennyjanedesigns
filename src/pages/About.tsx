import { motion } from 'motion/react';
import { Camera, Heart, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import pennyImg from '../assets/images/penny.jpg';
import studioImg from '../assets/images/hero.jpg';

export default function About() {
  return (
    <div className="pt-40 pb-24 overflow-hidden bg-brand-cream relative">
      {/* Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blur-pink rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-100px] w-[400px] h-[400px] bg-blur-green rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12">
        {/* Story Section - The Beginning */}
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] border-8 border-white relative z-10 blob-organic">
               <img 
                 src={pennyImg} 
                 alt="Penny Jane in her studio" 
                 className="w-full h-full object-cover grayscale-[0.2]"
               />
            </div>
            <div className="absolute -inset-10 bg-brand-rose/10 blob-organic -z-10 rotate-12" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 block italic">The Artisanal Journey</span>
              <h1 className="text-6xl font-serif text-brand-charcoal leading-tight">I'm Penny Jane.</h1>
            </div>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light italic">
              <p>
                Working as a community artist meant I was good at a lot of basic arts and crafts and was always starting and finishing artwork for everyone else. Although I had a degree in fashion and textiles I had never explored my own work any further and decided I needed to specialise in an art technique and take it further. And thus the noble art of felt-making was revisited.
              </p>
              <p>
                In 2007 I had the temerity to put my own work on display at an arts fair and learned so much in one day ~ like how excruciating it is showing off work for the first time and not to trust a drunk man who wants to buy an item with a fake twenty pound note. 
              </p>
              <p>
                Despite fake money and strange folks I nearly fell off my little pink chair when genuine people started buying things from me ~ and with real money, I might add!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Studio & Rhythm Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-1"
          >
            <h2 className="text-4xl font-serif text-brand-charcoal leading-tight">Following the <span className="text-brand-sage italic">Sun.</span></h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-light italic">
              <p>
                Penny Jane Designs HQ is split into wet and dry areas ~ my computer spot in the front of the house where I sometimes spend far too much time browsing online in the warmth ~ and my studio space, bursting at the seams but with enough space to throw around wet felt and get really messy.
              </p>
              <p>
                I feel it is important to work to our own rhythms and respond to the seasons. I sometimes find myself following the sun from the front (computer spot) of the house in the morning to the back in the afternoon (studio space).
              </p>
              <p>
                Pieces are made according to mood and energy. Sometimes my work is bright and quirky. Other times it is quiet and contemplative. But it is always made with thought and care with time and space to reflect on the development of new pieces.
              </p>
            </div>
          </motion.div>
          
          <div className="lg:order-2 grid grid-cols-2 gap-6 relative">
            <div className="space-y-6 pt-12">
               <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-2">
                 <img src={studioImg} className="w-full h-full object-cover" alt="Studio Detail" />
               </div>
               <div className="frosted-card p-8 rounded-3xl space-y-3">
                  <p className="text-[10px] uppercase font-bold text-brand-rose">The Philosophy</p>
                  <p className="text-sm font-serif italic text-brand-charcoal">"Quiet, contemplative, and always made with care."</p>
               </div>
            </div>
            <div className="space-y-6">
               <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white -rotate-3">
                 <img src={pennyImg} className="w-full h-full object-cover" alt="Artist at work" />
               </div>
               <p className="text-xs text-gray-400 italic">I am also a compulsive list writer and hoarder of small objects that may come in useful one day.</p>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { icon: <Heart size={28}/>, title: 'Each Piece Unique', text: 'Because it is all handmade, every garment carried its own singular moment in time captured in fiber.', color: 'text-brand-rose' },
              { icon: <BookOpen size={28}/>, title: 'Sharing the Craft', text: 'Discovery is the meditative joy of discovered textile creation through my regions workshops.', color: 'text-brand-sage' },
              { icon: <Sparkles size={28}/>, title: 'Award Winning', text: 'Gold Certificate of Excellence and proud member of the International Feltmakers Association 2024.', color: 'text-brand-charcoal' }
            ].map((feature, i) => (
              <div key={i} className="frosted-card p-12 rounded-[2.5rem] hover:bg-white/60 transition-all duration-500 space-y-6">
                <div className={`${feature.color}`}>{feature.icon}</div>
                <h3 className="text-2xl font-serif text-brand-charcoal">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed italic">{feature.text}</p>
              </div>
            ))}
        </div>

        {/* Credentials / Call to Action */}
        <div className="bg-brand-charcoal rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-charcoal/20">
           <div className="relative z-10 max-w-2xl mx-auto space-y-12">
              <h2 className="text-5xl font-serif text-white leading-tight italic">Ready to explore <br/> the tactile world?</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a 
                   href="https://www.etsy.com/shop/PennyJaneDesigns" 
                   target="_blank" 
                   rel="noreferrer"
                   className="bg-brand-rose text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-brand-charcoal transition-all shadow-xl shadow-black/20"
                 >
                   Explore the Etsy Shop
                 </a>
                 <Link 
                   to="/workshops"
                   className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all"
                 >
                   Book a Workshop
                 </Link>
              </div>
           </div>
           {/* Decor organice blobs */}
           <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 blob-organic translate-x-[-30%] translate-y-[-30%] rotate-12" />
           <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 blob-organic translate-x-[30%] translate-y-[30%] -rotate-12" />
        </div>
      </div>
    </div>
  );
}
