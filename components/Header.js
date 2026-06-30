import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Keploy Go Field Guide, back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand__logo"
            src="/brand/keploy-logo-dark.svg"
            alt="Keploy"
            width="81"
            height="26"
          />
          <span className="brand__sep" aria-hidden="true">/</span>
          <span className="brand__sub">Go Field Guide</span>
        </a>

        <div className="site-header__right">
          <a
            className="ghost-link"
            href="https://keploy.io/docs/quickstart/quickstart-filter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            className="ghost-link"
            href="https://github.com/ogsamrat/keploy-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
