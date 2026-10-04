import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'Verilog', 'FPGA Design', 'Digital Logic', 'Hardware Simulation',
  'iVerilog', 'GTKWave', 'Pipelining', 'Register-Transfer Level',
  'Timing Analysis', 'Makefile', 'Git',
]

export default function FpgaPipelinedAdder() {
  return (
    <ProjectLayout
      title="FPGA Pipelined Adder"
      subtitle="(comparing pipelined vs. non-pipelined adder designs with hardware simulation)"
    >
      <p>
        FPGA Pipelined Adder is a Verilog project that implements and compares two 16-bit addition designs:
        a straightforward combinational adder and a fully pipelined version that trades latency for throughput.
        The design demonstrates the fundamental trade-offs in digital hardware: pipelined circuits achieve
        higher clock frequencies and better throughput but introduce pipeline depth and latency.
      </p>

      <p>
        The project is built around a comprehensive testbench that feeds both designs identical inputs across
        multiple test vectors, including normal values, edge cases, and 16-bit overflows. A Makefile orchestrates
        compilation via iVerilog and simulation via VVP, with waveform output ready for visual inspection in GTKWave.
        The side-by-side simulation reveals exactly how the pipelined design trades immediate results for a
        higher clock frequency and sustained throughput.
      </p>

      <h4>What It Does</h4>
      <ul>
        <li>Implements a non-pipelined adder that adds two 16-bit inputs and outputs the sum in one clock cycle.</li>
        <li>Implements a fully pipelined adder that breaks the addition across multiple pipeline stages, reducing the critical path and enabling higher clock frequencies.</li>
        <li>Runs both designs in parallel against the same test vectors in a unified testbench, comparing outputs cycle by cycle.</li>
        <li>Generates VCD waveforms that can be inspected in GTKWave to visualize latency, throughput, and correctness.</li>
      </ul>

      <h4>Design Details</h4>
      <ul>
        <li>Non-pipelined design: Combinational addition with register outputs, one result per cycle after one-cycle latency.</li>
        <li>Pipelined design: Input, sum, and valid signals propagate through multiple flip-flop stages, enabling much higher clock frequency.</li>
        <li>Both designs accept a <code>valid_in</code> signal so the testbench can push data only when ready, and both output <code>valid_out</code> to track when results are available.</li>
        <li>Test vectors cover small sums (100 + 50), medium values (1000 + 2000), and overflow cases (0xFFFF + 0xFFFF).</li>
      </ul>

      <ProjectLinks
        links={[
          { label: 'View on GitHub →', href: 'https://github.com/bsafig/fpga-pipelined-adder' },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
