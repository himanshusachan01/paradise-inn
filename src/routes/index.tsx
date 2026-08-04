import { createFileRoute } from "@tanstack/react-router";
import { Navbar, FloatingActions } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About, Rooms, Amenities } from "@/components/site/sections-a";
import { Experience, Gallery, Nearby } from "@/components/site/sections-b";
import {
  WhyUs,
  Testimonials,
  MapSection,
  BookingCta,
  Footer,
} from "@/components/site/sections-c";

const title = "Paradise Inn Bhimtal | Luxury Lake View Hotel in Uttarakhand";
const description =
  "Paradise Inn Bhimtal is a lake-view stay on Mandir Marg near Bhimtal Lake, with standard, lake-view triple and lake-view four-bedded rooms, free WiFi and room service.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Paradise Inn Bhimtal",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Paradise inn, Mandir Marg, Ward no 3, Jind State Nagar Panchayat, Near SOS Bhimtal",
            addressLocality: "Bhimtal",
            addressRegion: "Uttarakhand",
            postalCode: "263136",
            addressCountry: "IN",
          },
          telephone: "+919897954060",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.0",
            reviewCount: "71",
          },
          amenityFeature: [
            "Free WiFi",
            "Lake View",
            "24-hour Room Service",
            "Power Backup",
            "Housekeeping",
            "Family Rooms",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Experience />
        <Gallery />
        <Nearby />
        <WhyUs />
        <Testimonials />
        <MapSection />
        <BookingCta />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
