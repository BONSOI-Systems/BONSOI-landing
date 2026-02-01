"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import React from "react";
import { Cookie, Layers, Globe, Clock, Settings, Info, ExternalLink } from "lucide-react";

export default function CookiePolicyPage() {
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
              <Cookie className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Cookies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Transparency about how we use cookies to improve your experience.
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
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500/5 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none"></div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12 text-gray-300 leading-relaxed relative z-10">

                <Section title="1. What Are Cookies?" icon={<Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p className="text-sm sm:text-base">
                    Cookies help us understand how visitors interact with our website, remember your preferences, and improve your overall experience.
                  </p>
                </Section>

                <Section title="2. How We Use Cookies" icon={<Layers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">BONSOI Systems uses cookies for the following purposes:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <ListItem>Essential website functionality</ListItem>
                    <ListItem>Remembering user preferences</ListItem>
                    <ListItem>Analytics and performance</ListItem>
                    <ListItem>Security and fraud prevention</ListItem>
                    <ListItem>Personalized content delivery</ListItem>
                    <ListItem>Marketing (with consent)</ListItem>
                  </ul>
                </Section>

                <Section title="3. Types of Cookies" icon={<Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />}>
                  <div className="grid gap-4 sm:gap-6">
                    <CookieTypeCard
                      title="Essential Cookies"
                      desc="Necessary for the website to function properly (navigation, security)."
                      examples={["session_id", "csrf_token", "cookie_consent"]}
                    />
                    <CookieTypeCard
                      title="Analytics Cookies"
                      desc="Help us understand how visitors use our website."
                      examples={["_ga (Google)", "_hjid (Hotjar)"]}
                    />
                    <CookieTypeCard
                      title="Functional Cookies"
                      desc="Enable enhanced functionality and personalization."
                      examples={["theme_preference", "language"]}
                    />
                    <CookieTypeCard
                      title="Marketing Cookies"
                      desc="Track online activity to deliver relevant advertising."
                      examples={["_fbp (Facebook)", "li_sugr (LinkedIn)"]}
                    />
                  </div>
                </Section>

                <Section title="4. Third-Party Cookies" icon={<Globe className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />}>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base">We use services from trusted third parties that may also set cookies:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <ThirdPartyLink name="Google Analytics" url="https://policies.google.com/privacy" />
                    <ThirdPartyLink name="Hotjar" url="https://www.hotjar.com/legal/policies/privacy/" />
                    <ThirdPartyLink name="Facebook Pixel" url="https://www.facebook.com/privacy/explanation" />
                    <ThirdPartyLink name="LinkedIn Insights" url="https://www.linkedin.com/legal/privacy-policy" />
                  </div>
                </Section>

                <Section title="5. Cookie Duration" icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5">
                      <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Session Cookies</h4>
                      <p className="text-xs sm:text-sm">Temporary cookies deleted when you close your browser. Essential for functionality.</p>
                    </div>
                    <div className="bg-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5">
                      <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Persistent Cookies</h4>
                      <p className="text-xs sm:text-sm">Remain on your device for a set period. Used for preferences and analytics.</p>
                    </div>
                  </div>
                </Section>

                <Section title="6. Managing Preferences" icon={<Settings className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                    You can control cookies through your browser settings or our consent manager.
                  </p>
                  <div className="p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg sm:rounded-xl text-xs sm:text-sm text-blue-200/90 mb-3 sm:mb-4">
                    <strong>Note:</strong> Disabling essential cookies may affect website functionality (e.g., you may need to re-login each visit).
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li><ExternalLinkLink href="https://tools.google.com/dlpage/gaoptout" label="Google Analytics Opt-out" /></li>
                    <li><ExternalLinkLink href="http://optout.aboutads.info/" label="Digital Advertising Alliance Opt-out" /></li>
                  </ul>
                </Section>

                <Section title="Contact Us" icon={<div className="w-2 h-2 rounded-full bg-blue-500"></div>}>
                  <p className="mb-3 sm:mb-4 text-sm sm:text-base">For questions about our cookie use:</p>
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

function CookieTypeCard({ title, desc, examples }: { title: string, desc: string, examples: string[] }) {
  return (
    <div className="bg-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
      <h4 className="font-bold text-white text-base sm:text-lg mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">{desc}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {examples.map((ex, i) => (
          <span key={i} className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono text-blue-300 bg-blue-900/30 rounded border border-blue-500/20">
            {ex}
          </span>
        ))}
      </div>
    </div>
  )
}

function ThirdPartyLink({ name, url }: { name: string, url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
      <span className="font-medium text-white text-sm sm:text-base">{name}</span>
      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
    </a>
  )
}

function ExternalLinkLink({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
      {label}
      <ExternalLink className="w-3 h-3 ml-1.5" />
    </a>
  )
}
