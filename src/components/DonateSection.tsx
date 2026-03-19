export function DonateSection() {
  return (
    <section className="section js-reveal-group">
      <div className="container">
        <div className="donation-banner">
          <div className="donation-copy">
            <p className="donation-copy__eyebrow js-reveal">Give back</p>
            <h2 className="donation-copy__title js-reveal">Be the Reason Someone Smiles Today!</h2>
            <p className="donation-copy__description js-reveal">
              Your generosity can change lives. Every donation brings hope, support, and a
              brighter future to someone who needs it.
            </p>
            <a className="primary-button primary-button--light js-reveal" href="#download">
              Donate Now
            </a>
          </div>

          <div className="donation-art js-reveal">
            <div className="donation-art__phone">
              <div className="donation-art__screen">
                <div className="donation-art__list-card" />
                <div className="donation-art__list-card donation-art__list-card--small" />
              </div>
            </div>

            <div className="donation-heart">
              <span className="donation-heart__shape" />
              <strong>That You!</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
