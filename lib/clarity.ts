"use client";

import Clarity from "@microsoft/clarity";

/**
 * Microsoft Clarity Utility Library
 * Wraps Clarity API methods for type-safe and consistent usage across the app.
 */

// Identify User
export const identifyUser = (
    customId: string,
    customSessionId?: string,
    customPageId?: string,
    friendlyName?: string
) => {
    if (typeof window !== "undefined" && Clarity) {
        try {
            Clarity.identify(customId, customSessionId, customPageId, friendlyName);
        } catch (e) {
            console.error("Clarity identify error:", e);
        }
    }
};

// Track Custom Event
export const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && Clarity) {
        try {
            Clarity.event(eventName);
        } catch (e) {
            console.error("Clarity event error:", e);
        }
    }
};

// Set Custom Tag
export const setTag = (key: string, value: string | string[]) => {
    if (typeof window !== "undefined" && Clarity) {
        try {
            Clarity.setTag(key, value);
        } catch (e) {
            console.error("Clarity setTag error:", e);
        }
    }
};

// Upgrade Session
export const upgradeSession = (reason: string) => {
    if (typeof window !== "undefined" && Clarity) {
        try {
            Clarity.upgrade(reason);
        } catch (e) {
            console.error("Clarity upgrade error:", e);
        }
    }
};

// Cookie Consent (v2 recommended)
type ConsentOptions = {
    ad_Storage?: "granted" | "denied";
    analytics_Storage?: "granted" | "denied";
};

export const consent = (options?: ConsentOptions) => {
    if (typeof window !== "undefined" && Clarity) {
        try {
            if (options) {
                // v2 consent - ensure strict types
                Clarity.consentV2({
                    ad_Storage: options.ad_Storage || "granted",
                    analytics_Storage: options.analytics_Storage || "granted"
                });
            } else {
                // Default v2 consent (all granted)
                Clarity.consentV2();
            }
        } catch (e) {
            console.error("Clarity consent error:", e);
        }
    }
};
