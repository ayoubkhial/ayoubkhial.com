import Link from 'next/link';
import { HomeIcon, WritingIcon, GithubIcon, TwitterIcon, LinkedInIcon, RSSIcon, LinkIcon, MessageIcon } from '@components/icons';

const navItems = [
  {
    name: 'Home',
    path: '/',
    image: HomeIcon,
    link: 'md:hidden hover:bg-madang-50',
    text: 'group-hover:text-madang-900 decoration-madang-200',
    tooltip: 'bg-madang-50 text-madang-800 -ml-5'
  },
  {
    name: 'Writing',
    path: '/blog',
    image: WritingIcon,
    link: 'hover:bg-solitude-50',
    text: 'group-hover:text-solitude-900 decoration-solitude-200',
    tooltip: 'bg-solitude-50 -ml-6'
  },
  {
    name: 'Github',
    path: 'https://www.github.com/ayoubkhial',
    image: GithubIcon,
    link: 'hidden md:block hover:bg-gray-100',
    text: 'group-hover:text-gray-900 decoration-gray-200'
  },
  {
    name: 'Twitter',
    path: 'https://www.twitter.com/ayoubkhial',
    image: TwitterIcon,
    link: 'hidden md:block hover:bg-slate-100',
    text: 'group-hover:text-slate-900 decoration-slate-200'
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/akhial',
    image: LinkedInIcon,
    link: 'hidden md:block hover:bg-solitude-50',
    text: 'group-hover:text-solitude-900 decoration-solitude-200'
  },
  {
    name: 'Say Hello',
    path: 'mailto:ayouub.khial@gmail.com',
    image: MessageIcon,
    link: 'hidden lg:block hover:bg-chablis-50',
    text: 'group-hover:text-chablis-900 decoration-chablis-200'
  },
  {
    name: 'Resume',
    path: 'https://www.ayoubkhial.com/resume.pdf',
    image: LinkIcon,
    link: 'hidden md:block hover:bg-madang-50',
    text: 'group-hover:text-madang-900 decoration-madang-200'
  }
];

export default function NavBar() {
  return (
    <nav className="flex">
      <ul className="flex gap-3 xs:gap-6 md:gap-3 lg:gap-6">
        {navItems?.map(({ name, image: IconImage, link, text, tooltip, path }, index) => (
          <li key={index} className={`group rounded px-2 py-1 ${link} transition duration-300`}>
            {path.startsWith('/') ? (
              <Link href={path} className="flex items-center gap-2 md:gap-1 lg:gap-2" aria-label={name}>
                <IconImage />
                <span
                  className={`invisible absolute mt-16 rounded px-2 py-1 group-hover:visible ${tooltip} text-sm transition-colors duration-300 xs:group-hover:invisible`}
                >
                  {name}
                </span>
                <span
                  className={`${text} hidden text-sm font-medium underline decoration-2 underline-offset-2 group-hover:no-underline xs:block lg:text-base`}
                >
                  {name}
                </span>
              </Link>
            ) : (
              <a href={path} rel="noopener noreferrer" target="_blank" className="flex items-center gap-2" aria-label={name}>
                <IconImage />
                <span
                  className={`invisible absolute mt-16 rounded px-2 py-1 group-hover:visible ${tooltip} text-sm transition-colors duration-300 xs:group-hover:invisible`}
                >
                  {name}
                </span>
                <span
                  className={`${text} hidden text-sm font-medium underline decoration-2 underline-offset-2 group-hover:no-underline xs:block lg:text-base`}
                >
                  {name}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
