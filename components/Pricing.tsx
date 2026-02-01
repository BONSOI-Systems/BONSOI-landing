
"use client";
import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export function Pricing() {
    const router = useRouter();

    const handleSelectPlan = (name: string, price: string) => {
        if (price === "Custom") {
            window.location.href = "/contact";
            return;
        }
        router.push("/contact");
        // router.push(`/checkout?plan=${encodeURIComponent(name)}&amount=${encodeURIComponent(price)}`);
    };

    const plans = [
        {
            name: "Starter",
            price: "$199",
            description: "Perfect for MVPs and small businesses starting their AI journey.",
            features: ["Custom AI Agent Integration", "Basic Analytics Dashboard", "Web & Mobile Responsive", "1 Month Support", "Cloud Deployment"],
            featured: false,
        },
        {
            name: "Growth",
            price: "$1499",
            description: "Scalable solutions for growing companies needing robust architecture.",
            features: ["Everything in Starter", "Advanced NLP Models", "Multi-Agent Systems", "Payment Gateway Integration", "5 Months Priority Support", "SEO Optimization"],
            featured: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full-scale digital transformation and enterprise-grade security.",
            features: ["Everything in Growth", "Dedicated Engineering Team", "On-Premise Deployment Options", "SLA & 24/7 Support", "Custom Security Audits", "White-labeling"],
            featured: false,
        },
    ];

    return (
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
            <Container>
                <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
                    >
                        Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pricing</span>
                    </motion.h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Choose the plan that best fits your business goals. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-6 sm:p-8 rounded-2xl md:rounded-3xl border ${plan.featured
                                ? "bg-white/10 border-blue-500 shadow-2xl shadow-blue-500/20"
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                                } transition-all duration-300`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 md:mb-8">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm h-auto md:h-10">{plan.description}</p>
                            </div>

                            <div className="mb-6 md:mb-8">
                                <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-gray-500 text-sm">/project</span>}
                            </div>

                            <div className="flex-grow mb-6 md:mb-8 space-y-3 md:space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                                        <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleSelectPlan(plan.name, plan.price)}
                                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all ${plan.featured
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}
                            >
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
