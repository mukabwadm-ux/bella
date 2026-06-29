"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
