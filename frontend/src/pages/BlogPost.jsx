import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen pt-32 items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      {/* Hero Header */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg mb-6 inline-block">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/80 font-medium">
                <span className="flex items-center gap-2"><User className="h-4 w-4 text-primary" /> {blog.author}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {blog.date}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {blog.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-primary prose-a:text-blue-400"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Link to="/blog" className="flex items-center gap-2 text-primary hover:text-white transition-colors font-bold">
              <ArrowLeft className="h-5 w-5" /> Back to Articles
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground/50">Share this post:</span>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">in</button>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">tw</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
