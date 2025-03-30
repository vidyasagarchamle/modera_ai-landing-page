"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Users, FileText, LockKeyhole } from "lucide-react";

export function GetAccessSection() {
  // App redirect URL - replace with your actual app URL
  const appRedirectUrl = "https://app.modly.ai";

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure API Access",
      description: "Available to verified Web3 projects with IPFS websites."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Developer Support",
      description: "Dedicated technical assistance for seamless integration."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Comprehensive Docs",
      description: "Detailed guides and API reference for implementation."
    }
  ];

  return (
    <section id="get-access" className="py-24 relative overflow-hidden">
      {/* Background with hexagon pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
                <path d="M25,17.3 L25,0 L0,8.7 L0,25.9 L25,34.6 L50,25.9 L50,8.7 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto"
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Get Access to <span className="text-primary">Modly AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure, reliable content moderation for your IPFS websites
            </p>
          </motion.div>

          <Card className="overflow-hidden border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 gap-0">
                {/* Left side - Application info */}
                <div className="p-8 md:p-12 border-primary/10 relative">
                  <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="accessGradient" cx="100%" cy="0%" r="100%" fx="100%" fy="0%">
                          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#accessGradient)" />
                    </svg>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto"
                  >
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                      <LockKeyhole className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Request API Access</h3>
                    <p className="text-muted-foreground mb-6">
                      We provide Modly AI as a <span className="font-semibold">public good</span>, but access is granted only to those who <span className="font-semibold">genuinely need it</span> to prevent misuse. 
                      
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <Button asChild size="lg" className="gap-2 group hover-lift hover-glow mx-auto">
                      <a href={appRedirectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                      <Clock className="h-4 w-4" />
                      <span>Applications typically reviewed within 2-3 business days</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-base font-medium mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 