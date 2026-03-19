import { features } from '../data/homepageContent'

export function FeaturesSection() {
  return (
    <section className="section section--white features-section js-reveal-group" id="features">
      <div className="container features-section__container">
        <div className="features-section__header">
          <h2 className="features-section__title js-reveal">Features That Keep You Hooked!</h2>
          <p className="features-section__description js-reveal">
            Meet, Chat, Share - Anytime, Anywhere!
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card js-reveal js-hover-card" key={feature.title}>
              <div className="feature-card__title-row">
                <span className="feature-card__icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
