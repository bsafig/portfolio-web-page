import { Link } from 'react-router-dom'

// Row of call-to-action buttons on a project page. Each link is
// { label, href, to, secondary }. Use `href` for external links (opens a new
// tab) or `to` for in-app routes; mark non-primary links with secondary: true.
export default function ProjectLinks({ links }) {
  return (
    <div className="project-links">
      {links.map((link) => {
        const className = link.secondary ? 'secondary' : undefined
        if (link.to) {
          return (
            <Link key={link.label} to={link.to} className={className}>
              {link.label}
            </Link>
          )
        }
        return (
          <a
            key={link.label}
            href={link.href}
            className={className}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        )
      })}
    </div>
  )
}
