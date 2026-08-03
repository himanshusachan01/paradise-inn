import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Cloud, Star } from "lucide-react";
import heroLake from "@/assets/hero-lake.jpg";

export function Hero() {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2 Guests");

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <motion.img
        src={heroLake}
        alt="Panoramic sunset view of Bhimtal Lake seen from Paradise Inn"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-veil)" }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-32 pb-40 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Bhimtal · Uttarakhand</p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-primary-foreground sm:text-7xl lg:text-[5.2rem]">
            Wake Up to the Beauty of Bhimtal
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-primary-foreground/85">
            Luxury Lake View Stay in the Heart of Uttarakhand
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="rounded-full bg-gold px-9 py-4 text-[0.72rem] tracking-[0.24em] text-accent-foreground uppercase transition-transform hover:scale-105"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="rounded-full border border-primary-foreground/40 px-9 py-4 text-[0.72rem] tracking-[0.24em] text-primary-foreground uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              View Rooms
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2 text-sm">
              <Star className="size-4 fill-gold text-gold" /> 4.2 · 181+ Google reviews
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Cloud className="size-4 text-gold" /> Bhimtal 18°C · Clear mountain air
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating booking widget */}
      <motion.div
        id="book"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-20 z-20 px-5 sm:px-8"
      >
        <div className="glass mx-auto grid max-w-5xl gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <CalendarDays className="size-3.5 text-gold" /> Check In
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <CalendarDays className="size-3.5 text-gold" /> Check Out
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <Users className="size-3.5 text-gold" /> Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none focus:border-gold"
            >
              {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <a
            href={`https://wa.me/919837012345?text=${encodeURIComponent(
              `Hello Paradise Inn, I'd like to book ${guests} from ${checkIn} to ${checkOut}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-forest px-6 py-3.5 text-center text-[0.72rem] tracking-[0.24em] text-primary-foreground uppercase transition-transform hover:scale-[1.03] dark:bg-gold dark:text-accent-foreground"
          >
            Book Now
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border border-primary-foreground/40 pt-2">
          <span className="scroll-dot size-1.5 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
