import Image from "next/image";

const projects = [
  {
    title: "HrDesk",
    description:
      "A central HR platform that makes document, leave, and approval requests transparent for employees, managers, and HR.",
    tech: ["React", "TypeScript", "Spring Boot"],
    image: "/projects/HrDesk2.png",
  },
  {
    title: "TimeSheet",
    description:
      "An employee-hours tracker that generates detailed Word timesheets for month-end payroll and administration.",
    tech: ["React", "TypeScript", "Spring Boot"],
    image: "/projects/timesheetapp.png",
  },
  {
    title: "AeroVision",
    description:
      "A Python desktop application that uses machine-learning models to analyze data and produce clear predictions.",
    tech: ["Python", "K-Means", "Random Forest"],
    image: "/projects/aerovison.png",
  },
  {
    title: "CandidApp",
    description:
      "A recruitment platform where companies publish roles and candidates manage applications in one focused workspace.",
    tech: ["Django", "React", "PostgreSQL"],
    image: "/projects/candidapp.png",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Java",
  "Python",
  "Docker",
  "C/C++",
];

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a className="text-lg font-bold tracking-tight" href="#home" aria-label="Home">
          MA.
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-sm text-zinc-600 sm:gap-7">
            <li><a className="transition hover:text-zinc-950" href="#about">About</a></li>
            <li><a className="transition hover:text-zinc-950" href="#work">Work</a></li>
            <li><a className="transition hover:text-zinc-950" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="mx-auto grid min-h-[calc(100dvh-81px)] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">Full-stack developer</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-7xl lg:text-8xl">
            Mouad Abbassid
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">
            I build thoughtful digital products with clean architecture, useful interactions, and an eye for the details that make software feel good to use.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700" href="#work">
              View selected work
            </a>
            <a className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:border-zinc-950" href="/projects/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <aside className="border-l border-zinc-200 pl-6 sm:pl-8">
          <p className="text-sm text-zinc-500">Currently focused on</p>
          <p className="mt-3 text-2xl font-medium tracking-tight text-zinc-900">Modern web experiences, scalable systems, and refined UI.</p>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-6">
            <div><dt className="text-sm text-zinc-500">Projects</dt><dd className="mt-1 text-2xl font-semibold">04</dd></div>
            <div><dt className="text-sm text-zinc-500">Stack</dt><dd className="mt-1 text-2xl font-semibold">Full-stack</dd></div>
          </dl>
        </aside>
      </section>

      <section id="about" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">About me</p>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              I turn complex ideas into clear, dependable digital experiences.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-zinc-600">
              <p>I’m a full-stack developer with a focus on clean systems and polished user interfaces. I enjoy learning new tools quickly and solving problems with practical, maintainable code.</p>
              <p>Outside development, drawing and reading manhwa keep my creative side active and influence the way I think about visual design and user experience.</p>
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
          <p className="max-w-xs text-sm leading-6 text-zinc-500">Each project is designed around useful workflows, straightforward interfaces, and maintainable technology.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white" key={project.title}>
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Image className="object-cover transition duration-500 group-hover:scale-105" src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => <li className="text-sm text-zinc-500" key={tech}>{tech}</li>)}
                </ul>
              </div>
            </article>
          ))}
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
        <p>Built with Next.js.</p>
      </footer>
    </main>
  );
}
