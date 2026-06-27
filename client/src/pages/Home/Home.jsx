import { useNavigate } from 'react-router-dom';
import { personal, stats, exploreCards } from '../../data/personal.js';
import { Button, Badge } from '../../components/ui/index.js';
import { Icons } from '../../components/ui/Icons.jsx';
import useTyping from '../../hooks/useTyping.js';
import './Home.css';

const ROLES = [
  'MERN Developer',
  'Full Stack Engineer',
  'React Enthusiast',
  'Next.js Developer',
  'API Architect',
];

const ACCENT_MAP = {
  accent:  { bg: 'var(--clr-accent-dim)',  border: 'rgba(91,110,245,0.25)',  arrow: 'var(--clr-accent)' },
  teal:    { bg: 'var(--clr-teal-dim)',    border: 'rgba(16,217,196,0.25)',  arrow: 'var(--clr-teal)'   },
  neutral: { bg: 'rgba(255,255,255,0.03)', border: 'var(--clr-border)',      arrow: 'var(--clr-text-2)' },
};

const Home = () => {
  const navigate  = useNavigate();
  const typingRef = useTyping(ROLES);

  return (
    <div className="home">
      <div className="home__container">

        {/* ── Hero ── */}
        <section className="hero">
          <Badge color="teal" className="reveal">
            <span className="hero__pulse" /> Open to Internships
          </Badge>

          <h1 className="hero__name reveal delay-1">
            {personal.headline}.
          </h1>

          <div className="hero__role reveal delay-2">
            <span className="hero__role-prefix">I build&nbsp;</span>
            <span className="hero__role-typed" ref={typingRef} />
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__bio reveal delay-3">
            {personal.bio[0]}
          </p>

          <div className="hero__actions reveal delay-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/projects')}
              iconRight={Icons.arrow}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              iconLeft={Icons.download}
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="hero__stats reveal delay-5">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="home__divider reveal" />

        {/* ── Explore ── */}
        <section className="explore">
          <p className="explore__label reveal">Pick what you want to explore</p>
          <div className="explore__grid">
            {exploreCards.map((c, i) => {
              const style = ACCENT_MAP[c.accent] || ACCENT_MAP.neutral;
              return (
                <button
                  key={c.path}
                  className={`explore__card reveal delay-${i + 1}`}
                  style={{ background: style.bg, borderColor: style.border }}
                  onClick={() => navigate(c.path)}
                >
                  <div className="explore__card-body">
                    <span className="explore__card-title">{c.label}</span>
                    <p className="explore__card-desc">{c.desc}</p>
                  </div>
                  <span className="explore__card-arrow" style={{ color: style.arrow }}>
                    {Icons.arrow}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
