import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, CheckCircle2, Rocket, Heart, ShieldCheck } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Who We Are
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-8"
            >
              We Build Brands that <span className="text-primary">Matter</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Nexgen is a collective of digital strategists, creative designers, and technical wizards working together to push the boundaries of what's possible online.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {[
              { label: 'Years Experience', value: '10+' },
              { label: 'Projects Completed', value: '1.2k' },
              { label: 'Happy Clients', value: '500+' },
              { label: 'Awards Won', value: '25' },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeInUp}>
                <p className="text-4xl lg:text-5xl font-display font-bold mb-2">{stat.value}</p>
                <p className="text-indigo-100 font-medium uppercase tracking-wider text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing strategies that drive real, measurable growth and create lasting impact in their industries.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-slate-900 p-12 rounded-[3rem] text-white">
              <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the global leader in digital transformation, recognized for our innovation, integrity, and unwavering commitment to our clients' success in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl mb-6">Meet the Experts</h2>
            <p className="text-slate-600 text-lg">
              The passionate individuals behind our clients' success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'CEO & Founder', img: '1' },
              { name: 'Sarah Chen', role: 'Head of SEO', img: '2' },
              { name: 'Marcus Thorne', role: 'Creative Director', img: '3' },
              { name: 'Elena Vance', role: 'Lead Developer', img: '4' },
            ].map((member, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={`https://i.pravatar.cc/400?img=${i + 10}`}
                    alt={member.name}
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-slate-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
