export const site = {
  name: "Apex Auto Care",
  tagline: "Austin's Premier Independent Auto Repair",
  city: "Austin, Texas",
  address: {
    street: "3412 S Congress Ave",
    city: "Austin",
    state: "TX",
    zip: "78704",
    full: "3412 S Congress Ave, Austin, TX 78704",
    mapsUrl: "https://maps.google.com/?q=3412+S+Congress+Ave,+Austin,+TX+78704",
  },
  phoneDisplay: "(512) 555-0188",
  phoneHref: "tel:+15125550188",
  towingPhoneDisplay: "(512) 555-0199",
  towingPhoneHref: "tel:+15125550199",
  email: "service@apexautocare-austin.com",
  bookingHref: "/appointment",
  hours: [
    { days: "Monday - Friday", hours: "7:30 AM - 6:00 PM" },
    { days: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  stats: [
    { value: "15+", label: "Years Serving Austin" },
    { value: "4.9★", label: "Google Rating (650+)" },
    { value: "12 Mo", label: "Nationwide Warranty" },
    { value: "100%", label: "Digital Inspections" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/warranty", label: "Warranty" },
  { href: "/contact", label: "Contact" },
] as const;


