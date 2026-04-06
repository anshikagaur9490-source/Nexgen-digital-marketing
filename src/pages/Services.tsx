import React from 'react';
import { motion } from 'motion/react';
import { Search, Share2, MousePointer2, Code2, FileText, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Dominate search results and drive high-quality organic traffic to your website with our expert SEO strategies.',
    benefits: ['Keyword Research', 'On-Page SEO', 'Technical SEO Audit', 'Link Building'],
    color: 'bg-blue-500'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Build a powerful brand presence and engage your audience across all major social platforms.',
    benefits: ['Content Creation', 'Community Management', 'Social Ads', 'Influencer Outreach'],
    color: 'bg-pink-500'
  },
  {
    icon: MousePointer2,
    title: 'PPC & Google Ads',
    desc: 'Get instant results and maximize your ROI with precision-targeted paid advertising campaigns.',
    benefits: ['Search Ads', 'Display Marketing', 'Remarketing', 'Conversion Tracking'],
    color: 'bg-orange-500'
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Custom-built, lightning-fast websites designed to convert visitors into loyal customers.',
    benefits: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Tuning'],
    color: 'bg-indigo-500'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    desc: 'Tell your brand story through compelling content that educates, inspires, and converts.',
    benefits: ['Blog Writing', 'Video Production', 'Email Marketing', 'Copywriting'],
    color: 'bg-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Analytics',
    desc: 'Make informed decisions with deep data insights and transparent performance reporting.',
    benefits: ['ROI Tracking', 'User Behavior Analysis', 'A/B Testing', 'Custom Dashboards'],
    color: 'bg-purple-500'
  }
];

export const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-8"
            >
              Digital Solutions for <span className="text-primary">Modern Brands</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              We provide a full suite of digital marketing services designed to help your business thrive in an ever-changing online world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
              >
                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon size={40} />
                </div>
                <h2 className="text-3xl lg:text-4xl mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center space-x-2 text-slate-700 font-medium">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get Started <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl mb-6">Our Working Process</h2>
            <p className="text-slate-600 text-lg">
              A systematic approach to ensuring your digital success from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy', desc: 'Deep research into your market and competitors.' },
              { step: '02', title: 'Execution', desc: 'Implementing high-impact marketing campaigns.' },
              { step: '03', title: 'Optimization', desc: 'Continuous testing and refining for better results.' },
              { step: '04', title: 'Reporting', desc: 'Transparent data and insights on your growth.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
              >
                <span className="text-6xl font-display font-black text-slate-100 absolute top-4 right-8 select-none">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
