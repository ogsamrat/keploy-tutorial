export default function ResultPanel({ variant = 'pass', label, children }) {
  const v = variant === 'fail' ? 'fail' : 'pass'
  const defaultLabel = v === 'pass' ? 'All green' : 'Regression caught'
  return (
    <div className={`result result--${v}`}>
      <div className="result__bar">
        <span className="result__icon" aria-hidden="true">
          {v === 'pass' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          )}
        </span>
        <span className="result__label">{label || defaultLabel}</span>
      </div>
      <div className="result__body">{children}</div>
    </div>
  )
}
