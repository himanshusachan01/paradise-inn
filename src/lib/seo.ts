export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

export const seo = {
  siteName: "Paradise Inn Bhimtal",
  title: "Paradise Inn Bhimtal | Lake View Hotel Near Bhimtal Lake",
  description:
    "Book Paradise Inn Bhimtal on Mandir Marg near Bhimtal Lake. Lake-view rooms from ₹2,000, family stays, free WiFi, room service, parking and easy access to Sattal, Naukuchiatal and Nainital.",
  keywords:
    "Paradise Inn Bhimtal, hotel in Bhimtal, lake view hotel Bhimtal, hotel near Bhimtal Lake, family hotel in Bhimtal, Bhimtal rooms, Bhimtal hotel booking, Mandir Marg Bhimtal hotel, Uttarakhand hotel, Nainital nearby hotel",
  image: "/seo/paradise-inn-bhimtal-og.jpg",
  locale: "en_IN",
  canonicalPath: "/",
} as const;

export const hotelBusiness = {
  name: "Paradise Inn Bhimtal",
  phone: "+919897954060",
  email: "paradise.anurag@gmail.com",
  address: "Paradise Inn, Mandir Marg, Tallital, Bhimtal, Uttarakhand 263136",
  streetAddress: "Paradise Inn, Mandir Marg, Tallital",
  locality: "Bhimtal",
  region: "Uttarakhand",
  postalCode: "263136",
  country: "IN",
  latitude: 29.35,
  longitude: 79.56,
  priceRange: "₹₹",
} as const;

export const faqItems = [
  {
    question: "Where is Paradise Inn Bhimtal located?",
    answer: "Paradise Inn is located at Mandir Marg, Tallital, Bhimtal, Uttarakhand 263136.",
  },
  {
    question: "Is Paradise Inn close to Bhimtal Lake?",
    answer:
      "Yes. The hotel is near Bhimtal Lake, with lake-view room options and easy access to the lake, market and boating point.",
  },
  {
    question: "Which room types are available at Paradise Inn Bhimtal?",
    answer:
      "Guests can choose from Standard Room Double Bed, Lake View Triple Bedded Room and Lake View Four Bedded Room options.",
  },
  {
    question: "What amenities does Paradise Inn Bhimtal offer?",
    answer:
      "The stay includes free WiFi, lake-view rooms, room service, housekeeping, parking, power backup, family rooms and hot water.",
  },
  {
    question: "How can I book a room at Paradise Inn Bhimtal?",
    answer:
      "You can book by calling 98979 54060 or by sending a WhatsApp message to Paradise Inn with your travel dates and guest count.",
  },
  {
    question: "Which attractions are near Paradise Inn Bhimtal?",
    answer:
      "Nearby places include Bhimtal Lake, Kainchi Dham, Golju Devta Temple, Sattal, Naukuchiatal, Hanuman Garhi, Nainital, paragliding points, mountain trails and the boating point.",
  },
] as const;

export const nearbyAttractions = [
  { name: "Bhimtal Lake", distance: "0.3 km", url: "#nearby" },
  { name: "Kainchi Dham", distance: "18 km", url: "#nearby" },
  { name: "Golju Devta Temple", distance: "10 km", url: "#nearby" },
  { name: "Boating Point", distance: "0.5 km", url: "#nearby" },
  { name: "Mountain Trails", distance: "1 km", url: "#nearby" },
  { name: "Naukuchiatal", distance: "4 km", url: "#nearby" },
  { name: "Sattal", distance: "6 km", url: "#nearby" },
  { name: "Paragliding", distance: "8 km", url: "#nearby" },
  { name: "Hanuman Garhi", distance: "20 km", url: "#nearby" },
  { name: "Nainital", distance: "22 km", url: "#nearby" },
] as const;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return siteUrl ? `${siteUrl}${normalizedPath}` : normalizedPath;
}
