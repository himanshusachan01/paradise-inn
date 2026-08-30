import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { HOTEL } from "@/lib/hotel";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#nearby", label: "Nearby" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = window.localStorage.getItem("pi-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("pi-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "top-0 glass py-3" : "top-3 border-b border-transparent py-6 sm:top-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span
            className={`flex size-9 items-center justify-center rounded-full border text-sm font-medium tracking-[0.1em] ${
              scrolled ? "border-gold text-gold" : "border-gold/70 text-gold"
            }`}
          >
            PI
          </span>
          <span className="leading-tight">
            <span
            className={`block font-display text-lg tracking-wide ${
                scrolled ? "text-foreground" : "text-[#fbfaf4]"
              }`}
            >
              Paradise Inn
            </span>
            <span
            className={`block text-[0.6rem] tracking-[0.35em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-[#fbfaf4]/70"
              }`}
            >
              Bhimtal
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.78rem] tracking-[0.16em] uppercase transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-[#fbfaf4]/85"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className={`grid size-9 place-items-center rounded-full border transition-colors ${
                scrolled
                  ? "border-border text-foreground hover:border-gold hover:text-gold"
                : "border-[#fbfaf4]/30 text-[#fbfaf4] hover:border-gold hover:text-gold"
            }`}
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#book"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-[0.72rem] tracking-[0.2em] text-accent-foreground uppercase transition-transform hover:scale-105 sm:inline-block"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className={`grid size-9 place-items-center rounded-full border lg:hidden ${
                scrolled
                  ? "border-border text-foreground"
                : "border-[#fbfaf4]/30 text-[#fbfaf4]"
            }`}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-5 mt-3 grid gap-1 rounded-xl p-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm tracking-[0.12em] uppercase text-foreground/80 hover:bg-secondary hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export function FloatingActions() {
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloatingActions(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-5 z-50 flex flex-col items-end gap-2.5 transition-all duration-300 sm:right-6 ${
        showFloatingActions
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <a
        href={`https://wa.me/${HOTEL.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="float-shadow grid size-11 place-items-center rounded-full bg-forest text-primary-foreground transition-transform hover:scale-110 dark:bg-gold dark:text-accent-foreground"
      >
        <MessageCircle className="size-4.5" />
      </a>
      <a
        href={`tel:${HOTEL.phone}`}
        aria-label="Call the hotel"
        className="float-shadow grid size-11 place-items-center rounded-full bg-gold text-accent-foreground transition-transform hover:scale-110"
      >
        <Phone className="size-4.5" />
      </a>
      <a
        href="#book"
        aria-label="Book a room"
        className="float-shadow flex h-10 items-center gap-2 rounded-full bg-forest-deep px-4 text-[0.65rem] tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:scale-105 dark:bg-card dark:text-foreground"
      >
        <CalendarCheck className="size-3.5" />
        Book
      </a>
    </div>
  );
}
