import { connectionPoints } from '../data/homepageContent'

export function ConnectionSection() {
  return (
    <section className="section section--split js-reveal-group">
      <div className="container connection-layout">
        <div className="connection-visual js-reveal">
          <img
            src="/images/Sparks.png"
            alt="Two mobile screens showing the MyBindle social experience"
            className="connection-visual__image"
          />
        </div>

        <div className="connection-copy">
          <h2 className="connection-copy__title js-reveal">Where Every Click Sparks a Connection!</h2>
          <p className="connection-copy__description js-reveal">
            A small act of kindness today can create a lifetime of impact for someone in
            need. Give from the heart and change a life!
          </p>

          <div className="connection-list">
            {connectionPoints.map((point) => (
              <article className="connection-point js-reveal js-hover-card" key={point.title}>
                <div className="connection-point__title-row">
                  <span aria-hidden="true">{point.icon}</span>
                  <h3>{point.title}</h3>
                </div>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
