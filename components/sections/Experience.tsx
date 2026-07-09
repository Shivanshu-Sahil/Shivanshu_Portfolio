"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calendar, CheckCircle2, Github, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Sparkle } from '@/components/ui/Sparkle';

const experienceEntries = [
  {
    role: 'HPE CPP Intern — HPC Log & Event Management Pipeline',
    organization: 'HPE (Hewlett Packard Enterprise) Career Preview Program',
    period: '2026',
    location: 'Remote',
    summary:
      'Architected and evaluated a 10-node distributed observability pipeline for HPC-scale log and event management, benchmarking VictoriaLogs as a scalable alternative to OpenSearch.',
    achievements: [
      'Designed and deployed a distributed log processing pipeline using Fluent Bit, Kafka, Logstash, VictoriaLogs, and Grafana for real-time log collection and monitoring',
      'Built interactive Grafana dashboards with log search, filtering, and visualization to simplify troubleshooting across multiple log sources',
      'Containerized the complete platform using Docker and automated deployment through configuration provisioning for consistent and reproducible environments',
    ],
    tags: ['VictoriaLogs', 'Grafana', 'Kafka', 'Docker', 'LogsQL', 'Observability'],
  }
];

const highlights = [
  {
    title: 'Team Collaboration',
    description: 'I work well with mentors and teammates, contributing openly and taking ownership of my part.',
  },
  {
    title: 'Clear Communication',
    description: 'I explain my thinking clearly and stay easy to work with across discussions and reviews.',
  },
  {
    title: 'Eager to Learn',
    description: 'I actively seek feedback, adapt quickly, and enjoy picking up new tools and approaches.',
  },
];


export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="floating-orb w-80 h-80 bg-primary/15 top-16 -right-36 animate-float-slow" />
      <div className="floating-orb w-72 h-72 bg-accent/15 bottom-0 -left-32 animate-float-slower" />


      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience <Sparkle><span className="gradient-text">Journey</span></Sparkle>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A focused snapshot of how I build, ship, and refine digital products across the stack.
            </p>
          </div>
        </Reveal>


        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal direction="left">
            <div className="sticky top-28 space-y-6">
              <div className="gradient-border gradient-glow-after rounded-3xl p-[1px]">
                <div className="glass-strong rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Working Style</p>
                      <h3 className="text-2xl font-semibold">Collaborative & Growth-driven</h3>
                    </div>
                  </div>


                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I&apos;m a cooperative team player who communicates clearly, adapts quickly, and enjoys learning from mentors as well as helping teammates when needed.
                    I value clean execution, thoughtful problem-solving, and steady improvement while staying open to feedback and new ways of working.
                  </p>


                  <div className="space-y-4">
                    {highlights.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-secondary/40 border border-border p-4">
                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="glass rounded-2xl p-5 border border-primary/20 transition-all duration-300 hover:glow"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Focus</p>
                  <p className="text-lg font-semibold">Ownership-driven</p>
                </motion.div>
                <motion.div
                  className="glass rounded-2xl p-5 border border-primary/20 transition-all duration-300 hover:glow"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-sm text-muted-foreground mb-1">Approach</p>
                  <p className="text-lg font-semibold">Learn & Collaborate</p>
                </motion.div>
              </div>
            </div>
          </Reveal>


          <div className="relative">
            <div className="absolute left-6 top-4 bottom-4 hidden lg:block w-px bg-gradient-to-b from-primary/70 via-accent/70 to-transparent" />


            <div className="space-y-6 lg:space-y-8">
              {experienceEntries.map((entry, index) => (
                <Reveal key={`${entry.role}-${entry.period}`} delay={index * 0.12} direction="right">
                  <motion.article
                    className="group relative lg:pl-14"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="hidden lg:flex absolute left-[18px] top-7 h-5 w-5 items-center justify-center rounded-full bg-background border-2 border-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.12)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </div>


                    <div className="gradient-border gradient-glow-after rounded-3xl p-[1px]">
                      <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-6 md:p-7 border border-primary/10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                          <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                              <Calendar className="h-3.5 w-3.5" />
                              {entry.period}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 group-hover:gradient-text">
                              {entry.role}
                            </h3>
                            <p className="text-muted-foreground flex items-center gap-2 text-sm md:text-base">
                              <ArrowRight className="h-4 w-4 text-primary" />
                              {entry.organization}
                            </p>
                          </div>


                          <motion.a
                            href="https://github.com/salchaD-27/hpe-cpp3-project3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground w-fit transition-colors hover:text-foreground hover:border-primary/40"
                            whileHover={{ x: 2 }}
                          >
                            <Github className="h-4 w-4 text-primary" />
                            GitHub
                          </motion.a>
                        </div>


                        <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                          {entry.summary}
                        </p>


                        <div className="grid md:grid-cols-3 gap-3 mb-6">
                          {entry.achievements.map((point) => (
                            <div key={point} className="rounded-2xl border border-border bg-secondary/30 p-4">
                              <p className="text-sm leading-relaxed text-foreground/90">{point}</p>
                            </div>
                          ))}
                        </div>


                        <div className="flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/60 text-muted-foreground border border-border"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};