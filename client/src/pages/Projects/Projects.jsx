import { featuredProjects, additionalProjects } from '../../data/projects.js';
import { SectionHeader, Card, Tag, Badge } from '../../components/ui/index.js';
import { Icons } from '../../components/ui/Icons.jsx';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
  <Card hover className={`project-card reveal delay-${(index % 3) + 1}`}>
    <div className="project-card__header">
      <div className="project-card__meta">
        {project.featured && <Badge color="accent">Featured</Badge>}
      </div>
      <div className="project-card__actions">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__icon-btn"
          title="GitHub"
          aria-label="View on GitHub"
        >
          {Icons.github}
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="project-card__icon-btn"
          title="Live Demo"
          aria-label="Live Demo"
        >
          {Icons.external}
        </a>
      </div>
    </div>

    <h3 className="project-card__title">{project.title}</h3>
    <p className="project-card__subtitle">{project.subtitle}</p>
    <p className="project-card__desc">{project.desc}</p>

    {project.features && (
      <ul className="project-card__features">
        {project.features.map((f) => (
          <li key={f}><span className="project-card__check">✓</span>{f}</li>
        ))}
      </ul>
    )}

    <div className="project-card__footer">
      <div className="project-card__tags">
        {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  </Card>
);

const Projects = () => (
  <div className="projects page-container">

    <SectionHeader
      eyebrow="Portfolio"
      title="Things I've shipped"
      subtitle="Full-stack applications built end-to-end — from schema design to deployment. Each one solves a real problem."
      className="reveal"
    />

    {/* Featured */}
    <section className="projects__section">
      <h2 className="projects__section-label reveal">Featured Projects</h2>
      <div className="projects__grid">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>

    {/* Additional */}
    {additionalProjects.length > 0 && (
      <section className="projects__section">
        <h2 className="projects__section-label reveal">Additional Projects</h2>
        <div className="projects__grid projects__grid--small">
          {additionalProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    )}

    {/* GitHub CTA */}
    <div className="projects__cta reveal">
      <p>More work on GitHub</p>
      <a
        href="https://github.com/[your-username]"
        target="_blank"
        rel="noreferrer"
        className="projects__gh-link"
      >
        {Icons.github}
        <span>View Profile</span>
        {Icons.external}
      </a>
    </div>

  </div>
);

export default Projects;
