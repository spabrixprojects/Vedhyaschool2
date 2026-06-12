export type Staff = {
  name: string;
  role: string;
  pillar: "Dance" | "Music" | "Wellness" | "Production";
  category: string;
  credentials: string[];
  bio: string;
  image: string;
  videoUrl?: string;
};

export const STAFF: Staff[] = [
  {
    name: "Anu P. Padmanabhan",
    role: "Vocal Music Teacher",
    pillar: "Music",
    category: "Indian Carnatic music",
    credentials: ["M.A. Music", "Leading Music Teacher at Vedhya School of Arts and Wellness", "22 years of professional experience as a music teacher"],
    bio: "Experienced Carnatic music teacher with a deep passion for Indian classical music and traditional vocal training. Dedicated to nurturing students with strong foundational techniques, melodic understanding, and expressive performance skills in Carnatic music.",
    image: "/Anu P. Padmanabhan.webp",
    videoUrl: "https://www.youtube.com/embed/3Z_msT5tlvs"
  },
  {
    name: "Aswin R",
    role: "Carnatic Violin Tutor",
    pillar: "Music",
    category: "Carnatic Violin",
    credentials: ["BA Music | MA Music | MA Violin", "National Level Winner", "10+ Years of Teaching Experience", "Students from Different Countries"],
    bio: "An experienced and passionate violin mentor at Vedhya School of Arts and Wellness, dedicated to nurturing strong musical foundations through professional training, performance-oriented learning, and personalized guidance. Aswin R helps students develop technique, creativity, confidence, and a deep understanding of Carnatic music traditions.",
    image: "/Aswin R.webp"
  },
  {
    name: "Rahul Raj",
    role: "Mridangam Tutor",
    pillar: "Music",
    category: "Mridangam",
    credentials: ["BPA Mridangam (2nd Rank)", "Sree Swathi Thirunal Govt. Music College, Trivandrum — University of Kerala", "5+ years of teaching experience", "Students from different countries", "Performing Artist"],
    bio: "A skilled and dedicated mentor at Vedhya School of Arts and Wellness, helping students master rhythm, technique, and the beauty of traditional percussion music.",
    image: "/Rahul Raj.webp"
  },
  {
    name: "Emil Roy",
    role: "Music Producer | Composer | Audio Production Specialist",
    pillar: "Production",
    category: "Music Production",
    credentials: ["5+ years of experience as a Music Producer", "Founder of HOME TRACK AUDIO PRODUCTION", "Worked with various music directors and film directors", "DAW Workflow"],
    bio: "Passionate music producer with a creative approach to composition, recording, mixing, and mastering. Dedicated to delivering professional-quality audio productions across different music genres with modern production techniques and artistic excellence.",
    image: "/Emil roy.webp"
  },
  {
    name: "ARYAMOL N VENU",
    role: "Classical Dancer & Choreographer",
    pillar: "Dance",
    category: "Bharatanatyam",
    credentials: ["M.A. Bharatanatyam", "10+ years of experience in the field of Bharatanatyam"],
    bio: "Classical Dancer & Choreographer with 10+ years of experience in the field of Bharatanatyam. Performer, educator, and choreographer specialized in classical dance training and stage performances.",
    image: "/ARYAMOL N VENU.webp"
  },
  {
    name: "ARJUN KRISHNAN Nair",
    role: "Classical Dancer | Choreographer | Dance Educator",
    pillar: "Dance",
    category: "Kathak",
    credentials: ["18+ years of training and nearly 10 years of teaching experience", "National Performer & Reality Show Artist", "Online Dance Educator", "Specialized in Kathak & Fusion Kathak", "Fluent in English, Hindi & Malayalam"],
    bio: "Specialized in Kathak, Fusion Kathak, and Bharatanatyam with 18+ years of training and nearly 10 years of teaching experience. Arjun is a national performer, reality show artist, and online dance educator based in Maharashtra, focused on technique, expression, rhythm, and performance artistry.",
    image: "/ARJUN KRISHNAN Nair.webp"
  },
  {
    name: "Jinesh K J",
    role: "Classical Dancer | Choreographer | Educator",
    pillar: "Dance",
    category: "Kuchipudi & Mohiniyattam",
    credentials: ["Diploma and Post Diploma in Bharatanatyam", "A+ Grade Kuchipudi Artist", "10+ years of experience in classical dance training and performance", "National & International Performer", "Pursuing advanced studies in Kerala Natanam for the past 4 years"],
    bio: "Specialized in Kuchipudi and Mohiniyattam with 10+ years of experience in classical dance training and performance. Jinesh is an A+ Grade Kuchipudi Artist, classical dance choreographer, performer, and dance educator currently pursuing advanced studies in Kerala Natanam.",
    image: "/Jinesh K J.webp"
  },
  {
    name: "GAYATRI MADHUSUDHANAN",
    role: "Hip Hop & Western Fusion Instructor | Choreographer",
    pillar: "Dance",
    category: "Hip Hop & Western Fusion",
    credentials: ["10+ years of teaching experience in Hiphop and western dance", "16 years of experience in Hip Hop Dance and Western fusion", "Leading Hip Hop Instructor at Vedhya school of Arts and Wellness", "Specialized in Urban, Commercial & Fusion Choreography", "Expert in rhythm, movement, stage presence & performance training"],
    bio: "Professional instructor with 16 years of experience in Hip Hop Dance and Western fusion. Gayatri is the leading Hip Hop Instructor at Vedhya school of Arts and Wellness, blending classical precision with modern Western dance styles.",
    image: "/GAYATRI MADHUSUDHANAN.webp"
  },
  {
    name: "Kalamandalam Abin Babu",
    role: "Kathakali Artist | Performer | Educator",
    pillar: "Dance",
    category: "Kathakali",
    credentials: ["14 years of dedicated study in Kathakali at Kerala Kalamandalam", "M.A in Kathakali", "6+ years of teaching experience in Kathakali", "Leading Kathakali tutor at Vedhya School of Arts and Wellness", "Trained many students from different countries"],
    bio: "A leading Kathakali tutor at Vedhya School of Arts and Wellness. Kalamandalam Abin Babu studied for 14 years at Kerala Kalamandalam and is a performer and passionate educator in traditional Kerala art forms.",
    image: "/Kalamandalam Abin Babu.webp"
  },
  {
    name: "Remya M R",
    role: "Personal Counselling & Mental Wellness",
    pillar: "Wellness",
    category: "Counselling",
    credentials: ["M.Com | MSW", "9 Years of Experience in Personal Counselling"],
    bio: "A compassionate and experienced counsellor with strong skills in mental wellness guidance, emotional support, and personal development. As the leading counsellor at Vedhya School of Arts and Wellness, Remya M R is dedicated to helping individuals achieve better mental health, emotional balance, and positive life transformation.",
    image: "/Remya M R.webp"
  },
  {
    name: "Rosily Shaji",
    role: "Yoga Instructor",
    pillar: "Wellness",
    category: "Yoga",
    credentials: ["MSc Yoga", "18+ Years of Experience", "Clients from Different Countries"],
    bio: "An experienced and dedicated yoga instructor at Vedhya School of Arts and Wellness, committed to guiding individuals toward physical fitness, mental wellness, and a balanced lifestyle through professional yoga training and personalized wellness sessions.",
    image: "/Rosily Shaji.webp"
  }
];

export const PROGRAMS = [
  {
    number: "01",
    title: "Dance",
    tagline: "Movement as memory",
    description:
      "Ten disciplines spanning the geometric precision of Bharatanatyam to the urban pulse of Hip-Hop — taught with reverence for lineage and openness to expression.",
    disciplines: [
      "Bharatanatyam",
      "Kathak",
      "Kathakali",
      "Mohiniyattam",
      "Kuchipudi",
      "Folk dance",
      "Bollywood Dance",
      "Contemporary Dance",
      "Hip-Hop",
      "Freestyle",
    ],
  },
  {
    number: "02",
    title: "Wellness",
    tagline: "The body as temple",
    description:
      "Practical, personalised guidance that returns the body and mind to balance — through asana, conditioning, and one-to-one counselling that honours the individual.",
    disciplines: ["Yoga", "Home workout", "Personal counselling"],
  },
  {
    number: "03",
    title: "Music",
    tagline: "Sound as devotion",
    description:
      "Classical voice, film and lalithaganam alongside instruments rooted in tradition and the modern stage. From mridangam vibration to violin gamaka.",
    disciplines: [
      "Classical music / film songs / lalithaganam",
      "instruments",
      "Keyboard / piano",
      "Mridangam / kanjira",
      "Carnatic violin",
      "Guitar",
    ],
  },
];
