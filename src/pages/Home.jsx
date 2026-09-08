import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Linktree from '../components/Linktree.jsx'
import Tabs from '../components/Tabs.jsx'
import FloatingNav from '../components/FloatingNav.jsx'
import BackToTop from '../components/BackToTop.jsx'
import Recommendations from '../components/Recommendations.jsx'
import { projects } from '../data/projects.js'

const experiencePanel = (
  <>
    <h3>My Work Experience and History</h3>
    <h4>Professional Experience</h4>

    <h5>GovWorx</h5>
    <p><em>Software Engineer (Contractor)</em></p>
    <p><em>Jun 2026-Present</em></p>
    <p>
      Contributed to GovWorxDataAgent, an on-premises .NET service that captures real-time 911
      emergency-services data (calls, dispatch, and location) and streams it to a cloud AI platform.
    </p>
    <ul>
      <li>
        Designed and shipped three CAD (Computer-Aided Dispatch) connectors from scratch: a Mark43
        REST API connector, an IMC connector over Actian Zen ODBC, and a CentralSquare OneSolution
        XML connector. I owned the schema mapping, query logic, and configuration for each.
      </li>
      <li>
        Extended and hardened existing connectors for public-safety vendors such as Tyler,
        Versaterm, Hexagon, and Spillman, working across SQL Server, Oracle, Informix, ODBC, REST,
        and XML data sources.
      </li>
      <li>
        Diagnosed and fixed production issues under time pressure, including a Hexagon query failure,
        cursor preservation on failed pulls to prevent data loss, and clearer logging of unclean
        agent shutdowns.
      </li>
      <li>
        Shipped 50+ Linear-tracked issues across 170+ commits through a reviewed pull-request
        workflow, covering backfill reliability, timezone-correctness fixes, and per-connector
        telemetry.
      </li>
      <li>
        Built a full-stack connectivity and firewall-diagnostics tool with a React and TypeScript
        frontend and an ASP.NET Core API, and instrumented connectors with OpenTelemetry and Datadog
        metrics.
      </li>
    </ul>

    <h5>Exact Assembly</h5>
    <p><em>Software Engineering Intern</em></p>
    <p><em>May-Aug 2023</em></p>
    <ul>
      <li>Collaborated with a team to develop software solutions for a tech contracting startup.</li>
      <li>Assisted in troubleshooting and debugging software applications.</li>
      <li>Gained hands-on experience in software engineering and development processes.</li>
    </ul>

    <h4>Related Experience</h4>

    <h5>VARSITY FIRST Robotics Team 2996</h5>
    <p><em>Programmer, competition / field technician</em></p>
    <p><em>Aug 2021-May 2024</em></p>
    <p>Served as a software engineer and competition technician as a member of the drive team.</p>
    <ul>
      <li>Managed projects with a team of five developers in a short time window of six weeks.</li>
      <li>Wrote, tested, simulated, and debugged code.</li>
      <li>Prepared the robot for match play in high-pressure situations at competition.</li>
    </ul>
  </>
)

const skillsPanel = (
  <>
    <h3>My Skills</h3>

    <h5>Technical Skills</h5>
    <ul>
      <li>C#</li>
      <li>.NET</li>
      <li>ASP.NET Core</li>
      <li>SQL</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>REST API Integration</li>
      <li>System Integration</li>
      <li>Data Pipelines / ETL</li>
      <li>Entity Framework Core</li>
      <li>Observability (OpenTelemetry &amp; Datadog)</li>
      <li>Quartz.NET (Job Scheduling)</li>
      <li>Docker</li>
      <li>Java</li>
      <li>C++</li>
      <li>C</li>
      <li>OpenCL</li>
      <li>GPU Computing</li>
      <li>Parallel Programming</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>Git</li>
      <li>XML</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>Software Design</li>
      <li>Software Construction</li>
      <li>Software Development</li>
      <li>Shell Scripting</li>
      <li>GNU Debugger</li>
      <li>Secure Shell</li>
      <li>cPanel</li>
      <li>FTP</li>
      <li>Hardware Architecture</li>
    </ul>

    <h5>Organizational Skills</h5>
    <ul>
      <li>Agile Methodologies</li>
      <li>Project Planning</li>
      <li>Communication</li>
      <li>Teamwork</li>
      <li>Time Management</li>
      <li>Problem Solving</li>
      <li>Spanish</li>
    </ul>

    <h6>
      <em>
        <a
          href="https://www.linkedin.com/in/benedikt-safigan-cu/details/skills"
          target="_blank"
          rel="noreferrer"
        >
          View skills page of LinkedIn for additional skill context
        </a>
      </em>
    </h6>
  </>
)

const tabs = [
  { key: 'experience', label: 'Experience', content: experiencePanel },
  { key: 'skills', label: 'Skills', content: skillsPanel },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience')

  useEffect(() => {
    document.title = 'Benedikt Safigan'
  }, [])

  return (
    <div className="page-home">
      <header className="hero">
        <Linktree />

        <section id="about">
          <h2>About Me</h2>
        </section>

        <div className="hero-content">
          <div className="hero-img">
            <img src="/meta/BP1.jpg" alt="Photo of Benedikt Safigan" />
          </div>
          <div className="hero-txt">
            <p>
              Hello, my name is Benedikt Safigan, and I am a driven future software architect and engineer
              studying at the University of Colorado Boulder. I am working towards a computer engineering minor and my current focus is on systems and distributed engineering. I like working close to the hardware on the hard problems underneath
              the surface. Concurrency, performance, and real-time systems that have to stay correct under
              load all interest me. If you would like to connect, please feel free to <a href="#contact">reach out here</a>.
            </p>
          </div>
        </div>
      </header>

      <section id="experience-skills">
        <Tabs tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>A selection of things I've built. Click any card to read more.</p>

        <div className="project-grid">
          {projects.map((project) => {
            const inner = (
              <>
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
                <ul className="card-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="card-cta">
                  {project.external ? 'View on GitHub' : 'View project'} &rarr;
                </span>
              </>
            )

            return project.external ? (
              <a
                key={project.slug}
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link key={project.slug} className="project-card" to={`/projects/${project.slug}`}>
                {inner}
              </Link>
            )
          })}
        </div>
      </section>

      <Recommendations />

      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-buttons">
          <div className="email">
            <button
              id="emailBtn"
              onClick={() => window.open('mailto:benedikt.safigan@colorado.edu', '_blank')}
            >
              Send an email here!
            </button>
          </div>
          <div className="linkedin">
            <button
              id="linkedinBtn"
              onClick={() =>
                window.open('https://www.linkedin.com/in/benedikt-safigan-cu', '_blank')
              }
            >
              Connect with me on LinkedIn here!
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Safigan.com. All rights and wrongs reserved.</p>
      </footer>

      <BackToTop />
      <FloatingNav onSelectTab={setActiveTab} />
    </div>
  )
}
