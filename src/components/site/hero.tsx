import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Cloud, Star } from "lucide-react";
import heroLake from "@/assets/paradise-inn-lake.jpg";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const BHIMTAL_WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=29.35&longitude=79.56&current=temperature_2m,weather_code&timezone=Asia%2FKolkata";

function toDateInputValue(date: Date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function addDays(value: string, days: number) {
  const [year, month, day] = value.split("-").map(Number);
  return toDateInputValue(new Date(year, month - 1, day + days));
}

function getWeatherLabel(code: number) {
  if (code === 0) return "Clear mountain air";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Misty";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Rain nearby";
  if ([95, 96, 99].includes(code)) return "Thunder possible";
  return "Live Bhimtal weather";
}

export function Hero() {
  const today = toDateInputValue(new Date());
  const [checkIn, setCheckIn] = useState(() => toDateInputValue(new Date()));
  const [checkOut, setCheckOut] = useState(() =>
    toDateInputValue(new Date(Date.now() + ONE_DAY_MS)),
  );
  const [guests, setGuests] = useState("2 Guests");
  const [weather, setWeather] = useState("Live temperature updating");

  useEffect(() => {
    const controller = new AbortController();

    async function loadWeather() {
      try {
        const response = await fetch(BHIMTAL_WEATHER_URL, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Weather request failed");
        const data = await response.json();
        const current = data.current;
        const temperature = Math.round(Number(current.temperature_2m));
        const label = getWeatherLabel(Number(current.weather_code));
        setWeather(`Live now · Bhimtal ${temperature}°C · ${label}`);
      } catch (error) {
        if (!controller.signal.aborted) {
          setWeather("Bhimtal weather unavailable");
        }
      }
    }

    loadWeather();
    const interval = window.setInterval(loadWeather, 15 * 60 * 1000);

    return () => {
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  const minCheckOut = addDays(checkIn, 1);

  const handleCheckInChange = (value: string) => {
    const nextCheckIn = value < today ? today : value;
    setCheckIn(nextCheckIn);
    setCheckOut((current) => (current <= nextCheckIn ? addDays(nextCheckIn, 1) : current));
  };

  const handleCheckOutChange = (value: string) => {
    setCheckOut(value <= checkIn ? addDays(checkIn, 1) : value);
  };

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden pb-8 lg:pb-0">
      <motion.img
        src={heroLake}
        alt="Bhimtal Lake view from Paradise Inn"
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
      <div className="absolute inset-0 bg-forest-deep/25 lg:hidden" aria-hidden />

      <div className="relative mx-auto flex min-h-[auto] max-w-7xl flex-col justify-start px-5 pt-40 pb-8 sm:px-8 lg:min-h-[100svh] lg:justify-center lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Bhimtal · Uttarakhand</p>
          <h1 className="mt-6 text-4xl leading-[1.05] text-[#fbfaf4] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-7xl lg:text-[5.2rem]">
            Wake Up to the Beauty of Bhimtal
          </h1>
          <p className="mt-5 max-w-xl text-base font-light text-[#fbfaf4]/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:mt-6 sm:text-lg">
            Luxury Lake View Stay in the Heart of Uttarakhand
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#book"
              className="rounded-full bg-gold px-7 py-3 text-[0.68rem] tracking-[0.2em] text-accent-foreground uppercase transition-transform hover:scale-105 sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.24em]"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="rounded-full border border-[#fbfaf4]/40 px-7 py-3 text-[0.68rem] tracking-[0.2em] text-[#fbfaf4] uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.24em]"
            >
              View Rooms
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[#fbfaf4]/80">
            <span className="flex items-center gap-2 text-sm">
              <Star className="size-4 fill-gold text-gold" /> 4.2 · 181+ traveller ratings
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Cloud className="size-4 text-gold" /> {weather}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        id="book"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 px-5 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-20"
      >
        <div className="glass mx-auto grid max-w-5xl gap-4 rounded-2xl p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:items-end">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <CalendarDays className="size-3.5 text-gold" /> Check In
            </span>
            <input
              type="date"
              value={checkIn}
              min={today}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold sm:py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <CalendarDays className="size-3.5 text-gold" /> Check Out
            </span>
            <input
              type="date"
              value={checkOut}
              min={minCheckOut}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold sm:py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              <Users className="size-3.5 text-gold" /> Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none focus:border-gold sm:py-3"
            >
              {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <a
            href={`https://wa.me/919897954060?text=${encodeURIComponent(
              `Hello Paradise Inn, I'd like to book ${guests} from ${checkIn} to ${checkOut}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center justify-center self-end rounded-lg bg-forest px-6 text-center text-[0.68rem] tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.03] sm:h-12 sm:text-[0.72rem] sm:tracking-[0.24em] lg:h-[3.25rem] dark:bg-gold dark:text-accent-foreground"
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
