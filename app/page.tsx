const projects = [
  {
    number: "01",
    title: "Polling List Search Platform",
    description:
      "Transforms Arabic polling-list PDFs into normalized, searchable PostgreSQL records with asynchronous imports, audit logs, and right-to-left search.",
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "Nginx"],
    label: "Data systems",
    links: [],
  },
  {
    number: "02",
    title: "VPS Monitoring",
    description:
      "A lightweight infrastructure-monitoring tool for tracking real-time virtual-server metrics and performance.",
    tech: ["Python", "Linux", "VPS"],
    label: "Infrastructure",
    links: [],
  },
  {
    number: "03",
    title: "Charity Management Platform",
    description:
      "A charity-management application shaped around dependable backend architecture and automated delivery.",
    tech: ["Spring Boot", "Jenkins", "Docker", "Nginx"],
    label: "Delivery systems",
    links: [
      { label: "Live demo", href: "https://gestioncharite.mouadabbassid.com/" },
      { label: "Source code", href: "https://github.com/Nyckboy/GestionCharite" },
    ],
  },
  {
    number: "04",
    title: "Real-Time Chat Application",
    description:
      "A network application with bidirectional synchronization and local state persistence for responsive conversations.",
    tech: ["Node.js", "Socket.io", "SQLite"],
    label: "Real-time",
    links: [
      { label: "Source code", href: "https://github.com/Nyckboy/whatsappClone" },
    ],
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Python", "FastAPI",
  "Spring Boot", "PostgreSQL", "Docker", "Jenkins", "GitHub Actions", "Nginx", "Linux",
];

const experience = [
  {
    company: "Royal Air Maroc — Digital Factory",
    role: "Full-Stack Developer Intern",
    period: "Jul 2026 — Sep 2026",
    summary:
      "Role-based project operations platform covering tasks, progress, deliverables, comments, notifications, and CI/CD automation.",
    links: [
      { label: "Live demo", href: "https://ramdemo.mouadabbassid.com/login" },
      { label: "Source code", href: "https://github.com/Nyckboy/digitalfactory-RAM" },
    ],
  },
  {
    company: "IT Road",
    role: "Full-Stack Developer Intern",
    period: "Jul 2025 — Sep 2025",
    summary:
      "Secure Spring Boot APIs and PostgreSQL data models paired with responsive React and TypeScript interfaces.",
    links: [],
  },
];

function ExternalLinks({ name, links }: { name: string; links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="external-links" aria-label={`${name} links`}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
        </li>
      ))}
    </ul>
  );
}

const stackLayers = [
  { name: "Interface", tools: "React / TypeScript" },
  { name: "Services", tools: "Spring Boot / FastAPI" },
  { name: "Data", tools: "PostgreSQL" },
  { name: "Infrastructure", tools: "Docker / Nginx / Linux" },
];

const stackRings = [
  { radius: 208, node: { x: 93, y: 93 }, leaderEnd: { x: 58, y: 44 } },
  { radius: 166, node: { x: 357.4, y: 122.6 }, leaderEnd: { x: 422, y: 44 } },
  { radius: 124, node: { x: 327.7, y: 327.7 }, leaderEnd: { x: 422, y: 436 } },
  { radius: 82, node: { x: 182, y: 298 }, leaderEnd: { x: 58, y: 436 } },
];

const signalRoute = "M93 93 A187 187 0 0 1 357.4 122.6 A145 145 0 0 1 327.7 327.7 A103 103 0 0 1 182 298 A45 45 0 0 1 240 240";

export default function Home() {
  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="monogram" href="#home" aria-label="Mouad Abbassid home">
          M<span>A</span>
        </a>
        <p className="header-status"><span /> Portfolio / 2026</p>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            <li><a href="#about">Profile</a></li>
            <li><a href="#work">Selected work</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack developer / Casablanca, Morocco</p>
          <h1>
            <span>Building</span>
            <span className="outline-word">useful</span>
            <span>systems.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Mouad Abbassid, an engineering student and full-stack developer designing reliable software from the interface to the infrastructure beneath it.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="/documents/Mouad_Abbassid_Full_Stack_Resume.pdf" target="_blank" rel="noreferrer">Download CV <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="signal-field">
          <svg className="stack-map" viewBox="0 0 480 480" aria-hidden="true">
            {stackRings.map((ring) => (
              <circle className="stack-ring" cx="240" cy="240" r={ring.radius} key={ring.radius} />
            ))}
            {stackRings.map((ring) => (
              <line className="stack-leader" x1={ring.node.x} y1={ring.node.y} x2={ring.leaderEnd.x} y2={ring.leaderEnd.y} key={ring.radius} />
            ))}
            <path className="stack-route" d={signalRoute} />
            {stackRings.map((ring, index) => (
              <circle className={`stack-node stack-step-${index + 1}`} cx={ring.node.x} cy={ring.node.y} r="5" key={ring.radius} />
            ))}
            <circle className="stack-pulse" r="6" style={{ offsetPath: `path("${signalRoute}")` }} />
          </svg>
          <div className="signal-core" aria-hidden="true"><span>Live</span>200 OK</div>
          <ol className="stack-layers" aria-label="Technology stack, from interface to infrastructure">
            {stackLayers.map((layer, index) => (
              <li className={`stack-layer stack-step-${index + 1}`} key={layer.name}>
                <strong>{layer.name}</strong>
                {layer.tools}
              </li>
            ))}
          </ol>
        </div>
        <div className="scroll-mark"><span /> Scroll to explore</div>
      </section>

      <section id="about" className="profile-section section-grid">
        <div className="section-marker"><span>01</span><p>Profile</p></div>
        <div className="profile-content">
          <p className="kicker">How I work</p>
          <h2>Complex requirements deserve a clear path through.</h2>
          <div className="profile-columns">
            <p>I build role-based web applications and developer tools with a focus on practical architecture, thoughtful interface design, and dependable delivery.</p>
            <p>Currently completing an Engineering Degree in Computer Science at EMSI, I enjoy learning fast, simplifying hard problems, and making digital products feel intentional.</p>
          </div>
          <div className="skill-cloud" aria-label="Technical skills">
            {skills.map((skill, index) => <span className={index % 3 === 0 ? "skill-accent" : ""} key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-grid">
        <div className="section-marker"><span>02</span><p>Selected work</p></div>
        <div className="work-content">
          <div className="work-heading">
            <p className="kicker">A selection of systems</p>
            <h2>Work with a reason to exist.</h2>
            <p>Every project starts with a workflow worth improving—then turns it into a coherent, maintainable experience.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <p className="project-number">{project.number}</p>
                <div className="project-main">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tech" aria-label={`${project.title} technologies`}>
                    {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                  </ul>
                  <ExternalLinks name={project.title} links={project.links} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section section-grid">
        <div className="section-marker"><span>03</span><p>Experience</p></div>
        <div className="experience-content">
          <p className="kicker">Where I learned to ship</p>
          <h2>Building alongside real teams.</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="timeline-dot" aria-hidden="true" />
                <p className="experience-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-summary">{item.summary}</p>
                  <ExternalLinks name={item.company} links={item.links} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="kicker">Start a conversation</p>
        <h2>Have a system<br /><em>worth building?</em></h2>
        <a className="contact-email" href="mailto:abasside1234@gmail.com">abasside1234@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-orbit" aria-hidden="true">LET&apos;S BUILD • LET&apos;S BUILD • LET&apos;S BUILD •</div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Mouad Abbassid</p>
        <div>
          <a href="https://github.com/Nyckboy" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/mouadabbassid/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
