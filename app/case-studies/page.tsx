"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ArrowRight, CheckCircle2, Trophy, Users, Award } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 text-center max-w-4xl mx-auto px-4"
        >
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/20 rounded-full border border-blue-500/20">
            Case Studies
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Success Stories <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">That Inspire Innovation</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Discover how we&apos;ve helped transformative businesses across industries achieve measurable results through AI, Web3, and scalable engineering.
          </p>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 mb-12 sm:mb-16 md:mb-20 relative group px-4"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-48 sm:h-64 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 z-10"></div>
                {/* Abstract Visual Pattern */}
                <div className="absolute inset-0 bg-[url('/img/hero.png')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center text-white">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-3 sm:mb-4 text-yellow-400" />
                  <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">AI</div>
                  <div className="text-sm sm:text-base md:text-lg text-blue-200 font-medium">Predictive Analytics Platform</div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/20">
                    Featured Project
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">Fintech</span>
                </div>

                <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">Fintech Risk Assessment AI</h2>
                <p className="mb-4 sm:mb-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  Developed an advanced machine learning system that analyzes financial data to predict credit risk
                  and fraud patterns with 95% accuracy, ensuring safer transactions for millions.
                </p>

                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/5">
                  <h3 className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold text-gray-200 uppercase tracking-wider">Key Impact:</h3>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center sm:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">40%</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Fraud Reduction</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">95%</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Accuracy Rate</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400">$2M+</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Annual Savings</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {["Python", "TensorFlow", "AWS", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-blue-200 bg-blue-900/30 border border-blue-500/30 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold group/link text-sm sm:text-base"
                >
                  Start a project like this
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          <CaseStudyCard
            title="DeFi Trading Platform"
            category="Web3 & Blockchain"
            description="Built a decentralized exchange handling $50M+ daily trading volume with advanced liquidity pools."
            results={["50M+ daily volume", "10K+ active users", "99.9% uptime"]}
            technologies={["Solidity", "React", "Web3.js", "Ethereum"]}
            delay={0.1}
          />

          <CaseStudyCard
            title="Telemedicine App"
            category="Mobile & AI"
            description="HIPAA-compliant platform with AI symptom checker serving 100K+ patients globally."
            results={["100K+ patients", "50K+ consultations", "4.8★ store rating"]}
            technologies={["React Native", "Node.js", "MongoDB"]}
            delay={0.2}
          />

          <CaseStudyCard
            title="E-Com Recommendation"
            category="AI & Full-Stack"
            description="ML-based product recommendations increasing conversion rates by 35% for a major retailer."
            results={["35% higher conversions", "20% AOV increase", "2M+ products"]}
            technologies={["Next.js", "Python", "Redis", "Scikit"]}
            delay={0.3}
          />

          <CaseStudyCard
            title="Supply Chain Tracker"
            category="Blockchain & IoT"
            description="Blockchain-based supply chain solution providing end-to-end visibility and reducing disputes."
            results={["30% faster tracking", "60% dispute reduction", "Global coverage"]}
            technologies={["Hyperledger", "IoT", "React"]}
            delay={0.4}
          />

          <CaseStudyCard
            title="Support Chatbot"
            category="AI & NLP"
            description="Intelligent chatbot handling 80% of customer queries autonomously with NLP."
            results={["80% automation", "60% cost reduction", "24/7 availability"]}
            technologies={["Python", "GPT-4", "FastAPI"]}
            delay={0.5}
          />

          <CaseStudyCard
            title="Real Estate Tokenization"
            category="Fintech"
            description="Property tokenization platform enabling fractional real estate investment via blockchain."
            results={["$100M+ tokenized", "5K+ investors", "SEC compliant"]}
            technologies={["React", "Solidity", "AWS"]}
            delay={0.6}
          />
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 sm:gap-8 py-12 sm:py-16 md:py-20 mt-12 sm:mt-16 md:mt-20 border-t border-white/10 grid-cols-1 sm:grid-cols-3 px-4">
          <StatItem number="50+" label="Projects Delivered" gradient="from-blue-400 to-purple-500" icon={<Award className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-gray-500" />} />
          <StatItem number="98%" label="Client Satisfaction" gradient="from-purple-400 to-pink-500" icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-gray-500" />} />
          <StatItem number="15+" label="Industry Awards" gradient="from-green-400 to-teal-500" icon={<Trophy className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-gray-500" />} />
        </div>

        {/* CTA */}
        <div className="mb-12 sm:mb-16 md:mb-20 px-4">
          <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 overflow-hidden text-center text-white shadow-2xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-2xl sm:rounded-3xl group">
            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition duration-500" />

            <div className="relative z-10">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Ready to Be Our Next <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Success Story?</span>
              </h2>
              <p className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg text-gray-400">
                Let&apos;s collaborate to build scalable, future-proof solutions that drive real business growth.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all duration-300 transform bg-blue-600 rounded-lg sm:rounded-xl hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function CaseStudyCard({
  title,
  category,
  description,
  results,
  technologies,
  delay
}: {
  title: string;
  category: string;
  description: string;
  results: string[];
  technologies: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
      <div className="relative h-full flex flex-col p-5 sm:p-6 bg-gray-900/60 backdrop-blur-md border border-white/5 rounded-xl sm:rounded-2xl hover:bg-gray-900/80 transition-all duration-300 overflow-hidden">
        {/* Hover Glow */}
        <div className="absolute -right-20 -top-20 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 blur-[40px] sm:blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition duration-500"></div>

        <div className="mb-3 sm:mb-4">
          <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-blue-300 bg-blue-900/30 border border-blue-500/20 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>

        <p className="mb-4 sm:mb-6 text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
          {results.slice(0, 2).map((res, i) => (
            <div key={i} className="flex items-center text-xs sm:text-sm text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-green-500 shrink-0" />
              {res}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-white/5">
          {technologies.map((tech, index) => (
            <span key={index} className="text-[10px] sm:text-xs text-gray-500 font-mono">
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatItem({ number, label, gradient, icon }: { number: string, label: string, gradient: string, icon: React.ReactNode }) {
  return (
    <div className="text-center group cursor-default">
      <div className="flex justify-center transition-transform duration-300 group-hover:-translate-y-1">
        {icon}
      </div>
      <div className={`mb-1 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
        {number}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  )
}
