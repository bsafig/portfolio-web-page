import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'Python', 'Command-Line Tools', 'argparse', 'Python Packaging', 'PyPI',
  'Hatchling', 'platformdirs', 'Shell Scripting', 'Bash & Zsh', 'Git',
  'GitHub Actions', 'CI/CD', 'pytest', 'Unix', 'Open Source',
]

export default function TerminalMon() {
  return (
    <ProjectLayout
      title="TerminalMon"
      subtitle="(a Pokémon-inspired terminal toy — unaffiliated with official Pokémon branding)"
    >
      <p>
        TerminalMon is a Pokémon-inspired terminal companion I built and published as an installable Python package:
        run <code>pip install terminalmon</code> and you get a <code>tmon</code> command that lives in your shell. You
        name a creature that gains XP from the commands you run, levels up, evolves, and can learn and use "moves" —
        custom shell scripts you write yourself. It started as a fun way to gamify time spent in the terminal and grew
        into a full exercise in packaging, publishing, and maintaining real open-source software.
      </p>

      <p>
        The bulk of the work was a ground-up refactor from a loose collection of scripts driven by a Unix-socket daemon
        into a clean, distributable package. I redesigned it around a stateless command-line interface built with
        <code>argparse</code>, moved all user data into a proper per-user data directory (via <code>platformdirs</code>)
        instead of writing inside the source tree, and added an automated test suite. The result installs anywhere with
        pip and behaves like a first-class CLI tool, complete with <code>--help</code>, versioning, and clean exit codes.
      </p>

      <h4>What It Does</h4>
      <ul>
        <li>Creates and manages named creatures that gain XP, level up, and evolve at levels 30, 60, and 90.</li>
        <li>Tracks XP automatically through an opt-in bash/zsh shell hook tied to the commands you run.</li>
        <li>Lets you learn, edit (in your <code>$EDITOR</code>), and run "moves" — user-authored shell scripts.</li>
        <li>Supports multiple creatures with commands to create, switch, list, rename, and release them.</li>
        <li>Stores data in a per-user data directory, overridable with an environment variable.</li>
      </ul>

      <h4>Packaging &amp; Publishing</h4>
      <ul>
        <li>Structured as a modern <code>src</code>-layout Python package with a <code>pyproject.toml</code> build (Hatchling) and a <code>tmon</code> console entry point.</li>
        <li>Published live to the Python Package Index (PyPI), so anyone can install it with a single pip command.</li>
        <li>Automated releases through a GitHub Actions workflow using PyPI Trusted Publishing (OIDC) — tagging a version builds, tests, and publishes with no stored secrets.</li>
        <li>Covered by a <code>pytest</code> suite that exercises the CLI end to end.</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on PyPI →', href: 'https://pypi.org/project/terminalmon/' },
          { label: 'View on GitHub', href: 'https://github.com/bsafig/TerminalMon', secondary: true },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
