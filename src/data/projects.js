// Single source of truth for the projects grid on the home page.
// `slug` maps to a detail route (/projects/:slug) resolved in App.jsx.
// Entries with `external: true` link straight out instead of to a detail page.
// Order here is the order rendered in the grid.

export const projects = [
  {
    slug: 'accelerated-image-processing',
    title: 'Accelerated Image Processing',
    blurb:
      'A C++ command-line tool that runs a pipeline of GPU-accelerated image filters in OpenCL and benchmarks each one against a CPU baseline, showing where GPU offloading does and does not pay off.',
    tags: ['OpenCL', 'C++', 'GPU Computing', 'Benchmarking'],
  },
  {
    slug: 'vouch',
    title: 'Vouch',
    blurb:
      'A composable Elixir library that chains every layer of connection trust — reachability, TLS/PKI, and data integrity — into one verdict.',
    tags: ['Elixir', 'BEAM / OTP', 'TLS & PKI', 'Open Source'],
  },
  {
    slug: 'vouch-monitor',
    title: 'Vouch Monitor',
    blurb:
      'A real-time Phoenix LiveView trust monitor that continuously runs the Vouch chain against live endpoints and shows per-check verdicts.',
    tags: ['Elixir', 'Phoenix LiveView', 'OTP', 'Real-Time UI'],
  },
  {
    slug: 'clockless-mutex',
    title: 'Clockless Mutex',
    blurb:
      'A from-scratch C++ implementation of Lamport logical clocks and distributed mutual exclusion — threaded processes coordinating over an unreliable, message-passing network with no shared clock.',
    tags: ['C++', 'Distributed Systems', 'Concurrency', 'Lamport Clocks'],
  },
  {
    slug: 'terminalmon',
    title: 'TerminalMon',
    blurb:
      'A Pokémon-inspired terminal companion, published to PyPI, that levels up as you use your shell.',
    tags: ['Python', 'CLI', 'Packaging', 'PyPI'],
  },
  {
    slug: 'spotigang',
    title: 'Spotigang',
    blurb:
      'A full-stack music social feed built on the Spotify API, with secure auth and a friend-sharing feed.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Spotify API'],
  },
  {
    slug: 'frc2996',
    title: 'FRC 2996',
    blurb:
      'Robot control software and competition field technician work for FIRST Robotics Competition Team 2996.',
    tags: ['Java', 'WPILib', 'Embedded', 'Autonomous'],
  },
  {
    slug: 'ml-demo',
    title: 'ML Demo',
    blurb:
      'Applied machine learning demo predicting stock prices and Stanley Cup winners, with a C++ data-prep tool.',
    tags: ['Python', 'scikit-learn', 'pandas', 'C++'],
  },
  {
    slug: 'this-website',
    title: 'This Website',
    blurb:
      "The responsive portfolio you're on now — a React + Vite single-page app, hand-built and deployed via cPanel, SSH, and LFTP.",
    tags: ['React', 'Vite', 'React Router', 'Bootstrap'],
    href: 'https://github.com/bsafig/portfolio-web-page',
    external: true,
  },
]
