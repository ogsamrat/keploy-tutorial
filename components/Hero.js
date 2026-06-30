export default function Hero() {
  return (
    <header className="doc-intro" id="top">
      <p className="hero__kicker">A field guide · Go + Keploy</p>

      <h1 className="hero__title">
        Your tests,{' '}
        <span className="hero__title-accent">recorded live.</span>
      </h1>

      <p className="hero__lede">
        What if your integration tests wrote <em>themselves</em> while you poked at your API?
        That is more or less the pitch of <strong>Keploy</strong>, and I wanted to find out if
        it held up. I had never used it before. By the end of one afternoon I had{' '}
        <strong>13 passing tests</strong> on a Go app and had not written a single one by hand.
        This is how it went, the rough bits included.
      </p>

      <div className="hero__meta">
        <span className="hero__meta-item">
          <span className="hero__meta-k">Stack</span>
          <span className="hero__meta-v">Go · Gin · MongoDB</span>
        </span>
        <span className="hero__meta-item">
          <span className="hero__meta-k">Level</span>
          <span className="hero__meta-v">Beginner</span>
        </span>
        <span className="hero__meta-item">
          <span className="hero__meta-k">Read time</span>
          <span className="hero__meta-v">~12 min</span>
        </span>
      </div>
    </header>
  )
}
