/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Block clickjacking — allow same origin for admin iframes (YouTube about page uses SAMEORIGIN)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Legacy XSS filter (belt + braces for older browsers)
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Don't leak full URL as Referer to external sites
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict browser features
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          // Force HTTPS for 1 year
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // Prevent cross-site info leakage
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
      {
        // Admin routes get stricter frame policy
        source: "/admin/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
