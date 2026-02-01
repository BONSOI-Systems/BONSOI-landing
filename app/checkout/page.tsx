"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import { Check, ArrowLeft, AlertCircle, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { trackEvent, upgradeSession } from "@/lib/clarity";

// Type definitions for PayPal SDK v5
declare global {
    interface Window {
        paypal?: {
            Buttons: (options: any) => {
                render: (container: HTMLElement) => Promise<void>;
            };
            CardFields?: (options: any) => any;
            HostedFields?: any;
        };
    }
}

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const planName = searchParams.get("plan") || "Starter";
    const amount = searchParams.get("amount") || "$199";
    const numericAmount = parseFloat(amount.replace(/[^0-9.]/g, '')) || 199;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [paymentStatus, setPaymentStatus] = useState<"pending" | "processing" | "success" | "error">("pending");

    // Refs for payment containers
    const paypalContainerRef = useRef<HTMLDivElement>(null);
    const paypalButtonsRendered = useRef(false);

    useEffect(() => {
        // Dynamically load PayPal SDK v5
        const loadPayPalSDK = async () => {
            if (paypalButtonsRendered.current) {
                console.log("PayPal buttons already rendered, skipping");
                return;
            }

            try {
                console.log("Fetching PayPal config...");

                // Get client ID from server
                const configResponse = await fetch("/api/paypal/config");
                if (!configResponse.ok) {
                    const errText = await configResponse.text();
                    throw new Error(`Failed to get PayPal configuration: ${errText}`);
                }
                const { clientId } = await configResponse.json();
                console.log("Got client ID:", clientId ? "yes" : "no");

                if (!clientId) {
                    throw new Error("PayPal Client ID not configured");
                }

                // Check if PayPal SDK is already loaded
                if (window.paypal?.Buttons) {
                    console.log("PayPal SDK already loaded, initializing...");
                    initializePayPal();
                    return;
                }

                // Check if script already exists
                const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
                if (existingScript) {
                    console.log("PayPal script already in DOM, waiting for SDK...");
                    // Wait for SDK to be available
                    const waitForSDK = setInterval(() => {
                        if (window.paypal?.Buttons) {
                            clearInterval(waitForSDK);
                            console.log("SDK became available");
                            initializePayPal();
                        }
                    }, 100);
                    // Timeout after 10 seconds
                    setTimeout(() => {
                        clearInterval(waitForSDK);
                        if (!window.paypal?.Buttons) {
                            setError("PayPal SDK failed to load");
                            setIsLoading(false);
                        }
                    }, 10000);
                    return;
                }

                console.log("Loading PayPal SDK script...");

                // Load PayPal SDK v5 script
                const script = document.createElement("script");
                script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons&currency=USD`;
                script.async = true;
                script.id = "paypal-sdk-script";

                script.onload = () => {
                    console.log("PayPal script loaded, initializing...");
                    initializePayPal();
                };

                script.onerror = (e) => {
                    console.error("PayPal script failed to load:", e);
                    setError("Failed to load PayPal SDK");
                    setIsLoading(false);
                };

                document.body.appendChild(script);

            } catch (err: any) {
                console.error("PayPal Config Error:", err);
                setError(err.message || "Failed to initialize PayPal");
                setIsLoading(false);
            }
        };

        loadPayPalSDK();

        // Upgrade session for checkout flow
        upgradeSession("checkout_started");
        trackEvent("checkout_page_viewed");
    }, []);

    const initializePayPal = async () => {
        try {
            console.log("initializePayPal called");

            if (!window.paypal?.Buttons) {
                console.error("PayPal Buttons not available");
                throw new Error("PayPal SDK not loaded properly");
            }

            if (paypalButtonsRendered.current) {
                console.log("Buttons already rendered, skipping");
                setIsLoading(false);
                return;
            }

            // Wait for container to be available
            if (!paypalContainerRef.current) {
                console.log("Container not ready, retrying in 100ms...");
                setTimeout(() => initializePayPal(), 100);
                return;
            }

            console.log("Rendering PayPal buttons...");
            paypalButtonsRendered.current = true;
            paypalContainerRef.current.innerHTML = "";

            // Create Order function
            const createOrder = async () => {
                try {
                    console.log("Creating order...");
                    const res = await fetch("/api/paypal/orders", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            amount: numericAmount.toString(),
                            planName
                        }),
                    });

                    if (!res.ok) {
                        const errData = await res.json();
                        throw new Error(errData.error || "Failed to create order");
                    }

                    const data = await res.json();
                    console.log("Order created:", data.id);
                    return data.id;
                } catch (err: any) {
                    console.error("Create Order Failed:", err);
                    setError(err.message || "Payment initiation failed");
                    throw err;
                }
            };

            // On Approve function
            const onApprove = async (data: { orderID: string }) => {
                try {
                    setPaymentStatus("processing");
                    console.log("Payment approved, capturing...", data.orderID);

                    const res = await fetch(`/api/paypal/orders/${data.orderID}/capture`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                    });

                    if (!res.ok) {
                        const errData = await res.json();
                        throw new Error(errData.error || "Failed to capture payment");
                    }

                    const captureData = await res.json();
                    console.log("Payment captured:", captureData);
                    setPaymentStatus("success");
                    trackEvent("payment_successful");
                } catch (err: any) {
                    console.error("Capture Failed:", err);
                    setError(err.message || "Payment capture failed");
                    setPaymentStatus("error");
                }
            };

            // Render PayPal Buttons
            await window.paypal.Buttons({
                style: {
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                    height: 45,
                },
                createOrder: createOrder,
                onApprove: onApprove,
                onError: (err: any) => {
                    console.error("PayPal Button Error:", err);
                    setError("Payment failed. Please try again.");
                    setPaymentStatus("error");
                },
                onCancel: () => {
                    console.log("Payment cancelled");
                },
            }).render(paypalContainerRef.current);

            setIsLoading(false);
            setError(null);

        } catch (err: any) {
            console.error("PayPal Init Error:", err);
            setError(err.message || "Failed to initialize payment methods");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl relative z-10 transition-all duration-300">
                <Link href="/pricing" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Pricing
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Checkout</h1>
                    <p className="text-gray-400">Complete your subscription</p>
                    <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-lg font-semibold text-white">{planName} Plan</p>
                        <p className="text-4xl font-bold text-blue-400 mt-2">{amount}<span className="text-sm text-gray-400 font-normal">/mo</span></p>
                    </div>
                </div>

                {error && (
                    <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-red-400 font-semibold">Payment Error</p>
                            <p className="text-sm text-red-300/80">{error}</p>
                        </div>
                    </div>
                )}

                {paymentStatus === "success" ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-500" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Payment Successful!</h4>
                        <p className="text-gray-400 mb-6">Thank you for subscribing to the {planName} plan.</p>
                        <button onClick={() => router.push("/dashboard")} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                            Continue to Dashboard
                        </button>
                    </div>
                ) : paymentStatus === "processing" ? (
                    <div className="text-center py-12">
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Processing your payment...</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* PayPal Buttons */}
                        <div className="p-4 border border-white/5 rounded-2xl bg-white/5">
                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Pay with PayPal</h3>
                            {isLoading ? (
                                <div className="flex items-center justify-center py-8">
                                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                                    <span className="ml-3 text-gray-400">Loading payment options...</span>
                                </div>
                            ) : (
                                <div ref={paypalContainerRef} className="min-h-[120px]" />
                            )}
                        </div>

                        {/* Features included */}
                        <div className="p-4 border border-white/5 rounded-2xl bg-white/5">
                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">What&apos;s Included</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-500 mr-2" />
                                    Unlimited AI content generation
                                </li>
                                <li className="flex items-center text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-500 mr-2" />
                                    Priority support
                                </li>
                                <li className="flex items-center text-sm text-gray-300">
                                    <Check className="w-4 h-4 text-green-500 mr-2" />
                                    Advanced analytics dashboard
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        Secure payment processing by PayPal. Your payment information is encrypted and secure.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
