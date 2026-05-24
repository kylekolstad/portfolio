"use client";

import { Moon, Sun, Github, Linkedin, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./ui/logo";

export function Navigation() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [navCompact, setNavCompact] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [activeNavId, setActiveNavId] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "work" },
    { name: "Skills", id: "stack" },
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
    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
      let currentId: string | null = null;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (viewportAnchor >= top && viewportAnchor < bottom) {
          currentId = link.id;
          break;
        }
      }

      setActiveNavId(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
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

      setNavCompact(currentScrollY > 80);

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
        <motion.div
          className="mx-auto w-full pointer-events-auto"
          initial={false}
          animate={{
            maxWidth: navCompact ? "56rem" : "80rem",
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 32,
          }}
        >
          <motion.div
            initial={false}
            animate={{
              minHeight: navCompact ? 44 : 52,
              boxShadow: navCompact
                ? "0 18px 45px rgba(0, 0, 0, 0.10)"
                : "0 0 0 rgba(0, 0, 0, 0)",
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 32,
            }}
            className={`relative grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 py-3 md:min-h-[45px] rounded-full transition-colors duration-300 ${
              navCompact
                ? "border border-border/80 bg-muted/35 backdrop-blur-md"
                : "bg-transparent dark:bg-transparent"
            }`}
          >
            <div className="flex items-center min-w-0">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                  setNavVisible(true);
                }}
                className="flex items-center min-w-0 transition-all duration-300 hover:text-[var(--accent-indigo)]"
              >
                <Logo className="text-sm md:text-[15px]" />
              </button>
            </div>

            <div
              className="hidden md:flex items-center justify-center gap-1 text-sm font-medium"
              onMouseLeave={() => setHoveredNavId(null)}
            >
              {navLinks.map((link) => {
                const isActive = activeNavId === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    onMouseEnter={() => setHoveredNavId(link.id)}
                    className={`relative rounded-lg px-3 py-1.5 transition-colors duration-300 hover:text-[var(--accent-indigo)] dark:hover:text-[var(--accent-indigo)] ${
                      isActive
                        ? "text-[var(--accent-indigo)]"
                        : "text-[#3f4154] dark:text-muted-foreground"
                    }`}
                  >
                    {hoveredNavId === link.id && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-lg bg-[var(--accent-indigo)]/12 dark:bg-neutral-700/80"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-1 sm:gap-2 shrink-0">
              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                <a
                  href="https://github.com/kylekolstad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg text-[#252737] transition-colors duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com/in/kylekolstad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg text-[#252737] transition-colors duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-[#252737] transition-colors duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
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
                className="md:hidden p-2 rounded-lg text-[#252737] transition-colors duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
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
              className="fixed left-4 right-4 top-[76px] z-50 md:hidden bg-white/92 backdrop-blur-xl border border-black/10 rounded-xl shadow-xl overflow-hidden dark:border-neutral-800 dark:bg-neutral-800"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => {
                  const isActive = activeNavId === link.id;

                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors duration-300 hover:text-[var(--accent-indigo)] hover:bg-background/70 dark:hover:text-[var(--accent-indigo)] ${
                        isActive
                          ? "text-[var(--accent-indigo)]"
                          : "text-[#3f4154] dark:text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}

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
                      className="p-2 rounded-lg text-[#252737] transition-all duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href="https://linkedin.com/in/kylekolstad"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-lg text-[#252737] transition-all duration-300 hover:text-[var(--accent-indigo)] dark:text-foreground/80 dark:hover:text-[var(--accent-indigo)]"
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
