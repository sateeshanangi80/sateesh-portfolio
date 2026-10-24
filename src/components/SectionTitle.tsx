type Props = {
  eyebrow: string
  title: string
  copy?: string
}

export default function SectionTitle({ eyebrow, title, copy }: Props) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  )
}
