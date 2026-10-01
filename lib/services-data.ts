export type ServiceCategory = "mechanical" | "diagnostic" | "maintenance" | "climate";

export type DetailedService = {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  inclusions: string[];
  turnaround: string;
  pricingEst: string;
  faqs: { question: string; answer: string }[];
};

export const allServices: DetailedService[] = [
  {
    id: "diagnostics",
    slug: "computer-diagnostics",
    title: "Computer Diagnostics & Electrical",
    category: "diagnostic",
    shortDesc: "Pinpoint accuracy for warning lights, battery issues, and elusive electrical glitches.",
    fullDesc:
      "Modern vehicles are rolling supercomputers with dozens of electronic control units (ECUs). When a Check Engine, ABS, or traction warning light illuminates, generic code readers often provide misleading or vague trouble codes. At Apex Auto Care, our technicians utilize factory-grade bi-directional diagnostic scanners and lab oscilloscopes to analyze real-time live sensor data streams, pin-test harness continuity, and detect intermittent signal dropouts. We test, not guess.",
    symptoms: [
      "Check Engine, ABS, Airbag, or ESP warning lights illuminated or flashing",
      "Engine hesitates, sputters, or stalls when idling or under load",
      "Battery drains overnight or vehicle requires frequent jump-starts",
      "Erratic instrument cluster gauges, flickering lights, or power window faults",
      "Rough shifting or sudden transmission limp-mode activation",
    ],
    inclusions: [
      "Full system OEM-level ECU scan across all vehicle modules",
      "Live data stream logging and sensor voltage testing",
      "Battery conductance, starter draw, and alternator load testing",
      "Smoke machine vacuum leak testing if lean/rich codes present",
      "Comprehensive digital inspection report with plain-English diagnosis",
    ],
    turnaround: "Same-Day Analysis (2 - 4 hours)",
    pricingEst: "Starting at $149 (Applied to repair if authorized)",
    faqs: [
      {
        question: "Is it safe to drive with a solid Check Engine light on?",
        answer:
          "If the light is steady (not flashing) and the vehicle drives normally without strange noises, it is generally safe for short trips, but you should schedule diagnostic service promptly. If the light is FLASHING, stop driving immediately to avoid severe catalytic converter or engine damage.",
      },
      {
        question: "Does the diagnostic fee cover the repair?",
        answer:
          "The diagnostic fee covers the dedicated master technician labor and specialized equipment time to identify the exact root cause. When you approve the recommended repair with Apex, we credit a portion of the diagnostic fee directly toward your repair total.",
      },
    ],
  },
  {
    id: "brakes",
    slug: "brake-repair-rotors",
    title: "Brake Systems & Ceramic Rotors",
    category: "mechanical",
    shortDesc: "Maximum stopping performance, low-dust ceramic pads, and precision rotor resurfacing.",
    fullDesc:
      "Your vehicle's braking system is its single most critical safety component. Whether navigating stop-and-go Austin traffic on MoPac or descending hill country grades, you need immediate, vibration-free stopping power. We install premium ultra-low dust ceramic and semi-metallic friction pads paired with high-carbon rotors to resist thermal warping and brake fade. Every brake service includes caliper slide lubrication, hardware replacement, and a complete hydraulic line inspection.",
    symptoms: [
      "High-pitched squealing, screeching, or grinding sounds when braking",
      "Vibration or pulsation felt through the brake pedal or steering wheel",
      "Spongy or low brake pedal feel requiring excessive travel to stop",
      "Vehicle pulls noticeably to the left or right when brakes are applied",
      "Brake warning indicator on dash or low fluid alert in reservoir",
    ],
    inclusions: [
      "Premium ceramic or severe-duty semi-metallic brake pad set",
      "Precision rotor replacement or computerized on-car resurfacing",
      "Caliper slide pin degreasing, inspection, and high-temp synthetic lubrication",
      "New stainless steel anti-rattle hardware clips and noise dampeners",
      "DOT 4 / DOT 5.1 high-temperature brake fluid flush and system bleeding",
    ],
    turnaround: "Same-Day Service (2 - 4 hours)",
    pricingEst: "Front or Rear Pads & Rotors from $320",
    faqs: [
      {
        question: "How long do ceramic brake pads typically last?",
        answer:
          "In typical Austin driving conditions, quality ceramic pads last between 40,000 and 70,000 miles, depending on driving habits, vehicle weight, and highway vs. city commute ratio.",
      },
      {
        question: "Can my rotors just be resurfaced instead of replaced?",
        answer:
          "We measure your rotors with a digital micrometer. If they exceed the manufacturer's discard thickness specification and have no micro-cracking, we can resurface them to save you money.",
      },
    ],
  },
  {
    id: "engine",
    slug: "engine-transmission-repair",
    title: "Engine & Transmission Overhaul",
    category: "mechanical",
    shortDesc: "Comprehensive mechanical repair from timing chains and cooling to transmissions.",
    fullDesc:
      "From critical preventative timing belt services to resolving complex internal mechanical failures, our senior engine specialists have decades of experience with domestic V8s, German turbocharged powertrains, and Japanese reliability champions. We replace failing water pumps, repair persistent oil leaks at valve covers and oil pans, and perform comprehensive transmission flushes, valve body repairs, and full powertrain replacements.",
    symptoms: [
      "Engine overheating or temperature gauge creeping toward red",
      "Puddles of oil, red transmission fluid, or sweet-smelling coolant under vehicle",
      "Transmission slips, delays engagement, or jerks when shifting gears",
      "Loud knocking, ticking, or whining noises from the engine bay",
      "Unexplained loss of power, hesitation, or heavy exhaust smoke",
    ],
    inclusions: [
      "OEM timing belt, tensioner, idlers, and water pump replacement",
      "Cooling system pressure test, aluminum radiator & thermostat service",
      "Gasket leak repair (valve cover, oil pan, timing cover, rear main seal)",
      "Transmission fluid evacuation, filter replacement, and TCM adaptations",
      "Comprehensive post-repair dyno and road testing validation",
    ],
    turnaround: "1 - 3 Business Days (Depends on scope)",
    pricingEst: "Itemized upfront quote provided after inspection",
    faqs: [
      {
        question: "When should I change my vehicle's timing belt?",
        answer:
          "Most manufacturers recommend replacing interference-engine timing belts between 60,000 and 100,000 miles or every 7 years. Failing to do so can result in catastrophic engine failure if the belt snaps.",
      },
    ],
  },
  {
    id: "ac",
    slug: "ac-heating-climate",
    title: "A/C & Climate Control Systems",
    category: "climate",
    shortDesc: "Beat the Texas heat with ice-cold air conditioning recharge and compressor repair.",
    fullDesc:
      "In Central Texas, an efficient automotive air conditioning system isn't a luxury — it's an absolute necessity. Whether your system has developed a microscopic refrigerant leak, a worn compressor clutch, or a clogged cabin air filter, our certified EPA Section 609 technicians restore icy cold airflow. We service both traditional R134a systems and modern eco-friendly R1234yf systems equipped on 2015+ vehicles.",
    symptoms: [
      "A/C blows warm or ambient temperature air even at maximum settings",
      "A/C cools when driving at highway speeds but warms up at traffic lights",
      "Musty, moldy, or chemical odors coming from climate vents",
      "Loud clicking or squealing noises when activating the A/C button",
      "Weak air volume blowing from dashboard vents",
    ],
    inclusions: [
      "Complete refrigerant recovery, vacuum decay test, and precision recharge",
      "Electronic ultrasonic and UV dye refrigerant leak detection",
      "Compressor clutch, pulley, and condenser efficiency testing",
      "Evaporator core sanitization and high-efficiency HEPA cabin filter swap",
      "Vent temperature measurement before and after service",
    ],
    turnaround: "Same-Day Service (2 - 3 hours)",
    pricingEst: "A/C Diagnostic & Performance Check from $129",
    faqs: [
      {
        question: "Why did my A/C stop blowing cold air suddenly?",
        answer:
          "The most common cause is low refrigerant due to a slow leak in an O-ring, hose, or condenser, which triggers the low-pressure safety switch to disable the compressor. We find and seal the leak before recharging.",
      },
    ],
  },
  {
    id: "suspension",
    slug: "suspension-steering-alignment",
    title: "Suspension, Steering & Laser Alignment",
    category: "mechanical",
    shortDesc: "Laser-accurate 4-wheel tracking, vibration elimination, and smooth road handling.",
    fullDesc:
      "Potholes, road construction, and curb impacts quickly knock your vehicle out of manufacturer alignment, causing premature tire wear and unpredictable highway handling. Our state-of-the-art Hunter HawkEye Elite optical alignment system measures camber, caster, and toe angles down to hundredths of a degree. We also service worn control arm bushings, ball joints, struts, tie rods, and electronic power steering racks.",
    symptoms: [
      "Vehicle pulls or drifts to one side when driving on a flat, straight road",
      "Steering wheel is off-center or crooked while driving straight ahead",
      "Uneven or rapid tire tread wear (edges or inner shoulders worn bald)",
      "Clunking, popping, or squeaking noises when driving over bumps or turning",
      "Excessive bouncing, nose-diving when braking, or floaty highway feel",
    ],
    inclusions: [
      "Hunter optical 4-wheel computerized laser alignment",
      "Inspection of shocks, struts, coil springs, and air suspension bellows",
      "Ball joint, tie rod end, and control arm bushing play testing",
      "Steering rack, tie rod boots, and power steering fluid check",
      "Before & after color printout of your vehicle's alignment geometry",
    ],
    turnaround: "Same-Day Service (60 - 90 minutes)",
    pricingEst: "Computerized 4-Wheel Alignment: $139",
    faqs: [
      {
        question: "How often should I have an alignment performed?",
        answer:
          "We recommend an alignment check once every 12 months or 12,000 miles, and whenever you install new tires, replace suspension components, or hit a severe pothole.",
      },
    ],
  },
  {
    id: "maintenance",
    slug: "factory-scheduled-maintenance",
    title: "Factory Scheduled 30k/60k/90k Maintenance",
    category: "maintenance",
    shortDesc: "Maintain new-car warranty compliance and prevent breakdowns with factory service intervals.",
    fullDesc:
      "You don't have to visit an expensive dealership to maintain your vehicle's factory warranty. Under the federal Magnuson-Moss Warranty Act, you can have scheduled services performed at any certified independent shop without voiding your warranty. We use OEM fluids, premium filters, and follow exact manufacturer maintenance schedules.",
    symptoms: [
      "Vehicle has reached 30,000, 60,000, 90,000, or 120,000-mile milestone",
      "Maintenance Required or Service Due dashboard notification",
      "Overdue for engine oil, transmission, brake, or differential fluid change",
      "Decreased fuel economy or sluggish throttle response",
    ],
    inclusions: [
      "Premium full-synthetic motor oil and OEM filter replacement",
      "Engine air filter and cabin microfilter replacement",
      "Spark plug inspection or replacement with laser iridium units",
      "Tire rotation, pressure calibration, and brake pad wear check",
      "Complimentary 40-point digital multi-point inspection with photo report",
    ],
    turnaround: "60 - 90 Minutes (Fast Track Bay)",
    pricingEst: "Maintenance packages starting at $99",
    faqs: [
      {
        question: "Will servicing my car at Apex void my factory manufacturer warranty?",
        answer:
          "No. By law, independent auto repair facilities using OEM-spec parts and fluids maintain your full manufacturer warranty coverage. We provide full digital documentation for your vehicle's records.",
      },
    ],
  },
];

export const symptomCheckerData = [
  {
    id: "sym-1",
    symptom: "Squeaking or grinding when stopping",
    category: "Braking System",
    likelyCause: "Worn brake pads or scored rotor surface",
    recommendedService: "Brake Inspection & Ceramic Pad Replacement",
    urgency: "High",
    href: "/services#brakes",
  },
  {
    id: "sym-2",
    symptom: "A/C blows warm air at stoplights",
    category: "Climate System",
    likelyCause: "Low refrigerant level or failing condenser fan",
    recommendedService: "A/C Performance Check & Leak Detection",
    urgency: "Medium",
    href: "/services#ac",
  },
  {
    id: "sym-3",
    symptom: "Steering wheel shakes at highway speeds",
    category: "Wheels & Suspension",
    likelyCause: "Wheel out of balance or warped brake rotor",
    recommendedService: "Tire Balance & 4-Wheel Laser Alignment",
    urgency: "Medium",
    href: "/services#suspension",
  },
  {
    id: "sym-4",
    symptom: "Flashing Check Engine warning light",
    category: "Engine & Emissions",
    likelyCause: "Severe engine cylinder misfire (risks cat damage)",
    recommendedService: "Immediate Diagnostic Scan & Ignition Check",
    urgency: "Urgent",
    href: "/services#diagnostics",
  },
  {
    id: "sym-5",
    symptom: "Sweet syrupy smell inside cabin or under hood",
    category: "Cooling System",
    likelyCause: "Coolant leak from radiator, heater core, or hose",
    recommendedService: "Cooling System Pressure Test & Repair",
    urgency: "High",
    href: "/services#engine",
  },
  {
    id: "sym-6",
    symptom: "Car struggles to start after sitting overnight",
    category: "Electrical",
    likelyCause: "Degraded battery cell or parasitic draw",
    recommendedService: "Battery, Starter & Alternator System Test",
    urgency: "Medium",
    href: "/services#diagnostics",
  },
];
