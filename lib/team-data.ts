export type TeamMember = {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  specialties: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "tech-1",
    name: "Marcus Sterling",
    role: "Founder & Master Diagnostic Technician",
    experience: "19 Years in Trade",
    certifications: ["ASE World Class Technician", "L1 Advanced Engine Performance", "Bosch Master Certified"],
    specialties: "European Performance (BMW, Audi, Porsche) & Advanced CAN-bus Electrical",
    bio: "Marcus founded Apex Auto Care after 12 years as a lead dealership shop foreman. Disillusioned by aggressive dealership upsells and opaque pricing, he built Apex around total digital transparency and precision craftsmanship.",
  },
  {
    id: "tech-2",
    name: "Javier Morales",
    role: "Senior Powertrain & Transmission Specialist",
    experience: "16 Years in Trade",
    certifications: ["ASE Master Certified", "A1 Engine Repair", "A2 Automatic Transmission"],
    specialties: "Domestic Trucks (Ford PowerStroke, Chevy Duramax) & High-Torque Drivetrains",
    bio: "Javier is Austin’s go-to specialist for heavy-duty truck diagnostics, transmission rebuilds, and differential repairs. He treats every customer's work vehicle like his own family fleet.",
  },
  {
    id: "tech-3",
    name: "Hannah Lindqvist",
    role: "Lead Hybrid, EV & Climate Control Specialist",
    experience: "11 Years in Trade",
    certifications: ["ASE Master Certified", "L3 Light Duty Hybrid/EV", "EPA Section 609"],
    specialties: "Toyota/Lexus Hybrids, Tesla suspension/brakes, and modern R1234yf climate systems",
    bio: "Hannah is an engineering graduate with specialized training in high-voltage battery safety, inverter cooling systems, and next-gen electronic climate management.",
  },
  {
    id: "tech-4",
    name: "Trey Robertson",
    role: "Service Advisor & Customer Experience Lead",
    experience: "9 Years in Automotive",
    certifications: ["ASE C1 Service Consultant", "Digital Vehicle Inspection Certified"],
    specialties: "Plain-English repair explanations, warranty claims, and customer hospitality",
    bio: "Trey ensures every driver understands their vehicle's health report without high-pressure tactics. He manages loaner car reservations, updates customers via SMS, and coordinates all third-party warranty claims.",
  },
];

export const shopEquipment = [
  {
    name: "Hunter HawkEye Elite 3D Laser Aligner",
    category: "Chassis & Geometry",
    description: "High-definition optical cameras measure caster, camber, and thrust angle within 90 seconds without metal-to-wheel contact.",
  },
  {
    name: "Autel MaxiSys Ultra OEM Diagnostic System",
    category: "Electronic Diagnostics",
    description: "Top-tier 5-in-1 VCMI with bi-directional component activation, built-in 4-channel oscilloscope, and topology module mapping.",
  },
  {
    name: "Robinair R1234yf & R134a Dual Recovery Stations",
    category: "Climate Control",
    description: "Microprocessor-controlled refrigerant evacuation, deep vacuum decay testing, and gram-accurate electronic oil and gas injection.",
  },
  {
    name: "Rotary Shockwave 12,000-lb Heavy-Duty Lifts",
    category: "Safety & Lifting",
    description: "Commercial grade asymmetrical two-post lifts capable of safely handling exotic low-clearance supercars to lifted work trucks.",
  },
];

export const companyValues = [
  {
    number: "01",
    title: "Radical Digital Transparency",
    description: "We record photo and video evidence for every recommendation. If a component doesn't need repair today, we show you why and let you monitor it.",
  },
  {
    number: "02",
    title: "Upfront Fixed Price Lock",
    description: "The price you authorize via text is the exact price you pay. No hidden environmental fees, shop supply gouging, or unauthorized additions.",
  },
  {
    number: "03",
    title: "Master Craftsman Standards",
    description: "All mechanics are career ASE-certified professionals with 50+ hours of continuous factory training annually. We never cut corners on parts or procedures.",
  },
  {
    number: "04",
    title: "Frictionless Driver Experience",
    description: "From our boutique customer lounge with gigabit Wi-Fi and artisan coffee to our courtesy loaner fleet, servicing your car should never disrupt your day.",
  },
];
