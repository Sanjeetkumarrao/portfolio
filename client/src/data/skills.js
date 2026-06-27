/* ============================================================
   SKILLS & ACHIEVEMENTS DATA
   ============================================================ */

export const skillCategories = [
  {
    id:     'frontend',
    label:  'Frontend',
    skills: [
      'React.js', 'Next.js', 'JavaScript ES6+',
      'HTML5', 'CSS3', 'Vite',
    ],
  },
  {
    id:     'backend',
    label:  'Backend & APIs',
    skills: [
      'Node.js', 'Express.js', 'REST APIs',
      'Socket.io', 'Nodemailer', 'JWT / bcrypt',
    ],
  },
  {
    id:     'database',
    label:  'Database & ORM',
    skills: [
      'MongoDB', 'Mongoose', 'Prisma',
      'TiDB Cloud', 'Cloudinary',
    ],
  },
  {
    id:     'tools',
    label:  'Tools & DevOps',
    skills: [
      'Git & GitHub', 'Vercel', 'Render',
      'Netlify', 'Postman', 'VS Code',
    ],
  },
];

export const achievements = [
  {
    id:      'sih-2025',
    title:   'SIH 2025 — Internal Hackathon',
    desc:    'Participated in Smart India Hackathon 2025 at the university-level internal round.',
    year:    '2025',
  },
  {
    id:      'reno-assignment',
    title:   'Reno Platforms Assignment',
    desc:    'Successfully completed a full-stack internship assignment — Notice Board CRUD app in Next.js + Prisma + TiDB Cloud, deployed on Vercel. Learned all three technologies from scratch.',
    year:    '2024',
  },
  /* Add more achievements as you earn them */
];

export const education = [
  {
    id:        'btech',
    degree:    'Bachelor of Technology',
    field:     'Computer Science & Engineering',
    institute: 'University of Lucknow',
    period:    '2023 — 2027',
    status:    'Currently Pursuing',
  },
];
