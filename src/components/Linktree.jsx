// Dark "Redirects and Downloads" bar at the top of every page.
export default function Linktree() {
  return (
    <nav className="linktree">
      <h1>Redirects and Downloads</h1>
      <ul className="redirects">
        <li>
          <img src="/meta/LinkedIn_icon.svg.webp" width="10" alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/benedikt-safigan-cu" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <img src="/meta/Git_icon.svg.png" width="10" alt="GitHub" />
          <a href="https://github.com/bsafig" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <img src="/meta/download.png" width="10" alt="Download" />
          <a href="/meta/ben_safigan_resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
