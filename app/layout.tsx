import { EmailIcon, GithubIcon, RSSIcon, TwitterIcon } from '@components/icons';
import NavLink from '@components/nav-link';
import Theme from '@components/theme';
import Logo from '@public/img/logo.png';
import { Analytics } from '@vercel/analytics/react';
import { Inconsolata, Inter, Lilita_One } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export const metadata = {
	title: 'Ayoub Khial',
	description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
	openGraph: {
		title: 'Ayoub Khial',
		description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
		siteName: 'Ayoub Khial portfolio',
		url: `https://ayoubkhial.com`,
		images: [
			{
				url: `https://raw.githubusercontent.com/ayoubkhial/ayoubkhial.com/main/public/img/opengraph-image.png`,
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

const lilita = Lilita_One({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-display',
	weight: '400'
});

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

const links = [
	{ num: '01', label: 'Home', path: '/', targetSegment: null },
	{ num: '02', label: 'Writing', path: '/blog', targetSegment: 'blog' }
];

const Header = () => {
	return (
		<header className="fixed left-0 top-0 mx-auto h-14 w-screen bg-background-light pl-4 pr-7 dark:bg-background-dark md:static md:h-auto md:w-container md:px-4 md:pt-6">
			<div className="flex h-full items-center justify-between">
				<div className="flex items-center gap-12">
					<Link href="/" prefetch={false}>
						<Image src={Logo} alt="Ayoub KHIAL logo" width="40" height="40" priority={true} />
					</Link>
					<nav>
						<ul className="flex items-center gap-8">
							{links?.map((link, index) => (
								<li key={index}>
									<NavLink {...link} />
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-4 py-4">
			<div className="flex items-center justify-center gap-6 font-medium leading-none">
				<a href="https://www.github.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
					<GithubIcon />
				</a>
				<a href="https://www.twitter.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
					<TwitterIcon />
				</a>
				<a href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
					<EmailIcon />
				</a>
				<a href="/rss.xml" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
					<RSSIcon />
				</a>
			</div>
			<div>
				<span className="font-heading text-sm leading-none tracking-wider">&#169; 2023 Ayoub Khial, All rights reserved.</span>
			</div>
		</footer>
	);
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${lilita.variable} ${calSans.variable} ${inter.variable} ${inconsolata.variable}`}>
			<body className="relative min-h-screen bg-background-light font-base text-base text-text-light dark:bg-background-dark dark:text-text-dark">
				<div>
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
