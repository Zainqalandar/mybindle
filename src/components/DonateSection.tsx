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
            <a className="primary-button primary-button--light primary-button--coral-cta js-reveal" href="#download">
              Donate Now
            </a>
          </div>

          <div className="donation-art js-reveal">
            <img
              src="/images/small-image.png"
              alt="Payment methods mobile screen"
              className="donation-art__image donation-art__image--small"
            />
            <img
              src="/images/big-image.png"
              alt="Thank you mobile screen"
              className="donation-art__image donation-art__image--big"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
