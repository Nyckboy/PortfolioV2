const projects = [
  {
    number: "01",
    title: "Polling List Search Platform",
    description:
      "Transforms Arabic polling-list PDFs into normalized, searchable PostgreSQL records with asynchronous imports, audit logs, and right-to-left search.",
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "Nginx"],
    label: "Data systems",
  },
  {
    number: "02",
    title: "VPS Monitoring",
    description:
      "A lightweight infrastructure-monitoring tool for tracking real-time virtual-server metrics and performance.",
    tech: ["Python", "Linux", "VPS"],
    label: "Infrastructure",
  },
  {
    number: "03",
    title: "Charity Management Platform",
    description:
      "A charity-management application shaped around dependable backend architecture and automated delivery.",
    tech: ["Spring Boot", "Jenkins", "Docker", "Nginx"],
    label: "Delivery systems",
  },
  {
    number: "04",
    title: "Real-Time Chat Application",
    description:
      "A network application with bidirectional synchronization and local state persistence for responsive conversations.",
    tech: ["Node.js", "Socket.io", "SQLite"],
    label: "Real-time",
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
  },
  {
    company: "IT Road",
    role: "Full-Stack Developer Intern",
    period: "Jul 2025 — Sep 2025",
    summary:
      "Secure Spring Boot APIs and PostgreSQL data models paired with responsive React and TypeScript interfaces.",
  },
];

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
        <div className="signal-field" aria-label="Mouad Abbassid, full-stack developer">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal-core">MA</div>
          <p className="signal-label label-top">SYSTEMS<br />THINKING</p>
          <p className="signal-label label-right">INTERFACE<br />CRAFT</p>
          <p className="signal-label label-bottom">SHIPPED<br />WITH CARE</p>
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
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
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
