"use client";

import React from "react";
import { Container } from "../../components/Container";
import { motion } from "framer-motion";
import { benefitOne, benefitTwo } from "../../components/data";
import { Sparkles } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "AI-Powered Development",
            description: "Leverage cutting-edge machine learning models to automate workflows and generate content.",
            icon: benefitOne.bullets[0].icon,
        },
        {
            title: "Full-Stack Web3 Solutions",
            description: "Decentralized applications built with security and scalability in mind.",
            icon: benefitOne.bullets[1].icon,
        },
        {
            title: "Content Automation",
            description: "Streamline your content pipeline with our custom AI agents.",
            icon: benefitOne.bullets[2].icon,
        },
        {
            title: "Scalable Architecture",
            description: "Cloud-native solutions designed to grow with your business.",
            icon: benefitTwo.bullets[0].icon,
        },
        {
            title: "Data Analytics",
            description: "Turn data into actionable insights with our advanced analytics dashboards.",
            icon: benefitTwo.bullets[1].icon,
        },
        {
            title: "Custom Enterprise Software",
            description: "Tailor-made software solutions to fit your specific business needs.",
            icon: benefitTwo.bullets[2].icon,
        },
    ];

    return (
        <main className="bg-black min-h-screen text-white overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
                    >
                        <div className="inline-flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-6 bg-blue-500/10 rounded-xl sm:rounded-2xl border border-blue-500/20">
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Services</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive technology solutions designed to propel your business into the future.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                                <div className="relative bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-16 sm:mt-20 md:mt-24 px-4"
                    >
                        <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 overflow-hidden text-center text-white shadow-2xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-2xl sm:rounded-3xl group">
                            <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-5"></div>
                            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition duration-500" />

                            <div className="relative z-10">
                                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
                                    Need a Custom Solution?
                                </h2>
                                <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-400">
                                    Let&apos;s discuss your unique requirements and build something extraordinary together.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all duration-300 transform bg-blue-600 rounded-lg sm:rounded-xl hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </main>
    );
}
