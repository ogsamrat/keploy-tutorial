import Pre from './components/Pre'
import Callout from './components/Callout'
import Hero from './components/Hero'
import LoopDiagram from './components/LoopDiagram'
import ResultPanel from './components/ResultPanel'
import Screenshot from './components/Screenshot'
import Cheatsheet from './components/Cheatsheet'
import DocNav from './components/DocNav'

// Provided automatically to every .mdx file in the app (App Router convention).
export function useMDXComponents(components) {
  return {
    // Code fences become a dark terminal panel with a copy button.
    pre: Pre,
    // Custom building blocks usable directly inside MDX, no import needed.
    Hero,
    Callout,
    LoopDiagram,
    ResultPanel,
    Screenshot,
    Cheatsheet,
    DocNav,
    ...components,
  }
}
