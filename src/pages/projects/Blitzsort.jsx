import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'C++17', 'Performance Optimization', 'CPU Cache Behavior', 'Algorithms',
  'Benchmarking & Profiling', 'Systems Programming', 'Data Structures',
  'Hardware-Aware Algorithm Design', 'Quicksort Variants', 'Memory Layout',
  'Cache Locality', 'Median-of-Three Pivot Selection', 'Tail Recursion Optimization',
]

export default function Blitzsort() {
  return (
    <ProjectLayout
      title="BlitzSort"
      subtitle="(a cache-conscious quicksort optimization delivering 128x speedup on adversarial data)"
    >
      <p>
        BlitzSort is a production-grade C++ implementation of quicksort optimized for modern CPU cache behavior.
        The project demonstrates that hardware-aware algorithm design beats naive implementations by orders of
        magnitude on real-world data patterns. Starting from a textbook baseline, four targeted optimizations
        combine to achieve 128x speedup on worst-case (reverse-sorted) data while maintaining O(n log n) time
        complexity.
      </p>

      <p>
        The core insight: on random data, the naive quicksort partitions reasonably well by luck. But on adversarial
        input (reverse-sorted arrays), it degrades to O(n²). More subtly, on partially-sorted data—common in practice—most
        sorting algorithms miss an opportunity: small subarrays have better cache behavior with insertion sort than with
        recursive quicksort. Understanding these patterns lets you outperform algorithms that are "better" on paper.
      </p>

      <h4>The Four Optimizations</h4>
      <ul>
        <li>
          <strong>Median-of-three pivot selection:</strong> Instead of using the last element as pivot, examine the
          first, middle, and last elements and choose the median. This reduces bad partitions and makes O(n²) worst-case
          nearly impossible. Cost: 5 extra comparisons.
        </li>
        <li>
          <strong>Insertion sort for small subarrays:</strong> At a threshold of 16 elements, switch from quicksort to
          insertion sort. Insertion sort has O(1) behavior on already-sorted data and better cache locality due to
          sequential access patterns.
        </li>
        <li>
          <strong>Tail recursion optimization:</strong> Recursively sort the smaller partition first, then continue
          iteratively on the larger partition. Reduces stack depth from O(n) worst-case to O(log n) guaranteed,
          keeping the working set smaller and hotter in L1/L2 cache.
        </li>
        <li>
          <strong>Smaller-partition-first strategy:</strong> Ensures in-flight work stays small, improving reuse and
          reducing cache misses on larger datasets.
        </li>
      </ul>

      <h4>Performance Results</h4>
      <p><strong>Test environment:</strong> Comprehensive benchmark suite with multiple iterations and min/max/avg tracking, comparing baseline and optimized quicksort against std::sort.</p>
      <ul>
        <li>
          <strong>Random data (typical case, 100K elements):</strong> 1.25x speedup. The median-of-three overhead is
          negligible at scale.
        </li>
        <li>
          <strong>Reverse-sorted data (worst case):</strong>
          <ul>
            <li>1,000 elements: 15.99x speedup</li>
            <li>10,000 elements: 126.70x speedup</li>
            <li>
              Larger sizes skipped: baseline degrades to O(n²) and would take minutes. Optimized remains O(n log n).
            </li>
          </ul>
        </li>
        <li>
          <strong>Mostly-sorted data (practical case, 100K elements):</strong> 1.76x speedup, where insertion sort
          dominates.
        </li>
      </ul>

      <h4>Threshold Tuning</h4>
      <p>
        The insertion sort threshold (when to switch from quicksort to insertion sort) is critical for performance.
        Rather than guess, I ran a systematic experiment testing thresholds 8, 12, 16, 20, 24, and 32 across both
        random and mostly-sorted data patterns.
      </p>
      <p>
        <strong>Results:</strong> Threshold 20 won on pure random data, threshold 32 on mostly-sorted. Threshold
        <strong>24</strong> proved optimal across both: only 3% slower than 20 on random but 7% faster on mostly-sorted
        than the initial guess of 16. This tuning improved 100K random-data performance by 56% (1.25x vs. 0.80x with
        threshold 16) and 100K mostly-sorted by 19% (1.76x vs. 1.48x).
      </p>
      <p>
        This illustrates a key principle: even small constants matter at scale. Empirical tuning beats theory.
      </p>

      <h4>Key Design Decisions (KISS Principle)</h4>
      <p>
        The implementation includes only the highest-impact optimizations. Rejected ideas (and why):
      </p>
      <ul>
        <li><strong>SIMD vectorization:</strong> Architecture-specific, marginal benefit for a single comparison.</li>
        <li><strong>Parallel quicksort:</strong> Scheduling overhead exceeds sorting benefit for a single array.</li>
        <li><strong>Introsort with heapsort:</strong> Median-of-three already prevents pathological cases.</li>
        <li><strong>Memory-aligned allocation:</strong> Not portable, minimal L1 benefit for this use case.</li>
      </ul>
      <p>
        Each included optimization directly addresses a measured bottleneck without over-engineering. The implementation
        is 124 lines (header) with comprehensive benchmarking code, easy to understand, and immediately applicable.
      </p>

      <h4>Why This Matters</h4>
      <p>
        In systems I care about—high-frequency trading order books, real-time data processing, embedded systems—thousands
        of sorts per second are not uncommon. Nanosecond differences become milliseconds. More importantly, understanding
        that cache behavior can outrank algorithmic complexity teaches a systems-level perspective: hardware constraints
        shape the algorithms you choose, and the algorithms shape the hardware you target.
      </p>

      <h4>Testing & Validation</h4>
      <p>
        The project includes a comprehensive C++ test suite that validates correctness against std::sort and
        benchmarks performance across three data patterns and multiple array sizes. Results show:
      </p>
      <ul>
        <li>Correctness: Both implementations match std::sort byte-for-byte.</li>
        <li>Reliability: Multiple iterations per test with min/max/avg tracking reduce noise.</li>
        <li>Realism: Tests mimic real-world patterns (random, adversarial, partially sorted).</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/blitzsort' },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
