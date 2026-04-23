import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of <span className="text-primary">Service</span></h1>
          <p className="text-foreground/70 mb-10">Last updated: October 2023</p>

          <div className="prose prose-invert prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our services at Sarvam Digital, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Sarvam Digital and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>In no event shall Sarvam Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
