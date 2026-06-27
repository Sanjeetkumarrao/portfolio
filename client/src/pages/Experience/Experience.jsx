import { workExperience, educationTimeline } from '../../data/experience.js';
import { SectionHeader, Badge, Tag } from '../../components/ui/index.js';
import './Experience.css';

const TimelineItem = ({ item, colorClass, index }) => (
  <div className={`tl-item reveal delay-${index + 1}`}>
    <div className={`tl-item__dot tl-item__dot--${colorClass}`} />
    <div className="tl-item__card">
      <div className="tl-item__top">
        <Badge color={colorClass === 'accent' ? 'accent' : 'teal'}>{item.type}</Badge>
        <span className="tl-item__period">{item.period}</span>
      </div>
      <h3 className="tl-item__role">{item.role}</h3>
      <p className="tl-item__company">
        <span className={`tl-item__company-name tl-item__company-name--${colorClass}`}>
          {item.company}
        </span>
        &nbsp;·&nbsp;{item.location}
      </p>
      <p className="tl-item__desc">{item.desc}</p>
      {item.highlights && (
        <ul className="tl-item__highlights">
          {item.highlights.map((h) => (
            <li key={h}>
              <span className="tl-item__bullet" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="tl-item__tags">
        {item.stack.map((s) => <Tag key={s}>{s}</Tag>)}
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="experience page-container">

    <SectionHeader
      eyebrow="Experience"
      title="My Journey"
      subtitle="Real work, real deliverables — every entry here involved building something and shipping it."
      className="reveal"
    />

    {/* Work */}
    <section className="exp__section">
      <h2 className="exp__section-label reveal">Work & Assignments</h2>
      <div className="tl">
        <div className="tl__line" />
        {workExperience.map((item, i) => (
          <TimelineItem key={item.id} item={item} colorClass="accent" index={i} />
        ))}
      </div>
    </section>

    {/* Education */}
    <section className="exp__section">
      <h2 className="exp__section-label reveal">Education</h2>
      <div className="tl">
        <div className="tl__line tl__line--teal" />
        {educationTimeline.map((item, i) => (
          <TimelineItem key={item.id} item={item} colorClass="teal" index={i} />
        ))}
      </div>
    </section>

    {/* Open card */}
    <div className="exp__open reveal">
      <div className="exp__open-icon">🚀</div>
      <div className="exp__open-body">
        <h3>Your company, next?</h3>
        <p>
          Actively looking for internships where I can contribute to real products and
          level up fast. Remote or on-site, Lucknow and beyond.
        </p>
      </div>
      <a href="/contact" className="exp__open-cta">
        Let's talk
      </a>
    </div>

  </div>
);

export default Experience;
