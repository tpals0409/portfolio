"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLocale } from "@/lib/i18n/context";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const { t, ts } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full p-0 pt-0" style={{ willChange: "transform" }}>
      <div className="mx-auto max-w-[1100px] px-4 pt-3">
        <div
          className={cn(
            "rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
            scrolled
              ? "border-nav-border bg-nav-bg shadow-lg backdrop-blur-md"
              : "border-transparent bg-transparent shadow-none backdrop-blur-none"
          )}
        >
          <div className="flex h-14 items-center justify-between px-5">
            {/* Left: Name */}
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              {ts("ui.navName")}
            </a>

            {/* Center: Desktop nav */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = `#${activeSection}` === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {t(item.label)}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        style={{ willChange: "transform" }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right: Language toggle + Theme toggle + mobile hamburger */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="rounded-lg p-2 text-muted transition-colors hover:text-foreground md:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden rounded-b-2xl bg-nav-bg backdrop-blur-md md:hidden"
              >
                <div className="flex flex-col gap-1 px-5 py-4">
                  {NAV_ITEMS.map((item) => {
                    const isActive = `#${activeSection}` === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-card text-foreground"
                            : "text-muted hover:bg-card hover:text-foreground"
                        )}
                      >
                        {t(item.label)}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
