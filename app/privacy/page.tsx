"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import React from "react";
import { Shield, Lock, FileText, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <div className="inline-flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-6 bg-blue-500/10 rounded-xl sm:rounded-2xl border border-blue-500/20">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              We value your trust and are committed to protecting your data.
            </p>
            <div className="mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-purple-300 bg-purple-900/20 rounded-full border border-purple-500/20">
              Last Updated: November 24, 2025
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Floating decorative elements */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none"></div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12 text-gray-300 leading-relaxed relative z-10">

                <Section title="1. Introduction" icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    BONSOI Systems ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-sm sm:text-base">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.
                  </p>
                </Section>

                <Section title="2. Information We Collect" icon={<Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />}>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 mt-4 sm:mt-6">2.1 Personal Information</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">We may collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="grid gap-2 mb-4 sm:mb-6">
                    <ListItem>Contact us through our website or email</ListItem>
                    <ListItem>Request information about our services</ListItem>
                    <ListItem>Sign up for our newsletter</ListItem>
                    <ListItem>Engage our services</ListItem>
                    <ListItem>Participate in surveys or feedback forms</ListItem>
                  </ul>

                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">2.2 Automatically Collected Information</h3>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">When you visit our website, we automatically collect certain information:</p>
                  <ul className="grid gap-2">
                    <ListItem>IP address and device information</ListItem>
                    <ListItem>Browser type and version</ListItem>
                    <ListItem>Pages visited and time spent on pages</ListItem>
                    <ListItem>Referring website addresses</ListItem>
                  </ul>
                </Section>

                <Section title="3. How We Use Your Information" icon={<Globe className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">We use collected information for the following purposes:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <ListItem>To provide and improve our services</ListItem>
                    <ListItem>To respond to your inquiries</ListItem>
                    <ListItem>To send technical notices and updates</ListItem>
                    <ListItem>To communicate about projects</ListItem>
                    <ListItem>To process transactions</ListItem>
                    <ListItem>To detect and prevent fraud</ListItem>
                  </ul>
                </Section>

                <Section title="4. Data Security" icon={<Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    We implement appropriate technical measures to protect your personal information:
                  </p>
                  <ul className="grid gap-2 mb-3 sm:mb-4">
                    <ListItem>SSL/TLS encryption for data transmission</ListItem>
                    <ListItem>Secure server infrastructure</ListItem>
                    <ListItem>Regular security audits</ListItem>
                    <ListItem>Access controls and authentication</ListItem>
                  </ul>
                  <div className="p-3 sm:p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg sm:rounded-xl text-xs sm:text-sm text-yellow-200/90">
                    <strong>Note:</strong> However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.
                  </div>
                </Section>

                <div className="bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 h-full flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">You Control Your Data</h3>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-300 flex-grow">Depending on your location, you may have rights to access, correct, delete, or port your data.</p>
                  <a href="mailto:bonsoisystems@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm font-medium inline-flex items-center">
                    bonsoisystems@gmail.com
                  </a>
                </div>

                {/* Additional compacted sections for aesthetic flow */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                  <div className="bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Global Compliance</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-xs sm:text-sm"><strong className="text-purple-400">Europe (GDPR):</strong> Comprehensive data protection and privacy rights.</p>
                      <p className="text-xs sm:text-sm"><strong className="text-blue-400">Americas:</strong> Compliance with CCPA, PIPEDA, and LGPD standards.</p>
                      <p className="text-xs sm:text-sm"><strong className="text-pink-400">Asia-Pacific:</strong> Adherence to APPI, PDPA, and local regulations.</p>
                      <p className="text-xs sm:text-sm"><strong className="text-green-400">Worldwide:</strong> Respect for international privacy frameworks.</p>
                    </div>
                  </div>
                </div>

                <Section title="Contact Us" icon={<div className="w-2 h-2 rounded-full bg-blue-500"></div>}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">For any privacy-related questions, please reach out to us:</p>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-center text-white"><span className="text-gray-500 w-16 sm:w-20">Email:</span> bonsoisystems@gmail.com</li>
                    <li className="flex items-center text-white"><span className="text-gray-500 w-16 sm:w-20">Phone:</span> +91 9628525211</li>
                  </ul>
                </Section>

              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

function Section({ title, children, icon }: { title: string, children: React.ReactNode, icon: React.ReactNode }) {
  return (
    <section className="border-b border-white/5 pb-6 sm:pb-8 last:border-0 last:pb-0">
      <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
        {icon}
        {title}
      </h2>
      <div className="text-gray-400">
        {children}
      </div>
    </section>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start text-sm sm:text-base">
      <span className="mr-2 sm:mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
      <span>{children}</span>
    </li>
  )
}
