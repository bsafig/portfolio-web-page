import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'C++', 'C++17', 'Concurrency', 'Multithreading', 'std::thread',
  'Mutexes & Condition Variables', 'RAII', 'Distributed Systems',
  'Lamport Logical Clocks', 'Mutual Exclusion', 'Message Passing',
  'Serialization', 'Systems Programming', 'Software Design', 'Git',
]

export default function ClocklessMutex() {
  return (
    <ProjectLayout
      title="Clockless Mutex"
      subtitle="(a from-scratch C++ take on Leslie Lamport's 1978 logical-clocks paper)"
    >
      <p>
        Clockless Mutex is a C++ project in which I built, from an empty directory, a small distributed system that
        implements the core ideas of Leslie Lamport's landmark 1978 paper, <em>Time, Clocks, and the Ordering of Events
        in a Distributed System</em>. Independent processes each run on their own thread and coordinate purely by passing
        messages across a simulated, deliberately unreliable network — no shared memory and no global clock.
      </p>

      <p>
        The heart of the project is showing how logical time solves a real problem. A built-in chaos layer delays, drops,
        and reorders messages, so arrival order tells you nothing about the true order of events. By stamping each message
        with a Lamport logical clock, a process can recover the correct causal order even when deliveries arrive scrambled.
        Building on that, I implemented Lamport's distributed mutual-exclusion algorithm, which lets the processes agree on
        exclusive access to a shared resource with no central coordinator.
      </p>

      <h4>What It Does</h4>
      <ul>
        <li>Runs N processes, each on its own thread, communicating only by message passing over an in-memory network.</li>
        <li>Implements Lamport logical clocks so the causal order of events is recoverable despite delayed, dropped, or reordered delivery.</li>
        <li>Implements Lamport's distributed mutual-exclusion algorithm, granting exclusive access with no central lock.</li>
        <li>Injects controllable network chaos to stress the system, and demonstrates that the mutex depends on reliable, in-order delivery — turning it on deadlocks the algorithm.</li>
      </ul>

      <h4>How It Works</h4>
      <ul>
        <li>A layered, header-based C++17 design: a message type and a big-endian wire format, an abstract transport interface with an in-memory implementation, per-process endpoints, and a chaos decorator — each layer swappable.</li>
        <li>Thread-safe building blocks: a blocking message queue built on <code>std::mutex</code> and <code>std::condition_variable</code>, a worker thread per process, and RAII-based thread and resource lifetimes.</li>
        <li>A thread-safe Lamport clock implementing the increment-and-<code>max</code> update rules, plus a total order that breaks timestamp ties by process id.</li>
        <li>The mutex is a monitor built around a request queue (<code>std::set</code>) and the logical clock, entering the critical section only once the algorithm's grant condition holds.</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/clockless-mutex' },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
