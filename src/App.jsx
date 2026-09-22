import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Code2, Copy, Database, Download, Eye, GitBranch, Mail, Menu, Moon, Phone, Server, Sun, X } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import avatar from "./assets/avatar.png";

const CV_URL = "/Atcharaporn-Okrathok-CV.pdf";
const EMAIL = "atcharapornok@gmail.com";
const GITHUB = "https://github.com/B6001186";
const LINKEDIN = "https://www.linkedin.com/in/atcharaporn-okrathok-40a2a0189/";
const navigation = ["About", "Projects", "Skills", "Contact"];
const skillGroups = [
  { title: "Frontend", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "MongoDB", "Supabase", "Database Design"] },
  { title: "Tools & workflow", icon: GitBranch, skills: ["Git", "GitHub", "Figma", "Postman", "Agile / Scrum"] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copyState, setCopyState] = useState("idle");
  const copyTimer = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; }
    catch { return false; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light"); }
    catch { /* Keep the theme usable when browser storage is unavailable. */ }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  async function copyEmail() {
    window.clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch { setCopyState("error"); }
    copyTimer.current = window.setTimeout(() => setCopyState("idle"), 3500);
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <a href="#home" className="wordmark" aria-label="Faii, home" onClick={() => setMenuOpen(false)}>faii<span>.</span></a>
          <div className="desktop-links">
            {navigation.map((label) => <a key={label} href={`#${label.toLowerCase()}`} aria-current={activeSection === label.toLowerCase() ? "location" : undefined}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`} aria-pressed={darkMode}>
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={16} /></a>
            <button id="menu-toggle" className="icon-button menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {menuOpen && <nav id="mobile-navigation" className="mobile-links" aria-label="Mobile navigation">
          {navigation.map((label) => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
        </nav>}
      </header>

      <main id="main">
        {/* Introduction */}
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> JUNIOR FULL STACK DEVELOPER</div>
            <h1>Hi, I’m Faii.<br />A developer with<br /><span className="serif-accent">a curious mind.</span></h1>
            <p className="hero-description">I build web applications with React and Node.js. I enjoy turning designs into working interfaces, figuring out the backend, and learning alongside a team.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">View my work <ArrowUpRight size={18} /></a>
              <a href={CV_URL} download="Atcharaporn-Okrathok-CV.pdf" className="button button-outline">Download CV <Download size={17} /></a>
            </div>
            <div className="hero-socials">
              <ExternalLink href={GITHUB} className="social-text"><Github size={16} /> GitHub</ExternalLink>
              <ExternalLink href={LINKEDIN} className="social-text"><Linkedin size={16} /> LinkedIn</ExternalLink>
              <ExternalLink href={CV_URL} className="cv-preview"><Eye size={16} /> Preview CV</ExternalLink>
            </div>
          </div>
          <div className="hero-art">
            <span className="art-spark" aria-hidden="true">✳</span>
            <div className="portrait-frame">
              <div className="portrait-topline"><span>A LITTLE BIT OF ME</span><span>01 / FAII</span></div>
              <img src={avatar} alt="Pixel art illustration of Faii coding at her desk" width="1024" height="1024" fetchPriority="high" />
              <div className="portrait-caption"><div><strong>Atcharaporn Okrathok</strong><span>Code, coffee, and a little curiosity.</span></div><Code2 size={25} /></div>
            </div>
            <div className="floating-note"><span className="note-pin" aria-hidden="true" />Always learning.<br /><strong>Always building.</strong></div>
            <span className="art-coordinate">A PIXEL-SIZED GLIMPSE INTO MY WORLD</span>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-circle"><ArrowDown size={16} /></span> Get to know me</a>
          <span className="hero-index" aria-hidden="true">PORTFOLIO — 2026</span>
        </section>

        {/* Background */}
        <section id="about" className="section about-section">
          <div className="container about-layout">
            <div><SectionLabel number="01">ABOUT ME</SectionLabel><h2>A little about<br /><span className="serif-accent">the person behind it.</span></h2></div>
            <div className="about-copy">
              <p>I’m Atcharaporn, but you can call me <strong>Faii</strong>. I graduated from the <strong>Generation Thailand Junior Software Developer Bootcamp</strong>, where I built full-stack applications and learned to work in an Agile team.</p>
              <p>I enjoy both sides of development: translating Figma designs into responsive interfaces and connecting them to APIs and databases. Working on a team project taught me as much about communication and code reviews as it did about writing code.</p>
              <a className="text-link" href="#projects">See what I’ve been working on <ArrowDown size={16} /></a>
            </div>
          </div>
        </section>

        {/* Selected work comes before the skills list for quick recruiter review. */}
        <section id="projects" className="section container">
          <SectionLabel number="02">SELECTED WORK</SectionLabel>
          <div className="section-heading"><h2>From learning<br /><span className="serif-accent">to building.</span></h2><ExternalLink href={GITHUB} className="text-link">More on GitHub <ArrowUpRight size={18} /></ExternalLink></div>
          <article className="project-card">
            <div className="project-art" aria-label="Gearverse project typographic cover">
              <div className="project-art-top"><span>BOOTCAMP TEAM PROJECT</span><ArrowUpRight size={20} /></div>
              <div className="gearverse-mark"><span className="gearverse-symbol" aria-hidden="true">gv<span>↗</span></span><strong>GEARVERSE</strong><p>GAMING GEAR ONLINE STORE</p></div>
              <div className="project-art-bottom"><span>FULL-STACK WEB APPLICATION</span><span>01</span></div>
            </div>
            <div className="project-content"><div className="eyebrow">E-COMMERCE <span className="tiny-divider" /> TEAM PROJECT</div><h3>Gearverse</h3><p>A gaming gear online store built with a team using Scrum — from the first Figma wireframes to a working web application.</p><h4>What I worked on</h4><ul className="project-highlights"><li>Turning Figma designs into responsive UI components</li><li>Implementing login and registration authentication</li><li>Managing Git branches and collaborating on GitHub</li></ul><div className="tags"><span>React</span><span>Node.js</span><span>Express</span><span>Tailwind CSS</span><span>MongoDB</span></div><ExternalLink href="https://github.com/nookarin/team-07-ProjectGV-Sprint2" className="text-link project-link">View code on GitHub <ArrowUpRight size={18} /></ExternalLink></div>
          </article>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <SectionLabel number="03">SKILLS & WORKFLOW</SectionLabel>
            <div className="section-heading"><h2>What I<br /><span className="serif-accent">work with.</span></h2><p>The technologies I use to build,<br />test, and collaborate.</p></div>
            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, skills }, index) => <article className="skill-card" key={title}>
                <div className="skill-card-top"><div className="skill-icon"><Icon size={23} strokeWidth={1.6} /></div><span>0{index + 1}</span></div>
                <h3>{title}</h3><div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>)}
            </div>
            <div className="team-note"><GitBranch size={23} /><div><strong>Experience working as a team</strong><p>Daily standups, sprint planning, retrospectives, pull requests, code reviews, and resolving merge conflicts.</p></div><span className="team-tag">AGILE / SCRUM</span></div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section container contact-section">
          <SectionLabel number="04">CONTACT</SectionLabel>
          <div className="contact-layout"><div><h2>Let’s talk<br /><span className="serif-accent">about what’s next.</span></h2><p>Have a junior developer opportunity or a project in mind?<br />I’d love to hear from you.</p><a href={`mailto:${EMAIL}`} className="button button-primary">Say hello <ArrowUpRight size={18} /></a></div>
            <div className="contact-details"><div className="contact-row"><Mail size={21} /><div><span className="contact-label">EMAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><button className="icon-button copy-button" onClick={copyEmail} aria-label="Copy email address">{copyState === "copied" ? <Check size={18} /> : <Copy size={18} />}</button></div><p className="copy-feedback" role="status">{copyState === "copied" ? "Email copied!" : copyState === "error" ? "Couldn’t copy. You can select the email above to copy it." : ""}</p><div className="contact-row"><Phone size={21} /><div><span className="contact-label">PHONE</span><a href="tel:+66821300459">082-130-0459</a></div><ArrowUpRight size={18} /></div><div className="contact-socials"><ExternalLink href={GITHUB} className="text-link"><Github size={18} /> GitHub <ArrowUpRight size={15} /></ExternalLink><ExternalLink href={LINKEDIN} className="text-link"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></ExternalLink></div></div>
          </div>
        </section>
      </main>
      <footer className="container footer"><a href="#home" className="wordmark" aria-label="Faii, back to top">faii<span>.</span></a><p>© {new Date().getFullYear()} Atcharaporn Okrathok</p><a href="#home" className="back-to-top">Back to top <ArrowUpRight size={16} /></a></footer>
    </div>
  );
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span>{children}</div>;
}

function ExternalLink({ href, className, children }) {
  return <a href={href} className={className} target="_blank" rel="noreferrer">{children}</a>;
}

export default App;
