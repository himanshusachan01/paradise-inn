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
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuper from "@/assets/room-super-deluxe.jpg";
import roomLake from "@/assets/room-lake-view.jpg";
import roomFamily from "@/assets/room-family.jpg";

const STATS = [
  { value: "181+", label: "Happy Reviews" },
  { value: "4.2★", label: "Google Rating" },
  { value: "12", label: "Lake View Rooms" },
  { value: "24×7", label: "Reception" },
];

const HIGHLIGHTS = [
  { icon: Waves, label: "Lake View Rooms" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Car, label: "Parking" },
  { icon: Users, label: "Family Friendly" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              A quiet retreat beside the still waters of Bhimtal
            </h2>
            <div className="mt-6 h-px w-14 bg-gold" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Paradise Inn is located beside the serene Bhimtal Lake, offering peaceful
              accommodation, comfortable rooms, mountain views, delicious food and warm
              hospitality.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Mornings begin with mist drifting over the water and end with the hills turning
              amber at sunset. Every room is designed to keep the outdoors in view — and
              everything else out of mind.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-background px-5 py-6 text-center">
                  <p className="font-display text-3xl text-forest dark:text-gold">{s.value}</p>
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
              alt="Paradise Inn Bhimtal lit up at dusk beside the lake"
              loading="lazy"
              width={1200}
              height={1500}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 left-6 hidden rounded-xl px-6 py-5 sm:block">
            <p className="font-display text-2xl text-foreground">Est. beside the lake</p>
            <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Bhimtal · 1,370 m above sea level
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const ROOMS = [
  {
    name: "Deluxe Room",
    image: roomDeluxe,
    price: "₹2,400",
    facilities: ["King Bed", "Free WiFi", "Hot Water", "Room Service"],
    status: "3 rooms left",
  },
  {
    name: "Super Deluxe Room",
    image: roomSuper,
    price: "₹3,200",
    facilities: ["Sitting Area", "Balcony", "Smart TV", "Breakfast"],
    status: "Available",
  },
  {
    name: "Lake View Room",
    image: roomLake,
    price: "₹3,900",
    facilities: ["Panoramic Lake View", "King Bed", "Tea/Coffee", "Balcony"],
    status: "Only 2 left",
  },
  {
    name: "Family Room",
    image: roomFamily,
    price: "₹4,500",
    facilities: ["Two Double Beds", "Sleeps 4-5", "Mountain View", "Extra Bed"],
    status: "Available",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Stay"
          title="Rooms & Suites"
          subtitle="Four ways to wake up to the mountains — each room turned toward the light, the lake, or the pines."
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
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: ConciergeBell, label: "Room Service" },
  { icon: Car, label: "Parking" },
  { icon: Clock, label: "24x7 Reception" },
  { icon: BedDouble, label: "Family Rooms" },
  { icon: Mountain, label: "Mountain View" },
  { icon: Droplets, label: "Hot Water" },
  { icon: Map, label: "Travel Assistance" },
  { icon: Trees, label: "Garden Sit-out" },
  { icon: Users, label: "Group Stays" },
];

export function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <SectionHeading
        eyebrow="Comforts"
        title="Everything, quietly taken care of"
        subtitle="Thoughtful essentials and small luxuries, so your only decision is where to sit and watch the lake."
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
