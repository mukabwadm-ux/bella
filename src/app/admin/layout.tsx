"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import {
  LayoutDashboard, Package, BookOpen, LogOut, Menu, X, MapPin,
  ChevronDown, MessageSquare, Users, Zap,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { UserRole } from "@/lib/roles";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  // Tour Packages group is "open" whenever we're anywhere under tours or enquiries
  const toursGroupActive =
    pathname.startsWith("/admin/tours") || pathname.startsWith("/admin/enquiries");
  const [toursOpen, setToursOpen] = useState(toursGroupActive);

  // Fetch current user's role for nav filtering
  useEffect(() => {
    fetch("/api/admin/me")
      .then((r) => r.json())
      .then((d) => setUserRole(d.role ?? null))
      .catch(() => {});
  }, []);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  const isLogin = pathname === "/admin/login";
  if (isLogin) return <>{children}</>;

  function isActive(href: string, exact = false) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  // Label shown in the top bar
  function pageLabel() {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.startsWith("/admin/tours")) return "Tour Packages";
    if (pathname.startsWith("/admin/enquiries")) return "Tour Enquiries";
    if (pathname.startsWith("/admin/blog")) return "Blog Posts";
    if (pathname.startsWith("/admin/destinations")) return "Destinations";
    if (pathname.startsWith("/admin/contact")) return "Contact Form";
    if (pathname.startsWith("/admin/users")) return "Users";
    if (pathname.startsWith("/admin/integrations")) return "Integrations";
    return "Admin";
  }

  const linkBase = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors";
  const activeLink = "bg-[#D98200] text-white";
  const inactiveLink = "text-white/60 hover:text-white hover:bg-white/10";
  const subLinkBase = "flex items-center gap-2.5 pl-9 pr-3 py-2 rounded-lg text-sm font-medium transition-colors";

  return (
    <div className="min-h-screen flex bg-gray-50" style={{ fontFamily: "var(--font-poppins, sans-serif)" }}>
      {/* ── SIDEBAR ──────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0a2318] flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#D98200] flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none">Bella Safaris</p>
              <p className="text-white/40 text-xs">Admin Panel</p>
            </div>
          </div>
          <button className="lg:hidden text-white/50 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">

          {/* Dashboard */}
          <Link
            href="/admin"
            onClick={() => setSidebarOpen(false)}
            className={`${linkBase} ${isActive("/admin", true) ? activeLink : inactiveLink}`}
          >
            <LayoutDashboard size={17} />
            Dashboard
          </Link>

          {/* ── Tour Packages group ─────────────── */}
          <div>
            <button
              onClick={() => setToursOpen((o) => !o)}
              className={`w-full ${linkBase} justify-between ${toursGroupActive ? "text-white" : inactiveLink}`}
            >
              <span className="flex items-center gap-3">
                <Package size={17} />
                Tour Packages
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${toursOpen ? "rotate-180" : ""}`}
              />
            </button>

            {toursOpen && (
              <div className="mt-0.5 space-y-0.5">
                <Link
                  href="/admin/tours"
                  onClick={() => setSidebarOpen(false)}
                  className={`${subLinkBase} ${
                    pathname.startsWith("/admin/tours") ? "text-white bg-white/10" : "text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                  All Packages
                </Link>
                <Link
                  href="/admin/enquiries"
                  onClick={() => setSidebarOpen(false)}
                  className={`${subLinkBase} ${
                    pathname.startsWith("/admin/enquiries") ? "text-white bg-white/10" : "text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                  Enquiries
                </Link>
              </div>
            )}
          </div>

          {/* Blog Posts */}
          <Link
            href="/admin/blog"
            onClick={() => setSidebarOpen(false)}
            className={`${linkBase} ${isActive("/admin/blog") ? activeLink : inactiveLink}`}
          >
            <BookOpen size={17} />
            Blog Posts
          </Link>

          {/* Destinations — admin only */}
          {(userRole === "admin" || userRole === null) && (
            <Link
              href="/admin/destinations"
              onClick={() => setSidebarOpen(false)}
              className={`${linkBase} ${isActive("/admin/destinations") ? activeLink : inactiveLink}`}
            >
              <MapPin size={17} />
              Destinations
            </Link>
          )}

          {/* Divider + admin-only section */}
          {(userRole === "admin" || userRole === null) && (
            <>
              <div className="pt-3 pb-1 px-3">
                <p className="text-white/20 text-xs font-semibold uppercase tracking-widest">Messages</p>
              </div>

              <Link
                href="/admin/contact"
                onClick={() => setSidebarOpen(false)}
                className={`${linkBase} ${isActive("/admin/contact") ? activeLink : inactiveLink}`}
              >
                <MessageSquare size={17} />
                Contact Form
              </Link>

              <Link
                href="/admin/users"
                onClick={() => setSidebarOpen(false)}
                className={`${linkBase} ${isActive("/admin/users") ? activeLink : inactiveLink}`}
              >
                <Users size={17} />
                Users
              </Link>

              <Link
                href="/admin/integrations"
                onClick={() => setSidebarOpen(false)}
                className={`${linkBase} ${isActive("/admin/integrations") ? activeLink : inactiveLink}`}
              >
                <Zap size={17} />
                Integrations
              </Link>
            </>
          )}

        </nav>

        {/* Sign out */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
          >
            <LogOut size={17} />
            Sign Out
          </button>
          <p className="text-white/25 text-xs px-3 mt-3">mukabwa.dm@gmail.com</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── MAIN ─────────────────────────────────── */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-gray-500 hover:text-gray-900" onClick={() => setSidebarOpen(true)}>
              <Menu size={22} />
            </button>
            <h1 className="text-sm font-semibold text-gray-900 hidden sm:block">{pageLabel()}</h1>
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-full transition-colors"
          >
            View Site ↗
          </a>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
