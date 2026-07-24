import ProjectLayout from '../../components/ProjectLayout.jsx'
import Carousel from '../../components/Carousel.jsx'

const slides = [
  { type: 'image', src: '/frc2996/carousel-content/2023_img.png', alt: 'FRC 2996 robot, 2023 season' },
  { type: 'image', src: '/frc2996/carousel-content/2024_img.png', alt: 'FRC 2996 robot, 2024 season' },
  { type: 'video', src: '/frc2996/carousel-content/auto_2023.mp4' },
  { type: 'video', src: '/frc2996/carousel-content/auto_2024.mp4' },
]

export default function Frc2996() {
  return (
    <ProjectLayout title="FIRST Robotics Competition Team 2996">
      <Carousel slides={slides} />

      <p>
        The FIRST Robotics Competition (FRC) is an international high school robotics program where teams of students
        design, build, and program industrial-sized robots to compete in complex, game-based engineering challenges.
        Each season kicks off with a new game reveal, giving teams just six to eight weeks to brainstorm, prototype, and
        construct a fully functional robot that can complete tasks like scoring game pieces, climbing structures, or
        cooperating with other robots. The competition blends real-world engineering with fast-paced gameplay, and
        emphasizes values like teamwork, creativity, and gracious professionalism. Backed by mentors and industry
        sponsors, FRC gives students hands-on experience with advanced technology and prepares them for careers in STEM
        and beyond.
      </p>

      <p>
        As a member of FRC team 2996 in high school, I took on dual roles as a robotics programmer and the technician on
        the competition drive team. I developed and maintained robot control systems using Java and WPILib, implementing
        autonomous routines, driver input handling, and vision-based targeting. On the field, I served as the
        technician—diagnosing and repairing mechanical, electrical, and software issues under strict time constraints
        during competitions. This experience sharpened my skills in collaborative problem-solving, real-time debugging,
        and delivering reliable code and hardware in a high-pressure, team-driven environment.
      </p>

      <h5>Skills learned</h5>
      <ul>
        <li>Java</li>
        <li>embedded software development</li>
        <li>autonomous programming</li>
        <li>performance in high-stakes environments</li>
        <li>deliver results working on strict time schedules</li>
        <li>working with a team</li>
      </ul>
    </ProjectLayout>
  )
}
