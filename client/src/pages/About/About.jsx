import { skillCategories, achievements, education } from '../../data/skills.js';
import { personal } from '../../data/personal.js';
import { SectionHeader, Card, Tag, Badge } from '../../components/ui/index.js';
import './About.css';

const About = () => (
  <div className="about page-container">

    <SectionHeader
      eyebrow="About"
      title="Who I am"
      subtitle={`${personal.bio[0]} ${personal.bio[1]}`}
      className="reveal"
    />

    {/* ── Education ── */}
    <section className="about__section">
      <h2 className="about__section-title reveal">Education</h2>
      {education.map((e) => (
        <Card key={e.id} padded hover className="about__edu-card reveal delay-1">
          <div className="about__edu-top">
            <div>
              <p className="about__edu-degree">{e.degree}</p>
              <p className="about__edu-field">{e.field}</p>
            </div>
            <Badge color="teal">{e.status}</Badge>
          </div>
          <p className="about__edu-inst">{e.institute}</p>
          <p className="about__edu-period">{e.period}</p>
        </Card>
      ))}
    </section>

    {/* ── Skills ── */}
    <section className="about__section">
      <h2 className="about__section-title reveal">Tech Stack</h2>
      <div className="about__skills-grid">
        {skillCategories.map((cat, i) => (
          <Card key={cat.id} padded className={`reveal delay-${i + 1}`}>
            <p
              className="about__skill-cat"
              style={{ color: ['var(--clr-accent)','var(--clr-teal)','#e879a0','#f59e0b'][i] }}
            >
              {cat.label}
            </p>
            <div className="about__skill-tags">
              {cat.skills.map((s) => <Tag key={s}>{s}</Tag>)}
            </div>
          </Card>
        ))}
      </div>
    </section>

    {/* ── Achievements ── */}
    <section className="about__section">
      <h2 className="about__section-title reveal">Achievements</h2>
      <div className="about__achievements">
        {achievements.map((a, i) => (
          <Card key={a.id} padded hover accent="accent" className={`reveal delay-${i + 1}`}>
            <div className="about__ach-top">
              <span className="about__ach-title">{a.title}</span>
              <span className="about__ach-year">{a.year}</span>
            </div>
            <p className="about__ach-desc">{a.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* ── Code snippet card ── */}
    <section className="about__section reveal">
      <div className="about__code-card">
        <div className="about__code-header">
          <div className="about__dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <span className="about__code-filename">developer.js</span>
        </div>
        <pre className="about__code-body"><code>
<span className="ck">const</span> <span className="cv">developer</span> <span className="co">=</span> {'{'}
{'  '}<span className="ca">name</span><span className="co">:</span>     <span className="cs">"{personal.name}"</span>,
{'  '}<span className="ca">role</span><span className="co">:</span>     <span className="cs">"MERN Stack Developer"</span>,
{'  '}<span className="ca">uni</span><span className="co">:</span>      <span className="cs">"University of Lucknow"</span>,
{'  '}<span className="ca">year</span><span className="co">:</span>     <span className="cs">"2nd Year B.Tech CSE"</span>,
{'  '}<span className="ca">stack</span><span className="co">:</span>    <span className="cs">["React","Node","Express","MongoDB"]</span>,
{'  '}<span className="ca">status</span><span className="co">:</span>   <span className="cs">"Open to Internships"</span>,
{'  '}<span className="ca">learning</span><span className="co">:</span> <span className="cs">["System Design","AI Tools"]</span>,
{'}'}

<span className="cc">// Always building something 🚀</span>
        </code></pre>
      </div>
    </section>

  </div>
);

export default About;
