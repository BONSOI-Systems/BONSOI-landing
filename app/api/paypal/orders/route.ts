import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { amount, planName } = body;

        const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
        const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
        const BASE_URL = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

        if (!CLIENT_ID || !CLIENT_SECRET) {
            return NextResponse.json(
                { error: "Missing PayPal credentials" },
                { status: 500 }
            );
        }

        // 1. Get Access Token (Client Credentials Flow)
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
            throw new Error("Failed to get access token");
        }

        const authData = await authResponse.json();
        const accessToken = authData.access_token;

        // 2. Create Order
        const orderResponse = await fetch(`${BASE_URL}/v2/checkout/orders`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        description: `BONSOI Systems - ${planName} Plan`,
                        amount: {
                            currency_code: "USD",
                            value: amount.replace(/[^0-9.]/g, ""), // Ensure clean number string
                        },
                    },
                ],
            }),
        });

        if (!orderResponse.ok) {
            const errorText = await orderResponse.text();
            console.error("PayPal Order Error:", errorText);
            throw new Error(`Failed to create order: ${errorText}`);
        }

        const orderData = await orderResponse.json();
        return NextResponse.json({ id: orderData.id });

    } catch (error: any) {
        console.error("PayPal Order API Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create order" },
            { status: 500 }
        );
    }
}
