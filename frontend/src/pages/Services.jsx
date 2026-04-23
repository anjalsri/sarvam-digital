import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Share2, MousePointerClick, Code, BookOpen, PenTool, Database, Shield, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Search Engine Optimization (SEO)",
      shortDesc: "Rank #1 on Google with our data-driven SEO strategies.",
      fullDesc: "Our comprehensive SEO methodology focuses on technical health, authority building, and content relevance. We don't just chase traffic; we target high-intent keywords that drive actual revenue and conversions for your business.",
      features: ["On-Page Optimization", "Technical SEO Audits", "Link Building", "Local SEO Maps Pack", "Keyword GAP Analysis"]
    },
    {
      id: 2,
      icon: <Share2 className="h-10 w-10 text-blue-400" />,
      title: "Social Media Marketing",
      shortDesc: "Build a massive, engaged community across diverse platforms.",
      fullDesc: "We craft viral, engaging content tailored to your brand voice. From Instagram Reels to LinkedIn thought leadership, our community managers foster authentic relationships that turn casual followers into brand advocates.",
      features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Analytics & Reporting", "Viral Campaign Design"]
    },
    {
      id: 3,
      icon: <MousePointerClick className="h-10 w-10 text-green-400" />,
      title: "Google & Meta Ads",
      shortDesc: "High-ROI paid advertising optimized by machine learning.",
      fullDesc: "Stop wasting ad spend. We utilize dynamic creative testing, hyper-specific audience targeting, and automated bid strategies to aggressively scale your customer acquisition while driving down the cost per lead (CPL).",
      features: ["PPC Campaigns", "Retargeting Pixels", "A/B Multivariate Testing", "Conversion Tracking", "Lookalike Audiences"]
    },
    {
      id: 4,
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Custom Web Development",
      shortDesc: "Blazing-fast SaaS platforms and corporate websites.",
      fullDesc: "We build digital experiences engineered for speed, scalability, and security. Utilizing the latest tech stacks (React, Node.js, Next.js), we deliver progressive web apps that feel native and convert significantly better than templates.",
      features: ["React & Node.js Architecture", "Headless E-commerce", "Performance Optimization", "UI/UX Design", "Custom API Integrations"]
    },
    {
      id: 5,
      icon: <BookOpen className="h-10 w-10 text-orange-400" />,
      title: "Content Marketing",
      shortDesc: "Compelling narratives powered by expert writers and AI.",
      fullDesc: "Establish industry authority with our premium content creation services. We produce deeply researched, highly engaging blog posts, whitepapers, and video scripts designed to educate your audience and dominate search intent.",
      features: ["Long-form Blog Posts", "Whitepapers & E-books", "Email Newsletter Sequences", "Video Sales Scripts", "AI-Assisted Drafting"]
    },
    {
      id: 6,
      icon: <PenTool className="h-10 w-10 text-pink-400" />,
      title: "Brand Identity Design",
      shortDesc: "Logos, typography, and visual systems that stand out.",
      fullDesc: "Your brand is more than a logo; it's a feeling. Our creative directors build cohesive, modern visual identities that communicate premium value and instantly differentiate you from competitors in crowded markets.",
      features: ["Logo Conception", "Brand Guidelines", "Typography & Color Palettes", "Marketing Collateral", "Rebranding Services"]
    },
    {
      id: 7,
      icon: <Database className="h-10 w-10 text-teal-400" />,
      title: "Data Analytics & BI",
      shortDesc: "Transform raw data into actionable business intelligence.",
      fullDesc: "We implement advanced tracking setups and build custom real-time dashboards so you can visualize your entire marketing funnel. Never make a gut decision again—let your data dictate your next growth move.",
      features: ["Google Analytics 4 Setup", "Custom Looker Studio Dashboards", "Funnel Visualization", "Attribution Modeling", "Data Warehousing"]
    },
    {
      id: 8,
      icon: <Shield className="h-10 w-10 text-red-400" />,
      title: "Cybersecurity Consulting",
      shortDesc: "Protect your digital assets with enterprise-grade security.",
      fullDesc: "In a world of increasing digital threats, we ensure your web applications are hardened against attacks. From penetration testing to compliance audits, we protect your user data and maintain your brand reputation.",
      features: ["Penetration Testing", "Vulnerability Scanning", "GDPR/CCPA Compliance", "SSL/TLS Hardening", "Incident Response Plans"]
    }
  ];

  const toggleService = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-40 left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-[-10%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Services</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-16 leading-relaxed">
            We don't just offer digital marketing. We provide a fully integrated growth engine engineered to scale your revenue and crush your competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              className={`glass border transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer ${activeService === service.id ? 'border-primary shadow-[0_0_30px_rgba(138,43,226,0.3)] scale-[1.02]' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => toggleService(service.id)}
            >
              <div className="p-8 flex items-start gap-6">
                <div className="p-4 bg-background/50 rounded-2xl border border-white/10 shadow-lg shrink-0">
                  {service.icon}
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-2 flex justify-between items-center">
                    {service.title}
                    <ChevronDown className={`h-5 w-5 text-foreground/50 transition-transform duration-300 ${activeService === service.id ? 'rotate-180 text-primary' : ''}`} />
                  </h2>
                  <p className="text-foreground/70">{service.shortDesc}</p>
                </div>
              </div>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8"
                  >
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-foreground/90 leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>
                      <h4 className="font-bold text-lg mb-4 text-primary">Core Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                             <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                             <span className="font-medium text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-4 flex justify-end">
                        <button className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full font-bold transition-all text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105">
                          Request Proposal
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
