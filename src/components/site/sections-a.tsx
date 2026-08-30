import { motion } from "framer-motion";
import {
  Wifi,
  Mountain,
  UtensilsCrossed,
  ConciergeBell,
  Car,
  Clock,
  Users,
  Trees,
  Droplets,
  Map,
  BedDouble,
  Waves,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import aboutHotel from "@/assets/about-hotel.jpg";
import roomStandard from "@/assets/paradise-inn-street.jpeg";
import roomSuper from "@/assets/room-super-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";

const STATS = [
  { value: "3", label: "Room Types" },
  { value: "11:00 AM", label: "Check-in" },
  { value: "10:00 AM", label: "Check-out" },
  { value: "Lake", label: "View" },
];

const HIGHLIGHTS = [
  { icon: Waves, label: "Lake View Rooms" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: ConciergeBell, label: "24-hour Room Service" },
  { icon: Car, label: "Parking" },
  { icon: Users, label: "Family Friendly" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              Where the Lake Meets the Mountains
            </h2>
            <div className="mt-6 h-px w-14 bg-gold" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Located right beside the serene Bhimtal Lake, Paradise Inn offers a simple and
              comfortable stay surrounded by beautiful views of the lake, mountains and the nearby
              bridge.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At Paradise Inn, our focus is simple: comfortable rooms, beautiful views and great
              value for money. Whether you are travelling with family, friends or your partner, you
              can enjoy the beauty and tranquillity of Bhimtal while staying close to the lake and
              other popular attractions.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              With excellent connectivity and a peaceful setting, our hotel makes it easy to explore
              Bhimtal while giving you a relaxing place to return to. If you are looking for a stay
              that offers good rooms and some of the best views in Bhimtal at an affordable price,
              Paradise Inn is the perfect choice.
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-forest dark:text-gold">
              Come for the views, stay for the peace, and enjoy Bhimtal.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-background px-1 py-6 text-center sm:px-2 xl:px-5">
                  <p className="font-display text-[1.375rem] whitespace-nowrap text-forest xl:text-3xl dark:text-gold">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              {HIGHLIGHTS.map((h) => (
                <span
                  key={h.label}
                  className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs tracking-[0.1em] text-muted-foreground uppercase"
                >
                  <h.icon className="size-3.5 text-gold" />
                  {h.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="zoom-media relative rounded-2xl luxe-shadow">
            <img
              src={aboutHotel}
              alt="Paradise Inn Bhimtal reception"
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const ROOMS = [
  {
    name: "Standard Room Double Bed",
    image: roomStandard,
    price: "₹2,000",
    facilities: ["169 sq.ft", "Max 3 Guests", "1 Double Bed", "1 Bathroom"],
    status: "Room Only",
  },
  {
    name: "Lake View Triple Bedded Room",
    image: roomSuper,
    price: "₹2,800",
    facilities: ["100 sq.ft", "Max 3 Guests", "Lake View", "1 Double Bed"],
    status: "Lake View",
  },
  {
    name: "Lake View Four Bedded Room",
    image: roomFamily,
    price: "₹3,000",
    facilities: ["300 sq.ft", "Max 5 Guests", "Lake View", "2 Double Beds"],
    status: "Family Friendly",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Stay"
          title="Rooms"
          subtitle="Paradise Inn offers three categories of rooms."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {ROOMS.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-2xl border border-border bg-card luxe-shadow"
              >
                <div className="zoom-media relative">
                  <img
                    src={room.image}
                    alt={`${room.name} at Paradise Inn Bhimtal`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover"
                  />
                  <span className="glass absolute top-4 left-4 rounded-full px-4 py-1.5 text-[0.62rem] tracking-[0.2em] text-foreground uppercase">
                    {room.status}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">{room.name}</h3>
                    <p className="text-right">
                      <span className="font-display text-2xl text-forest dark:text-gold">
                        {room.price}
                      </span>
                      <span className="block text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                        per night
                      </span>
                    </p>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {room.facilities.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-forest px-6 py-3 text-[0.7rem] tracking-[0.22em] text-forest uppercase transition-colors hover:bg-forest hover:text-primary-foreground dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-accent-foreground"
                  >
                    Book This Room
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const AMENITIES = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Waves, label: "Lake View" },
  { icon: ConciergeBell, label: "24-hour Room Service" },
  { icon: Car, label: "Parking" },
  { icon: Clock, label: "Power Backup" },
  { icon: BedDouble, label: "Family Rooms" },
  { icon: Mountain, label: "Mountain View" },
  { icon: Droplets, label: "Geyser/Water Heater" },
  { icon: Map, label: "Luggage Assistance" },
  { icon: Trees, label: "Terrace Garden" },
  { icon: UtensilsCrossed, label: "In-room Dining" },
  { icon: Users, label: "Doctor on Call" },
];

export function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <SectionHeading
        eyebrow="Comforts"
        title="Everything, quietly taken care of"
        subtitle="Thoughtful essentials and practical services, so your only decision is where to sit and watch the lake."
      />
      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {AMENITIES.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.04}>
            <div className="group glass h-full rounded-xl p-6 transition-transform duration-500 hover:-translate-y-1.5">
              <a.icon className="size-6 text-gold transition-transform duration-500 group-hover:scale-110" />
              <p className="mt-5 text-sm tracking-[0.1em] text-foreground uppercase">{a.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
