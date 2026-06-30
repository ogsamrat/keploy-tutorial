'use client'

import { useState } from 'react'

export default function Screenshot({ src, alt = '', caption, hint }) {
  const [failed, setFailed] = useState(!src)

  return (
    <figure className="shot">
      {failed ? (
        <div className="shot__placeholder" role="img" aria-label={alt || 'Screenshot placeholder'}>
          <span className="shot__placeholder-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </span>
          <span className="shot__placeholder-text">
            {hint || 'Drop your screenshot here'}
          </span>
          {src ? <code className="shot__placeholder-path">{src}</code> : null}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="shot__img" src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
      )}
      {caption ? <figcaption className="shot__caption">{caption}</figcaption> : null}
    </figure>
  )
}
