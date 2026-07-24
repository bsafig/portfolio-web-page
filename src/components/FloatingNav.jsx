// Fixed jump menu on the home page. Scrolls to sections by id, and can switch
// the Experience/Skills tab via onSelectTab. Mirrors the old scripts/nav.js.
export default function FloatingNav({ onSelectTab }) {
  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const goTo = (tab) => {
    scrollToId('experience-skills')
    onSelectTab(tab)
  }

  return (
    <div className="nav-menu">
      <button id="nav-linktree" onClick={scrollTop}>Redirects</button>
      <button id="nav-about" onClick={() => scrollToId('about')}>About Me</button>
      <button id="nav-experience" onClick={() => goTo('experience')}>Experience</button>
      <button id="nav-skills" onClick={() => goTo('skills')}>Skills</button>
      <button id="nav-projects" onClick={() => scrollToId('projects')}>Projects</button>
      <button id="nav-contact" onClick={() => scrollToId('contact')}>Contact</button>
    </div>
  )
}
