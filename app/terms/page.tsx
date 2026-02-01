"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { Scroll, CheckCircle, Briefcase, CreditCard, Clock, Shield, AlertTriangle, Scale, HelpCircle, FileText } from "lucide-react";

export default function TermsPage() {
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
              <Scroll className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Service</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Please read these terms carefully before using our services.
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
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/5 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none"></div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12 text-gray-300 leading-relaxed relative z-10">

                <Section title="1. Acceptance of Terms" icon={<CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    By accessing and using BONSOI Systems&apos; services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-sm sm:text-base">
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of BONSOI Systems&apos; website, products, and services (collectively, the &quot;Services&quot;).
                  </p>
                </Section>

                <Section title="2. Services Description" icon={<Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">BONSOI Systems provides software development services, including but not limited to:</p>
                  <ul className="grid gap-2">
                    <ListItem>AI and Machine Learning solutions</ListItem>
                    <ListItem>Web3 and Blockchain development</ListItem>
                    <ListItem>Full-stack web and mobile application development</ListItem>
                    <ListItem>Cloud infrastructure and DevOps services</ListItem>
                    <ListItem>Technology consulting and strategy</ListItem>
                  </ul>
                </Section>

                <Section title="3. User Responsibilities" icon={<Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">You agree to:</p>
                  <ul className="grid gap-2">
                    <ListItem>Provide accurate and complete information</ListItem>
                    <ListItem>Maintain confidentiality of account credentials</ListItem>
                    <ListItem>Not use services for illegal purposes</ListItem>
                    <ListItem>Comply with applicable laws</ListItem>
                  </ul>
                </Section>

                <Section title="4. Intellectual Property" icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Unless otherwise stated, all deliverables remain BONSOI Systems&apos; IP until full payment. Upon payment, ownership transfers to the client.
                  </p>
                  <p className="text-sm sm:text-base">
                    We retain the right to use project work in portfolios unless otherwise agreed.
                  </p>
                </Section>

                <Section title="5. Payment Terms" icon={<CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">Standard terms include:</p>
                  <ul className="grid gap-2">
                    <ListItem>Initial deposit required before commencement</ListItem>
                    <ListItem>Milestone-based payments</ListItem>
                    <ListItem>Final payment due upon completion</ListItem>
                    <ListItem>Fees are non-refundable unless specified</ListItem>
                  </ul>
                </Section>

                <Section title="6. Delays & Modifications" icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />}>
                  <p className="text-sm sm:text-base">
                    Timelines are estimates. Delays caused by client feedback or scope changes may extend timelines and incur additional fees.
                  </p>
                </Section>

                <Section title="7. Warranties & Disclaimers" icon={<AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />}>
                  <div className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl text-xs sm:text-sm text-red-200/90">
                    Services are provided &quot;as is&quot; without warranties of any kind. We do not warrant that services will be uninterrupted or error-free.
                  </div>
                </Section>

                <Section title="8. Liability & Termination" icon={<Scale className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Our liability is limited to the amount paid for the specific service. Either party may terminate services with written notice as specified in the agreement.
                  </p>
                </Section>

                <Section title="Contact Us" icon={<HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">For questions about these Terms, please contact us:</p>
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
