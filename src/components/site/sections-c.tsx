import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Gem,
  HeartHandshake,
  Leaf,
  Sparkles,
  Users,
  ShieldCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  Navigation,
  HelpCircle,
} from "lucide-react";
import { HOTEL } from "@/lib/hotel";
import { faqItems } from "@/lib/seo";
import { Reveal, SectionHeading } from "./reveal";

const REASONS = [
  {
    icon: Waves,
    title: "Best Lake View",
    text: "Rooms and terraces angled straight at the water.",
  },
  { icon: Gem, title: "Affordable Luxury", text: "Boutique comfort at honest hill-station rates." },
  {
    icon: HeartHandshake,
    title: "Excellent Hospitality",
    text: "A small team that remembers your name.",
  },
  { icon: Leaf, title: "Peaceful Location", text: "Away from traffic, close to the lake path." },
  {
    icon: Sparkles,
    title: "Spotless Rooms",
    text: "Fresh linen, daily housekeeping, hot water always.",
  },
  { icon: Users, title: "Family Friendly", text: "Interconnected family rooms and extra beds." },
  {
    icon: ShieldCheck,
    title: "Safe Parking",
    text: "Gated on-site parking, monitored round the clock.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <SectionHeading eyebrow="Why Paradise Inn" title="Reasons guests return every season" />
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass h-full rounded-2xl p-8"
            >
              <r.icon className="size-6 text-gold" />
              <h3 className="mt-6 text-2xl">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Ananya Sharma",
    from: "Delhi",
    text: "We woke up to the lake covered in mist and simply sat on the balcony for an hour. The staff arranged an early breakfast without being asked. Easily the calmest two days we've had.",
  },
  {
    name: "Rohit Mehra",
    from: "Lucknow",
    text: "Clean, spacious rooms and a genuinely warm host. The lake view room is worth every rupee — the sunset from the terrace was unreal.",
  },
  {
    name: "Priya & Karan",
    from: "Gurugram",
    text: "Travelled with our parents and a toddler. The family room was perfect, food was home-style and delicious, and parking right at the gate made everything easy.",
  },
  {
    name: "Sourav Das",
    from: "Kolkata",
    text: "Great base for Sattal and Naukuchiatal. They helped plan the whole day trip and even arranged the cab. Bonfire in the evening was a lovely touch.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = REVIEWS.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const review = REVIEWS[index]!;

  return (
    <section id="reviews" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Guest Voices" title="Warm words from our guests" />

        <div className="relative mt-12 min-h-64">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl px-8 py-12 text-center sm:px-16"
            >
              <Quote className="mx-auto size-7 text-gold" />
              <p className="mt-7 font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
                “{review.text}”
              </p>
              <footer className="mt-8">
                <p className="text-sm tracking-[0.18em] text-foreground uppercase">{review.name}</p>
                <p className="mt-1 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {review.from}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              aria-label="Previous review"
              className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % total)}
              aria-label="Next review"
              className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section id="map" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <SectionHeading eyebrow="Find Us" title="Beside Bhimtal Lake" subtitle={HOTEL.address} />
      <Reveal delay={0.08}>
        <div className="mt-14 overflow-hidden rounded-2xl border border-border luxe-shadow">
          <iframe
            title="Map showing Paradise Inn Bhimtal location"
            src="https://maps.google.com/maps?q=Paradise%20Inn%2C%20Mandir%20Marg%2C%20Tallital%2C%20Bhimtal%2C%20Uttarakhand%20263136&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            className="h-[440px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="mt-8 flex justify-center">
          <a
            href={HOTEL.directions}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase transition-transform hover:scale-105 dark:bg-gold dark:text-accent-foreground"
          >
            <Navigation className="size-4" /> Get Directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Good To Know"
          title="Paradise Inn Bhimtal FAQ"
          subtitle="Quick answers for room bookings, location, amenities and nearby places before you travel."
        />
        <div className="mt-14 grid gap-4">
          {faqItems.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.04}>
              <details className="group rounded-2xl border border-border bg-background p-6 luxe-shadow">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                  <span className="flex items-center gap-3 text-lg text-foreground">
                    <HelpCircle className="size-5 shrink-0 text-gold" />
                    {item.question}
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 pl-8 leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingCta() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-32 text-primary-foreground lg:py-40 dark:bg-card">
      <div className="pointer-events-none absolute -top-40 -right-32 size-96 rounded-full bg-gold/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Reservations Open</p>
          <h2 className="mt-6 text-4xl leading-[1.1] text-primary-foreground sm:text-6xl dark:text-foreground">
            Ready for Your Perfect Mountain Escape?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-primary-foreground/75 dark:text-muted-foreground">
            Tell us your dates — we'll hold the room with the best view available.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-gold px-10 py-4 text-[0.72rem] tracking-[0.24em] text-accent-foreground uppercase transition-transform hover:scale-105"
            >
              Reserve Your Room
            </a>
            <a
              href={`tel:${HOTEL.phone}`}
              className="rounded-full border border-primary-foreground/35 px-10 py-4 text-[0.72rem] tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:border-gold hover:text-gold dark:border-border dark:text-foreground"
            >
              Call {HOTEL.phoneLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-gold text-sm tracking-[0.1em] text-gold">
              PI
            </span>
            <span>
              <span className="block font-display text-xl">Paradise Inn</span>
              <span className="block text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
                Bhimtal · Uttarakhand
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Peaceful evenings by the lake, boats drifting on the water, and the soothing sound of
            distant temple bells.
          </p>
          <div className="mt-7 flex gap-3">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/paradiseinn_bhimtal?igsi=MWtneWV2djV5MWUz",
                label: "Instagram",
              },
              { icon: MessageCircle, href: `https://wa.me/${HOTEL.whatsapp}`, label: "WhatsApp" },
              { icon: MapPin, href: HOTEL.mapsLink, label: "Google Maps" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.28em] text-gold uppercase">Contact</p>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {HOTEL.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${HOTEL.phone}`} className="hover:text-gold">
                {HOTEL.phoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${HOTEL.secondaryPhone}`} className="hover:text-gold">
                {HOTEL.secondaryPhoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${HOTEL.email}`} className="hover:text-gold">
                {HOTEL.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.28em] text-gold uppercase">Explore</p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {[
              ["#rooms", "Rooms"],
              ["#amenities", "Amenities"],
              ["#gallery", "Gallery"],
              ["#nearby", "Nearby Attractions"],
              ["#map", "Location"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border px-5 pt-8 sm:px-8">
        <p className="text-center text-xs tracking-[0.16em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} Paradise Inn Bhimtal · All rights reserved
        </p>
      </div>
    </footer>
  );
}
