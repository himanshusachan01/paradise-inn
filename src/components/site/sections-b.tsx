import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import expMorning from "@/assets/exp-morning.jpg";
import expSunset from "@/assets/exp-sunset.jpg";
import expBoating from "@/assets/exp-boating.jpg";
import expBonfire from "@/assets/exp-bonfire.jpg";
import expWalk from "@/assets/exp-walk.jpg";
import expHills from "@/assets/exp-hills.jpg";
import galDining from "@/assets/gal-dining.jpg";
import galTerrace from "@/assets/gal-terrace.jpg";
import attrTemple from "@/assets/attr-temple.jpg";
import attrNainital from "@/assets/attr-nainital.jpg";
import attrSattal from "@/assets/attr-sattal.jpg";
import attrPara from "@/assets/attr-paragliding.jpg";
import paradiseFlowers from "@/assets/paradise-inn-flowers.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomLakeView from "@/assets/room-lake-view.jpg";
import aboutHotel from "@/assets/gal-lake-side-view.jpg";
import bhimtalLake from "@/assets/bhimtal-lake-nainital-hd.jpg";
import bhimtalLakeView from "@/assets/bhimtal-lake-view-01-hd.jpg";
import bhimtalLandscape from "@/assets/bhimtal-landscape-hd.jpg";
import bhimtalUttarakhand from "@/assets/bhimtal-uttarakhand-hd.jpg";
import bhimtalGhorakhal from "@/assets/bhimtal-from-ghorakhal-hd.jpg";

const EXPERIENCES = [
  { img: expMorning, title: "Morning Lake", note: "Mist at 6 a.m.", span: "lg:col-span-2 lg:row-span-2" },
  { img: expSunset, title: "Sunset Hour", note: "Amber over the hills", span: "" },
  { img: expBoating, title: "Boating", note: "5 min from the gate", span: "" },
  { img: expHills, title: "Nearby Hills", note: "Endless blue ridges", span: "" },
  { img: expBonfire, title: "Bonfire Nights", note: "On request", span: "" },
  { img: expWalk, title: "Nature Walks", note: "Pine trails", span: "lg:col-span-2" },
];

export function Experience() {
  return (
    <section id="experience" className="bg-forest-deep py-28 text-primary-foreground lg:py-36 dark:bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">The Days Here</p>
          <h2 className="mt-4 text-4xl leading-[1.1] text-primary-foreground sm:text-5xl dark:text-foreground">
            Slow mornings, golden evenings
          </h2>
          <div className="mt-6 h-px w-14 bg-gold" />
          <p className="mt-6 text-primary-foreground/75 dark:text-muted-foreground">
            Peaceful evenings by the water, bonfires under clear skies and walks that end where
            the pines open onto the lake.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} className={e.span}>
              <div className="zoom-media group relative h-full rounded-xl">
                <img
                  src={e.img}
                  alt={e.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-display text-xl text-primary-foreground">{e.title}</p>
                  <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">{e.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: bhimtalLandscape, alt: "Wide landscape view of Bhimtal Lake", h: "h-[420px]" },
  { img: roomDeluxe, alt: "Deluxe room interior at Paradise Inn Bhimtal", h: "h-[300px]" },
  { img: roomLakeView, alt: "Lake view room interior at Paradise Inn Bhimtal", h: "h-[340px]" },
  { img: galDining, alt: "Lakeside dining at dusk", h: "h-[380px]" },
  { img: galTerrace, alt: "Terrace lounge at golden hour", h: "h-[460px]" },
  { img: aboutHotel, alt: "Paradise Inn Bhimtal exterior", h: "h-[300px]" },
  { img: paradiseFlowers, alt: "Flowers at Paradise Inn Bhimtal", h: "h-[330px]" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:py-36">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments from Paradise Inn"
        subtitle="A look around the property, the lake and the light that changes every hour."
      />
      <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY.map((g, i) => (
          <Reveal key={g.alt} delay={(i % 3) * 0.06}>
            <button
              onClick={() => setActive(i)}
              className="zoom-media block w-full rounded-xl luxe-shadow"
              aria-label={`Open image: ${g.alt}`}
            >
              <img
                src={g.img}
                alt={g.alt}
                loading="lazy"
                className={`w-full ${g.h} object-cover`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-100 grid place-items-center bg-forest-deep/92 p-5 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-6 right-6 grid size-11 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold"
          >
            <X className="size-5" />
          </button>
          <motion.img
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            src={GALLERY[active]?.img}
            alt={GALLERY[active]?.alt ?? ""}

            className="max-h-[85vh] max-w-full rounded-xl object-contain"
          />
        </motion.div>
      ) : null}
    </section>
  );
}

const NEARBY = [
  { img: bhimtalLake, name: "Bhimtal Lake", distance: "0.3 km" },
  { img: attrSattal, name: "Sattal", distance: "6 km" },
  { img: bhimtalGhorakhal, name: "Naukuchiatal", distance: "4 km" },
  { img: attrTemple, name: "Hanuman Garhi", distance: "20 km" },
  { img: attrNainital, name: "Nainital", distance: "22 km" },
  { img: attrPara, name: "Paragliding", distance: "8 km" },
  { img: bhimtalUttarakhand, name: "Mountain Trails", distance: "1 km" },
  { img: bhimtalLakeView, name: "Boating Point", distance: "0.5 km" },
];

export function Nearby() {
  return (
    <section id="nearby" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Around You"
          title="Nearby Attractions"
          subtitle="Seven lakes, hilltop temples and paragliding ridges — all within an easy morning's drive."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NEARBY.map((n, i) => (
            <Reveal key={n.name} delay={i * 0.05}>
              <motion.a
                href="#map"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="zoom-media group relative block h-64 rounded-xl luxe-shadow"
              >
                <img
                  src={n.img}
                  alt={n.name}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/88 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-display text-xl text-primary-foreground">{n.name}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                    <MapPin className="size-3" /> {n.distance} away
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
