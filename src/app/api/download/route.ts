import { NextResponse } from "next/server";

// Type definitions for GitHub releases API response
interface GitHubAsset {
    name: string;
    browser_download_url: string;
}

interface GitHubRelease {
    tag_name: string;
    assets: GitHubAsset[];
}

/**
 * GET /api/download
 *
 * Fetches the latest release from the configured private GitHub repo,
 * finds the .exe asset, and redirects the user to its download URL.
 * The GitHub token is kept server-side only — never exposed to the client.
 */
export async function GET() {
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    // Validate that all required environment variables are set
    if (!token || !owner || !repo) {
        return NextResponse.json(
            { error: "Server misconfiguration: missing GitHub environment variables." },
            { status: 500 }
        );
    }

    let release: GitHubRelease;

    try {
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
            {
                cache: "no-store", // Always fetch the truly latest release
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error("GitHub API error:", response.status, error);
            return NextResponse.json(
                { error: "Failed to fetch latest release from GitHub." },
                { status: 502 }
            );
        }

        release = (await response.json()) as GitHubRelease;
    } catch {
        return NextResponse.json(
            { error: "Network error while contacting GitHub API." },
            { status: 502 }
        );
    }

    // Find the Windows .exe asset from the release
    const exeAsset = release.assets.find((asset) =>
        asset.name.endsWith(".exe")
    );

    if (!exeAsset) {
        return NextResponse.json(
            {
                error: `No .exe asset found in release ${release.tag_name}. Check that the release includes a Windows build.`,
            },
            { status: 404 }
        );
    }

    // Redirect the user directly to the file download URL
    return NextResponse.redirect(exeAsset.browser_download_url, { status: 302 });
}
