// ---------------------------------------------------------------------------
// Central content for the Shanto's Fit n Fine Gym site.
// Edit copy, prices, images and links here in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: "Shanto's Fit n Fine Gym",
  tagline: "A Complete Fitness Solution for Men & Women",
  phone: "01715-856677",
  whatsapp: "8801715856677",
  mapUrl: "https://share.google/A1cR2O0AbvXCaJk30",
  mapEmbed: "https://www.google.com/maps?q=Shanto%27s+Fit+N+Fine+Gym,+Nadda,+Dhaka+1229&output=embed",
  address: "Ka-149/1 (1st Floor), Shahid Fazlul Haq Rd, Morol Bazar, Nadda, Dhaka 1229",
  hours: "Gents: 6:30 AM – 2:00 PM & 6:00 PM – 11:00 PM",
  ladiesHours: "Ladies: 2:00 PM – 6:00 PM",
  logo: "/images/logo.jpg",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "TikTok", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "/contact" },
];

// Real photos from the gym, shown in the homepage gallery
export const gallery = [
  { src: "/images/gym-floor.jpg", alt: "Strength machines on the main gym floor", label: "Main Floor" },
  { src: "/images/cardio-zone.jpg", alt: "Row of bikes and treadmills in the cardio zone", label: "Cardio Zone" },
  { src: "/images/cable-training.jpg", alt: "Head coach Shanto training on the cable crossover machine", label: "Cable Training" },
  { src: "/images/mural.jpg", alt: "Shanto's Fit n Fine Gym wall mural", label: "Our Wall" },
];

// Horizontal training-category carousel on the homepage
export const categories = [
  {
    title: "Strength Machines",
    tag: "Main Floor",
    image: "/images/gym-floor.jpg",
  },
  {
    title: "Cardio Deck",
    tag: "Conditioning",
    image: "/images/cardio-zone.jpg",
  },
  {
    title: "Cable Station",
    tag: "Equipment",
    image: "/images/cable-training.jpg",
  },
  {
    title: "Free Weights",
    tag: "Training Zone",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Functional Rig",
    tag: "Mobility",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=80",
  },
];

// Numbered fitness classes list
export const classes = [
  {
    no: "01",
    name: "Strength & Power",
    desc: "Progressive barbell and dumbbell work to build raw strength, dense muscle and unbreakable confidence under the bar.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    no: "02",
    name: "CrossFit WOD",
    desc: "High-intensity constantly-varied workouts that fuse cardio, gymnastics and weightlifting for total-body conditioning.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    no: "03",
    name: "HIIT & Cardio",
    desc: "Fast, sweat-drenched intervals that torch calories, spike your metabolism and keep the fat burning long after you leave.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    no: "04",
    name: "Functional Training",
    desc: "Move better in real life. Kettlebells, sleds, ropes and bodyweight drills that build athletic, resilient movement.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    no: "05",
    name: "Yoga & Mobility",
    desc: "Restore, stretch and breathe. Improve flexibility, protect your joints and recover faster between heavy sessions.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  },
];

// Programs / goals (from the gym's facilities list)
export const programs = [
  {
    title: "Weight Loss",
    desc: "Structured fat-loss training with cardio and a diet plan built around everyday Bangladeshi meals.",
    icon: "flame",
  },
  {
    title: "Weight Gain",
    desc: "Resistance training and a calorie-smart diet plan to add healthy, lean body weight.",
    icon: "dumbbell",
  },
  {
    title: "Belly & Hip Reduction",
    desc: "Targeted workouts and body stretching to trim the belly and hips and tone your core.",
    icon: "activity",
  },
  {
    title: "Body Building",
    desc: "Split routines, progressive overload and full-time instructor guidance on the latest equipment.",
    icon: "trophy",
  },
  {
    title: "Physical Fitness",
    desc: "Build stamina, strength and flexibility for everyday health — for men and women of every age.",
    icon: "user",
  },
  {
    title: "Diet Plan",
    desc: "A personalised diet plan included with your membership to fuel your results.",
    icon: "apple",
  },
];

// Membership packages (prices in BDT, from the gym's price list)
export const packages = [
  {
    name: "Monthly",
    price: "3,000",
    period: "BDT / month",
    highlight: false,
    perks: [
      "All member facilities included",
      "Flexible month-to-month",
      "Separate ladies hour",
    ],
  },
  {
    name: "Quarterly",
    price: "8,500",
    period: "BDT / 3 months",
    highlight: false,
    perks: [
      "All member facilities included",
      "Save ৳500 vs monthly",
      "Separate ladies hour",
    ],
  },
  {
    name: "Half Yearly",
    price: "16,000",
    period: "BDT / 6 months",
    highlight: false,
    perks: [
      "All member facilities included",
      "Save ৳2,000 vs monthly",
      "Separate ladies hour",
    ],
  },
  {
    name: "Yearly",
    price: "30,000",
    period: "BDT / year",
    highlight: true,
    perks: [
      "All member facilities included",
      "Save ৳6,000 vs monthly",
      "Separate ladies hour",
    ],
  },
];

// Facilities every member gets (from the gym's price list)
export const facilities = [
  "Air-conditioned gym",
  "Every day steam bath & shower",
  "Thai & Chinese massage",
  "Body stretching",
  "Latest equipment",
  "Full-time instructor",
  "Diet plan",
  "Locker facilities",
  "IPS standby, TV & music",
  "Separate ladies hour",
];

// Coaches / trainers
export const trainers = [
  {
    name: "Shanto",
    role: "Head Strength Coach",
    speciality: "Powerlifting · Muscle Gain",
    image:
      "/images/trainer-shanto.jpg",
  },
  {
    name: "Maruf",
    role: "Fat-Loss Specialist",
    speciality: "HIIT · Nutrition",
    image:
      "/images/trainer-maruf.jpg",
  },
  {
    name: "Jubayer",
    role: "CrossFit Coach",
    speciality: "Conditioning · Olympic Lifts",
    image:
      "https://images.unsplash.com/photo-1580491934424-f4d543ccbf05?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sadia Rahman",
    role: "Mobility & Yoga Coach",
    speciality: "Recovery · Flexibility",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
  },
];

export const stats = [
  { value: "12", suffix: "K+", label: "Members Trained" },
  { value: "45", suffix: "+", label: "Weekly Classes" },
  { value: "20", suffix: "", label: "Expert Coaches" },
  { value: "8", suffix: "", label: "Years in Dhaka" },
];

export const testimonials = [
  {
    quote:
      "I lost 14 kg in five months at Shanto's Fit n Fine. The coaches actually built a plan around my office schedule and Bengali food habits. Life-changing.",
    name: "Ashiqur R.",
    role: "Weight-Loss Program",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Best equipment and vibe in Dhaka, hands down. The strength coaching took my deadlift from 80kg to 160kg in under a year.",
    name: "Mahmudul H.",
    role: "Strength & Power",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "As a woman I finally feel comfortable and strong in a gym. Clean, safe, professional and genuinely motivating trainers.",
    name: "Farhana K.",
    role: "Muscle Gain Program",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

export const sponsors = [
  "OPTIMUM",
  "MYPROTEIN",
  "GYMSHARK",
  "RAWFUEL",
  "TITAN",
  "IRONFORGE",
];
