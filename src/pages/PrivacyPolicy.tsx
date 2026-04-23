import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-40 pb-24 bg-brand-cream relative min-h-screen">
      <div className="max-w-4xl mx-auto px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="frosted-card p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
        >
          <header className="mb-12 space-y-4">
            <h1 className="text-5xl font-serif text-brand-charcoal italic leading-tight">Privacy Policy</h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Last Updated: April 2024</p>
          </header>

          <div className="space-y-10 text-gray-600 leading-relaxed font-light italic">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">1. Introduction</h2>
              <p>
                At Penny Jane Designs, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">2. The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Identity Data includes first name, last name.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-brand-charcoal">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, and to withdraw consent.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
