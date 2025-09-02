import React, { useMemo, useState, useEffect } from "react"; 
import { motion } from "framer-motion"; 
import { Phone, Menu, X, Home as HomeLg, Users2, Building2, ShieldCheck, CheckCircle2, ChevronRight, MessageCircle, Star, MapPin, Clock, FileText, BookOpen, HelpCircle } from "lucide-react";

// ====== Business Constants ======
const BRAND = "FireClaimsFL";
const PHONE_DISPLAY = "(407) 555-0199"; // replace with real
const PHONE_TEL = "+14075550199"; // replace with real
const EMAIL = "help@fireclaimsfl.com"; // replace with real
const ADDRESS = "123 Market St, Orlando, FL 32801"; // replace with real
const LICENSE = "FL Public Adjuster License # A161638";

// Shared helpers
const cx = (...classes) => classes.filter(Boolean).join(" ");

const Container = ({ className = "", children }) => (
  <div className={cx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

const Section = ({ id, className = "", children }) => (
  <section id={id} className={cx("py-16 md:py-24", className)}>{children}</section>
);

const PrimaryButton = ({ href, onClick, children, className = "" }) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";
  return href ? (
    <a href={href} onClick={onClick} className={cx(base, "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600", className)}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={cx(base, "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600", className)}>
      {children}
    </button>
  );
};

const GhostButton = ({ href, children, className = "" }) => (
  <a href={href} className={cx("inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold border border-neutral-300 hover:border-neutral-400 text-neutral-800", className)}>
    {children}
  </a>
);

// ====== Nav ======
const NAV = [
  { label: "How We Help", href: "#how-we-help" },
  { label: "Homeowners", href: "#homeowners" },
  { label: "Renters", href: "#renters" },
  { label: "Landlords", href: "#landlords" },
  { label: "Resources", href: "#resources" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ open, onToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cx("sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-neutral-200", scrolled ? "shadow-sm" : "")}>
      <Container className="flex items-center justify-between py-3">
        <div className="font-bold text-lg text-red-600">{BRAND}</div>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-neutral-700 hover:text-neutral-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <GhostButton href={`tel:${PHONE_TEL}`}>
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </GhostButton>
          <PrimaryButton href="#contact">Free Claim Review</PrimaryButton>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300" onClick={onToggle} aria-label="Toggle Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <Container className="py-2">
            <nav className="grid py-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={onToggle} className="px-2 py-3 text-base text-neutral-800 hover:bg-neutral-50 rounded-lg">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 pb-4">
              <PrimaryButton href={`tel:${PHONE_TEL}`} className="flex-1">
                <Phone className="h-4 w-4" /> Call Now
              </PrimaryButton>
              <GhostButton href={`mailto:${EMAIL}`} className="flex-1">Email Us</GhostButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

// ====== Hero ======
const Hero = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900">Your Fire Claim, Fought & Paid — Fast.</h1>
    <p className="mt-4 text-lg text-neutral-700">Insurance will try to underpay. We make sure you recover every dollar.</p>
    <div className="mt-6 flex justify-center gap-4">
      <PrimaryButton href="#contact">Get Help Now</PrimaryButton>
      <GhostButton href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</GhostButton>
    </div>
  </div>
);

// ====== Footer ======
const Footer = () => (
  <footer className="border-t border-neutral-200 bg-white py-10">
    <Container className="grid grid-cols-1 gap-8 md:grid-cols-4">
      <div className="space-y-3">
        <div className="flex items-center gap-2 font-extrabold text-neutral-900">
          <ShieldCheck className="h-6 w-6 text-red-600" /> {BRAND}
        </div>
        <div className="text-sm text-neutral-600">{LICENSE}</div>
        <div className="text-sm text-neutral-600">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
      </div>
      <div>
        <div className="mb-3 font-semibold text-neutral-900">Company</div>
        <ul className="grid gap-2 text-sm text-neutral-700">
          {NAV.map((n) => (
            <li key={n.href}><a className="hover:text-neutral-900" href={n.href}>{n.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="mb-3 font-semibold text-neutral-900">Contact</div>
        <ul className="grid gap-2 text-sm text-neutral-700">
          <li><a className="hover:text-neutral-900" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
          <li><a className="hover:text-neutral-900" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li>{ADDRESS}</li>
        </ul>
      </div>
      <div>
        <div className="mb-3 font-semibold text-neutral-900">Legal</div>
        <ul className="grid gap-2 text-sm text-neutral-700">
          <li>No Recovery, No Fee</li>
          <li>Serving Florida (Central FL focus)</li>
          <li>Licensed & Insured</li>
        </ul>
      </div>
    </Container>
  </footer>
);

// ====== Main App Component ======
export default function FireClaimsFL() {
  const [menuOpen, setMenuOpen] = useState(false);

  // JSON-LD schema for SEO
  const schema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "FireClaimsFL.com — Public Loss Adjusters",
    url: "https://FireClaimsFL.com",
    areaServed: "Florida",
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: { "@type": "PostalAddress", streetAddress: ADDRESS },
    sameAs: ["https://placlaim.com"],
    description: "Florida fire insurance claim help: hotel money, contents, rebuild—no recovery, no fee.",
  }), []);

  // Close mobile menu when navigating in-page
  useEffect(() => {
    const handler = (e) => {
      if (e.target instanceof HTMLAnchorElement && e.target.getAttribute("href")?.startsWith("#")) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div>
      <Header open={menuOpen} onToggle={() => setMenuOpen((o) => !o)} />
      <main>
        <Section id="home"><Hero /></Section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
