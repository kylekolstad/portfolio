"use client";

import { Moon, Sun, Github, Linkedin, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Navigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Stack", id: "stack" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setNavVisible(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const getScrollY = () => {
      return (
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    };

    const updateNavVisibility = () => {
      const currentScrollY = getScrollY();
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (!isMobile) {
        setNavVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      if (mobileMenuOpen) {
        setNavVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      if (currentScrollY <= 24) {
        setNavVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      const scrollDelta = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDelta) > 6) {
        setNavVisible(scrollDelta < 0);
        lastScrollY.current = currentScrollY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavVisibility);
        ticking.current = true;
      }
    };

    lastScrollY.current = getScrollY();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{
          y: navVisible ? 0 : -96,
          opacity: navVisible ? 1 : 0,
        }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 md:py-4 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 min-h-[52px] md:min-h-[45px] bg-muted/80 backdrop-blur-xl border border-border rounded-xl shadow-sm">
            <div className="flex items-center gap-8 min-w-0">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                  setNavVisible(true);
                }}
                className="text-base md:text-lg font-semibold text-foreground hover:opacity-70 transition-opacity truncate"
              >
                Kyle Kolstad
              </button>

              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                <a
                  href="https://github.com/kylekolstad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com/in/kylekolstad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen((open) => !open);
                  setNavVisible(true);
                }}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 md:hidden bg-background/30 backdrop-blur-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="fixed left-4 right-4 top-[76px] z-50 md:hidden bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                ))}

                <div className="flex items-center justify-between px-4 pt-4 mt-2 border-t border-border/50">
                  <span className="text-xs font-mono text-muted-foreground">
                    connect
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/kylekolstad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href="https://linkedin.com/in/kylekolstad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}