import { resumeData } from '../data'

/** The readable resume and generated downloads share src/resume-data.json. */
export default function ResumeDocument() {
  const { profile, summary, skills, experience, projects, education } = resumeData

  return (
    <article className="resume-document" aria-label={`${profile.name} resume`}>
      <header className="resume-head">
        <h3>{profile.name}</h3>
        <p className="resume-subhead">{profile.title} · {profile.specialization}</p>
        <div className="resume-contact-line">
          <span>{profile.location}</span>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="resume-contact-line">
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn / sateesh-anangi-5338b0259</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub / sateeshanangi80</a>
        </div>
      </header>
      <section className="resume-section">
        <h4>Professional summary</h4>
        <p className="resume-text">{summary}</p>
      </section>
      <section className="resume-section">
        <h4>Technical skills</h4>
        {skills.map((skill) => <p className="resume-skill-row" key={skill.label}><strong>{skill.label}:</strong> <span>{skill.items}</span></p>)}
      </section>
      <section className="resume-section">
        <h4>Work experience</h4>
        {experience.map((job) => (
          <div className="resume-job" key={job.company}>
            <div className="job-head"><strong>{job.role} · {job.company}</strong><span>{job.period}</span></div>
            {job.location && <p className="job-desc">{job.location}</p>}
            <ul className="job-bullets">{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </section>
      <section className="resume-section">
        <h4>Selected projects</h4>
        {projects.map((project) => (
          <div className="resume-project-item" key={project.name}>
            <div className="item-title"><a href={project.url} target="_blank" rel="noreferrer"><strong>{project.name}</strong></a><span> · {project.type}</span></div>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <section className="resume-section">
        <h4>Education</h4>
        {education.map((item) => <p className="resume-education" key={item.degree}><strong>{item.degree}</strong> · {item.institution} · {item.year}</p>)}
      </section>
    </article>
  )
}
