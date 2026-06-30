function Chevron() {
  return (
    <span className="loop__chevron" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </span>
  )
}

function Tick() {
  return (
    <svg className="loop__tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="loop__tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export default function LoopDiagram() {
  return (
    <figure className="loop" aria-label="How Keploy works: you make real API calls, Keploy records them into test cases and mocks, then replays them and compares the responses.">
      <ol className="loop__track">
        <li className="loop__node">
          <span className="loop__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </span>
          <span className="loop__label">You hit the API</span>
          <span className="loop__sub">curl, Postman, the app itself</span>
        </li>

        <Chevron />

        <li className="loop__node">
          <span className="loop__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </span>
          <span className="loop__label">Keploy listens</span>
          <span className="loop__sub">captures every request and DB call</span>
        </li>

        <Chevron />

        <li className="loop__node">
          <span className="loop__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </span>
          <span className="loop__label">Tests plus mocks</span>
          <span className="loop__sub">saved as YAML, no code written</span>
        </li>

        <Chevron />

        <li className="loop__node">
          <span className="loop__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </span>
          <span className="loop__label">Replay and compare</span>
          <span className="loop__sub">
            <span className="loop__pass"><Tick /> pass</span>
            <span className="loop__sep">/</span>
            <span className="loop__fail"><Cross /> fail</span>
          </span>
        </li>
      </ol>
      <figcaption className="loop__caption">
        Record once from real usage. Replay it forever, with the database faked from those mocks.
      </figcaption>
    </figure>
  )
}
