
import React from 'react';
import Hero from '../components/content-ai/Hero';
import Features from '../components/content-ai/Features';
import { TrustedBy } from '../components/TrustedBy';
import { Testimonials } from '../components/Testimonials';
import Footer from '../components/Footer';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Video } from '../components/Video';
import { Cta } from '../components/Cta';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden font-sans">
      <Hero />

      <TrustedBy />

      <Features />

      <HowItWorks />

      <section id="results" className="bg-black text-white py-12 sm:py-16 md:py-20 relative">
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 md:mb-16 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Results</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional value and innovation.
          </p>
        </div>
        <div className="dark relative z-10">
          <Testimonials />
        </div>
      </section>

      <Pricing />

      <section id="about" className="py-16 md:py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">BONSOI Systems</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-4 md:mb-6">
            See how we are transforming the digital landscape with AI-powered solutions.
          </p>
          <Video videoId="zD7gvXsl2oo" />
        </div>
      </section>

      <section id="demo" className="bg-black py-12 md:py-16">
        <Cta />
      </section>

    </main>
  );
}
