import { NextResponse } from "next/server";

export async function GET() {
    const clientId = process.env.PAYPAL_CLIENT_ID;

    if (!clientId) {
        return NextResponse.json(
            { error: "PayPal Client ID not configured" },
            { status: 500 }
        );
    }

    // Only return the client ID (public credential)
    return NextResponse.json({ clientId });
}
