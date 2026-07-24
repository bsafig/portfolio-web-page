import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'Elixir', 'BEAM / OTP', 'Library Design', 'TLS & PKI', 'X.509',
  'OCSP & CRL Revocation', 'RFC 9421 / RFC 9530', 'Cryptography', 'GenServer',
  'Telemetry', 'Hex Packaging', 'ExDoc', 'Property-Based Testing', 'Git', 'Open Source',
]

export default function Vouch() {
  return (
    <ProjectLayout
      title="Vouch"
      subtitle="(vouch_ex — a composable trustworthy-connection library for Elixir & the BEAM)"
    >
      <p>
        Vouch is an Elixir library that answers a single question end to end: <em>can I actually trust this
        connection?</em> Most tooling stops at the TLS handshake. Vouch lets you assemble a complete <em>chain</em> of
        trust checks — reachability, secure transport, and data integrity — that halts the moment trust breaks and
        tells you exactly which link failed. It exists because no language ecosystem shipped a single, composable
        library that chains every layer of connection trust; those capabilities lived only as disconnected,
        single-purpose tools. Vouch fills that gap for the BEAM, and is fully open source and MIT-licensed so it can
        be of maximum use to real developers who need one library instead of ten.
      </p>

      <p>
        The design goal was that every capability works at whatever altitude a developer needs. You can call a single
        check in isolation, hand-roll a subset with an ordinary <code>with</code> expression, or run the full managed
        pipeline and get back a structured verdict. The same functional core powers all three, so nothing is locked
        behind the pipeline — each core is a plain, testable function with tagged-tuple outputs.
      </p>

      <h4>The Four Layers of Trust</h4>
      <ul>
        <li><strong>Reachability &amp; health</strong> — DNS resolution, TCP/port reachability, HTTP(S) health checks, and retry/backoff with timeouts.</li>
        <li><strong>Secure transport</strong> — TLS handshake with full chain capture, X.509 chain validation, certificate/SPKI pinning, hostname verification, mutual TLS, and OCSP/CRL revocation with <code>nextUpdate</code>-honoring response caching.</li>
        <li><strong>Data integrity &amp; attestation</strong> — Content-Digest payload integrity (RFC 9530), HTTP Message Signatures (RFC 9421), response schema validation, and remote-attestation hooks.</li>
        <li><strong>Composability</strong> — all of the above assembled as a developer-defined chain of checks, or bundled into a named, reusable trust profile.</li>
      </ul>

      <h4>How You Use It</h4>
      <ul>
        <li><strong>One check, standalone:</strong> capture a peer chain with <code>Vouch.TLS.peer_chain/2</code> and verify a pin with <code>Vouch.Pinning.verify/2</code> — no pipeline required.</li>
        <li><strong>A hand-rolled subset:</strong> compose exactly the checks you want inside a plain <code>with</code> expression that short-circuits on the first failure.</li>
        <li><strong>The full managed pipeline:</strong> pipe a host through <code>connect |&gt; resolvable |&gt; reachable |&gt; http_healthy |&gt; tls_handshake |&gt; pinning |&gt; ocsp |&gt; report</code> and receive a <code>%Vouch.Report{}</code> with a per-link verdict.</li>
        <li><strong>A reusable trust profile:</strong> <code>use Vouch.Profile</code> to declare a named policy (e.g. a bank-grade trust chain) that any host can be verified against.</li>
      </ul>

      <h4>Architecture</h4>
      <ul>
        <li>Modeled as "Plug, but for connection trust": every check is a <strong>functional core</strong> (plain functions, no pipeline knowledge) paired with a thin <strong>pipeline adapter</strong> implementing the <code>Vouch.Check</code> behaviour.</li>
        <li>The <code>Vouch.Chain</code> runner threads an immutable <code>Vouch.Context</code> through the steps with <code>Enum.reduce_while/3</code>, short-circuiting at the first error.</li>
        <li>Stateful concerns like OCSP/CRL caching live in supervised GenServers under <code>Vouch.Application</code>, so revocation responses are validated end to end and cached until their <code>nextUpdate</code>.</li>
        <li>Every check emits <code>[:vouch, :check, :start | :stop | :exception]</code> telemetry with host, port, and halt metadata, so results feed straight into existing dashboards.</li>
      </ul>

      <ProjectLinks links={[{ label: 'View on GitHub →', href: 'https://github.com/bsafig/vouch_ex' }]} />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
