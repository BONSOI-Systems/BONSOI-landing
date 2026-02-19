
"use client";
import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";

export function HowItWorks() {
    const [activeStep, setActiveStep] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        {
            id: "01",
            title: "Discovery & Strategy",
            description: "We start with a deep-dive into your business goals, technical requirements, and competitive landscape. Our engineers and consultants design a customized technology roadmap — choosing the right AI/ML models, blockchain architecture, or full-stack framework to maximize ROI. Every decision is grounded in data, not guesswork.",
        },
        {
            id: "02",
            title: "Development & AI Integration",
            description: "Our expert engineering teams build your solution using agile sprints with weekly demos and continuous feedback loops. We integrate cutting-edge AI and machine learning models, enforce enterprise-grade security, and write clean maintainable code — whether it's a custom LLM pipeline, a DeFi smart contract, or a scalable SaaS backend.",
        },
        {
            id: "03",
            title: "Launch & Optimization",
            description: "Deployment is just the beginning. We handle cloud provisioning, CI/CD pipeline setup, and performance monitoring. We continuously analyze real-world usage data to fine-tune AI models and optimize system performance, ensuring your product scales as your user base grows.",
        },
    ];

    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
                    >
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-base md:text-lg"
                    >
                        A streamlined process designed to take you from concept to market-leading innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting Line (Desktop) - Animated Flow */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 -z-10 origin-left overflow-hidden"
                    >
                        <motion.div
                            className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500 to-blue-500/20"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Mobile Connecting Line */}
                    <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full -z-10 origin-top overflow-hidden"
                    >
                        <motion.div
                            className="w-full h-full bg-gradient-to-b from-blue-500/20 via-purple-500 to-blue-500/20"
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        />
                    </motion.div>

                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.5 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    animate={isActive ? { scale: 1.1, borderColor: "rgba(59, 130, 246, 0.8)" } : { scale: 1, borderColor: "rgba(31, 41, 55, 1)" }}
                                    whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.8)" }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-900 rounded-full border-4 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 relative z-10 transition-colors duration-300 shadow-2xl shadow-black/50 ${isActive ? "shadow-blue-500/20" : "border-gray-800"}`}
                                >
                                    <span className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 ${isActive ? "text-blue-400" : "text-gray-500 group-hover:text-blue-400"}`}>{step.id}</span>

                                    {/* Pulse Effect Ring */}
                                    <motion.div
                                        animate={isActive ? { opacity: [0, 1, 0], scale: [1, 1.4, 1.4] } : { opacity: 0 }}
                                        transition={{ duration: 2, repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
                                        className="absolute inset-0 rounded-full border border-blue-500/50"
                                    />
                                </motion.div>

                                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 transition-colors ${isActive ? "text-blue-200" : "text-white group-hover:text-blue-200"}`}>{step.title}</h3>
                                <p className={`text-gray-400 leading-relaxed px-2 md:px-4 text-sm md:text-base transition-colors ${isActive ? "text-gray-300" : "group-hover:text-gray-300"}`}>
                                    {step.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
