import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, PenTool, TrendingUp, CheckCircle2, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const { user } = useAuth();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const services = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic to your site." },
    { icon: <Globe className="h-6 w-6 text-primary" />, title: "Web Development", desc: "Fast, responsive, and beautiful websites built with modern tech." },
    { icon: <BarChart3 className="h-6 w-6 text-primary" />, title: "Performance Ads", desc: "Data-driven ad campaigns on Google and Facebook to maximize ROI." },
    { icon: <PenTool className="h-6 w-6 text-primary" />, title: "Content Creation", desc: "Engaging copy and AI-powered content strategies." }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "CEO, TechFlow", content: "Sarvam Digital transformed our online presence. Our conversion rates have doubled since they took over our digital strategy." },
    { name: "David Chen", role: "Founder, GrowthStack", content: "The level of technical expertise and marketing acumen this team brings is unmatched. Highly recommended." },
    { name: "Emily Rodriguez", role: "Marketing Dir.", content: "A true partner in growth. They don't just execute; they innovate and bring new ideas to the table every month." }
  ];

  const faqs = [
    { question: "What is your typical project timeline?", answer: "Project timelines vary based on scope, but a typical website redesign takes 4-6 weeks, while marketing campaigns show initial results within the first 30 days." },
    { question: "Do you offer ongoing support?", answer: "Absolutely! We provide comprehensive maintenance plans, 24/7 technical support, and continuous marketing optimization." },
    { question: "What technologies do you specialize in?", answer: "We specialize in modern stacks like React, Next.js, FastAPI, and Node.js for development, alongside advanced AI tools for marketing automation." },
    { question: "How do you measure success?", answer: "We define clear KPIs before starting any project. Success is measured through real-time analytics dashboards tracking conversions, traffic growth, and ROI." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* We removed the static background gradient here because the global 3D background handles it */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Scale Your Brand With <br className="hidden md:block"/>
            <span className="text-gradient">Intelligent Marketing</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sarvam Digital is a full-stack marketing and development agency turning clicks into loyal customers using state-of-the-art tech and data-driven strategies.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {user ? (
              <Link to={`/dashboard/${user.role}`} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 group">
                Go to Dashboard <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link to="/register" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 group">
                Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            <Link to="/portfolio" className="glass hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center border border-white/10">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            <div className="text-xl font-bold font-serif">Acme Corp</div>
            <div className="text-xl font-bold font-sans">GlobalTech</div>
            <div className="text-xl font-bold font-mono">Quantum</div>
            <div className="text-xl font-bold italic">Stark Ind.</div>
            <div className="text-xl font-bold">Wayne Ent.</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Everything you need to dominate your industry online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 group"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">99%</div>
              <div className="text-foreground/70 font-medium tracking-wide">Client Satisfaction</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">500+</div>
              <div className="text-foreground/70 font-medium tracking-wide">Projects Delivered</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">$50M</div>
              <div className="text-foreground/70 font-medium tracking-wide">Revenue Generated</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-foreground/70 font-medium tracking-wide">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Sarvam Digital?</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                We bridge the gap between stunning aesthetics and ruthless conversion rates. Our team doesn't just build websites; we build scalable digital ecosystems powered by cutting-edge AI.
              </p>
              <ul className="space-y-6">
                {["Data-Driven Decisions", "Award-Winning Designs", "Transparent AI-Powered Analytics", "Dedicated Support 24/7"].map((item, id) => (
                  <li key={id} className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <CheckCircle2 className="text-primary h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="relative aspect-square md:aspect-video lg:aspect-square glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                 <div className="text-center p-8">
                    <BarChart3 className="w-24 h-24 mx-auto mb-4 opacity-50 text-primary" />
                    <p className="text-xl font-medium">Dashboard Preview</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black/30 border-y border-white/5 relative z-10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Don't just take our word for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx}
                className="glass p-8 rounded-2xl border border-white/5 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-foreground/80 mb-8 italic leading-relaxed">"{test.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{test.name}</h4>
                    <p className="text-sm text-foreground/60">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/70">Everything you need to know about our services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass rounded-xl border border-white/5 overflow-hidden">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {activeFaq === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-foreground/50" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-foreground/70 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl -z-10 rounded-3xl mx-4 lg:mx-auto max-w-7xl"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join hundreds of clients who have scaled their operations with our bespoke SaaS and marketing services.
          </p>
          <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-full text-lg font-semibold transition-all inline-block shadow-xl shadow-primary/30">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
