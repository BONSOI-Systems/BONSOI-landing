"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Check, X, ChevronDown, ChevronUp, Star, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
    const router = useRouter();
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const handleSelectPlan = (name: string, price: string) => {
        if (price === "Custom") {
            window.location.href = "/contact";
            return;
        }
        router.push("/contact");
    };

    return (
        <main className="bg-black min-h-screen text-white overflow-hidden relative">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

            <Container>
                <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">

                    {/* Hero Section */}
                    <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4">
                        <div className="inline-flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-6 bg-green-500/10 rounded-xl sm:rounded-2xl border border-green-500/20">
                            <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Pricing</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
                            Choose the perfect plan for your business. No hidden fees. Upgrade or cancel anytime.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex bg-white/10 p-1 rounded-lg sm:rounded-xl">
                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all ${billingCycle === "monthly" ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle("yearly")}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1 sm:gap-2 ${billingCycle === "yearly" ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}
                            >
                                Yearly <span className="text-[8px] sm:text-[10px] bg-green-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full">Save 20%</span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4">
                        <PricingCard
                            name="Starter"
                            price="$199"
                            desc="Perfect for MVPs and startups."
                            features={["Custom AI Integration", "Basic Analytics", "Web Responsive", "Email Support", "Shared Hosting"]}
                            onSelect={() => handleSelectPlan("Starter", "$199")}
                        />
                        <PricingCard
                            name="Growth"
                            price="$1,499"
                            desc="For scaling businesses & teams."
                            features={["Everything in Starter", "Advanced NLP Models", "Multi-Agent Systems", "Priority 24/7 Support", "SEO Optimization", "Payment Integration"]}
                            isPopular
                            onSelect={() => handleSelectPlan("Growth", "$1,499")}
                        />
                        <PricingCard
                            name="Enterprise"
                            price="Custom"
                            desc="Full-scale transformation."
                            features={["Everything in Growth", "Dedicated Squads", "On-Premise Deployment", "Custom Security Audits", "White-labeling", "SLA Guarantees"]}
                            onSelect={() => handleSelectPlan("Enterprise", "Custom")}
                        />
                    </div>

                    {/* Comparison Table */}
                    <div className="mb-16 sm:mb-20 md:mb-24 px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Feature Comparison</h2>
                        <div className="overflow-x-auto -mx-4 px-4">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="p-3 sm:p-4 text-gray-400 font-medium text-xs sm:text-sm w-1/4">Feature</th>
                                        <th className="p-3 sm:p-4 text-white font-bold text-center text-xs sm:text-sm w-1/4">Starter</th>
                                        <th className="p-3 sm:p-4 text-blue-400 font-bold text-center text-xs sm:text-sm w-1/4">Growth</th>
                                        <th className="p-3 sm:p-4 text-purple-400 font-bold text-center text-xs sm:text-sm w-1/4">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow label="AI Models" v1="Basic" v2="Advanced (GPT-4/Claude)" v3="Custom Fine-tuned" />
                                    <TableRow label="Support" v1="Email (48h)" v2="Priority (4h)" v3="Dedicated Manager" />
                                    <TableRow label="Hosting" v1="Shared" v2="Dedicated Cloud" v3="On-Premise / Hybrid" />
                                    <TableRow label="Analytics" v1="Basic" v2="Real-time" v3="Custom Dashboards" />
                                    <TableRow label="Users" v1="Up to 5" v2="Up to 50" v3="Unlimited" />
                                    <TableRow label="SLA" v1={<X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mx-auto" />} v2={<X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mx-auto" />} v3={<Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" />} />
                                    <TableRow label="White-labeling" v1={<X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 mx-auto" />} v2={<Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" />} v3={<Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-auto" />} />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-3 sm:space-y-4">
                            <FAQItem q="Can I switch plans later?" a="Yes! You can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle." />
                            <FAQItem q="Do you offer refunds?" a="We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, getting a refund is hassle-free." />
                            <FAQItem q="What payment methods do you accept?" a="We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise plans." />
                            <FAQItem q="Is there a long-term contract?" a="No, our standard plans are month-to-month. However, we offer significant discounts (up to 20%) for annual commitments." />
                        </div>
                    </div>

                </div>
            </Container>
        </main>
    );
}

function PricingCard({ name, price, desc, features, isPopular, onSelect }: { name: string, price: string, desc: string, features: string[], isPopular?: boolean, onSelect: () => void }) {
    return (
        <div className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border flex flex-col transition-all cursor-pointer group ${isPopular ? "bg-white/10 border-blue-500 shadow-2xl shadow-blue-500/20 md:scale-105 z-10" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white shadow-lg flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" /> Most Popular
                </div>
            )}
            <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm h-auto md:h-10">{desc}</p>
            </div>
            <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl md:text-3xl font-bold text-white tracking-tight">{price}</span>
                {price !== "Custom" && <span className="text-gray-500 text-sm sm:text-lg">/mo</span>}
            </div>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-0.5 p-0.5 bg-blue-500/20 rounded-full">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-xs sm:text-sm">{f}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={onSelect}
                className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all ${isPopular ? "bg-white text-blue-900 hover:bg-gray-100" : "bg-white/10 hover:bg-white/20 text-white"}`}
            >
                {price === "Custom" ? "Contact Sales" : "Choose Plan"}
            </button>
        </div>
    )
}

function TableRow({ label, v1, v2, v3 }: { label: string, v1: React.ReactNode, v2: React.ReactNode, v3: React.ReactNode }) {
    return (
        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
            <td className="p-3 sm:p-4 text-gray-300 text-xs sm:text-sm">{label}</td>
            <td className="p-3 sm:p-4 text-center text-gray-400 text-[10px] sm:text-sm">{v1}</td>
            <td className="p-3 sm:p-4 text-center text-gray-400 text-[10px] sm:text-sm">{v2}</td>
            <td className="p-3 sm:p-4 text-center text-gray-400 text-[10px] sm:text-sm">{v3}</td>
        </tr>
    )
}

function FAQItem({ q, a }: { q: string, a: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-xl sm:rounded-2xl bg-white/5 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
                <span className="font-bold text-sm sm:text-base md:text-lg text-white pr-4">{q}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />}
            </button>
            {isOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-400 leading-relaxed text-sm sm:text-base border-t border-white/5 pt-4">
                    {a}
                </div>
            )}
        </div>
    )
}
