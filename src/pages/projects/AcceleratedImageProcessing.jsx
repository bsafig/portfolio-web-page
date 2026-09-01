import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'OpenCL', 'C++17', 'GPU Computing', 'Parallel Programming', 'SIMT',
  'Heterogeneous Computing', 'Image Processing', 'Convolution Kernels',
  'Benchmarking & Profiling', 'Memory Hierarchy', 'Systems Programming',
  'Makefile', 'Git',
]

export default function AcceleratedImageProcessing() {
  return (
    <ProjectLayout
      title="Accelerated Image Processing"
      subtitle="(a GPU-accelerated image filter pipeline in OpenCL, with a CPU-vs-GPU benchmark)"
    >
      <p>
        Accelerated Image Processing is a C++ command-line tool that loads an image, runs a pipeline of
        GPU-accelerated filters on it using OpenCL, saves the result, and benchmarks every filter against a
        plain CPU implementation. It targets my machine's integrated Intel GPU, but the OpenCL code runs on
        any conformant device.
      </p>

      <p>
        The point of the project is to make the economics of GPU offloading visible. Each filter exists twice —
        once as a scalar CPU loop and once as an OpenCL kernel — so the tool can time them side by side and show
        exactly where the GPU wins and where it does not. Compute-heavy convolution filters land 15–26x speedups;
        trivial per-pixel filters barely move, because the fixed cost of copying the image across the bus swamps
        the tiny amount of math. That contrast is the whole lesson: a GPU pays off when the arithmetic per byte
        transferred is high.
      </p>

      <h4>What It Does</h4>
      <ul>
        <li>Applies five filters — grayscale, invert, brightness, 5&times;5 Gaussian blur, and Sobel edge detection — as a configurable pipeline from the command line.</li>
        <li>Benchmarks each filter CPU vs GPU, reporting end-to-end time, kernel-only time, and the resulting speedup.</li>
        <li>Verifies correctness by comparing CPU and GPU output per byte, surfacing the small floating-point differences instead of hiding them.</li>
        <li>Loads and saves common image formats (PNG, JPG, BMP, TGA) and chains filters into a single output image.</li>
      </ul>

      <h4>How It Works</h4>
      <ul>
        <li>One work-item per pixel across a 2-D NDRange, with 16&times;16 work-groups and a boundary guard for the padding that falls outside the image.</li>
        <li>Convolution weights live in <code>__constant</code> memory so every work-item broadcasts the same read; the row-major <code>uchar4</code> layout keeps global-memory access coalesced.</li>
        <li>Kernel-only timing comes from OpenCL profiling events, measured separately from the host&ndash;device transfers so the PCIe cost is never confused with compute.</li>
        <li>A small host-side engine handles device selection, runtime kernel compilation, buffer management, and cleanup; the CPU baselines mirror the kernels exactly for a fair comparison.</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/accelerated-image-processing' },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
