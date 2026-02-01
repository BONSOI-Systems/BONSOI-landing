"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
    useEffect(() => {
        const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

        if (projectId && typeof window !== "undefined") {
            try {
                // Initialize Clarity
                Clarity.init(projectId);
            } catch (error) {
                console.error("Failed to initialize Clarity:", error);
            }
        }
    }, []);

    return null;
}
