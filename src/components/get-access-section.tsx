"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, Users, FileText } from "lucide-react";

export function GetAccessSection() {
  // Actual Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScitKjtOU0CaABLw_7U7X49f5H9nDVizXrY5LjOzBWx3E0Uow/viewform?usp=sharing";

  const benefits = [
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Secure API Access",
      description: "Available to verified Web3 projects."
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Developer Support",
      description: "Technical assistance for integration."
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Comprehensive Docs",
      description: "Step-by-step implementation guides."
    }
  ];

  return (
    <section id="get-access" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-primary/20 shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-3 bg-primary/10 dark:bg-primary/20 p-8 md:p-12 lg:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                      Get Access to <span className="text-primary">Modera AI</span>
                    </h2>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <p className="text-muted-foreground mb-6">
                      We provide Modera AI as a <span className="font-semibold">public good</span>, but access is granted only to those who <span className="font-semibold">genuinely need it</span> to prevent misuse. 
                      Apply below to request access for your IPFS website moderation needs.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="gap-2 group hover-lift hover-glow">
                        <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Apply for API Access
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                    
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
                    className="mt-12"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center hover-lift">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                            {benefit.icon}
                          </div>
                          <h3 className="text-base font-medium mb-1">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="col-span-2 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-6">Application Process</h3>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="space-y-6">
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary text-xs font-medium">1</div>
                        <div>
                          <h4 className="text-base font-medium">Submit Application</h4>
                          <p className="text-sm text-muted-foreground mt-1">Provide details about your website.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary text-xs font-medium">2</div>
                        <div>
                          <h4 className="text-base font-medium">Verification</h4>
                          <p className="text-sm text-muted-foreground mt-1">Team reviews legitimacy and use case.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary text-xs font-medium">3</div>
                        <div>
                          <h4 className="text-base font-medium">API Provisioning</h4>
                          <p className="text-sm text-muted-foreground mt-1">Receive credentials and documentation.</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary text-xs font-medium">4</div>
                        <div>
                          <h4 className="text-base font-medium">Integration Support</h4>
                          <p className="text-sm text-muted-foreground mt-1">Assistance during implementation.</p>
                        </div>
                      </div>
                    </div>
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