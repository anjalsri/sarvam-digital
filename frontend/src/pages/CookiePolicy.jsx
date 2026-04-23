import React from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie <span className="text-primary">Policy</span></h1>
          <p className="text-foreground/70 mb-10">Last updated: October 2023</p>

          <div className="prose prose-invert prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
                <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
                <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disabling Cookies</h2>
              <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
