export type ExtendedReview = {
  id: string;
  author: string;
  neighborhood: string;
  vehicleMake: "Ford" | "BMW" | "Toyota" | "Subaru" | "Porsche" | "Chevrolet" | "Honda" | "Tesla";
  vehicleModel: string;
  serviceCategory: "Brakes" | "Diagnostics" | "Engine" | "AC" | "Suspension" | "Maintenance";
  rating: number;
  date: string;
  source: "Google Reviews" | "Yelp Verified";
  title: string;
  content: string;
  verified: boolean;
};

export const extendedReviews: ExtendedReview[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    neighborhood: "South Congress, Austin",
    vehicleMake: "Ford",
    vehicleModel: "2021 Ford F-150 Lariat 3.5L EcoBoost",
    serviceCategory: "Suspension",
    rating: 5,
    date: "2 weeks ago",
    source: "Google Reviews",
    title: "Solved a mystery suspension knock that dealer couldn't find",
    content:
      "I had an annoying metallic knocking over speed bumps that the local Ford dealership dismissed as 'normal chassis flex'. Marcus at Apex put it on their optical rack, texted me a 4K video showing the failed upper control arm ball joint boot, and fixed it within 4 hours. My truck drives like it just rolled off the showroom floor.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    neighborhood: "Travis Heights, Austin",
    vehicleMake: "BMW",
    vehicleModel: "2019 BMW M340i xDrive",
    serviceCategory: "Brakes",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    title: "Saved over $1,200 compared to the BMW dealership quote",
    content:
      "BMW of Austin quoted me nearly $3,000 for front/rear pads, rotors, and brake sensors. Apex installed OEM Brembo dual-cast rotors and low-dust ceramic pads with a full DOT4 flush for almost half the price. Super clean waiting room with fast Wi-Fi while I worked remotely.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "David Kim",
    neighborhood: "Zilker, Austin",
    vehicleMake: "Toyota",
    vehicleModel: "2022 Toyota RAV4 Hybrid",
    serviceCategory: "AC",
    rating: 5,
    date: "3 weeks ago",
    source: "Google Reviews",
    title: "Life-saving same day A/C repair during a 104°F heatwave",
    content:
      "My A/C compressor clutch failed on Monday morning on my way to work. Dropped the car at Apex by 8:00 AM, received a clear video explanation and quote by 10:15 AM, approved it on my phone, and picked it up icy cold at 3:30 PM. Cannot recommend these guys enough.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Sarah Jenkins",
    neighborhood: "Barton Hills, Austin",
    vehicleMake: "Subaru",
    vehicleModel: "2018 Subaru Outback 2.5i Touring",
    serviceCategory: "Maintenance",
    rating: 5,
    date: "2 months ago",
    source: "Google Reviews",
    title: "Cleanest shop in Austin & zero pushy upsells",
    content:
      "Took my Outback in for its 90k mile service. Unlike other mechanics who hand you a laundry list of fake emergencies, Apex showed me exact photos of my brake pads (still at 6mm) and recommended waiting until the next oil change. Their honesty earned my business for life.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Julian Reynolds",
    neighborhood: "Downtown Austin",
    vehicleMake: "Porsche",
    vehicleModel: "2017 Porsche 911 Carrera S (991.2)",
    serviceCategory: "Engine",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    title: "Dealership-grade European expertise with boutique care",
    content:
      "Finding an independent mechanic you can trust with a 911 in Austin is tough. Marcus and the team completed my major 60k service including spark plugs, serpentine belt, and PDK transmission service flawlessly. Flawless attention to torque specs and zero scratches on the sill plates.",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Carlos Gutierrez",
    neighborhood: "East Austin",
    vehicleMake: "Chevrolet",
    vehicleModel: "2020 Chevrolet Silverado 1500 5.3L",
    serviceCategory: "Diagnostics",
    rating: 5,
    date: "3 weeks ago",
    source: "Google Reviews",
    title: "Check Engine light diagnosed & repaired in one afternoon",
    content:
      "My check engine light popped up with a rough idle. Autozone told me to replace three oxygen sensors. Apex actually tested the live sensor voltage and found a cracked PCV vacuum line behind the manifold instead. Fixed for $180 instead of $600 in unnecessary sensors.",
    verified: true,
  },
  {
    id: "rev-7",
    author: "Rachel Sterling",
    neighborhood: "Mueller, Austin",
    vehicleMake: "Honda",
    vehicleModel: "2021 Honda Civic Sport Touring",
    serviceCategory: "Brakes",
    rating: 5,
    date: "2 months ago",
    source: "Yelp Verified",
    title: "Smooth, quiet brakes and lightning fast turnaround",
    content:
      "Had terrible pulsation whenever slowing down on the highway. Apex replaced the front rotors and ceramic pads in under 90 minutes. Trey was super polite and explained the warranty in detail.",
    verified: true,
  },
  {
    id: "rev-8",
    author: "Brett Henderson",
    neighborhood: "Round Rock, Austin Metro",
    vehicleMake: "Tesla",
    vehicleModel: "2022 Tesla Model Y Long Range",
    serviceCategory: "Suspension",
    rating: 5,
    date: "1 month ago",
    source: "Google Reviews",
    title: "Excellent EV suspension and tire alignment service",
    content:
      "Tesla service center wanted weeks for an alignment appointment. Apex got me in next day on their Hunter optical rack. Eliminated the highway drift and tire camber wear immediately.",
    verified: true,
  },
];

export const caseStudies = [
  {
    id: "case-1",
    title: "2019 BMW M340i — High-Speed Brake Judder Resolution",
    category: "European Performance Brakes",
    summary:
      "Vehicle exhibited violent steering wheel vibration under high-speed deceleration. Dealership had previously replaced pads without measuring hub runout.",
    diagnostic:
      "Measured 0.003” excessive lateral runout on the wheel hub flange using a digital dial indicator, which induced uneven rotor thickness variation (DTV).",
    solution:
      "Precision cleaned hub surface, installed OEM two-piece semi-floating rotors, Brembo ceramic pads, and torqued to factory spec with high-temp anti-seize.",
    outcome:
      "Zero brake shudder, 30% reduction in brake dust, and 100% pedal confidence.",
  },
  {
    id: "case-2",
    title: "2021 Ford F-150 3.5L EcoBoost — Intermittent Boost Pressure Loss",
    category: "Engine & Turbocharging",
    summary:
      "Driver reported sluggish acceleration and random Check Engine Light (Code P0299 Turbocharger Underboost) under heavy towing loads.",
    diagnostic:
      "Performed electronic smoke pressurization test on intercooler piping. Discovered a split in the silicone charge pipe clamp near the throttle body.",
    solution:
      "Replaced charge pipe coupler with reinforced high-pressure silicone boot and recalibrated the electronic wastegate actuator.",
    outcome:
      "Full 18 PSI peak boost restored, zero engine codes, tested under simulated load.",
  },
];
