/* ============================================================
   PROJECTS DATA
   Add / remove projects here. UI updates automatically.
   ============================================================ */

export const featuredProjects = [
  {
    id:       'minitube',
    title:    'MiniTube',
    subtitle: 'YouTube-style Video Platform',
    desc:     'A full-featured video streaming platform with JWT authentication, video upload & delivery via Cloudinary, and complex MongoDB aggregation pipelines for view counts, likes, and channel analytics.',
    tech:     ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    features: ['JWT Auth', 'Video Upload', 'MongoDB Aggregation', 'REST API'],
    github:   'https://github.com/[your-username]/minitube', // ← update
    live:     '#',                                            // ← update
    featured: true,
  },
  {
    id:       'echochat',
    title:    'EchoChat',
    subtitle: 'Real-time Chat Application',
    desc:     'WhatsApp-style messaging built on Socket.io with live typing indicators, message read receipts, group chat rooms, and persistent history — all running on a single Node.js process.',
    tech:     ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    features: ['Real-time Messaging', 'Typing Indicators', 'Read Receipts', 'Group Chat'],
    github:   'https://github.com/[your-username]/echochat', // ← update
    live:     '#',                                            // ← update
    featured: true,
  },
  {
    id:       'taskflow',
    title:    'TaskFlow',
    subtitle: 'Project Management Tool',
    desc:     'Trello-inspired task manager with email verification via Nodemailer, board/card management, and full deployment — Express backend on Render, React frontend on Netlify.',
    tech:     ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer'],
    features: ['Email Verification', 'Task Boards', 'Full Deployment'],
    github:   'https://github.com/[your-username]/taskflow', // ← update
    live:     '#',                                            // ← update
    featured: true,
  },
];

/* Add more projects here — they'll show in "Additional Projects" */
export const additionalProjects = [
  /* Example:
  {
    id:     'project-id',
    title:  'Project Name',
    desc:   'Short description.',
    tech:   ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    live:   '#',
  },
  */
];
