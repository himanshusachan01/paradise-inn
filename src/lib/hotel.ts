import { hotelBusiness } from "./seo";

export const HOTEL = {
  name: hotelBusiness.name,
  phone: hotelBusiness.phone,
  phoneLabel: "98979 54060",
  secondaryPhone: "+918077226282",
  secondaryPhoneLabel: "8077226282",
  whatsapp: "919897954060",
  email: hotelBusiness.email,
  address: hotelBusiness.address,
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Paradise+Inn+Mandir+Marg+Tallital+Bhimtal+Uttarakhand+263136",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Paradise+Inn+Mandir+Marg+Tallital+Bhimtal+Uttarakhand+263136",
} as const;
