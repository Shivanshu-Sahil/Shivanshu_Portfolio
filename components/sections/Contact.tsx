"use client";
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Reveal } from '@/components/ui/Reveal';
import { Sparkle } from '@/components/ui/Sparkle';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_ew11n1a',
      'template_zj0l6rj',
      formRef.current,
      'yTfsWBvaVQIUd_szE'
    )
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, () => {
        toast({
          title: "Error sending message",
          description: "Please try again later or contact me directly.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sahil060659@gmail.com',
      href: 'mailto:sahil060659@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9113438070',
      href: 'tel:+919113438070',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur,Rajasthan',
      href: 'https://maps.google.com/?q=Jaipur,Rajasthan',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Orbs */}
      <div className="floating-orb w-80 h-80 bg-accent/15 top-20 -left-40 animate-float-slow" />
      <div className="floating-orb w-64 h-64 bg-primary/15 bottom-20 -right-32 animate-float-slower" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <Sparkle><span className="gradient-text">Touch</span></Sparkle>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              <br />Let's create something amazing together.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and development.
                  <br />Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 rounded-xl glass border border-primary/20 hover:border-primary/40 hover:glow transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8">
                <p className="text-muted-foreground text-sm">
                  Prefer to connect on social media? Find me on{' '}
                  <a href="https://www.linkedin.com/in/shivanshu-sahil/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn.</a>{' '}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right">
            <div className="glass rounded-3xl p-8 border border-primary/20">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-secondary/50 border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    required
                    className="bg-secondary/50 border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <Sparkle>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:glow transition-all duration-300 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </Sparkle>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};