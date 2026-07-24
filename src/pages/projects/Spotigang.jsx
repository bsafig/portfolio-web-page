import ProjectLayout from '../../components/ProjectLayout.jsx'
import ProjectLinks from '../../components/ProjectLinks.jsx'
import SkillTags from '../../components/SkillTags.jsx'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Handlebars', 'Node.js', 'Express',
  'PostgreSQL', 'Axios', 'Spotify API', 'Docker', 'Render', 'Mocha & Chai',
  'Full-Stack Development', 'Agile',
]

export default function Spotigang() {
  return (
    <ProjectLayout title="Spotigang" subtitle="(not affiliated with Spotify)">
      <p>
        Spotigang is a music-focused social feed application I built with a team as part of a full-stack web
        development course (CSCI 3308) during my sophomore year at CU Boulder. The app lets users create accounts, log
        in securely, and search for songs through the Spotify API. Beyond search, Spotigang is designed as a small
        social network for music: users can share songs to a feed, connect with friends, and browse what others are
        listening to.
      </p>

      <p>
        On the technical side, the front end is built with HTML, CSS, JavaScript, and Bootstrap, rendered through
        Handlebars templates. The back end runs on Node.js with the Express framework, backed by a PostgreSQL database,
        and reaches the Spotify API using Axios. The project was containerized with Docker Compose for consistent local
        development and is deployed live on Render. We also wrote unit tests using Mocha and Chai, and I collaborated
        with a team of five developers following an Agile workflow with milestone submissions and regular team meetings.
      </p>

      <ProjectLinks
        links={[
          { label: 'View Live App →', href: 'https://spotigang.onrender.com/login' },
          {
            label: 'View on GitHub',
            href: 'https://github.com/CU-CSCI3308-Fall2025/group-project-bsafig',
            secondary: true,
          },
        ]}
      />

      <h5>Skills Used</h5>
      <SkillTags tags={skills} />
    </ProjectLayout>
  )
}
