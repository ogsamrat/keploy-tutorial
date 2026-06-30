'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

// Section anchors match the slugs rehype-slug generates from each h2.
const SECTIONS = [
  { id: 'what-even-is-keploy', label: 'What even is Keploy?' },
  { id: 'the-one-minute-mental-model', label: 'Mental model' },
  { id: 'getting-set-up-the-windows-tax', label: 'Getting set up' },
  { id: 'step-1-install-keploy', label: '1 - Install' },
  { id: 'step-2-grab-a-victim-app', label: '2 - Grab the app' },
  { id: 'step-3-hit-record', label: '3 - Record' },
  { id: 'step-4-meet-your-generated-tests', label: '4 - The tests' },
  { id: 'step-5-replay-and-the-green-wall', label: '5 - Replay' },
  { id: 'step-6-break-it-on-purpose', label: '6 - Break it' },
  { id: 'gotchas-i-hit-so-you-dont', label: 'Gotchas' },
  { id: 'why-a-go-dev-should-care', label: 'Why it matters' },
  { id: 'where-to-go-next', label: 'Where to go next' },
]

export default function DocNav() {
  const [active, setActive] = useState(SECTIONS[0].id)
  const [query, setQuery] = useState('')
  // id -> lowercased text of the whole section (heading + everything until the next h2)
  const [index, setIndex] = useState({})
  const inputRef = useRef(null)

  // Build a lightweight full-text index from the rendered DOM, once.
  useEffect(() => {
    const map = {}
    for (const s of SECTIONS) {
      const heading = document.getElementById(s.id)
      if (!heading) {
        map[s.id] = s.label.toLowerCase()
        continue
      }
      let text = `${s.label} ${heading.textContent || ''}`
      let node = heading.nextElementSibling
      while (node && node.tagName !== 'H2') {
        text += ' ' + (node.textContent || '')
        node = node.nextElementSibling
      }
      map[s.id] = text.toLowerCase()
    }
    setIndex(map)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const headings = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px', threshold: 0 }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  // Keyboard: "/" or Cmd/Ctrl+K focuses search, Esc clears it.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement && document.activeElement.tagName
      const typing = tag === 'INPUT' || tag === 'TEXTAREA'
      if (e.key === '/' && !typing) {
        e.preventDefault()
        inputRef.current && inputRef.current.focus()
      } else if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        inputRef.current && inputRef.current.focus()
      } else if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setQuery('')
        inputRef.current.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const q = query.trim().toLowerCase()
  const results = useMemo(() => {
    if (!q) return SECTIONS
    return SECTIONS.filter((s) => (index[s.id] || s.label.toLowerCase()).includes(q))
  }, [q, index])

  const jumpTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (typeof history !== 'undefined') history.replaceState(null, '', `#${id}`)
  }

  return (
    <aside className="docnav" aria-label="Guide navigation">
      <div className="docnav__search">
        <svg
          className="docnav__search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          className="docnav__input"
          placeholder="Search this guide"
          aria-label="Search this guide"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query ? null : (
          <kbd className="docnav__kbd" aria-hidden="true">
            /
          </kbd>
        )}
      </div>

      <p className="docnav__title">{q ? 'Results' : 'On this page'}</p>
      <ul className="docnav__list">
        {results.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => jumpTo(e, s.id)}
              className={`docnav__link${active === s.id && !q ? ' is-active' : ''}`}
            >
              {s.label}
            </a>
          </li>
        ))}
        {results.length === 0 ? <li className="docnav__empty">No matches</li> : null}
      </ul>
    </aside>
  )
}
