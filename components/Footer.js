export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="site-footer__brand" href="#top" aria-label="Keploy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/keploy-logo-dark.svg" alt="Keploy" width="74" height="24" />
        </a>
        <p className="site-footer__line">
          <span className="site-footer__line-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </span>
          <span>Written up after one real afternoon of recording, replaying, and breaking things on purpose.</span>
        </p>
        <p className="site-footer__links">
          <a href="https://keploy.io/docs/quickstart/quickstart-filter/" target="_blank" rel="noopener noreferrer">Keploy quickstarts</a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/keploy/samples-go" target="_blank" rel="noopener noreferrer">samples-go</a>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/keploy/keploy" target="_blank" rel="noopener noreferrer">Keploy on GitHub</a>
        </p>
        <p className="site-footer__fine">Not affiliated with Keploy.</p>
      </div>
    </footer>
  )
}
