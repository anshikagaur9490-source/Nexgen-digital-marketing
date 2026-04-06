import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const posts = [
  {
    title: 'How to Rank on Google in 2026: The Ultimate Guide',
    excerpt: 'Discover the latest SEO strategies and algorithm updates you need to know to dominate search results.',
    date: 'March 28, 2026',
    author: 'Sarah Chen',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2340'
  },
  {
    title: '10 Social Media Trends That Will Define This Year',
    excerpt: 'From short-form video to community-led growth, here are the trends shaping the social landscape.',
    date: 'March 25, 2026',
    author: 'Alex Rivera',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2340'
  },
  {
    title: 'Maximizing Your ROI with Google Ads: Expert Tips',
    excerpt: 'Learn how to optimize your ad spend and drive high-quality leads without breaking the bank.',
    date: 'March 20, 2026',
    author: 'Michael Chen',
    category: 'PPC',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340'
  }
];

export const Blog = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Blog
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold mb-8"
          >
            Insights for <span className="text-primary">Digital Growth</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:bg-white/20 outline-none transition-all"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link to="/blog" className="text-primary font-bold inline-flex items-center group/link">
                  Read More <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
