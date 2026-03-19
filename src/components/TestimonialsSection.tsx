import { startTransition, useState } from 'react'
import { testimonials } from '../data/homepageContent'

const INITIAL_VISIBLE_TESTIMONIALS = 6

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false)

  const previewTestimonials = testimonials.slice(INITIAL_VISIBLE_TESTIMONIALS)
  const leftPreview = previewTestimonials[0]
  const rightPreview = previewTestimonials[1]

  const handleToggle = () => {
    startTransition(() => {
      setShowAll((current) => !current)
    })
  }

  return (
    <section className="section section--white testimonial-section js-reveal-group" id="stories">
      <div className="container testimonial-section__container">
        <div className="testimonial-section__header">
          <h2 className="testimonial-section__title js-reveal">What Our Users Say</h2>
        </div>

        <div className="testimonial-grid" id="testimonial-grid">
          {testimonials.map((testimonial, index) => {
            const isHidden = index >= INITIAL_VISIBLE_TESTIMONIALS && !showAll

            return (
              <article
                aria-hidden={isHidden}
                className={`testimonial-card js-reveal ${isHidden ? 'testimonial-card--hidden' : ''}`}
                key={testimonial.name}
              >
                <span className="testimonial-card__stars" aria-hidden="true">
                  ★★★★★
                </span>

                <p>{testimonial.quote}</p>

                <footer className="testimonial-card__author">
                  <span className={`testimonial-card__avatar testimonial-card__avatar--${index % 8}`}>
                    {getInitials(testimonial.name)}
                  </span>

                  <span className="testimonial-card__meta">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </span>
                </footer>
              </article>
            )
          })}
        </div>

        {previewTestimonials.length ? (
          <div className={`testimonial-footer js-reveal ${showAll ? 'testimonial-footer--expanded' : ''}`}>
            {showAll ? (
              <button
                aria-controls="testimonial-grid"
                aria-expanded={showAll}
                className="testimonial-footer__button"
                onClick={handleToggle}
                type="button"
              >
                Show Less
              </button>
            ) : (
              <>
                {leftPreview ? (
                  <article className="testimonial-preview-card" aria-hidden="true">
                    <p>{leftPreview.quote}</p>
                  </article>
                ) : (
                  <div />
                )}

                <button
                  aria-controls="testimonial-grid"
                  aria-expanded={showAll}
                  className="testimonial-footer__button testimonial-footer__button--center"
                  onClick={handleToggle}
                  type="button"
                >
                  See More
                </button>
                {rightPreview ? (
                  <article className="testimonial-preview-card" aria-hidden="true">
                    <p>{rightPreview.quote}</p>
                  </article>
                ) : (
                  <div />
                )}
              </>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
