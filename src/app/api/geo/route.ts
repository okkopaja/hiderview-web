import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    // Dev-only: ?mock=IN (or any ISO country code) simulates geo without a VPN
    if (process.env.NODE_ENV === "development") {
        const mockCountry = req.nextUrl.searchParams.get("mock");
        if (mockCountry) {
            return NextResponse.json({ country: mockCountry.toUpperCase() });
        }
    }

    // Vercel automatically injects this header in production
    const country = req.headers.get("x-vercel-ip-country") ?? null;

    if (country) {
        return NextResponse.json({ country });
    }

    // Fallback for local dev: use a free IP geolocation API
    const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip") ??
        null;

    if (!ip || ip === "127.0.0.1" || ip === "::1") {
        // In local dev with no real IP, return a neutral response
        return NextResponse.json({ country: null });
    }

    try {
        const res = await fetch(`https://ipapi.co/${ip}/country/`, {
            headers: { "User-Agent": "hiderview/1.0" },
        });
        const text = await res.text();
        return NextResponse.json({ country: text.trim() });
    } catch {
        return NextResponse.json({ country: null });
    }
}
