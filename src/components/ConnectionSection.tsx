import { connectionPoints } from '../data/homepageContent'
import { PhoneMockup } from './PhoneMockup'
import { SectionHeading } from './SectionHeading'

export function ConnectionSection() {
  return (
    <section className="section section--split js-reveal-group">
      <div className="container connection-layout">
        <div className="device-stack js-reveal">
          <div className="device-stack__card device-stack__card--back js-device-card--back">
            <PhoneMockup compact variant="chat" />
          </div>
          <div className="device-stack__card device-stack__card--front js-device-card--front">
            <PhoneMockup compact />
          </div>
        </div>

        <div className="connection-copy">
          <SectionHeading
            align="left"
            eyebrow="Connection"
            title="Where Every Click Sparks a Connection!"
            description="Give creators, communities, and everyday conversations a home that feels active from the first scroll."
          />

          <div className="connection-list">
            {connectionPoints.map((point) => (
              <article className="connection-point js-reveal js-hover-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
