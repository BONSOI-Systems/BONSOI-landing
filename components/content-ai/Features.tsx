
"use client";

import React from "react";
import { motion } from "framer-motion";
import { benefitOne, benefitTwo } from "../data";

// Combine benefits for the grid
const allBenefits = [...benefitOne.bullets, ...benefitTwo.bullets];

export default function Features() {
    return (
        <section id="features" className="py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
                        From intelligent AI/ML systems to robust full-stack applications, we deliver excellence at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-32">
                    {allBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-colors group shadow-xl shadow-blue-50/10"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                {/* Render the icon directly if it's a component or element */}
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Stats / Value Prop Section matching ImagineAI layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden shadow-xl shadow-blue-50/10"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-3xl rounded-full" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                                Built for <span className="text-white">Growth</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                                We don't just write code; we build scalable engines for your business success. Our collaborative approach ensures your technology investment delivers measurable returns.
                            </p>

                            <div className="grid grid-cols-3 gap-4 md:gap-8">
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">5+</div>
                                    <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">95%</div>
                                    <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Client Satisfaction</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">20+</div>
                                    <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Countries Served</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Placeholder for "Graph/Dashboard" */}
                        <div className="relative hidden sm:block">
                            <div className="aspect-video bg-white/5 rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 flex flex-col justify-end scale-100 hover:scale-105 transition-transform duration-300">
                                <div className="flex items-end gap-2 md:gap-4 h-24 md:h-32">
                                    <div className="w-1/4 h-[40%] bg-blue-500/30 rounded-t-lg animate-pulse"></div>
                                    <div className="w-1/4 h-[60%] bg-purple-500/30 rounded-t-lg animate-pulse delay-75"></div>
                                    <div className="w-1/4 h-[80%] bg-pink-500/30 rounded-t-lg animate-pulse delay-150"></div>
                                    <div className="w-1/4 h-full bg-white/20 rounded-t-lg animate-pulse delay-200"></div>
                                </div>
                                <div className="mt-3 md:mt-4 flex justify-between text-xs text-gray-500">
                                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
