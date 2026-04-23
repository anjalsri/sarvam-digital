import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sarvam <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Expert strategies, industry news, and guides to help you scale your business in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={blog.id}
              className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex flex-col h-full hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {blog.author}</span>
                </div>
                
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h3>
                </Link>
                
                <p className="text-sm text-foreground/70 mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to={`/blog/${blog.id}`} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors group/btn inline-flex">
                    Read Article <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
