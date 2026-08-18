import { createFileRoute } from "@tanstack/react-router";
import { Navbar, FloatingActions } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About, Rooms, Amenities } from "@/components/site/sections-a";
import { Experience, Gallery, Nearby } from "@/components/site/sections-b";
import {
  WhyUs,
  Testimonials,
  MapSection,
  FaqSection,
  BookingCta,
  Footer,
} from "@/components/site/sections-c";
import { absoluteUrl, faqItems, hotelBusiness, nearbyAttractions, seo } from "@/lib/seo";

const roomOffers = [
  {
    name: "Standard Room Double Bed",
    description: "Double-bed room for up to 3 guests with essential comforts near Bhimtal Lake.",
    price: "2000",
  },
  {
    name: "Lake View Triple Bedded Room",
    description: "Lake-view room for up to 3 guests with a double bed and room-only plan.",
    price: "2800",
  },
  {
    name: "Lake View Four Bedded Room",
    description: "Family-friendly lake-view room for up to 5 guests with two double beds.",
    price: "3000",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { name: "keywords", content: seo.keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: hotelBusiness.name },
      { name: "publisher", content: hotelBusiness.name },
      { name: "category", content: "Hotel" },
      { name: "classification", content: "Hotel, Accommodation, Bhimtal, Uttarakhand" },
      { name: "coverage", content: "Bhimtal, Uttarakhand, India" },
      { name: "geo.placename", content: "Bhimtal, Uttarakhand" },
      {
        name: "geo.position",
        content: `${hotelBusiness.latitude};${hotelBusiness.longitude}`,
      },
      {
        name: "ICBM",
        content: `${hotelBusiness.latitude}, ${hotelBusiness.longitude}`,
      },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:locale", content: seo.locale },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl(seo.canonicalPath) },
      { property: "og:image", content: absoluteUrl(seo.image) },
      { property: "og:image:alt", content: "Paradise Inn Bhimtal lake view hotel in Uttarakhand" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      { name: "twitter:image", content: absoluteUrl(seo.image) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(seo.canonicalPath) }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "@id": `${absoluteUrl(seo.canonicalPath)}#hotel`,
          name: hotelBusiness.name,
          url: absoluteUrl(seo.canonicalPath),
          image: absoluteUrl(seo.image),
          mainEntityOfPage: absoluteUrl(seo.canonicalPath),
          description: seo.description,
          telephone: hotelBusiness.phone,
          email: hotelBusiness.email,
          priceRange: hotelBusiness.priceRange,
          hasMap:
            "https://www.google.com/maps/search/?api=1&query=Paradise+Inn+Mandir+Marg+Bhimtal+Uttarakhand",
          areaServed: ["Bhimtal", "Nainital", "Sattal", "Naukuchiatal", "Kumaon", "Uttarakhand"],
          address: {
            "@type": "PostalAddress",
            streetAddress: hotelBusiness.streetAddress,
            addressLocality: hotelBusiness.locality,
            addressRegion: hotelBusiness.region,
            postalCode: hotelBusiness.postalCode,
            addressCountry: hotelBusiness.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: hotelBusiness.latitude,
            longitude: hotelBusiness.longitude,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: hotelBusiness.ratingValue,
            reviewCount: hotelBusiness.reviewCount,
          },
          amenityFeature: [
            "Free WiFi",
            "Lake View",
            "24-hour Room Service",
            "Power Backup",
            "Housekeeping",
            "Family Rooms",
            "Parking",
            "Terrace Garden",
            "Doctor on Call",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
          containsPlace: roomOffers.map((room) => ({
            "@type": "HotelRoom",
            name: room.name,
            description: room.description,
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: room.name.includes("Four") ? 5 : 3,
            },
            offers: {
              "@type": "Offer",
              price: room.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${absoluteUrl(seo.canonicalPath)}#book`,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: seo.siteName,
          url: absoluteUrl(seo.canonicalPath),
          description: seo.description,
          inLanguage: "en-IN",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Paradise Inn Bhimtal",
              item: absoluteUrl(seo.canonicalPath),
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Places near Paradise Inn Bhimtal",
          itemListElement: nearbyAttractions.map((place, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristAttraction",
              name: place.name,
              description: `${place.name} is around ${place.distance} from Paradise Inn Bhimtal.`,
              url: `${absoluteUrl(seo.canonicalPath)}${place.url}`,
            },
          })),
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
        <FaqSection />
        <BookingCta />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
