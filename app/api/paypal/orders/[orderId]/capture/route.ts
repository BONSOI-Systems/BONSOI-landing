import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ orderId: string }> }
) {
    try {
        const { orderId } = await params;

        const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
        const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
        const BASE_URL = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

        if (!CLIENT_ID || !CLIENT_SECRET) {
            return NextResponse.json(
                { error: "Missing PayPal credentials" },
                { status: 500 }
            );
        }

        // 1. Get Access Token
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

        // 2. Capture the Order
        const captureResponse = await fetch(
            `${BASE_URL}/v2/checkout/orders/${orderId}/capture`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!captureResponse.ok) {
            const errorText = await captureResponse.text();
            console.error("PayPal Capture Error:", errorText);
            throw new Error(`Failed to capture payment: ${errorText}`);
        }

        const captureData = await captureResponse.json();
        console.log("Payment captured successfully:", captureData.id);

        return NextResponse.json({
            id: captureData.id,
            status: captureData.status,
            payer: captureData.payer,
        });

    } catch (error: any) {
        console.error("PayPal Capture API Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to capture payment" },
            { status: 500 }
        );
    }
}
