"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import React from "react";
import { Target, Lightbulb, Users, Shield, Zap, Award, Code, Rocket, Heart } from "lucide-react";

export default function AboutPage() {
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
                        className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4"
                    >
                        <div className="inline-flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-6 bg-blue-500/10 rounded-xl sm:rounded-2xl border border-blue-500/20">
                            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Future</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We are a collective of visionaries, engineers, and strategists dedicated to transforming businesses through state-of-the-art technology and human-centric design.
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 mb-16 sm:mb-20 md:mb-24 px-4"
                    >
                        <StatCard number="200+" label="Projects Delivered" />
                        <StatCard number="50+" label="Global Clients" />
                        <StatCard number="98%" label="Client Retention" />
                        <StatCard number="24/7" label="Support Coverage" />
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 px-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all group"
                        >
                            <div className="bg-purple-500/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
                                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                To empower enterprises and startups alike with accessible, scalable, and intelligent technology solutions. We strive to demystify complexity and deliver measurable impact through innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all group"
                        >
                            <div className="bg-blue-500/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit mb-4 sm:mb-6">
                                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                To be the global catalyst for digital transformation, setting new standards in software quality, user experience, and technological ethics for a better connected world.
                            </p>
                        </motion.div>
                    </div>

                    {/* Core Values */}
                    <div className="mb-16 sm:mb-20 md:mb-24 px-4">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Core Values</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">The principles that guide every line of code we write and every decision we make.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            <ValueCard icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />} title="Integrity First" desc="We believe in transparent communication and honest partnerships. No hidden clauses, just trust." />
                            <ValueCard icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />} title="Innovation" desc="We don't just follow trends; we set them. Constantly exploring the edge of what's possible." />
                            <ValueCard icon={<Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />} title="Client Obsession" desc="Your success is our success. We go above and beyond to ensure you achieve your goals." />
                            <ValueCard icon={<Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />} title="Collaboration" desc="Great things are never done by one person. We work as an extension of your team." />
                            <ValueCard icon={<Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />} title="Excellence" desc="Good enough isn't in our vocabulary. We strive for perfection in every pixel." />
                            <ValueCard icon={<Code className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />} title="Clean Code" desc="We write maintainable, scalable, and efficient code that stands the test of time." />
                        </div>
                    </div>

                    {/* Our Story (Premium Timeline) */}
                    <div className="mb-16 sm:mb-20 md:mb-24 relative px-4">
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Journey</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">From a spark of an idea to a global technology partner.</p>
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Central Line */}
                            <div className="absolute left-4 sm:left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 md:-translate-x-1/2" />

                            <div className="space-y-8 sm:space-y-10 md:space-y-12">
                                <TimelineItem
                                    year="2024"
                                    title="Inception"
                                    desc="BONSOI Systems was founded with a unified vision: to democratize enterprise-grade AI. We started as a small team of 3 engineers in a garage, fueled by coffee and code."
                                    side="left"
                                />
                                <TimelineItem
                                    year="2025"
                                    title="Rapid Growth"
                                    desc="We expanded our team to 20+ exceptional engineers and secured key partnerships with major cloud providers. Our first flagship product helped clients reduce operational costs by 40%."
                                    side="right"
                                />
                                <TimelineItem
                                    year="2026"
                                    title="Global Expansion"
                                    desc="Opened new operational hubs in 3 countries and celebrated our 100th successful project delivery. Recognized as a 'Top Emerging Tech Company' by industry analysts."
                                    side="left"
                                />
                                <TimelineItem
                                    year="2027"
                                    title="The Future"
                                    desc="We are now pioneering the next generation of autonomous agents and decentralized web solutions. The journey is just beginning, and we're writing the future one line of code at a time."
                                    side="right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}

function StatCard({ number, label }: { number: string, label: string }) {
    return (
        <div className="text-center p-4 sm:p-5 md:p-6 bg-white/5 rounded-xl sm:rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{number}</div>
            <div className="text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">{label}</div>
        </div>
    )
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-5 sm:p-6 md:p-8 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group">
            <div className="bg-white/10 p-2.5 sm:p-3 rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function TimelineItem({ year, title, desc, side }: { year: string, title: string, desc: string, side: "left" | "right" }) {
    const isLeft = side === "left";
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${isLeft ? "md:flex-row-reverse" : ""} md:items-center pl-10 sm:pl-12 md:pl-0`}
        >
            {/* Dot on Line */}
            <div className="absolute left-1.5 sm:left-1.5 md:left-1/2 top-0 md:top-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-black border-3 sm:border-4 border-blue-500 rounded-full z-10 -translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)] sm:shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 lg:md:pr-12 md:text-right" : "md:pl-8 lg:md:pl-12"}`}>
                <div className={`relative p-4 sm:p-5 md:p-6 lg:p-8 bg-white/5 rounded-xl sm:rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 group`}>
                    {/* Year Badge */}
                    <div className={`inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-bold tracking-wider text-blue-300 uppercase bg-blue-900/30 rounded-full border border-blue-500/20 shadow-sm ${isLeft ? "md:ml-auto" : ""}`}>
                        {year}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">{desc}</p>
                </div>
            </div>

            {/* Empty Side for Desktop alignment */}
            <div className="hidden md:block w-1/2" />
        </motion.div>
    )
}
