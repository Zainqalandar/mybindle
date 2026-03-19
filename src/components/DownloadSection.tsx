import { PhoneMockup } from './PhoneMockup'

export function DownloadSection() {
  return (
    <section className="section section--download js-reveal-group" id="download">
      <div className="container">
        <div className="download-banner">
          <div className="download-copy">
            <p className="download-copy__eyebrow js-reveal">Always evolving</p>
            <h2 className="download-copy__title js-reveal">Join the Fun - Download MyBindle Now!</h2>
            <p className="download-copy__description js-reveal">
              Your social network, your way. Download MyBindle and be a part of a community
              that keeps growing with you.
            </p>
            <div className="download-copy__actions js-reveal">
              <a className="primary-button primary-button--dark" href="#top">
                Download app
              </a>
            </div>
          </div>

          <div className="download-visual js-reveal">
            <div className="download-visual__badge">Community picks</div>
            <PhoneMockup className="download-visual__phone" />
          </div>
        </div>
      </div>
    </section>
  )
}
