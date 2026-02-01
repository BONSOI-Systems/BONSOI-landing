import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-6 sm:gap-8 mx-auto overflow-hidden text-white shadow-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 px-6 sm:px-8 py-10 sm:py-12 lg:px-16 lg:py-16 rounded-2xl md:rounded-3xl">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full opacity-5 blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full opacity-5 blur-3xl -ml-24 md:-ml-32 -mb-24 md:-mb-32"></div>

        <div className="relative z-10 flex-grow text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Transform your ideas into intelligent, scalable solutions. Let's create something extraordinary together with cutting-edge technology and expert engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-blue-600 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Start Your Project
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 border-2 border-white/50 rounded-xl hover:bg-white/10 hover:border-white focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
