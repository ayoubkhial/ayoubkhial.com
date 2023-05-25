import { MDXIcon, NextIcon, TailwindIcon, VercelIcon } from '@components/icons';
import Theme from '@components/theme';
import Logo from '@public/img/logo.svg';
import { Analytics } from '@vercel/analytics/react';
import { Inconsolata, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export const metadata = {
	metadataBase: new URL(process.env.API_URL || 'https://ayoubkhial.com'),

	title: 'Ayoub Khial',
	description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
	openGraph: {
		title: 'Ayoub Khial',
		description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
		siteName: 'Ayoub Khial portfolio',
		url: `/`,
		images: [
			{
				url: `/og?title=A software engineer specializing in building beautiful and minimalist web experiences.`,
				alt: 'Ayoub Khial - software engineer specializing in building beautiful and minimalist web experiences.'
			}
		],
		locale: 'en-US',
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
	icons: {
		shortcut: '/favicon.ico'
	},
	twitter: {
		title: 'Ayoub Khial',
		card: 'summary_large_image',
		creator: '@ayoubkhial',
		site: '@ayoubkhial',
		images: {
			url: `/og?title=A software engineer specializing in building beautiful and minimalist web experiences.`,
			alt: 'Ayoub Khial'
		}
	},
	alternates: {
		types: {
			// See the RSS Feed section for more details
			'application/rss+xml': '/rss.xml'
		}
	}
};

const calSans = localFont({
	src: '../public/fonts/CalSans-SemiBold.woff2',
	style: 'black',
	display: 'swap',
	variable: '--font-heading'
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-base'
});

const inconsolata = Inconsolata({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-code'
});

const Header = () => {
	return (
		<header
			className="fixed left-0 top-0 h-14 w-screen
			bg-background pl-4 pr-7 md:static md:h-auto md:w-auto md:px-4 md:pt-6"
		>
			<div className="flex h-full items-center justify-between">
				<div className="flex flex-col gap-9">
					<Link href="/" className="md:block" prefetch={false}>
						<Image src={Logo} alt="Ayoub khial logo" width="40" height="40" />
					</Link>
				</div>
			</div>
		</header>
	);
};

const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-4 py-4">
			<div className="flex items-center justify-center gap-6 font-medium leading-none">
				<a
					href="https://nextjs.org/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Next.js"
					className="fill-[#555] hover:fill-black dark:fill-[#999] dark:hover:fill-black"
				>
					<NextIcon />
				</a>

				<a
					href="https://vercel.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Vercel"
					className="fill-[#555] hover:fill-black dark:fill-[#999] dark:hover:fill-black"
				>
					<VercelIcon />
				</a>
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Tailwind"
					className="fill-[#555] hover:fill-[#44a8b3] dark:fill-[#999] dark:hover:fill-[#44a8b3]"
				>
					<TailwindIcon />
				</a>
				<a
					href="https://mdxjs.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="MDX"
					className="group/icon fill-[#555] hover:fill-black dark:fill-[#999] dark:hover:fill-white"
				>
					<MDXIcon />
				</a>
			</div>
			<div>
				<span className="text-sm font-medium leading-none tracking-small">&#169; 2023 Ayoub Khial, All rights reserved.</span>
			</div>
		</footer>
	);
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${calSans.variable} ${inconsolata.variable}`}>
			<body className="relative min-h-screen bg-background font-base text-base">
				<div className="layout mx-auto text-text md:w-container">
					<Header />
					<main>
						<Theme>{children}</Theme>
					</main>
					<Analytics />
					<Footer />
				</div>
			</body>
		</html>
	);
}
