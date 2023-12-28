import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import NavBar from '@components/nav-bar';
import ThemeProvider from '@components/theme-provider';
import ThemeSwitcher from '@components/theme-switcher';
import { GithubIcon, LinkIcon, LinkedInIcon, LogoIcon, RSSIcon, TwitterIcon } from '@components/icons';

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
        url: '/images/icon-light.png'
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
        url: '/images/apple-icon-light.png'
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
  <header className="flex w-full items-center justify-between text-3 font-medium lg:w-[1024px]">
    <Link href="/" className="flex items-center gap-2" aria-label="home">
      <LogoIcon />
    </Link>
    <NavBar />
    <div className="flex items-center gap-5">
      <ThemeSwitcher />
      <Link
        href="https://ayoubkhial.substack.com/"
        rel="noopener noreferrer"
        target="_blank"
        prefetch={false}
        className="group flex items-center gap-2 rounded border border-light-blue-200 bg-light-blue-100 px-2 py-1 transition-colors duration-300 hover:border-light-blue-400 dark:border-dark-blue-800 dark:bg-dark-blue-950 dark:text-dark-blue-400 hover:dark:border-dark-blue-600"
      >
        <RSSIcon className="h-1 w-1" iconStyle="fill-light-blue-600 dark:fill-dark-blue-500" />
        <span className="text-light-blue-800 dark:text-dark-blue-300">Subscribe</span>
      </Link>
    </div>
  </header>
);

const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap items-center justify-between gap-1 rounded bg-slate-50 px-3 py-2 lg:w-[1024px] dark:bg-slate-900">
      <p className="text-3 font-medium">Designed & Built by Ayoub KHIAL &#169; 2024</p>
      <div className="flex items-center gap-6">
        <Link href="https://www.github.com/ayoubkhial" target="_blank" rel="noopener noreferrer" aria-label="github">
          <GithubIcon className="h-1 w-1" iconStyle="fill-slate-900 dark:fill-slate-100" />
        </Link>
        <Link href="https://www.twitter.com/ayoubkhial" target="_blank" rel="noopener noreferrer" aria-label="twitter">
          <TwitterIcon className="h-1 w-1" iconStyle="fill-gray-900 dark:fill-gray-100" />
        </Link>
        <Link href="https://www.linkedin.com/in/akhial" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <LinkedInIcon className="h-1 w-1" iconStyle="fill-light-blue-600 dark:fill-dark-blue-400" />
        </Link>
        <Link href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" aria-label="e-mail">
          <RSSIcon className="h-1 w-1" iconStyle="fill-light-red-600 dark:fill-dark-red-500" />
        </Link>
        <Link href="/resume.pdf" download={true} aria-label="resume">
          <LinkIcon className="h-1 w-1" iconStyle="fill-light-green-600 dark:fill-dark-green-500" />
        </Link>
      </div>
      <div className="flex items-center gap-2 text-3 font-medium">
        <Link
          href={'/blog'}
          className="underline decoration-slate-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 dark:decoration-slate-700 hover:dark:decoration-slate-500"
        >
          Writings
        </Link>
        <span>&#8212;</span>
        <Link
          href="https://ayoubkhial.substack.com/"
          rel="noopener noreferrer"
          target="_blank"
          prefetch={false}
          className="underline decoration-slate-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 dark:decoration-slate-700 
          hover:dark:decoration-slate-500"
        >
          Newsletter
        </Link>
        <span>&#8212;</span>
        <Link
          href="mailto:ayouub.khial@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="underline decoration-slate-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 dark:decoration-slate-700 
          hover:dark:decoration-slate-500"
        >
          Say hello
        </Link>
      </div>
    </footer>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} ${GeistSans.variable} m-2 grid place-items-center gap-8 font-sans text-slate-800 lg:mx-0 lg:my-3 dark:bg-slate-800 dark:text-slate-200`}
      >
        <ThemeProvider>
          <Header />
          <main className="grid w-full place-items-center gap-8">
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
