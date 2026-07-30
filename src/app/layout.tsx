import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { unstable_cache } from "next/cache";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { supabaseAdmin } from "@/lib/supabase-server";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bella Safaris — Kenya's Premier Safari & Travel Company",
    template: "%s | Bella Safaris",
  },
  description:
    "Discover East Africa with Bella Safaris. Expert-guided safaris to Maasai Mara, Amboseli, Serengeti, Zanzibar and beyond. Based in Nairobi since 2015.",
  keywords: ["Kenya safari", "Maasai Mara", "Amboseli", "Zanzibar", "East Africa tours", "Nairobi travel"],
  icons: {
    icon: [
      { url: "/images/Bella_Safaris-Favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/Bella_Safaris-Favicon.png", type: "image/png" },
    ],
    shortcut: "/images/Bella_Safaris-Favicon.png",
  },
  openGraph: {
    siteName: "Bella Safaris",
    locale: "en_KE",
    type: "website",
  },
};

const getSiteSettings = unstable_cache(
  async () => {
    try {
      const { data } = await supabaseAdmin
        .from("site_settings")
        .select("key, value");
      return Object.fromEntries((data ?? []).map((r) => [r.key, r.value ?? ""]));
    } catch {
      return {} as Record<string, string>;
    }
  },
  ["site-settings"],
  { revalidate: 3600, tags: ["site-settings"] }
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const ga4Id = settings.ga4_measurement_id?.trim();
  const gscCode = settings.gsc_verification_code?.trim();
  const adsId = settings.google_ads_id?.trim();
  const customHeadCode = settings.custom_head_code?.trim();
  const customBodyCode = settings.custom_body_code?.trim();

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {gscCode && (
          <meta name="google-site-verification" content={gscCode} />
        )}
        {customHeadCode && (
          <Script id="custom-head" strategy="beforeInteractive">
            {customHeadCode}
          </Script>
        )}
      </head>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>

        {/* Google Analytics 4 */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', { page_path: window.location.pathname });
                ${adsId ? `gtag('config', '${adsId}');` : ""}
              `}
            </Script>
          </>
        )}

        {/* Custom body code (chat widgets, heatmaps, etc.) */}
        {customBodyCode && (
          <Script id="custom-body" strategy="afterInteractive">
            {customBodyCode}
          </Script>
        )}

        {/* Safari Bookings reviews widget */}
        <Script id="safari-bookings-widget" strategy="lazyOnload">
          {`(function(){var sb=document.createElement('script');sb.type='text/javascript';sb.async=true;sb.src='https://s3.amazonaws.com/z_437er23a/82a4193c0.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(sb,s);})();`}
        </Script>
      </body>
    </html>
  );
}
