export const galleryFilters = [
  "All",
  "Awards",
  "Leadership",
  "Events",
  "Speaking",
  "Networking",
  "CSR",
  "Innovation",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  location?: string;
  year?: string;
  category: Exclude<GalleryFilter, "All">;
  span: "featured" | "tall" | "wide" | "square";
  alt: string;
  badge?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "50-under-50",
    src: "/images/gallery/event-06.jpg",
    title: "50 Under 50 Award Ceremony",
    location: "Canada",
    year: "2023",
    category: "Awards",
    span: "featured",
    alt: "Anshul Ruhil receiving the 50 Under 50 award on stage with Maneesh Media branding",
    badge: "Featured Moment",
  },
  {
    id: "award-trophy",
    src: "/images/gallery/award-ceremony.jpeg",
    title: "Award Ceremony",
    location: "Mississauga",
    year: "2024",
    category: "Awards",
    span: "wide",
    alt: "Anshul Ruhil on stage receiving a golden trophy at a formal awards ceremony",
  },
  {
    id: "award-stage-wide",
    src: "/images/gallery/award-banner.png",
    title: "Recognition Night",
    location: "Canada",
    year: "2024",
    category: "Speaking",
    span: "wide",
    alt: "Wide stage photograph from an awards and recognition evening",
  },
  {
    id: "helen-keller",
    src: "/images/gallery/event-01.jpeg",
    title: "Community Leadership",
    location: "Toronto",
    year: "2023",
    category: "CSR",
    span: "tall",
    alt: "Anshul Ruhil with a distinguished community leader at a Helen Keller Centre related event",
  },
  {
    id: "industry-leaders",
    src: "/images/gallery/event-02.jpeg",
    title: "Meeting Industry Leaders",
    location: "Canada",
    year: "2023",
    category: "Networking",
    span: "tall",
    alt: "Anshul Ruhil networking with industry leaders at a professional reception",
  },
  {
    id: "global-networking",
    src: "/images/gallery/event-03.jpeg",
    title: "Global Networking Evening",
    location: "Toronto",
    year: "2023",
    category: "Networking",
    span: "wide",
    alt: "Anshul Ruhil with distinguished guests at a networking event",
  },
  {
    id: "partnership-dinner",
    src: "/images/gallery/event-04.jpeg",
    title: "Partnership Dinner",
    location: "Toronto",
    year: "2023",
    category: "Networking",
    span: "square",
    alt: "Anshul Ruhil dining with international partners at a networking dinner",
  },
  {
    id: "innovation-mixer",
    src: "/images/gallery/event-05.jpeg",
    title: "Innovation Mixer",
    location: "Canada",
    year: "2023",
    category: "Events",
    span: "square",
    alt: "Anshul Ruhil with a colleague at an innovation and networking mixer",
  },
  {
    id: "ai-innovation",
    src: "/images/gallery/event-05.jpeg",
    title: "AI & Technology Conversation",
    location: "Canada",
    year: "2023",
    category: "Innovation",
    span: "square",
    alt: "Anshul Ruhil discussing technology and AI innovation with industry peers",
  },
  {
    id: "executive-presence",
    src: "/images/gallery/event-07.jpeg",
    title: "Executive Presence",
    location: "Canada",
    year: "2023",
    category: "Leadership",
    span: "tall",
    alt: "Professional portrait of Anshul Ruhil in a navy blazer with crest",
  },
  {
    id: "leadership-portrait",
    src: "/images/gallery/leadership-portrait.png",
    title: "Leadership Portrait",
    location: "Mississauga",
    year: "2023",
    category: "Leadership",
    span: "square",
    alt: "Studio portrait of Anshul Ruhil, Technology Head and entrepreneur",
  },
  {
    id: "visionary-studio",
    src: "/images/gallery/leadership-studio.png",
    title: "Visionary Studio Session",
    location: "Canada",
    category: "Leadership",
    span: "tall",
    alt: "Studio photograph of Anshul Ruhil conveying executive leadership",
  },
  {
    id: "open-door-leader",
    src: "/images/gallery/leadership-about.jpg",
    title: "Open-Door Leadership",
    location: "Canada",
    category: "Leadership",
    span: "square",
    alt: "Anshul Ruhil portrait reflecting servant leadership and approachability",
  },
];

export const galleryHero = {
  src: "/images/gallery/award-ceremony.jpeg",
  title: "Gallery",
  subtitle:
    "Capturing milestones, leadership moments, global collaborations, technology innovation and entrepreneurial excellence.",
};

export const leadershipStrip = [
  { key: "Leadership", icon: "compass" },
  { key: "Innovation", icon: "sparkles" },
  { key: "Awards", icon: "award" },
  { key: "Technology", icon: "cpu" },
  { key: "Entrepreneurship", icon: "rocket" },
  { key: "Mentorship", icon: "users" },
] as const;

export const awardsHighlight = {
  image: "/images/gallery/event-06.jpg",
  imageAlt: "Anshul Ruhil receiving the 50 Under 50 Canada recognition",
  title: "Recognitions & Achievements",
  copy: "Recognized globally for leadership, innovation, entrepreneurship and transformative technology initiatives across AI, legal technology, real estate and education.",
  stats: [
    { value: "25+", label: "Years Experience" },
    { value: "90+", label: "Startups Mentored" },
    { value: "100x", label: "Business Growth" },
    { value: "Global", label: "Speaker" },
  ],
};

export const eventsCarousel = [
  {
    src: "/images/gallery/event-03.jpeg",
    title: "Leadership Forum",
    year: "2023",
    location: "Toronto",
  },
  {
    src: "/images/gallery/award-banner.png",
    title: "Awards Evening",
    year: "2024",
    location: "Mississauga",
  },
  {
    src: "/images/gallery/event-05.jpeg",
    title: "Innovation Summit",
    year: "2023",
    location: "Canada",
  },
  {
    src: "/images/gallery/event-06.jpg",
    title: "50 Under 50",
    year: "2023",
    location: "Canada",
  },
  {
    src: "/images/gallery/event-04.jpeg",
    title: "Partner Conversations",
    year: "2023",
    location: "Toronto",
  },
];

export const networkingGallery = [
  {
    src: "/images/gallery/event-01.jpeg",
    title: "Community Collaboration",
    location: "Toronto",
    flag: "🇨🇦",
  },
  {
    src: "/images/gallery/event-02.jpeg",
    title: "Industry Leaders",
    location: "Canada",
    flag: "🇨🇦",
  },
  {
    src: "/images/gallery/event-03.jpeg",
    title: "Cross-Border Dialogue",
    location: "Toronto",
    flag: "🇨🇦",
  },
  {
    src: "/images/gallery/event-04.jpeg",
    title: "Global Partnerships",
    location: "Canada",
    flag: "🇨🇦",
  },
];

export const csrGallery = [
  {
    src: "/images/gallery/event-01.jpeg",
    title: "Helen Keller Centre Community",
    copy: "Standing with community leaders in support of accessibility and inclusive impact.",
  },
  {
    src: "/images/gallery/event-03.jpeg",
    title: "Canada–India Cultural Bridges",
    copy: "Building relationships that strengthen civic, cultural, and technological exchange.",
  },
];

export const galleryCta = {
  title: "Every milestone reflects a journey of innovation, leadership and meaningful impact.",
  button: "Connect with Anshul Ruhil",
  href: "/#contact",
};
