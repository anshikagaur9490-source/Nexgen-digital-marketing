import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Share2, 
  MousePointer2, 
  Code2, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Users, 
  TrendingUp, 
  Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-indigo-50 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap size={16} />
                <span>#1 Digital Marketing Agency</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
                Grow Your Business with <span className="text-primary">Digital Marketing</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                We help ambitious brands scale through data-driven SEO, high-converting ads, and stunning web experiences. Your growth is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Get Started Free
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Our Services
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-orange-500">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Trusted by 500+ companies</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                  alt="Marketing Dashboard"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass-card p-6 rounded-2xl z-20 hidden sm:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Growth</p>
                    <p className="text-xl font-bold">+148%</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 hidden sm:block"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">New Leads</p>
                    <p className="text-xl font-bold">1,240</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p {...fadeInUp} className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              What We Do
            </motion.p>
            <motion.h2 {...fadeInUp} className="text-4xl lg:text-5xl mb-6">
              Comprehensive Solutions for Your Digital Success
            </motion.h2>
            <motion.p {...fadeInUp} className="text-slate-600 text-lg">
              We combine creativity with technical expertise to deliver results that matter.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: 'SEO Optimization', desc: 'Rank higher on Google and drive organic traffic to your site.' },
              { icon: Share2, title: 'Social Media Marketing', desc: 'Engage your audience and build a loyal community across platforms.' },
              { icon: MousePointer2, title: 'PPC & Google Ads', desc: 'Get instant visibility and high-quality leads with targeted advertising.' },
              { icon: Code2, title: 'Web Development', desc: 'Custom, high-performance websites built for conversion and speed.' },
              { icon: FileText, title: 'Content Strategy', desc: 'Compelling storytelling that resonates with your target audience.' },
              { icon: TrendingUp, title: 'Analytics & Reporting', desc: 'Data-driven insights to optimize your marketing performance.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/services" className="text-primary font-bold inline-flex items-center group/link">
                  Learn More <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2340"
                  alt="Our Team"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-3xl text-white z-20 hidden md:block">
                <p className="text-5xl font-bold mb-2">10+</p>
                <p className="font-medium opacity-90">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About Nexgen</p>
              <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">
                We are a Team of Digital Pioneers Dedicated to Your Growth
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Founded in 2015, Nexgen has helped hundreds of businesses navigate the complex digital landscape. We don't just provide services; we become your strategic partners.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Data-driven marketing strategies',
                  'Award-winning creative design',
                  'Transparent reporting and analytics',
                  'Dedicated account management'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-secondary">
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Testimonials</p>
            <h2 className="text-4xl lg:text-5xl mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'Nexgen transformed our online presence. Our leads increased by 200% in just six months!' },
              { name: 'Michael Chen', role: 'Founder, EcoStore', text: 'The best marketing agency we have ever worked with. Their SEO strategy is simply unmatched.' },
              { name: 'Emma Williams', role: 'Marketing Director, Bloom', text: 'Professional, creative, and results-oriented. They truly care about our success.' },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 p-10 rounded-3xl border border-slate-700"
              >
                <div className="flex text-orange-500 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
                Join 500+ successful brands and start your digital transformation today. Get a free audit of your current strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-white text-primary hover:bg-slate-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
                  Get Free Consultation
                </Link>
                <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
                  Contact Us Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
