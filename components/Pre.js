'use client'

import { useRef, useState } from 'react'

export default function Pre({ children, ...props }) {
  const preRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    const text = preRef.current?.innerText ?? ''
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ''))
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fail quietly.
    }
  }

  return (
    <div className="code-block">
      <button
        type="button"
        className={`code-block__copy${copied ? ' is-copied' : ''}`}
        onClick={copy}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </>
        )}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  )
}
