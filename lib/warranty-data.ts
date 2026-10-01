export type WarrantyCoverageItem = {
  category: string;
  covered: string[];
  notCovered: string[];
};

export const warrantyTerms = {
  durationMonths: 12,
  durationMiles: 12000,
  hotlineDisplay: "(512) 555-0188",
  hotlineHref: "tel:+15125550188",
  networkSize: "30,000+ certified nationwide network facilities",
};

export const coverageMatrix: WarrantyCoverageItem[] = [
  {
    category: "Braking Systems",
    covered: [
      "Brake pads and shoes defects (cracking, de-bonding, premature material failure)",
      "Brake rotors and drums against warping or cracking under normal road usage",
      "Brake calipers, wheel cylinders, master cylinders, and hydraulic lines",
      "All labor associated with replacing covered brake components",
    ],
    notCovered: [
      "Normal friction wear from excessive mileage or track/racing use",
      "Damage caused by driving on metal-to-metal worn pads after inspection warning",
    ],
  },
  {
    category: "Engine & Mechanical",
    covered: [
      "Timing belt, water pump, idler pulleys, and tensioners",
      "Alternators, starters, and ignition coils replaced by Apex",
      "Replaced gaskets and seals against fluid leakage",
      "Engine mounts and accessory drive serpentine belts",
    ],
    notCovered: [
      "Engine overheating caused by continued operation with low coolant",
      "Pre-existing internal engine block damage not authorized for repair",
    ],
  },
  {
    category: "Suspension & Steering",
    covered: [
      "Struts, shock absorbers, and coil spring assemblies",
      "Control arms, ball joints, sway bar links, and tie rod ends",
      "Power steering pumps, steering racks, and electronic assist motors",
      "Wheel bearings and hub assemblies against premature play or noise",
    ],
    notCovered: [
      "Alignment shifts resulting from severe curb impacts or collision accidents",
      "Tire punctures or road hazard damage",
    ],
  },
  {
    category: "Climate & Air Conditioning",
    covered: [
      "A/C compressor, clutch, condenser, and evaporator units",
      "Replaced A/C hoses, O-ring seals, and expansion valves",
      "Refrigerant recharge if leak occurs at newly replaced component",
    ],
    notCovered: [
      "Foreign object damage to condenser from road gravel/debris",
    ],
  },
];

export const claimSteps = [
  {
    step: "01",
    title: "Call Our Warranty Hotline",
    description:
      "Whether you are in Austin or 1,500 miles away on a road trip, call our dedicated service desk at (512) 555-0188 before authorizing any third-party work.",
  },
  {
    step: "02",
    title: "Partner Facility Referral",
    description:
      "If you are outside the Austin metro area, our team will immediately locate the nearest certified repair facility within our 30,000+ shop nationwide partner network.",
  },
  {
    step: "03",
    title: "Direct Shop-to-Shop Authorization",
    description:
      "The visiting shop diagnoses your vehicle and submits their findings directly to Apex. We verify the warranty record and approve parts & labor charges directly.",
  },
  {
    step: "04",
    title: "$0 Out-of-Pocket Expense",
    description:
      "You pick up your repaired vehicle with zero paperwork hassle or out-of-pocket payment for qualifying covered defects.",
  },
];
