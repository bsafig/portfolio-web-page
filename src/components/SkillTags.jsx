// Rounded pill list of skills used on a project. `tags` is an array of strings.
export default function SkillTags({ tags }) {
  return (
    <ul className="skill-tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}
