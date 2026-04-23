import { motion } from 'motion/react';

export default function CookiePolicy() {
  return (
    <div className="pt-40 pb-24 bg-brand-cream relative min-h-screen">
      <div className="max-w-4xl mx-auto px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="frosted-card p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
        >
          <header className="mb-12 space-y-4">
            <h1 className="text-5xl font-serif text-brand-charcoal italic leading-tight">Cookie Policy</h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Last Updated: April 2024</p>
          </header>

          <div className="space-y-10 text-gray-600 leading-relaxed font-light italic">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">2. How We Use Cookies</h2>
              <p>
                As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
              <p>
                The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, and all in all providing you with a better and improved user experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong className="text-brand-charcoal">Necessary:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">4. Controlling Cookies</h2>
              <p>
                You can manage your cookies preferences by clicking on the "Settings" button and enabling or disabling the cookie categories on the popup according to your preferences. 
              </p>
              <p>
                In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
