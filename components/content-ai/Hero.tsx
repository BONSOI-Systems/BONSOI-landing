
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-purple-600/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-600/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 md:mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-medium text-white uppercase tracking-wide">
                                Innovation at the Core
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight"
                        >
                            Transform Your Vision with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                AI-Powered Innovation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            BONSOI Systems delivers cutting-edge <span className="text-blue-400">AI/ML</span>, <span className="text-purple-400">Web3</span>, and <span className="text-pink-400">Full-Stack</span> solutions that drive digital transformation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                        >
                            <Link
                                href="/contact"
                                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/25 w-full sm:w-auto"
                            >
                                Start Your Project
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-white border border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto text-center"
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>

                    <div
                        className="lg:w-1/2 relative w-full mb-10 lg:mb-0 max-w-lg lg:max-w-none"
                    >
                        <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-blue-50/10">
                            {/* Use ImagineAI style visual - placeholder or the heroImg with overlay */}
                            <div className="aspect-[4/3] md:aspect-video lg:aspect-square relative bg-gradient-to-br from-gray-900 to-black p-4 sm:p-6 md:p-8 flex items-center justify-center">
                                {/* Gradient Orb Effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 rounded-full blur-[40px] md:blur-[60px]" />
                                <Image
                                    src="/img/hero.png"
                                    alt="Future Ready AI Solutions"
                                    fill
                                    priority
                                    fetchPriority="high"
                                    quality={60}
                                    className="object-cover object-center opacity-70 mix-blend-overlay"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 512px, 50vw"
                                />
                                <div className="relative z-10 text-left">
                                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 font-mono tracking-tight text-blue-200 h-12 sm:h-14 md:h-16 flex">
                                        <span className="mr-1 text-green-400">$</span>
                                        <Typewriter texts={["/..Future Ready", "/..AI/ML Solutions", "/..Web3 Solutions", "/..Full-Stack Solutions"]} delay={80} pauseTime={2000} />
                                    </h1>
                                    <h2 className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">Scalable Architecture for Growing Businesses</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Typewriter({ texts, delay = 50, pauseTime = 2000 }: { texts: string[], delay?: number, pauseTime?: number }) {
    const [currentText, setCurrentText] = React.useState("");
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    // Index of the string in the texts array
    const [textArrayIndex, setTextArrayIndex] = React.useState(0);

    React.useEffect(() => {
        const textToType = texts[textArrayIndex % texts.length];

        if (isDeleting) {
            if (currentText === "") {
                setIsDeleting(false);
                setTextArrayIndex((prev) => prev + 1);
                return;
            }

            const timeout = setTimeout(() => {
                setCurrentText(prev => prev.slice(0, -1));
            }, delay / 2);
            return () => clearTimeout(timeout);
        } else {
            if (currentText === textToType) {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
                return () => clearTimeout(timeout);
            }

            const timeout = setTimeout(() => {
                setCurrentText(textToType.slice(0, currentText.length + 1));
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentText, isDeleting, textArrayIndex, texts, delay, pauseTime]);

    return (
        <span className="inline-block relative">
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block ml-1 text-blue-400 align-middle"
            >
                _
            </motion.span>
        </span>
    );
}
