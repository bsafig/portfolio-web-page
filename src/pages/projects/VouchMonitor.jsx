import { Link } from 'react-router-dom'
import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'Elixir', 'Phoenix', 'Phoenix LiveView', 'OTP', 'GenServer', 'DynamicSupervisor',
  'Phoenix.PubSub', 'Real-Time UI', 'Tailwind CSS', 'Mix Tasks', 'GitHub Actions',
  'CI/CD', 'Telemetry', 'Git', 'Open Source',
]

export default function VouchMonitor() {
  return (
    <ProjectLayout
      title="Vouch Monitor"
      subtitle="(a real-time Phoenix LiveView trust monitor built on the Vouch library)"
    >
      <p>
        Vouch Monitor is a real-time <strong>trust monitor</strong> built with Phoenix LiveView that continuously runs
        the <Link to="/projects/vouch">Vouch</Link> trust chain against your endpoints — reachability, TLS handshake,
        and certificate pinning — and renders a live, per-check verdict for each. It plays two roles at once: it is a
        full <strong>showcase</strong> for what Vouch can do, and a continuous <strong>exercise harness</strong> that
        drives the library the way real developers would use it in production. Rather than a one-shot script, it keeps
        many real-world hosts under constant observation, pushing Vouch's cache, retry, and certificate-handling paths
        far harder than a single check ever could.
      </p>

      <p>
        The point of the project is fidelity to real usage. Every design decision mirrors how connection trust actually
        gets consumed in a running system: a supervised process per target, structured per-link verdicts instead of
        bare booleans, results pushed to the browser over PubSub, and a CI gate that fails a build the moment an
        endpoint's trust regresses.
      </p>

      <h4>What It Demonstrates</h4>
      <ul>
        <li><strong>Composable trust in action</strong> — each target runs a Vouch chain (<code>reachable |&gt; tls_handshake |&gt; pinning</code>) and reports a structured, per-link verdict rather than a single pass/fail bit.</li>
        <li><strong>Idiomatic OTP</strong> — one supervised <code>Poller</code> GenServer per target under a <code>DynamicSupervisor</code>, with results broadcast over <code>Phoenix.PubSub</code> and rendered live in the dashboard.</li>
        <li><strong>Continuous, realistic testing</strong> — running against many live hosts exercises Vouch's caching, retry, and cert-handling code paths under conditions that mirror production, not fixtures.</li>
      </ul>

      <h4>Architecture</h4>
      <ul>
        <li><code>VouchMonitor.Monitoring</code> is a context facade for adding, removing, listing, and subscribing to monitored targets.</li>
        <li>A <code>Registry</code> maps each target id to its poller pid; a <code>PollerSupervisor</code> (<code>DynamicSupervisor</code>) owns the pollers.</li>
        <li>Each <code>Poller</code> ticks on an interval, runs the Vouch chain, and broadcasts a <code>Vouch.Report</code> snapshot; <code>VouchMonitorWeb.DashboardLive</code> renders those snapshots in real time.</li>
        <li>Default targets are seeded on boot and configurable; new targets can be added straight from the dashboard.</li>
      </ul>

      <h4>CI Trust Gate</h4>
      <ul>
        <li>A <code>mix vouch.gate</code> Mix task fails a build when an endpoint's connection trust regresses, and accepts per-host overrides (<code>--host api.github.com --host hex.pm</code>).</li>
        <li>Gate targets are configured under <code>:gate_targets</code>, and a scheduled GitHub Actions workflow runs the gate daily so trust regressions surface on their own.</li>
        <li>Assets (Tailwind and esbuild) build through <code>mix setup</code> with no Node.js required, keeping the whole stack self-contained.</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/vouch_monitor' },
          { label: 'See the Vouch library', to: '/projects/vouch', secondary: true },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
