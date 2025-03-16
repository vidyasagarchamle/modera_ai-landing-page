"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lock, Globe, Shield } from "lucide-react";

export function PublicGoodSection() {
  const reasons = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Open-Source Initiative",
      description: "Transparent, community-driven approach to ethical content moderation for IPFS websites."
    },
    {
      icon: <Lock className="h-12 w-12 text-primary" />,
      title: "Freedom of Expression",
      description: "We prevent Web3 exploitation while maintaining freedom of expression, striking the right balance between safety and openness."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Responsible Access",
      description: "API access is limited to verified Web3 projects to ensure responsible usage while supporting genuine innovation."
    }
  ];

  const benefits = [
    {
      title: "Community Governance",
      description: "Transparent moderation criteria developed with community input."
    },
    {
      title: "Decentralized Architecture",
      description: "Built on decentralized principles with no single point of failure."
    },
    {
      title: "Privacy Preserving",
      description: "No user data collection or storage during content analysis."
    },
    {
      title: "Ethical AI Development",
      description: "AI designed to respect digital rights and Web3 principles."
    }
  ];

  return (
    <section id="public-good" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="60" fill="url(#gradient)" />
            <circle cx="100" cy="100" r="60" fill="url(#gradient)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Modera AI as a <span className="text-primary">Public Good</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We uphold Web3&apos;s decentralization principles while ensuring responsible content moderation.
                Our approach balances protection with freedom for IPFS websites.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 mt-0.5">
                      <div className="h-full w-full rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-3 w-3 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-background border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300 hover-lift hover-glow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                            {reason.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                          <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 