import { useState } from "react";
import {
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  Mail,
  Menu,
  Monitor,
  Phone,
  Server,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import avatar from "./assets/avatar.png";

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const skillGroups = [
  {
    title: "FRONTEND",
    icon: Monitor,
    color: "bg-[#22d3ee]",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "BACKEND",
    icon: Server,
    color: "bg-[#c084fc]",
    skills: ["Node.js", "Express.js", "REST API", "Authentication"],
  },
  {
    title: "DATABASE",
    icon: Database,
    color: "bg-[#4ade80]",
    skills: ["Postgresql", "MongoDB", "Database Design"],
  },
  {
    title: "TOOLS",
    icon: Wrench,
    color: "bg-[#facc15]",
    skills: ["Git", "GitHub", "Figma", "Postman", "Agile/Scrum"],
  },
];

const projects = [
  {
    title: "PROJECT GV",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A team-based web application focused on intuitive interface design, effective data management, and collaborative development using Agile and Scrum.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Database"],
    repository: "https://github.com/nookarin/team-07-ProjectGV-Sprint2",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff7d6] text-[#171717]">
      <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-black bg-[#f472b6]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-[10px] leading-6 text-[#facc15] pixel-text-shadow sm:text-xs"
          >
            ATCHARAPORN OKRATHOK
            <span className="animate-blink text-[#facc15]">_</span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="pixel-nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="pixel-small-button grid h-11 w-11 place-items-center bg-[#facc15] md:hidden"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={4} />
            ) : (
              <Menu size={22} strokeWidth={4} />
            )}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t-4 border-black bg-[#c084fc] p-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="pixel-button bg-white px-4 py-4 text-center text-[8px] leading-5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="pixel-grid relative min-h-screen scroll-mt-24 overflow-hidden border-b-4 border-black px-5 pb-20 pt-32 lg:px-8"
        >
          <PixelDecoration className="left-[5%] top-32 bg-[#22d3ee]" />
          <PixelDecoration className="right-[7%] top-48 bg-[#facc15]" />
          <PixelDecoration className="bottom-20 left-[45%] bg-[#4ade80]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="pixel-label bg-[#c084fc] text-white">
                <Sparkles size={16} strokeWidth={4} />
                PLAYER 01: FULL-STACK DEVELOPER
              </div>

              <h1 className="mt-8 text-2xl leading-[1.8] sm:text-3xl sm:leading-[1.8] lg:text-4xl lg:leading-[1.8]">
                HI, I&apos;M
                <span className="mt-3 block break-words text-[#ec4899] pixel-text-shadow-dark">
                  Faii
                </span>
              </h1>

              <div className="pixel-box mt-8 max-w-2xl bg-white p-5 sm:p-7">
                <p className="text-[10px] leading-7 sm:text-xs sm:leading-8">
                  I am a full-stack developer passionate about building
                  beautiful, accessible, and user-friendly web applications,
                  from thoughtful interface design to reliable system
                  development.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="#projects"
                  className="pixel-button inline-flex items-center gap-3 bg-[#facc15] px-5 py-4 text-[8px] leading-5 sm:text-[9px]"
                >
                  VIEW PROJECTS
                  <ArrowRight size={17} strokeWidth={4} />
                </a>

                <a
                  href="#contact"
                  className="pixel-button inline-flex items-center gap-3 bg-[#22d3ee] px-5 py-4 text-[8px] leading-5 sm:text-[9px]"
                >
                  CONTACT ME
                  <Mail size={17} strokeWidth={4} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5">
                <PixelIconLink
                  href="https://github.com/B6001186"
                  icon={FaGithub}
                  label="GitHub"
                  color="bg-white"
                />

                <PixelIconLink
                  href="https://www.linkedin.com/in/atcharaporn-okrathok-40a2a0189/"
                  icon={FaLinkedin}
                  label="LinkedIn"
                  color="bg-[#38bdf8]"
                />

                <PixelIconLink
                  href="https://www.figma.com/"
                  icon={SiFigma}
                  label="Figma"
                  color="bg-[#fb7185]"
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-4 translate-y-4 border-4 border-black bg-[#facc15]"
                />

                <figure className="relative border-4 border-black bg-[#c084fc] p-3">
                  <div className="flex items-center justify-between gap-3 border-4 border-b-0 border-black bg-[#60a5fa] px-3 py-2">
                    <div className="flex shrink-0 gap-2">
                      <span className="h-4 w-4 border-2 border-black bg-[#fb7185]" />
                      <span className="h-4 w-4 border-2 border-black bg-[#facc15]" />
                      <span className="h-4 w-4 border-2 border-black bg-[#4ade80]" />
                    </div>

                    <span className="truncate text-[6px] leading-4 sm:text-[7px]">
                      PLAYER_01.PNG
                    </span>
                  </div>

                  <div className="relative overflow-hidden border-4 border-black bg-[#172554]">
                    <img
                      src={avatar}
                      alt="Pixel art portrait of Atcharaporn working at a computer"
                      className="pixel-avatar aspect-square w-full object-cover"
                      width="1024"
                      height="1024"
                    />

                    <div className="absolute bottom-3 left-3 right-3 border-4 border-black bg-[#172554]/95 p-3 text-white">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[7px] leading-5 sm:text-[8px]">
                          ATCHARAPORN OKRATHOK
                        </span>

                        <span className="inline-flex items-center gap-2 text-[7px] leading-5 text-[#4ade80] sm:text-[8px]">
                          <span className="animate-blink h-3 w-3 bg-[#4ade80]" />
                          ONLINE
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>

              <div className="pixel-box mx-auto mt-10 w-fit bg-[#4ade80] px-5 py-3">
                <p className="animate-bounce-short text-center text-[8px] leading-5 sm:text-[9px]">
                  READY TO CREATE!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b-4 border-black bg-[#67e8f9] px-5 py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle number="01" title="ABOUT ME" color="bg-[#facc15]" />

              <h2 className="mt-9 text-xl leading-[2] sm:text-2xl sm:leading-[2] lg:text-3xl">
                TURNING IDEAS
                <span className="block text-[#db2777]">INTO REALITY</span>
              </h2>
            </div>

            <div className="pixel-box bg-white p-6 sm:p-8">
              <div className="space-y-6 text-[10px] leading-7 sm:text-xs sm:leading-8">
                <p>
                  I am passionate about both frontend and backend development,
                  with a strong interest in creating clear, intuitive, and
                  user-friendly digital experiences.
                </p>

                <div className="h-1 bg-black" />

                <p>
                  I enjoy learning new technologies, collaborating with teams,
                  and improving my skills by building practical, real-world
                  projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="pixel-dot-pattern scroll-mt-24 border-b-4 border-black bg-[#fef3c7] px-5 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionTitle number="02" title="MY SKILLS" color="bg-[#c084fc]" />

            <p className="mt-8 max-w-3xl text-[10px] leading-7 sm:text-xs sm:leading-8">
              Technologies and tools I use to design, develop, test, and
              collaborate effectively with a team.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    key={group.title}
                    className="pixel-box bg-white p-6 transition-transform duration-100 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`grid h-14 w-14 shrink-0 place-items-center border-4 border-black ${group.color}`}
                      >
                        <Icon size={27} strokeWidth={3} />
                      </div>

                      <h3 className="text-xs leading-6 sm:text-sm">
                        {group.title}
                      </h3>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-2 border-2 border-black bg-[#fff7d6] px-3 py-2 text-[7px] leading-5 shadow-[3px_3px_0_#000] sm:text-[8px]"
                        >
                          <SkillIcon skill={skill} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-24 border-b-4 border-black bg-[#c084fc] px-5 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionTitle number="03" title="PROJECTS" color="bg-[#4ade80]" />

            <div className="mt-12 space-y-10">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="pixel-box overflow-hidden bg-white"
                >
                  <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="pixel-project-bg flex min-h-72 items-center justify-center border-b-4 border-black p-10 lg:border-b-0 lg:border-r-4">
                      <div className="text-center">
                        <Code2 size={100} strokeWidth={2.5} />

                        <div className="mt-6 border-4 border-black bg-[#facc15] px-4 py-3 text-[8px] leading-5 shadow-[5px_5px_0_#000]">
                          LEVEL {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="p-7 sm:p-10">
                      <p className="text-[7px] leading-6 text-[#7c3aed] sm:text-[8px]">
                        {project.type}
                      </p>

                      <h3 className="mt-5 text-xl leading-[1.8] sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-[10px] leading-7 sm:text-xs sm:leading-8">
                        {project.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border-2 border-black bg-[#67e8f9] px-3 py-2 text-[7px] leading-5 shadow-[3px_3px_0_#000] sm:text-[8px]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="pixel-button mt-9 inline-flex items-center gap-3 bg-[#facc15] px-5 py-4 text-[8px] leading-5"
                      >
                        <FaGithub className="h-5 w-5 shrink-0" />
                        VIEW REPOSITORY
                        <ExternalLink
                          size={16}
                          strokeWidth={4}
                          className="shrink-0"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="pixel-grid scroll-mt-24 bg-[#86efac] px-5 py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="pixel-box bg-[#fff7d6] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <SectionTitle
                    number="04"
                    title="CONTACT"
                    color="bg-[#fb7185]"
                  />

                  <h2 className="mt-9 text-xl leading-[2] sm:text-2xl sm:leading-[2] lg:text-3xl">
                    LET&apos;S WORK
                    <span className="block text-[#2563eb]">TOGETHER!</span>
                  </h2>

                  <p className="mt-6 text-[10px] leading-7 sm:text-xs sm:leading-8">
                    Have a project in mind, an opportunity to discuss, or just
                    want to say hello? Feel free to contact me through any of
                    the channels listed here.
                  </p>
                </div>

                <div className="space-y-5">
                  <ContactItem
                    icon={Mail}
                    label="EMAIL"
                    value="atcharapornok@gmail.com"
                    href="mailto:atcharapornok@gmail.com"
                    color="bg-[#22d3ee]"
                  />

                  <ContactItem
                    icon={Phone}
                    label="PHONE"
                    value="+66 82 130 0459"
                    href="tel:+66821300459"
                    color="bg-[#facc15]"
                  />

                  <div className="flex flex-wrap gap-5 pt-4">
                    <PixelSocialLink
                      href="https://github.com/B6001186"
                      icon={FaGithub}
                      label="GITHUB"
                      color="bg-white"
                    />

                    <PixelSocialLink
                      href="https://www.linkedin.com/in/atcharaporn-okrathok-40a2a0189/"
                      icon={FaLinkedin}
                      label="LINKEDIN"
                      color="bg-[#38bdf8]"
                    />

                    <PixelSocialLink
                      href="https://www.figma.com/design/q4jxqW0f4Ta8MCzgYf5pj4/GEARVERSE?node-id=0-1&p=f&t=zvhqsuXAdtLMKdd6-0"
                      icon={SiFigma}
                      label="FIGMA"
                      color="bg-[#fb7185]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-[#172554] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row">
          <p className="text-[7px] leading-5 sm:text-[8px]">
            © 2026 ATCHARAPORN
          </p>

          <p className="animate-blink text-[7px] leading-5 text-[#4ade80] sm:text-[8px]">
            GAME SAVED SUCCESSFULLY!
          </p>

          <div className="flex gap-4">
            <FooterIcon
              href="https://github.com/B6001186"
              icon={FaGithub}
              label="GitHub"
            />

            <FooterIcon
              href="https://www.linkedin.com/in/atcharaporn-okrathok-40a2a0189/"
              icon={FaLinkedin}
              label="LinkedIn"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ number, title, color }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center border-4 border-black text-[8px] shadow-[4px_4px_0_#000] sm:text-[9px] ${color}`}
      >
        {number}
      </span>

      <h2 className="text-base leading-7 sm:text-xl sm:leading-8">{title}</h2>
    </div>
  );
}

function PixelDecoration({ className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden h-7 w-7 border-4 border-black shadow-[5px_5px_0_#000] sm:block ${className}`}
    />
  );
}

function SkillIcon({ skill }) {
  if (skill === "GitHub") {
    return <FaGithub className="h-4 w-4 shrink-0" aria-hidden="true" />;
  }

  if (skill === "Figma") {
    return <SiFigma className="h-4 w-4 shrink-0" aria-hidden="true" />;
  }

  return null;
}

function PixelIconLink({ href, icon: Icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`pixel-button grid h-14 w-14 place-items-center ${color}`}
    >
      <Icon className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

function PixelSocialLink({ href, icon: Icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`pixel-button inline-flex items-center gap-3 px-4 py-4 text-[7px] leading-5 sm:text-[8px] ${color}`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
      <ExternalLink
        size={14}
        strokeWidth={4}
        className="shrink-0"
        aria-hidden="true"
      />
    </a>
  );
}

function ContactItem({ icon: Icon, label, value, href, color }) {
  const content = (
    <>
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center border-4 border-black ${color}`}
      >
        <Icon size={22} strokeWidth={3} aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <p className="text-[7px] leading-5 sm:text-[8px]">{label}</p>

        <p className="mt-2 break-all text-[8px] leading-6 sm:text-[9px]">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 border-4 border-black bg-white p-4 shadow-[5px_5px_0_#000] transition-transform duration-100 hover:-translate-y-1"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 border-4 border-black bg-white p-4 shadow-[5px_5px_0_#000]">
      {content}
    </div>
  );
}

function FooterIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center border-2 border-white bg-[#ec4899] text-xl text-white transition-colors duration-100 hover:bg-[#facc15] hover:text-black"
    >
      <Icon aria-hidden="true" />
    </a>
  );
}

export default App;
