// =====================================================================
//  YOUR PORTFOLIO CONTENT — edit everything in this one file.
//  Photo: put your picture at  public/profile.jpg
// =====================================================================

export const profile = {
  name: 'James Benedict V. Nalcot',
  initials: 'JN',
  title: 'BS Information Technology · 4th year',
  school: 'STI College – Alabang',
  location: 'STI College – Alabang',
  photo: 'profile.jpg', // file inside /public
  intro:
    'I am a BSIT student who enjoys web development, teamwork, and learning new things.',
  objective:
    'To gain real web development experience and grow as an IT professional.',
  immersionGoals: [
    'Apply my web development skills.',
    'Learn from a real IT team.',
    'Improve my communication skills.',
    'Practice professionalism at work.',
    'Complete my OJT hours successfully.',
  ],
}

export const resume = {
  personal: [
    ['Full name', 'James Benedict V. Nalcot'],
    ['Date of birth', 'July 24, 2005'],
    ['Age', '21'],
    ['Nationality', 'Filipino'],
    ['Address', 'Barangay BF Homes, Parañaque City'],
    ['Languages', 'English, Tagalog'],
    ['Mobile', '09982808349'],
    ['Email', 'vicentejam385@gmail.com'],
  ],
  education: [
    {
      level: 'Tertiary — BS Information Technology',
      school: 'STI College – Alabang',
      detail: '',
      years: '2023 – Present',
      note: '',
    },
    {
      level: 'Senior High School',
      school: 'Parañaque National High School – Main',
      detail: '',
      years: '2021 – 2023',
      note: '',
    },
    {
      level: 'Junior High School',
      school: 'San Antonio National High School, Parañaque',
      detail: '',
      years: '2017 – 2021',
      note: '',
    },
  ],
  skills: ['HTML & CSS', 'JavaScript', 'PHP', 'Java', 'MySQL / Databases', 'Computer Hardware', 'Networking Basics', 'MS Office', 'Leadership', 'Teamwork', 'Problem-Solving', 'Willingness to Learn'],
  achievements: [
    'Group Leader and Developer — SkillConnect capstone system (2026 – present)',
    
    'TESDA Electrical Installation and Maintenance NC II — JDVP Scholar (2023)',
  ],
  certifications: [
    'Java Fundamentals — Oracle Academy (June 2024)',
    'Electrical Installation and Maintenance NC II, 320 hours — TESDA / ACTS (June 2023)',
    'Cyber Security Seminar, Certificate of Participation — STI College Alabang Computer Society (October 2024)',
  ],
}

// level: 1–5 (1 Beginner, 2 Developing, 3 Proficient, 4 Advanced, 5 Expert)
// These levels are your own self-assessment — adjust them honestly.
export const skills = {
  soft: [
    { name: 'Leadership', level: 4, evidence: 'Lead my capstone group: assign tasks, set deadlines and keep the project on track.' },
    { name: 'Teamwork', level: 4, evidence: 'Work with my group to build SkillConnect, our capstone system.' },
    { name: 'Problem-solving', level: 3, evidence: 'Find and fix errors in our systems before our defense.' },
    { name: 'Willingness to learn', level: 4, evidence: 'Took extra courses like Java Fundamentals and TESDA NC II.' },
    { name: 'Responsibility', level: 4, evidence: 'Finish my tasks and school requirements on time.' },
    { name: 'Time management', level: 3, evidence: 'Balance coding, studies and group work.' },
    { name: 'Adaptability', level: 3, evidence: 'Learn new tools and languages when a project needs them.' },
    { name: 'Communication', level: 3, evidence: 'Share ideas with my group and present our projects.' },
  ],
  technical: [
    { name: 'Web development', level: 3, evidence: 'Build web pages with HTML, CSS and JavaScript.' },
    { name: 'PHP & MySQL', level: 2, evidence: 'Basic back-end coding and databases for web systems.' },
    { name: 'Java programming', level: 3, evidence: 'Completed Oracle Academy Java Fundamentals (2024).' },
    { name: 'Database management', level: 2, evidence: 'Create tables and manage data for school projects.' },
    { name: 'Computer hardware', level: 3, evidence: 'Assemble, set up and troubleshoot computers.' },
    { name: 'Networking basics', level: 2, evidence: 'Basic LAN setup and network concepts from BSIT subjects.' },
    { name: 'Electrical installation', level: 3, evidence: 'TESDA EIM NC II: 320 hours of wiring and installation training.' },
    { name: 'Digital literacy', level: 4, evidence: 'Comfortable with MS Office, Google Workspace and online tools.' },
  ],
}

export const achievements = [
  {
    type: 'certificate',
    title: 'Java Fundamentals',
    org: 'Oracle Academy · Award of Course Completion',
    date: 'June 2024',
    image: 'certificates/java-fundamentals.jpg',
  },
  {
    type: 'training',
    title: 'Electrical Installation and Maintenance NC II (320 hours)',
    org: 'TESDA · DepEd · ACTS Colleges (JDVP Scholar)',
    date: 'June 2023',
    image: 'certificates/nc2-eim.jpg',
  },
  {
    type: 'seminar',
    title: 'Cyber Security Seminar',
    org: 'STI College Alabang · Computer Society · Certificate of Participation',
    date: 'October 2024',
    image: 'certificates/cybersecurity.jpg',
  },
]

export const projects = [
  {
    title: 'SkillConnect',
    category: 'School project',
    year: '2026 – Present',
    description: 'Our capstone system for Emerald Builders. Clients can book skilled construction workers, manage job orders, and track every site visit from first inquiry to project handover. I lead the group and help develop the system.',
    tools: [],
    role: 'Group Leader and Developer',
    link: 'https://emerald-skillconnect.com',
    image: 'projects/skillconnect.jpg',
  },
  {
    title: 'Radio 2.0',
    category: 'Personal project',
    year: '',
    description: 'A web radio player. Choose a country, pick a station, and listen to live radio online with simple Play and Stop buttons.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    role: 'Developer',
    link: 'https://vicentejam385-svg.github.io/Radio2.0/',
    code: 'https://github.com/vicentejam385-svg/Radio2.0',
    image: 'projects/radio2.jpg',
  },
  {
    title: 'Recipe Finder Pro',
    category: 'Personal project',
    year: '',
    description: 'A recipe website with a search bar and flip cards. Search for a dish, then click a card to flip it and see the recipe.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    role: 'Developer',
    link: 'https://vicentejam385-svg.github.io/Recipe/',
    code: 'https://github.com/vicentejam385-svg/Recipe',
    image: 'projects/recipe.jpg',
  },
  {
    title: 'Quote Speaker',
    category: 'Personal project',
    year: '',
    description: 'A text-to-speech web app that reads quotes out loud. Type any text, choose a voice, and use Speak, Pause, Resume, Stop and Repeat controls.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    role: 'Developer',
    link: 'https://vicentejam385-svg.github.io/Qoute/',
    code: 'https://github.com/vicentejam385-svg/Qoute',
    image: 'projects/quote.jpg',
  },
]

// ---------- Company & HTE evaluation ----------
// The 3 companies below are EXAMPLES — replace them with your real target companies.
// weight in percent (must add up to 100). Scores are 1–5.
export const criteria = [
  { key: 'relevance', name: 'Relevance to course', weight: 30, description: 'Tasks match BSIT and web development skills.' },
  { key: 'learning', name: 'Learning & mentorship', weight: 25, description: 'Assigned supervisor, training plan, exposure to real projects.' },
  { key: 'environment', name: 'Work environment & safety', weight: 15, description: 'Professional, safe and respectful workplace with clear policies.' },
  { key: 'location', name: 'Location & accessibility', weight: 15, description: 'Travel time and cost from home; safe commute.' },
  { key: 'reputation', name: 'Company reputation', weight: 15, description: 'Track record, reviews, partnership with the school.' },
]

export const companies = [
  {
    name: 'Amadeus IT Group',
    industry: 'Travel technology / software development',
    address: 'Bonifacio Global City, Taguig',
    why: 'Global travel-tech company that hires Software Developer Interns to build and support airline software.',
    scores: { relevance: 4, learning: 5, environment: 5, location: 4, reputation: 5 },
    pros: ['Real software development work', 'Structured 500-hour internship', 'Global company'],
    cons: ['Very competitive', 'Prefers strong programming skills'],
  },
  {
    name: 'Accenture Philippines',
    industry: 'IT services and consulting',
    address: 'Filinvest, Alabang (also BGC, Taguig)',
    why: 'One of the largest IT companies in the country, with internship and Technology Academy programs for 4th-year tech students.',
    scores: { relevance: 4, learning: 4, environment: 4, location: 5, reputation: 5 },
    pros: ['Office near STI Alabang', 'Strong training programs', 'Well-known employer'],
    cons: ['Large company, tasks may vary', 'Program slots are limited'],
  },
  {
    name: 'Alliance Software, Inc.',
    industry: 'Software development outsourcing',
    address: 'Manila office, San Juan City',
    why: 'Filipino software company whose student program can be credited as OJT and focuses on building web-based systems.',
    scores: { relevance: 5, learning: 4, environment: 4, location: 2, reputation: 4 },
    pros: ['Web development focus', 'Program can count as OJT', 'Path to a full-time job'],
    cons: ['Long commute from Parañaque'],
  },
]

export const recommendationReason =
  'Northwind Digital Solutions offers the closest match to my BSIT course and my goal of working in web development, and it has the strongest mentorship. Although the commute is longer, the chance to work on real web projects with an assigned mentor outweighs the extra travel time. Bayanihan Data Services is my second choice because of its excellent training and work environment.'

// ---------- Reflection ----------
export const reflection = [
  'Preparing for Work Immersion helped me see my future more clearly. Before, I only knew that I liked computers. Now I know that I want to be a web developer.',
  'Making this portfolio helped me look back at what I have done. I am the leader and developer of our capstone project, SkillConnect. I also made my own websites, like Radio 2.0, Recipe Finder Pro, and Quote Speaker. These projects showed me that I enjoy building websites and solving problems. My certificates in Java, cyber security, and electrical installation also showed me that I like to learn new things.',
  'I also learned what I still need to improve. I am sometimes shy, and I do not always ask questions right away. In a real company, I must speak up, ask for help, and share my ideas. I also need to keep learning new programming languages and tools, because technology changes fast.',
  'Looking for companies taught me a lot too. I learned to choose a company by checking if the work matches my course, if I can learn there, and if it is safe and easy to travel to. I should not choose a company only because it is famous.',
  'Most of all, I learned about my responsibilities as a future IT worker. I must come to work on time, follow the rules of the company, and respect my supervisors and co-workers. I must keep company data private and safe. When I make a mistake, I must say it, learn from it, and fix it.',
  'I know I still have a lot to learn. But I am ready to work hard, be honest, and do my best during my Work Immersion.',
]

export const contact = {
  email: 'vicentejam385@gmail.com',
  phone: '09982808349',
  facebook: 'https://www.facebook.com/benedict.nalcot',
  instagram: 'https://www.instagram.com/bndct_jamm',
  github: 'https://github.com/vicentejam385-svg',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile'
  address: '',
}


// ---------- Sources & credits (required: cite all sources) ----------
export const sources = [
  'Icons: Lucide Icons (lucide.dev), ISC License.',
  'Fonts: Space Grotesk and Inter, Google Fonts (fonts.google.com), SIL Open Font License.',
  'Profile photo and certificate images: personal photos and documents of the author.',
  'Company information: official websites and Facebook pages of each company, accessed November 2026.',
]