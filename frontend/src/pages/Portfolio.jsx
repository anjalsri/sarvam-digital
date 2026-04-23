import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'SEO Optimization', 'Ad Campaigns', 'Branding'];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard Reboot",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      client: "CapitalSync",
      result: "+40% Daily Active Users"
    },
    {
      id: 2,
      title: "E-Commerce SEO Scaling",
      category: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      client: "Aura Essentials",
      result: "Tripled Organic Revenue"
    },
    {
      id: 3,
      title: "B2B SaaS Launch Campaign",
      category: "Ad Campaigns",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      client: "Nexus AI",
      result: "$120k ARR Pipeline in Q1"
    },
    {
      id: 4,
      title: "Luxury Real Estate Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      client: "Elysium Estates",
      result: "Sub-second Load Times"
    },
    {
      id: 5,
      title: "Global Tech Rebrand",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      client: "OmniTech Global",
      result: "Award-winning Identity"
    },
    {
      id: 6,
      title: "Local Service Maps Dominance",
      category: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1512758117929-08ce41a6b6e5?auto=format&fit=crop&q=80&w=800",
      client: "Metro Plumbers",
      result: "#1 in Local 3-Pack"
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Our <span className="text-primary">Masterpieces</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We don't just build websites and run campaigns. We engineer digital assets that dominate markets. Explore our latest success stories.
            </p>
          </motion.div>

          {/* Filter Chips */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-primary text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]' : 'bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/90 group-hover:to-black/95 transition-colors duration-500"></div>

                {/* Top Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 z-10">
                  <div className="bg-primary text-white p-4 rounded-full shadow-[0_0_30px_rgba(138,43,226,0.6)]">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-bold text-sm mb-2">{project.client}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg">
                      <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Result</p>
                      <p className="text-sm font-bold text-white">{project.result}</p>
                    </div>
                    
                    <button className="text-white hover:text-primary transition-colors">
                      <ArrowRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center glass border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to be our next success story?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Stop leaving money on the table. Partner with Sarvam Digital to engineer a growth system that consistently drives high-ticket revenue.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:scale-105 flex items-center gap-2 mx-auto">
            Book a Strategy Call <ExternalLink className="h-5 w-5" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
