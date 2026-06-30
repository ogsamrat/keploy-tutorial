import './globals.css'
import ThemeProvider from '../components/ThemeProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

export const metadata = {
  title: 'Your Tests, Recorded Live: a Go and Keploy field guide',
  description:
    'A friendly, beginner walkthrough of running a Keploy quickstart on a Go (Gin and MongoDB) app: record real traffic, replay it as tests, and watch it catch a regression. The rough bits are included.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Your Tests, Recorded Live: a Go and Keploy field guide',
    description:
      'Record real API traffic, replay it as tests, and watch Keploy catch a bug. Built with Next.js and MDX.',
    type: 'article',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#121316' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main className="page">{children}</main>
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
