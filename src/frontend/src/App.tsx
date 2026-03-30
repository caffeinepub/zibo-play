import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Baby,
  ChevronDown,
  ChevronUp,
  Film,
  Gem,
  Globe,
  Languages,
  Menu,
  Monitor,
  Play,
  Shield,
  Smartphone,
  Star,
  Tablet,
  Trophy,
  Tv,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useEffect, useState } from "react";

const MOBILE_APK_URL = "https://n.shopnojaal.top/ziboplayapp/mobile_zibo.apk";
const TV_APK_URL = "https://n.shopnojaal.top/ziboplayapp/tv_zibo.apk";
const PC_WEB_URL = "https://myziboplay.xyz/web";
const WHATSAPP_URL = "https://wa.me/8801626173639";

const features = [
  {
    icon: Tv,
    title: "500+ Live TV Channels",
    desc: "Never miss your favourite shows, news, and entertainment 24/7.",
  },
  {
    icon: Film,
    title: "Movies & Web Series",
    desc: "Thousands of blockbusters, originals, and binge-worthy series.",
  },
  {
    icon: Trophy,
    title: "Sports Live Streaming",
    desc: "Cricket, Football, Kabaddi — all major sports live in HD.",
  },
  {
    icon: Baby,
    title: "Kids Content",
    desc: "Safe, curated cartoons and educational shows for children.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    desc: "Content in Hindi, English, Tamil, Telugu, Bengali & more.",
  },
  {
    icon: Gem,
    title: "HD & 4K Quality",
    desc: "Crystal-clear streaming with adaptive bitrate for every connection.",
  },
  {
    icon: Monitor,
    title: "Watch on Any Device",
    desc: "Seamless experience across TV, mobile, tablet, and desktop.",
  },
  {
    icon: Zap,
    title: "Unlimited Entertainment",
    desc: "No limits, no interruptions — stream as much as you want.",
  },
];

const devices = [
  { icon: Tv, label: "Smart TV" },
  { icon: Monitor, label: "Android TV Box" },
  { icon: Smartphone, label: "Android & iOS" },
  { icon: Tablet, label: "Tablet" },
  { icon: Wifi, label: "Fire Stick" },
  { icon: Globe, label: "MAG Box" },
];

const reviews = [
  {
    name: "Rahim Uddin",
    location: "Dhaka, Bangladesh",
    rating: 5,
    text: "Zibo Play has completely changed how I watch TV. The channel quality is exceptional and the app is so smooth. Best streaming app I've ever used!",
  },
  {
    name: "Fatema Begum",
    location: "Chittagong, Bangladesh",
    rating: 5,
    text: "Amazing content library. I can watch my favourite Bangla shows anytime. The 4K quality on my smart TV is absolutely stunning.",
  },
  {
    name: "Karim Hossain",
    location: "Sylhet, Bangladesh",
    rating: 5,
    text: "The sports streaming is unreal — HD quality, zero lag during live matches. I never miss a cricket game now. Highly recommend Zibo Play!",
  },
  {
    name: "Nasrin Akter",
    location: "Rajshahi, Bangladesh",
    rating: 4,
    text: "Great app with tons of Bangla content. My kids love the children's section. Setup was super easy on my Fire Stick. Five stars from our family!",
  },
  {
    name: "Jahangir Alam",
    location: "Khulna, Bangladesh",
    rating: 5,
    text: "Value for money is incredible. 500+ channels including all my news and entertainment favourites. Zibo Play is now a daily part of my life.",
  },
  {
    name: "Sumaiya Islam",
    location: "Comilla, Bangladesh",
    rating: 5,
    text: "Switched from another OTT and never looked back. The multi-device support is fantastic — I watch on TV at home and mobile on the go.",
  },
];

const faqs = [
  {
    q: "What devices support Zibo Play?",
    a: "Zibo Play works on Smart TVs, Android TV Boxes, Android and iOS mobiles, tablets, Amazon Fire Stick, MAG Boxes, and any web browser. One subscription covers all your devices.",
  },
  {
    q: "How do I download and install Zibo Play?",
    a: "Download the Mobile APK or TV APK directly from our website. Installation takes less than a minute. Follow the on-screen setup guide and start streaming immediately.",
  },
  {
    q: "How many channels does Zibo Play offer?",
    a: "Zibo Play offers 500+ live TV channels including entertainment, news, sports, movies, kids, and regional channels in multiple Indian and international languages.",
  },
  {
    q: "Can I watch in HD and 4K quality?",
    a: "Yes! Zibo Play supports HD and 4K streaming with adaptive bitrate technology that automatically adjusts quality to your internet speed for buffer-free viewing.",
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "Your Zibo Play subscription allows streaming on multiple devices. Watch on your Smart TV while your kids stream on a tablet — all at the same time.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, Zibo Play offers a trial period so you can experience the full library before subscribing. Contact us on WhatsApp to get started with your trial today.",
  },
];

const stats = [
  { value: "500+", label: "Live Channels" },
  { value: "10K+", label: "Movies & Shows" },
  { value: "4K", label: "Ultra HD Quality" },
  { value: "6+", label: "Device Types" },
];

const pricingPlans = [
  {
    name: "Basic Zibo",
    price: "100",
    currency: "TK",
    duration: "1 Month",
    features: ["500+ Live Channels", "HD Quality", "1 Device", "Mobile & TV"],
    highlight: false,
    golden: false,
  },
  {
    name: "Standard Zibo",
    price: "200",
    currency: "TK",
    duration: "2 Months",
    features: [
      "500+ Live Channels",
      "HD & Full HD",
      "2 Devices",
      "All Platforms",
    ],
    highlight: false,
    golden: false,
  },
  {
    name: "Pro Zibo",
    price: "300",
    currency: "TK",
    duration: "3 Months",
    features: [
      "500+ Live Channels",
      "Full HD & 4K",
      "3 Devices",
      "Priority Support",
    ],
    highlight: true,
    golden: false,
  },
  {
    name: "Golden Zibo",
    price: "600",
    currency: "TK",
    duration: "6 Months",
    features: [
      "500+ Live Channels",
      "Ultra 4K Quality",
      "5 Devices",
      "VIP Support",
    ],
    highlight: false,
    golden: true,
  },
];

const NAV_LINKS = ["Features", "Devices", "Packages", "Reviews", "FAQ"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-[oklch(var(--brand-red-bright))] text-[oklch(var(--brand-red-bright))]"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      data-ocid="faq.panel"
      initial={false}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-surface-2 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm sm:text-base pr-4">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-red shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DownloadModal({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: modal backdrop closes on click, keyboard handled by close button
    <div
      data-ocid="download.modal"
      role="presentation"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="relative bg-[#0f0f1a] border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg xl:max-w-xl mx-3 sm:mx-4 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          data-ocid="download.close_button"
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close download dialog"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-white text-xl font-bold text-center mb-2">
          Download Zibo Play
        </h2>
        <p className="text-white/50 text-sm text-center mb-4 sm:mb-6 md:mb-8">
          Choose your device to download
        </p>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {/* Mobile Button */}
          <a
            href={MOBILE_APK_URL}
            download
            data-ocid="download.secondary_button"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[oklch(0.55_0.22_25/0.5)] rounded-xl p-4 transition-all group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[oklch(0.55_0.22_25/0.1)] group-hover:bg-[oklch(0.55_0.22_25/0.2)] transition-colors shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-[oklch(0.65_0.22_25)]"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Mobile phone"
                role="img"
              >
                <title>Mobile phone</title>
                <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.83 0-1.5-.67-1.5-1.5S11.17 17 12 17s1.5.67 1.5 1.5S12.83 20 12 20zm5-4H7V5h10v11z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-base">
                Download for Mobile
              </div>
              <div className="text-white/40 text-xs mt-0.5">
                Android APK · mobile_zibo.apk
              </div>
            </div>
          </a>
          {/* TV Button */}
          <a
            href={TV_APK_URL}
            download
            data-ocid="download.primary_button"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[oklch(0.55_0.22_25/0.5)] rounded-xl p-4 transition-all group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[oklch(0.55_0.22_25/0.1)] group-hover:bg-[oklch(0.55_0.22_25/0.2)] transition-colors shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-[oklch(0.65_0.22_25)]"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Television"
                role="img"
              >
                <title>Television</title>
                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5l-1 1v1h10v-1l-1-1h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-base">
                Download for TV
              </div>
              <div className="text-white/40 text-xs mt-0.5">
                Android TV APK · tv_zibo.apk
              </div>
            </div>
          </a>
          {/* PC / Laptop Button */}
          <button
            type="button"
            onClick={() => {
              window.open(PC_WEB_URL, "_blank");
              onClose();
            }}
            data-ocid="download.toggle"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[oklch(0.7_0.18_260/0.5)] rounded-xl p-4 transition-all group w-full text-left"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[oklch(0.7_0.18_260/0.08)] group-hover:bg-[oklch(0.7_0.18_260/0.15)] transition-colors shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-[oklch(0.72_0.18_260)]"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Laptop computer"
                role="img"
              >
                <title>Laptop computer</title>
                <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-base">
                PC / Laptop
              </div>
              <div className="text-white/40 text-xs mt-0.5">
                Web app · opens myziboplay.xyz/web
              </div>
            </div>
          </button>
          {/* iOS Button */}
          <button
            type="button"
            onClick={() => {
              window.open(PC_WEB_URL, "_blank");
              onClose();
            }}
            data-ocid="download.tab"
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[oklch(0.82_0.08_240/0.5)] rounded-xl p-4 transition-all group w-full text-left"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[oklch(0.82_0.08_240/0.08)] group-hover:bg-[oklch(0.82_0.08_240/0.15)] transition-colors shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 fill-[oklch(0.85_0.06_240)]"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Apple iOS"
                role="img"
              >
                <title>Apple iOS</title>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold text-base">
                iOS (iPhone / iPad)
              </div>
              <div className="text-white/40 text-xs mt-0.5">
                Web app · opens myziboplay.xyz/web
              </div>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp: any = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {downloadModal && (
          <DownloadModal
            open={downloadModal}
            onClose={() => setDownloadModal(false)}
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-background/95 border-b border-border/70 shadow-lg shadow-black/20"
            : "bg-background/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/uploads/sddd-019d29b6-e1cb-7039-8b93-01c26c877ba3-1.jpeg"
                alt="Zibo Play"
                className="h-8 w-auto rounded"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  data-ocid="nav.link"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                data-ocid="nav.primary_button"
                size="sm"
                onClick={() => setDownloadModal(true)}
                className="brand-gradient hover:opacity-90 transition-opacity text-white font-semibold animate-pulse-glow text-xs sm:text-sm"
              >
                Download App
              </Button>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-surface-2 transition-colors"
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background/98 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setDownloadModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full mt-3 px-4 py-3.5 rounded-xl brand-gradient text-white text-center font-bold brand-glow"
                >
                  Download App
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/zibo-hero-bg.dim_1920x1080.jpg')",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />

        {/* Animated floating orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.1, 0.06] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl lg:max-w-3xl 2xl:max-w-4xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-5 sm:mb-6 badge-shimmer bg-[oklch(var(--brand-red)/0.15)] text-brand-red border border-[oklch(var(--brand-red)/0.3)] text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 font-medium">
                🌍 The Worldwide OTT Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6"
            >
              Stream <span className="text-gradient-fire">Everything.</span>
              <br />
              Anytime.
              <br />
              <span className="text-gradient-fire">Anywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl leading-relaxed mx-auto md:mx-0"
            >
              Zibo Play — the worldwide OTT platform — brings you 500+ live TV
              channels, movies, sports, and web series in HD and 4K. One app.
              Every screen. Everywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start"
            >
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                onClick={() => setDownloadModal(true)}
                className="w-full sm:w-auto brand-gradient hover:opacity-90 transition-opacity text-white font-bold text-base sm:text-lg h-12 sm:h-14 2xl:h-16 px-8 sm:px-10 2xl:px-14 brand-glow animate-pulse-glow"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-white" />
                Download App Now
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border hover:bg-surface-2 text-foreground font-semibold text-base sm:text-lg h-12 sm:h-14 2xl:h-16 px-8 sm:px-10 2xl:px-14"
              >
                <a href="#features">Explore Features</a>
              </Button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 sm:mt-14 lg:mt-16 flex flex-wrap items-center gap-4 sm:gap-0 justify-center md:justify-start"
            >
              {stats.map((stat, i) => (
                <Fragment key={stat.label}>
                  <div className="px-0 sm:px-5 lg:px-7 first:pl-0">
                    <div className="font-display text-2xl sm:text-3xl 2xl:text-4xl font-bold text-brand-red">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block stat-divider h-10 self-center" />
                  )}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-brand-red font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3"
            >
              Everything You Need
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4"
            >
              World-Class OTT Experience
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
            >
              Zibo Play is engineered for the ultimate streaming experience —
              from the content library to the technology powering every frame.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.5}
              >
                <div className="group card-hover h-full bg-surface-1 border border-border rounded-2xl p-4 sm:p-5 2xl:p-8 cursor-default">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 brand-gradient rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICES SECTION */}
      <section
        id="devices"
        className="py-16 md:py-24 surface-1 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-brand-red font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3"
            >
              Multi-Device Support
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4"
            >
              Watch on Any Screen
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
            >
              From your living room TV to your pocket — Zibo Play fits perfectly
              on every device you own.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {devices.map((device, i) => (
              <motion.div
                key={device.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.15}
              >
                <div className="card-hover flex flex-col items-center gap-3 sm:gap-4 bg-surface-2 border border-border rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-[oklch(var(--brand-red)/0.5)] transition-colors cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-[oklch(var(--brand-red)/0.2)] bg-[oklch(var(--brand-red)/0.08)] flex items-center justify-center">
                    <device.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-red" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                    {device.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section
        id="download"
        className="py-16 md:py-24 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(var(--brand-red)/0.08)] via-transparent to-[oklch(var(--brand-red)/0.04)]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[600px] h-72 sm:h-96 lg:h-[600px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="mb-5 sm:mb-6 bg-[oklch(var(--brand-red)/0.15)] text-brand-red border border-[oklch(var(--brand-red)/0.3)] px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
                Start Streaming Today
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6"
            >
              Get <span className="text-gradient-fire">Zibo Play</span> Now
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto"
            >
              Download the app on your TV or mobile and start watching 500+
              channels, movies, and sports instantly.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 justify-center"
            >
              <Button
                asChild
                size="lg"
                data-ocid="download.tv_button"
                className="w-full sm:w-auto brand-gradient hover:opacity-90 transition-opacity text-white font-bold text-base sm:text-lg h-14 sm:h-16 2xl:h-20 px-8 sm:px-12 2xl:px-16 2xl:text-xl brand-glow animate-pulse-glow"
              >
                <a href={TV_APK_URL} download>
                  <Tv className="w-5 h-5 mr-2 sm:mr-3" />
                  Download for TV
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                data-ocid="download.mobile_button"
                className="w-full sm:w-auto bg-surface-2 hover:bg-surface-3 border border-border text-foreground font-bold text-base sm:text-lg h-14 sm:h-16 2xl:h-20 px-8 sm:px-12 2xl:px-16 2xl:text-xl"
              >
                <a href={MOBILE_APK_URL} download>
                  <Smartphone className="w-5 h-5 mr-2 sm:mr-3" />
                  Download for Mobile
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                data-ocid="download.website_button"
                className="w-full sm:w-auto bg-[oklch(0.18_0.06_260)] hover:bg-[oklch(0.23_0.08_260)] border border-[oklch(0.4_0.15_260/0.4)] hover:border-[oklch(0.55_0.2_260/0.6)] text-[oklch(0.85_0.12_260)] font-bold text-base sm:text-lg h-14 sm:h-16 2xl:h-20 px-8 sm:px-12 2xl:px-16 2xl:text-xl transition-all"
              >
                <a href={PC_WEB_URL} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2 sm:mr-3" />
                  Website / PC / iOS
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center"
            >
              {[
                { icon: Shield, label: "Secure & Private" },
                { icon: Zap, label: "Instant Setup" },
                { icon: Globe, label: "Works Worldwide" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm"
                >
                  <Icon className="w-4 h-4 text-brand-red shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="packages"
        className="py-16 md:py-24 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(var(--brand-red)/0.05)] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-brand-red font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3"
            >
              Subscription Plans
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
            >
              Flexible packages to suit every viewer. More months, more savings.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.15}
              >
                <div
                  className={`relative h-full rounded-2xl border p-5 sm:p-6 flex flex-col transition-all duration-300 card-hover ${
                    plan.golden
                      ? "border-yellow-500/50 bg-gradient-to-b from-yellow-950/30 to-surface-1"
                      : plan.highlight
                        ? "border-[oklch(var(--brand-red)/0.6)] bg-gradient-to-b from-[oklch(var(--brand-red)/0.1)] to-surface-1 shadow-lg shadow-[oklch(var(--brand-red)/0.15)]"
                        : "border-border bg-surface-1"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 brand-gradient rounded-full text-white text-xs font-bold tracking-wide whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  {plan.golden && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full text-black text-xs font-bold tracking-wide whitespace-nowrap">
                      BEST VALUE
                    </div>
                  )}
                  <div className="mb-4 sm:mb-5">
                    <h3
                      className={`font-display font-bold text-lg sm:text-xl mb-1 ${
                        plan.golden
                          ? "text-yellow-400"
                          : plan.highlight
                            ? "text-brand-red"
                            : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-1">
                      <span
                        className={`font-display text-4xl sm:text-5xl font-bold ${
                          plan.golden
                            ? "text-yellow-400"
                            : plan.highlight
                              ? "text-brand-red"
                              : "text-foreground"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm mb-1.5">
                        {plan.currency}
                      </span>
                    </div>
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold mt-2 ${
                        plan.golden
                          ? "bg-yellow-500/15 text-yellow-400"
                          : plan.highlight
                            ? "bg-[oklch(var(--brand-red)/0.15)] text-brand-red"
                            : "bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      {plan.duration}
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80"
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            plan.golden
                              ? "bg-yellow-500/20"
                              : plan.highlight
                                ? "bg-[oklch(var(--brand-red)/0.2)]"
                                : "bg-surface-2"
                          }`}
                        >
                          <svg
                            className={`w-2.5 h-2.5 ${
                              plan.golden ? "text-yellow-400" : "text-brand-red"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    data-ocid={`packages.item.${i + 1}`}
                    className={`w-full font-bold h-11 sm:h-12 ${
                      plan.golden
                        ? "bg-gradient-to-r from-yellow-600 to-yellow-400 text-black hover:opacity-90"
                        : plan.highlight
                          ? "brand-gradient text-white brand-glow animate-pulse-glow"
                          : "bg-surface-2 hover:bg-surface-3 border border-border text-foreground"
                    }`}
                  >
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order via WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section
        id="reviews"
        data-ocid="reviews.section"
        className="py-16 md:py-24 surface-1 border-t border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-brand-red font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3"
            >
              What Our Users Say
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4"
            >
              Loved by Millions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Join thousands of happy viewers who made Zibo Play their daily
              companion.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.15}
                data-ocid={`reviews.item.${i + 1}`}
              >
                <div className="card-hover h-full bg-surface-2 border border-border border-l-2 border-l-[oklch(var(--brand-red)/0.4)] rounded-2xl p-4 sm:p-6">
                  <StarRating rating={review.rating} />
                  <p className="mt-3 sm:mt-4 text-foreground/90 leading-relaxed text-xs sm:text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 sm:mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">
                        {review.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-brand-red font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3"
            >
              Got Questions?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Everything you need to know about Zibo Play.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} variants={fadeUp} custom={i * 0.1}>
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Ready to start watching?
            </p>
            <Button
              size="lg"
              onClick={() => setDownloadModal(true)}
              className="w-full sm:w-auto brand-gradient hover:opacity-90 text-white font-bold px-8 sm:px-10 h-12 sm:h-14 brand-glow animate-pulse-glow"
            >
              Download Zibo Play Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border surface-1 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
          <div className="flex flex-col items-center gap-5 sm:gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/assets/uploads/sddd-019d29b6-e1cb-7039-8b93-01c26c877ba3-1.jpeg"
                alt="Zibo Play"
                className="h-8 w-auto rounded"
              />
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm text-center">
              Zibo Play — The Worldwide OTT
            </p>

            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
              © {new Date().getFullYear()} Zibo Play. All rights reserved.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 flex flex-wrap justify-center gap-4 sm:gap-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setDownloadModal(true)}
              className="text-xs sm:text-sm text-brand-red hover:opacity-80 transition-opacity font-medium"
            >
              Download App
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
