import { useEffect } from 'react'
import Linktree from './Linktree.jsx'
import BackToTop from './BackToTop.jsx'
import ReturnButton from './ReturnButton.jsx'

// Shared chrome for every project detail page: linktree, titled header, the
// content card, footer, and the back-to-top / return buttons.
export default function ProjectLayout({ title, subtitle, children }) {
  // Detail pages are reached by client-side navigation, so reset scroll and
  // keep the tab title in sync the way a fresh document load used to.
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = title
  }, [title])

  return (
    <div className="page-project">
      <header className="hero">
        <Linktree />

        <section id="about">
          <h2>{title}</h2>
          {subtitle && (
            <p>
              <em>{subtitle}</em>
            </p>
          )}
        </section>

        <div className="hero-content">{children}</div>
      </header>

      <footer>
        <p>© 2025 Safigan.com. All rights and wrongs reserved.</p>
      </footer>

      <BackToTop />
      <ReturnButton />
    </div>
  )
}
