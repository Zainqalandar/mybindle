import { Fragment } from 'react'
import { installSteps } from '../data/homepageContent'

export function InstallSection() {
  return (
    <section className="section section--soft install-section js-reveal-group" id="install">
      <div className="container install-section__container">
        <div className="install-section__header">
          <h2 className="install-section__title js-reveal">How to Install Our App</h2>
          <p className="install-section__description js-reveal">
            Getting started is quick and easy! Follow these simple steps to install and start
            using MyBindle today.
          </p>
        </div>

        <div className="install-section__timeline js-reveal" aria-hidden="true">
          {installSteps.map((step, index) => (
            <Fragment key={step.step}>
              <span
                className={`install-section__marker ${index === 0 ? 'install-section__marker--active' : ''}`}
              >
                {step.step}
              </span>
              {index < installSteps.length - 1 ? <span className="install-section__connector" /> : null}
            </Fragment>
          ))}
        </div>

        <div className="install-section__cards">
          {installSteps.map((step) => (
            <article className="install-card js-reveal js-hover-card" key={step.step}>
              <span className="install-card__mobile-step">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
