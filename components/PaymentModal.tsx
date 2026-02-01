"use client";
import React, { useEffect, useRef, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName: string;
    amount: string;
}

export function PaymentModal({ isOpen, onClose, planName, amount }: Readonly<PaymentModalProps>) {
    const paypalRef = useRef<HTMLDivElement>(null);
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<"pending" | "success" | "error">("pending");

    useEffect(() => {
        if (isOpen && !isSdkLoaded) {
            loadScript({
                clientId: "test", // Replace with actual Client ID
                currency: "USD",
                intent: "capture",
            })
                .then((paypal) => {
                    if (paypal && paypal.Buttons) {
                        setIsSdkLoaded(true);

                        // Clear any existing buttons
                        if (paypalRef.current) {
                            paypalRef.current.innerHTML = "";
                        }

                        paypal.Buttons({
                            style: {
                                layout: "vertical",
                                color: "gold",
                                shape: "rect",
                                label: "paypal",
                            },
                            createOrder: (data, actions) => {
                                const numericAmount = amount.replace(/[^0-9.]/g, "");
                                return actions.order.create({
                                    intent: "CAPTURE",
                                    purchase_units: [
                                        {
                                            description: `BONSOI Systems - ${planName} Plan`,
                                            amount: {
                                                currency_code: "USD",
                                                value: numericAmount || "199.00",
                                            },
                                        },
                                    ],
                                });
                            },
                            onApprove: async (data, actions) => {
                                if (actions.order) {
                                    await actions.order.capture();
                                    setPaymentStatus("success");
                                }
                            },
                            onError: (err) => {
                                console.error("PayPal Error:", err);
                                setPaymentStatus("error");
                            },
                        }).render(paypalRef.current!);
                    }
                })
                .catch((err) => {
                    console.error("Failed to load PayPal SDK", err);
                });
        }
    }, [isOpen, isSdkLoaded, amount, planName]);

    // Reset status when modal re-opens
    useEffect(() => {
        if (isOpen) {
            setPaymentStatus("pending");
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none -mr-32 -mt-32" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-8 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Checkout</h3>
                            <p className="text-gray-400">Complete your subscription for</p>
                            <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-lg font-semibold text-white">{planName}</p>
                                <p className="text-3xl font-bold text-blue-400 mt-1">{amount}<span className="text-sm text-gray-400 font-normal">/mo</span></p>
                            </div>
                        </div>

                        {paymentStatus === "success" ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-green-500" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Payment Successful!</h4>
                                <p className="text-gray-400 mb-6">Welcome to BONSOI Systems.</p>
                                <button
                                    onClick={onClose}
                                    className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Continue to Dashboard
                                </button>
                            </div>
                        ) : paymentStatus === "error" ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <X className="w-8 h-8 text-red-500" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Payment Failed</h4>
                                <p className="text-gray-400 mb-6">Something went wrong. Please try again.</p>
                                <button
                                    onClick={() => setPaymentStatus("pending")}
                                    className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
                                >
                                    Try Again
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 min-h-[150px] flex items-center justify-center">
                                <div ref={paypalRef} className="w-full" />
                            </div>
                        )}

                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                By processing this payment, you agree to our <a href="/terms" className="underline hover:text-white">Terms</a> and <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
