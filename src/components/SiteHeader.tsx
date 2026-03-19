import { navLinks } from '../data/homepageContent'

export function SiteHeader() {
  return (
    <header className="site-header js-header">
      <a className="brand" href="#top">
        <img
          src="/images/log.png"
          alt=""
          className="brand__logo"
          aria-hidden="true"
        />
        <span className="brand__name">mybindle</span>
      </a>

      <nav aria-label="Primary">
        <ul className="site-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="site-header__button" href="#download">
        Download
      </a>
    </header>
  )
}
