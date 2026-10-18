const projects = [
  {
    title: "Polling List Search Platform",
    description:
      "A client platform that transforms Arabic polling-list PDFs into normalized, searchable PostgreSQL records with asynchronous imports, audit logs, and right-to-left search.",
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "Nginx"],
  },
  {
    title: "VPS Monitoring",
    description:
      "A virtual-server monitoring tool for tracking infrastructure metrics and performance in real time.",
    tech: ["Python", "Linux", "VPS"],
  },
  {
    title: "Charity Management Platform",
    description:
      "A charity-management application with backend architecture and an automated delivery pipeline for reliable deployments.",
    tech: ["Spring Boot", "Jenkins", "Docker", "Nginx"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A network application with bidirectional synchronization and local state persistence for a responsive chat experience.",
    tech: ["Node.js", "Socket.io", "SQLite"],
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
      "Built a role-based platform for managing projects, tasks, progress, deliverables, comments, and notifications, supported by Spring Boot services and Jenkins CI/CD automation.",
  },
  {
    company: "IT Road",
    role: "Full-Stack Developer Intern",
    period: "Jul 2025 — Sep 2025",
    summary:
      "Built secure REST APIs with Spring Boot and PostgreSQL, alongside responsive React and TypeScript interfaces.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a className="text-lg font-bold tracking-tight" href="#home" aria-label="Home">MA.</a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm text-zinc-600 sm:gap-7">
            <li><a className="transition hover:text-zinc-950" href="#about">About</a></li>
            <li><a className="transition hover:text-zinc-950" href="#work">Work</a></li>
            <li><a className="transition hover:text-zinc-950" href="#experience">Experience</a></li>
            <li><a className="transition hover:text-zinc-950" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="mx-auto grid min-h-[calc(100dvh-81px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">Full-stack developer</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-7xl lg:text-8xl">Mouad Abbassid</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">Engineering student and full-stack developer building secure, scalable web platforms—from polished interfaces to reliable backend services and automated deployment.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700" href="#work">View selected work</a>
            <a className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-950" href="/documents/Mouad_Abbassid_Full_Stack_Resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </div>
        <aside className="border-l border-zinc-200 pl-6 sm:pl-8">
          <p className="text-sm text-zinc-500">Core stack</p>
          <p className="mt-3 text-2xl font-medium tracking-tight text-zinc-900">React, TypeScript, FastAPI, Spring Boot, PostgreSQL, Docker, and CI/CD.</p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-6">
            <div><dt className="text-sm text-zinc-500">Featured work</dt><dd className="mt-1 text-2xl font-semibold">04</dd></div>
            <div><dt className="text-sm text-zinc-500">Education</dt><dd className="mt-1 text-2xl font-semibold">EMSI</dd></div>
          </dl>
        </aside>
      </section>

      <section id="about" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">About me</p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">I turn complex ideas into clear, dependable digital experiences.</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-zinc-600">
              <p>I build role-based web applications and developer tools with a focus on clean architecture, thoughtful interfaces, and dependable delivery.</p>
              <p>I am currently completing an Engineering Degree in Computer Science at EMSI, Casablanca. Outside development, drawing and reading manhwa keep my creative side active and inform how I approach design and user experience.</p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Skills">
              {skills.map((skill) => <li className="rounded-full border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700" key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">Projects that solve real problems.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">Platforms and tools built around real workflows, reliable infrastructure, and maintainable technology.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-400" key={project.title}>
              <p className="text-sm font-medium text-zinc-400">0{index + 1}</p>
              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-zinc-950">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => <li className="text-sm text-zinc-500" key={tech}>{tech}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">Experience</p>
          <div className="divide-y divide-zinc-200 border-t border-zinc-200">
            {experience.map((item) => (
              <article className="grid gap-4 py-7 sm:grid-cols-[1fr_auto]" key={item.company}>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.role}</h3>
                  <p className="mt-1 font-medium text-zinc-600">{item.company}</p>
                  <p className="mt-4 max-w-2xl leading-7 text-zinc-600">{item.summary}</p>
                </div>
                <p className="text-sm text-zinc-500">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-24 sm:flex-row sm:items-end lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-400 uppercase">Contact</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Have a project in mind?</h2>
          </div>
          <a className="w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200" href="mailto:abasside1234@gmail.com">Get in touch</a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-zinc-500 sm:flex-row sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Mouad Abbassid.</p>
        <div className="flex gap-4">
          <a className="transition hover:text-zinc-950" href="https://github.com/Nyckboy" target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition hover:text-zinc-950" href="https://www.linkedin.com/in/mouadabbassid/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
