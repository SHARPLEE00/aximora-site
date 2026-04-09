"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50"
      >
        <div className="mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="relative z-50">
              <span className="text-[15px] font-medium tracking-[0.25em] uppercase text-text">
                Aximora
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-9">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                    pathname === l.href ? "text-accent" : "text-muted hover:text-text"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-[11px] tracking-[0.18em] uppercase text-black bg-text px-5 py-2 hover:bg-accent transition-all duration-500"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative z-50 w-7 h-7 flex flex-col justify-center gap-[5px]"
              aria-label="Menu"
            >
              <motion.span animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} className="block w-full h-[1px] bg-text origin-center transition-colors" />
              <motion.span animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} className="block w-full h-[1px] bg-text origin-center transition-colors" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-start justify-center px-8"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="py-3"
              >
                <Link
                  href={l.href}
                  className="text-[clamp(1.8rem,5vw,3rem)] font-extralight tracking-tight text-muted hover:text-text transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
