import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's discuss how we can scale your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-foreground/70 text-sm mt-1">hello@sarvamdigital.com</p>
                    <p className="text-foreground/70 text-sm">support@sarvamdigital.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-foreground/70 text-sm mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Office</h4>
                    <p className="text-foreground/70 text-sm mt-1">123 Tech Boulevard<br/>Suite 500, Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Google Map via placeholder */}
            <div className="h-64 rounded-2xl border border-border overflow-hidden bg-secondary relative">
              <div className="absolute inset-0 flex items-center justify-center text-foreground/40 font-medium">
                [Google Maps Integration]
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass p-8 rounded-2xl border border-border h-full">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <select className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                    <option>Web Development</option>
                    <option>SEO Services</option>
                    <option>Paid Advertising</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-4 py-3 transition-colors flex items-center justify-center gap-2 mt-4">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
