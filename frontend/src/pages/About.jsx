import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const team = [
    { name: "Anjal Srvastav", role: "Founder & CEO", image: "/images/Anjal_founder.jpg" },
    { name: "Ayushi Gaur", role: "Lead Developer", image: "/images/ayushi.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            Empowering Your Digital Evolution
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-foreground/70"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            We are a team of passionate marketers, developers, and designers dedicated to building digital experiences that drive real business growth.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="h-8 w-8 text-primary" />, title: "Our Mission", desc: "To deliver scalable, ROI-driven digital solutions that push the boundaries of technology." },
              { icon: <Zap className="h-8 w-8 text-primary" />, title: "Our Vision", desc: "To become the global leader in AI-augmented digital marketing and software development." },
              { icon: <Users className="h-8 w-8 text-primary" />, title: "Our Values", desc: "Transparency, Innovation, Excellence, and Customer-Centricity in everything we build." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="glass p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-white/70">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
