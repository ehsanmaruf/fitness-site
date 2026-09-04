// ---------------------------------------------------------------------------
// Central content for the IRONX gym site.
// Edit copy, prices, images and links here in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: "IRONX",
  tagline: "Forge Your Strongest Self",
  phone: "+880 1700-000000",
  email: "hello@ironx.fit",
  address: "Level 4, House 21, Road 11, Banani, Dhaka 1213",
  hours: "Sat–Thu: 6:00 AM – 11:00 PM · Fri: 8:00 AM – 10:00 PM",
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

// Horizontal training-category carousel on the homepage
export const categories = [
  {
    title: "Free Weights",
    tag: "Training Zone",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Strength Machines",
    tag: "Equipment",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Group Training",
    tag: "Community",
    image:
      "https://images.unsplash.com/photo-1517837414457-37b44cea4818?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cardio Deck",
    tag: "Conditioning",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
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

// Programs / goals (researched from common Dhaka gym offerings)
export const programs = [
  {
    title: "Weight Loss",
    desc: "Structured fat-loss plan combining HIIT, cardio and a calorie-smart diet built around Bangladeshi meals.",
    icon: "flame",
  },
  {
    title: "Muscle Gain",
    desc: "Hypertrophy-focused resistance training and high-protein nutrition to add lean, visible muscle mass.",
    icon: "dumbbell",
  },
  {
    title: "Bodybuilding",
    desc: "Competition-grade coaching on split routines, progressive overload, posing and contest prep.",
    icon: "trophy",
  },
  {
    title: "Personal Training",
    desc: "One-on-one sessions with a dedicated coach who tracks every rep, meal and milestone for you.",
    icon: "user",
  },
  {
    title: "Strength & Conditioning",
    desc: "Athlete programming to build power, speed and durability for sport and everyday performance.",
    icon: "activity",
  },
  {
    title: "Diet & Nutrition",
    desc: "Personalised meal plans and macro coaching from certified nutritionists to fuel your results.",
    icon: "apple",
  },
];

// Membership packages (prices in BDT)
export const packages = [
  {
    name: "1 Month",
    price: "1,500",
    period: "BDT / month",
    highlight: false,
    perks: [
      "Full gym floor access",
      "Free orientation session",
      "Locker & shower access",
      "Access during all open hours",
    ],
  },
  {
    name: "4 Months",
    price: "4,000",
    period: "BDT / 4 months",
    highlight: false,
    perks: [
      "Everything in Monthly",
      "1 free personal-training session",
      "Body composition check-up",
      "Group class access",
    ],
  },
  {
    name: "6 Months",
    price: "5,000",
    period: "BDT / 6 months",
    highlight: true,
    perks: [
      "Everything in 4 Months",
      "Custom diet & workout plan",
      "Monthly progress tracking",
      "Priority class booking",
    ],
  },
  {
    name: "1 Year",
    price: "10,000",
    period: "BDT / year",
    highlight: false,
    perks: [
      "Everything in 6 Months",
      "4 personal-training sessions",
      "Free IRONX kit bag & tee",
      "Guest passes for friends",
    ],
  },
];

// Coaches / trainers
export const trainers = [
  {
    name: "Rakib Hasan",
    role: "Head Strength Coach",
    speciality: "Powerlifting · Muscle Gain",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Khwaja Samsuddoha",
    role: "Fat-Loss Specialist",
    speciality: "HIIT · Nutrition",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tanvir Ahmed",
    role: "CrossFit Coach",
    speciality: "Conditioning · Olympic Lifts",
    image:
      "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80",
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
      "I lost 14 kg in five months at IRONX. The coaches actually built a plan around my office schedule and Bengali food habits. Life-changing.",
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
