# Sanjeet Kumar Rao — Portfolio v2

Multi-page MERN portfolio with React Router, reusable component system, and a data-driven architecture.

## Stack
| Layer    | Tech                                         |
|----------|----------------------------------------------|
| Frontend | React 18, Vite, React Router v6, CSS Modules |
| Backend  | Node.js, Express.js                          |
| Database | MongoDB + Mongoose                           |

## Project Structure
```
portfolio-v2/
├── client/
│   └── src/
│       ├── components/
│       │   ├── ui/         ← Button, Badge, Tag, Card, SectionHeader, Icons
│       │   └── layout/     ← Navbar, Sidebar, Footer, Layout
│       ├── data/           ← ✏️  EDIT HERE — personal, projects, skills, experience
│       ├── hooks/          ← useReveal, useTyping
│       ├── pages/          ← Home, About, Projects, Experience, Contact, NotFound
│       └── styles/         ← tokens, global, page
└── server/
    ├── config/db.js
    ├── models/Contact.js
    ├── controllers/
    └── routes/
```

## To Customise — Edit These 4 Files Only
| File                        | What to update                         |
|-----------------------------|----------------------------------------|
| `src/data/personal.js`      | Name, bio, email, resume URL, socials  |
| `src/data/projects.js`      | Project titles, desc, links            |
| `src/data/skills.js`        | Skills, achievements, education        |
| `src/data/experience.js`    | Work history, internships              |

## Quick Start

### Server
```bash
cd server
cp .env.example .env   # fill MONGO_URI
npm install
npm run dev            # http://localhost:5000
```

### Client
```bash
cd client
npm install
npm run dev            # http://localhost:5173
```

## Deploy
- **Client** → Vercel (`npm run build` → deploy `dist/`)
- **Server** → Render (env vars: MONGO_URI, CLIENT_URL, NODE_ENV=production)

---
Built by **Sanjeet Kumar Rao** · University of Lucknow, B.Tech CSE 2023–2027
