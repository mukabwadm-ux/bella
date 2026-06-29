import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

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
  openGraph: {
    siteName: "Bella Safaris",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
