import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

/** Shiki options: code blocks render as a dark "terminal" panel in both themes. */
const prettyCodeOptions = {
  theme: 'github-dark-dimmed',
  keepBackground: false,
  defaultLang: 'plaintext',
}

/** Make each heading link to itself (a small "#" on hover). */
const autolinkOptions = {
  behavior: 'append',
  properties: { className: ['heading-anchor'], ariaLabel: 'Link to this section' },
  content: { type: 'text', value: '#' },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkOptions],
      [rehypePrettyCode, prettyCodeOptions],
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
