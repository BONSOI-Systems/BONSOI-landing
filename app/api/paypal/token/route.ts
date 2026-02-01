import { NextResponse } from "next/server";

export async function POST() {
    try {
        const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
        const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
        const BASE_URL = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

        console.log("API: Generating Token...", {
            hasClientId: !!CLIENT_ID,
            hasSecret: !!CLIENT_SECRET,
            url: BASE_URL
        });

        if (!CLIENT_ID || !CLIENT_SECRET) {
            console.error("API Error: Missing Credentials");
            return NextResponse.json(
                { error: "Missing PayPal credentials in .env.local" },
                { status: 500 }
            );
        }

        if (CLIENT_ID === "YOUR_SANDBOX_CLIENT_ID" || CLIENT_SECRET === "YOUR_SANDBOX_CLIENT_SECRET") {
            const msg = "Please replace placeholders in .env.local with real PayPal Sandox credentials.";
            console.error(msg);
            return NextResponse.json({ error: msg }, { status: 500 });
        }

        // 1. Get Access Token
        console.log("API: Fetching Access Token...");
        const auth = Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");
        const authResponse = await fetch(`${BASE_URL}/v1/oauth2/token`, {
            method: "POST",
            body: "grant_type=client_credentials",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (!authResponse.ok) {
            const errorText = await authResponse.text();
            console.error("API Error: Access Token Failed", errorText);
            throw new Error(`Failed to get access token: ${errorText}`);
        }

        const authData = await authResponse.json();
        const accessToken = authData.access_token;
        console.log("API: Access Token Acquired. Fetching Client Token...");

        // 2. Generate Client Token for SDK v6
        // See: https://developer.paypal.com/docs/checkout/advanced/integrate/
        const response = await fetch(`${BASE_URL}/v1/identity/generate-token`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "Accept-Language": "en_US",
            },
            body: JSON.stringify({}), // Empty body required for POST
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error: Client Token Failed", errorText);
            throw new Error(`Failed to generate client token: ${errorText}`);
        }

        const data = await response.json();
        console.log("API: Client Token Response keys:", Object.keys(data));
        console.log("API: Client Token Generated Successfully");

        if (!data.client_token) {
            console.error("API Error: No client_token in response", data);
            throw new Error("No client_token returned from PayPal");
        }

        // Validate that it looks like a JWT (three parts separated by dots)
        const tokenParts = data.client_token.split('.');
        console.log("API: Token has", tokenParts.length, "parts (should be 3 for JWT)");

        return NextResponse.json({ clientToken: data.client_token });

    } catch (error: any) {
        console.error("PayPal Token Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to generate token" },
            { status: 500 }
        );
    }
}
