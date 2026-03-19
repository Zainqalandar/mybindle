import { heroContent } from '../data/homepageContent'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-section__container">
        <div className="hero-brand js-header">
          <span className="hero-brand__mark" aria-hidden="true">
            <span className="hero-brand__diamond hero-brand__diamond--top-left" />
            <span className="hero-brand__diamond hero-brand__diamond--top-right" />
            <span className="hero-brand__diamond hero-brand__diamond--center-left" />
            <span className="hero-brand__diamond hero-brand__diamond--center-right" />
            <span className="hero-brand__diamond hero-brand__diamond--bottom-left" />
            <span className="hero-brand__diamond hero-brand__diamond--bottom-right" />
          </span>
          <span className="hero-brand__name">Mybindle</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <h1 className="hero-copy__title">
              {heroContent.titleLines.map((line) => (
                <span className="hero-copy__line-wrap" key={line}>
                  <span className="hero-copy__line js-hero-line">{line}</span>
                </span>
              ))}
            </h1>

            <p className="hero-copy__description js-hero-item">{heroContent.description}</p>

            <div className="hero-copy__actions js-hero-item">
              <a className="primary-button primary-button--light" href="#features">
                {heroContent.ctaLabel}
              </a>
            </div>
          </div>

          <div className="hero-visual js-hero-visual">
            <div className="hero-floating-chip hero-floating-chip--top js-floating-chip">
              <span aria-hidden="true">🔥</span>
              <span>Seamless Connections</span>
            </div>

            <img
              style={{
                width: '1029.72px',
                // height: '1001.33px',
              }}
              src="/images/hero-image.png"
              alt=""
              className="hero-bg hero-bg--top hero-visual__phone js-hero-phone"
              aria-hidden="true"
            />

            <div className="hero-floating-chip hero-floating-chip--bottom js-floating-chip">
              <span aria-hidden="true">🌎</span>
              <span>Discover & Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
