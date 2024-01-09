import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import NavBar from '@components/nav-bar';
import ThemeProvider from '@components/theme-provider';
import { GithubIcon, LinkIcon, LinkedInIcon, LogoIcon, RSSIcon, TwitterIcon } from '@components/icons';
import ThemeSwitcher from '@components/theme-switcher';

export const metadata: Metadata = {
  metadataBase: new URL('https://ayoubkhial.com'),
  title: {
    default: 'Ayoub Khial',
    template: '%s | Ayoub Khial'
  },
  description: 'Web developer.',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
        url: '/images/icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-dark.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        media: '(prefers-color-scheme: light)',
        url: '/images/apple-icon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        media: '(prefers-color-scheme: dark)',
        url: '/images/apple-icon-dark.png'
      }
    ]
  },
  openGraph: {
    title: 'Ayoub Khial',
    description: 'Web developer.',
    url: 'https://ayoubkhial.com',
    siteName: 'Ayoub Khial',
    images: [
      {
        url: `images/og.jpg`,
        alt: 'Ayoub Khial - software engineer specializing in building beautiful and minimalist web experiences.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Ayoub Khial',
    card: 'summary_large_image',
    creator: '@ayoubkhial',
    site: '@ayoubkhial',
    images: {
      url: `https://raw.githubusercontent.com/ayoubkhial/ayoubkhial.com/main/public/img/opengraph-image.png`,
      alt: 'Ayoub Khial - software engineer specializing in building beautiful and minimalist web experiences.'
    }
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml'
    }
  }
};

const Header = () => (
  <header className="flex w-full items-center justify-between p-2 lg:py-4 xl:w-[1280px] xl:px-0">
    <Link href="/" aria-label="home">
      <LogoIcon />
    </Link>
    <NavBar />
    <div className="flex items-center gap-2 lg:gap-4">
      <ThemeSwitcher />
      <Link
        href="https://ayoubkhial.substack.com/"
        rel="noopener noreferrer"
        target="_blank"
        prefetch={false}
        className="group flex items-center gap-1 rounded border border-solitude-200 bg-solitude-100 px-2 py-1 transition-colors duration-300 hover:border-solitude-400 dark:border-solitude-700 dark:bg-solitude-900 dark:hover:border-solitude-600"
      >
        <RSSIcon />
        <span className="text-sm text-solitude-950 lg:text-base dark:text-solitude-200">Subscribe</span>
      </Link>
    </div>
  </header>
);

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between xl:w-[1280px] xl:px-0">
      <p className="text-sm lg:text-base">
        Designed by{' '}
        <a
          className="font-medium underline decoration-slate-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 dark:decoration-slate-600"
          href="https://www.twitter.com/ayoubkhial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ayoub
        </a>
        . The code source is available on{' '}
        <a
          className="font-medium underline decoration-slate-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400  dark:decoration-slate-600"
          href="https://www.github.com/ayoubkhial/ayoubkhial.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        .
      </p>
      <div className="flex items-center gap-6">
        <Link href="https://www.github.com/ayoubkhial" target="_blank" rel="noopener noreferrer" aria-label="github">
          <GithubIcon />
        </Link>
        <Link href="https://www.twitter.com/ayoubkhial" target="_blank" rel="noopener noreferrer" aria-label="twitter">
          <TwitterIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/akhial" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <LinkedInIcon />
        </Link>
        <Link href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" aria-label="e-mail">
          <RSSIcon />
        </Link>
        <Link href="/resume.pdf" download={true} aria-label="resume">
          <LinkIcon />
        </Link>
      </div>
    </footer>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${GeistMono.variable} ${GeistSans.variable} grid min-h-full grid-rows-[auto,1fr,auto] place-items-center gap-12 font-sans text-slate-800 sm:gap-16 lg:gap-24 dark:bg-slate-800 dark:text-slate-200`}
      >
        <ThemeProvider>
          <Header />
          <main className="grid w-full place-items-center gap-12 sm:gap-16 lg:gap-24">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
