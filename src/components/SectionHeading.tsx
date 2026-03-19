type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow js-reveal">{eyebrow}</p> : null}
      <h2 className="section-heading__title js-reveal">{title}</h2>
      {description ? <p className="section-heading__description js-reveal">{description}</p> : null}
    </div>
  )
}
