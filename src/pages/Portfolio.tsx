import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const projects = [
  {
    title: 'EcoStore E-commerce',
    category: 'Web Development / SEO',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2340',
    results: '+150% Sales Growth'
  },
  {
    title: 'TechFlow SaaS',
    category: 'PPC / Google Ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    results: '2.5x Lead Generation'
  },
  {
    title: 'Bloom Cosmetics',
    category: 'Social Media / Branding',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2340',
    results: '50k+ New Followers'
  },
  {
    title: 'Urban Real Estate',
    category: 'SEO / Content Strategy',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2340',
    results: 'Top 3 Google Ranking'
  },
  {
    title: 'FitLife App',
    category: 'Mobile Marketing',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2340',
    results: '100k+ App Downloads'
  },
  {
    title: 'Global Logistics',
    category: 'B2B Strategy',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2340',
    results: 'Reduced CPL by 40%'
  }
];

export const Portfolio = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Work
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-8"
            >
              Proven Results for <span className="text-primary">Ambitious Brands</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Explore our portfolio of successful projects and see how we've helped businesses like yours achieve their digital goals.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-medium">
                      {project.results}
                    </span>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Want to see your brand here?</h2>
          <Link to="/contact" className="btn-primary">
            Start Your Project <ArrowRight size={20} className="ml-2 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};
