/* ============================================================
   PERSONAL DATA
   Update this file to reflect your information everywhere.
   ============================================================ */

export const personal = {
  name:      'Sanjeet Kumar Rao',
  initials:  'SKR',
  tagline:   'MERN Stack Developer',
  headline:  'Hi, I\'m Sanjeet',
  bio: [
    'Full Stack MERN developer and 2nd-year B.Tech CSE student at University of Lucknow. I build production-ready web applications — not side projects that never ship.',
    'I focus on clean architecture, real-time features, and scalable backends. Every project here is live and deployed.',
  ],
  location:  'Lucknow, Uttar Pradesh, India',
  email:     'sanjeetkumarbharti2018@gmail.com',         // ← update this
  resumeUrl: '[your-google-drive-resume-url]',  // ← update this
};

/* Social links */
export const socials = [
  {
    id:    'github',
    label: 'GitHub',
    url:   'https://github.com/Sanjeetkumarrao', // ← update
    icon:  'github',
  },
  {
    id:    'linkedin',
    label: 'LinkedIn',
    url:   'https://linkedin.com/in/sanjeet-kumar-rao', // ← update
    icon:  'linkedin',
  },
  {
    id:    'twitter',
    label: 'Twitter / X',
    url:   'https://twitter.com/sanjeetrao_0712', // ← update (optional)
    icon:  'twitter',
  },
  {
    id:    'email',
    label: 'Email',
    url:   'mailto:sanjeetkumarbharti2018@gmail.com',       // ← update
    icon:  'mail',
  },
];

/* Hero stats */
export const stats = [
  { value: '3+',   label: 'Projects Shipped' },
  { value: '2yr',  label: 'Dev Experience'   },
  { value: 'MERN', label: 'Core Stack'       },
];

/* Navbar pages */
export const navLinks = [
  { label: 'Home',       path: '/'           },
  { label: 'About',      path: '/about'      },
  { label: 'Projects',   path: '/projects'   },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact',    path: '/contact'    },
];

/* Home explore cards */
export const exploreCards = [
  {
    label:    'Projects',
    desc:     'Full-stack apps built end-to-end and deployed to production.',
    path:     '/projects',
    accent:   'accent',
  },
  {
    label:    'Experience',
    desc:     'Internship assignments and achievements from my dev journey.',
    path:     '/experience',
    accent:   'teal',
  },
  {
    label:    'About',
    desc:     'My tech stack, education, and the tools I build with.',
    path:     '/about',
    accent:   'neutral',
  },
  {
    label:    'Contact',
    desc:     'Open for internships, collaborations, and freelance work.',
    path:     '/contact',
    accent:   'neutral',
  },
];
