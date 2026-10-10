import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'C++17', 'Data Structures', 'Performance Optimization', 'CPU Cache Behavior',
  'Benchmarking & Profiling', 'Systems Design', 'Memory Layout', 'Latency Analysis',
  'Cache Locality', 'Binary Search', 'Order Book Architecture', 'Hardware-Aware Design',
]

export default function OrderMeThis() {
  return (
    <ProjectLayout
      title="order-me-this"
      subtitle="A limit order book comparing data structures for latency-critical matching"
    >
      <p>
        order-me-this is a minimal C++ limit order book that compares three data structures: std::map, std::unordered_map,
        and sorted deque. I isolated their performance on the matching hot path and found a 3.7x speedup from sequential
        memory access over pointer-chasing. It's a concrete example of how the right data structure choice can dominate
        performance in latency-critical systems.
      </p>

      <p>
        Big-O notation doesn't always predict real-world performance when hardware matters. A sorted deque with O(log n)
        lookup beats a O(1) hash table at matching orders because cache locality wins. Matching is about consuming existing
        price levels as fast as possible, which means iteration speed matters way more than insertion cost. In real systems,
        hardware design shapes what algorithms actually work.
      </p>

      <h4>The Three Implementations</h4>
      <ul>
        <li>
          <strong>std::map (red-black tree):</strong> O(log n) insert and lookup, always ordered. The problem:
          traversing the tree means pointer-chasing across the heap, which causes L1 cache misses. Performance:
          12.5M ops/sec.
        </li>
        <li>
          <strong>std::unordered_map (hash table):</strong> O(1) average lookup, fast inserts. But iteration
          bounces all over memory, and hash conflicts create secondary lookups. Performance: 18.4M ops/sec.
          Faster than map, but not by much because iteration still kills it.
        </li>
        <li>
          <strong>Sorted deque (array-like with binary search):</strong> Inserting in the middle is O(n) and slow,
          but lookup is O(log n) and iteration is sequential. Matching performance: 46.7M ops/sec. That's 3.7x faster
          than std::map and 2.5x faster than unordered_map.
        </li>
      </ul>

      <h4>The Benchmark Insight</h4>
      <p>
        At first, I ran a naive benchmark that measured everything together (inserts and matches). The sorted deque
        came out 60x slower. That was totally wrong. In a real trading system, building the order book happens once at
        startup, but matching price levels happens thousands of times a second. I was measuring the wrong thing.
      </p>
      <p>
        So I split the benchmark: build phase (unmeasured setup), then matching phase (the actual workload). I used a
        narrower price range so most orders would hit existing levels instead of creating new ones. That's when the
        sorted deque's advantage showed up: 3.7x faster. It's a good reminder that benchmarking only matters if you're
        measuring the right operation.
      </p>

      <h4>Performance Results</h4>
      <p>
        Built 100k orders during setup (unmeasured), then executed 50k market orders (the measured part). Price range
        is 100 to 120, so most orders hit existing levels instead of creating new ones.
      </p>
      <ul>
        <li><strong>std::map:</strong> 12.5M ops/sec, 79.9 ns/op</li>
        <li><strong>std::unordered_map:</strong> 18.4M ops/sec, 54.5 ns/op</li>
        <li><strong>Sorted deque:</strong> 46.7M ops/sec, 21.4 ns/op (winner)</li>
      </ul>
      <p>
        That's 3.7x faster than std::map, purely from cache locality in the matching loop.
      </p>

      <h4>Code Structure</h4>
      <p>
        The entire project is under 400 lines of C++:
      </p>
      <ul>
        <li><strong>orderbook.h (~190 lines):</strong> Three OrderBook implementations sharing a common interface.</li>
        <li><strong>main.cpp (~110 lines):</strong> Benchmark harness with timed matching phase and formatted output.</li>
        <li><strong>build.bat (1 line):</strong> Simple g++ compile: <code>g++ -O3 -march=native -std=c++17 main.cpp -o orderbook.exe</code></li>
      </ul>

      <h4>Design Decisions</h4>
      <p>
        I kept the implementation small and focused. The goal is to isolate one performance question, so anything that
        doesn't directly support that got cut:
      </p>
      <ul>
        <li><strong>No order cancellations:</strong> That's extra complexity I don't need to test matching speed.</li>
        <li><strong>No partial fills:</strong> Full fills keep the code simple and still measure what matters.</li>
        <li><strong>No order IDs or history:</strong> Not necessary for measuring latency.</li>
        <li><strong>Market orders only:</strong> Hits the hot path (consuming price levels) directly.</li>
      </ul>
      <p>
        The whole project is under 400 lines. It's tight, understandable, and asks exactly one question well.
      </p>

      <h4>Key Insight</h4>
      <p>
        The 3.7x speedup shows something Big-O notation misses: performance depends on hardware, not just algorithms.
        The early mismeasurement taught me that you have to measure the actual workload, not everything mixed together.
        Otherwise you're optimizing blind.
      </p>
      <p>
        Data structure choice really comes down to the CPU's memory hierarchy. Sequential memory access wins because one
        L1 cache line can bring in multiple price levels at once. Hash tables scatter data across memory, and trees require
        pointer-chasing. In real systems, you build the book once, but matching happens constantly. So you optimize for
        matching speed, not insertion speed. That changes everything.
      </p>

      <h4>Technical Highlights</h4>
      <ul>
        <li><strong>Separated the benchmark:</strong> Build phase (unmeasured) and hot path (measured) to isolate what actually matters.</li>
        <li><strong>Used std::deque:</strong> Avoids the O(n) insertion overhead of std::vector while keeping cache-friendly iteration.</li>
        <li><strong>Binary search:</strong> lower_bound for O(log n) lookups on the sorted structure.</li>
        <li><strong>Real throughput numbers:</strong> 150k total operations with min/max/avg timing to see the whole picture.</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/order-me-this' },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
