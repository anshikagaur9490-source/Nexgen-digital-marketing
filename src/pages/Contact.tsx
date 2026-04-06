import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Clock, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const Contact = () => {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xbdppbqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus('sent');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-8"
            >
              Let's Start Your <span className="text-primary">Growth Journey</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase mb-1">Call Us</p>
                      <p className="text-lg font-bold text-slate-900">9795043119; 9696646690</p>
                      <p className="text-slate-600">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase mb-1">Email Us</p>
                      <p className="text-lg font-bold text-slate-900">anshikagaur9490@gmail.com</p>
                      <p className="text-slate-600">For general inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-bold uppercase mb-1">Visit Us</p>
                      <p className="text-lg font-bold text-slate-900">569cha digital way</p>
                      <p className="text-slate-600">tech city Lucknow Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <MessageSquare className="text-primary mr-2" size={20} />
                  Live Chat
                </h4>
                <p className="text-slate-600 mb-6">
                  Need immediate help? Chat with our experts on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/919795043119" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 font-bold hover:underline"
                >
                  Start WhatsApp Chat <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
                {formStatus === 'sent' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-slate-600 text-lg mb-8">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
                    {formStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
                        Something went wrong while sending your message. Please try again or contact us directly via email.
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                          <input 
                            required
                            name="name"
                            type="text" 
                            placeholder="John Doe"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                          <input 
                            name="phone"
                            type="tel" 
                            placeholder="9795043119"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Service Interested In</label>
                          <select 
                            name="service"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none"
                          >
                            <option>SEO Optimization</option>
                            <option>Social Media Marketing</option>
                            <option>PPC / Google Ads</option>
                            <option>Web Development</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                        <textarea 
                          required
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project and goals..."
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className="btn-primary w-full py-5 text-lg flex items-center justify-center space-x-2"
                      >
                        {formStatus === 'sending' ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={20} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[500px] bg-slate-200 relative">
        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-primary mx-auto mb-4" />
            <p className="text-slate-600 font-bold">Google Map Embed Placeholder</p>
            <p className="text-slate-500 text-sm">569cha digital way tech city Lucknow Uttar Pradesh</p>
          </div>
        </div>
        {/* Real embed would go here */}
      </section>
    </div>
  );
};
