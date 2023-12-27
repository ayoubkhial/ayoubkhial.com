import Link from 'next/link';
import { HomeIcon, WritingIcon, ContactIcon } from '@components/icons';

const navItems = [
  {
    name: 'Home',
    image: HomeIcon,
    link: 'hover:bg-light-blue-50 dark:hover:bg-dark-blue-950',
    text: 'group-hover:text-light-blue-800 dark:group-hover:text-dark-blue-300 decoration-light-blue-200 dark:decoration-dark-blue-800',
    icon: 'fill-light-blue-500 group-hover:fill-light-blue-600 dark:fill-dark-blue-500 dark:group-hover:fill-dark-blue-400',
    tooltip: 'bg-light-blue-50 text-light-blue-800 dark:bg-dark-blue-950 dark:text-dark-blue-400 -ml-[18px]',
    path: '/'
  },
  {
    name: 'Writing',
    image: WritingIcon,
    link: 'hover:bg-light-green-50 dark:hover:bg-dark-green-900',
    text: 'group-hover:text-light-green-800 dark:group-hover:text-dark-green-300 decoration-light-green-200  dark:decoration-dark-green-800',
    icon: 'fill-light-green-500 group-hover:fill-light-green-600 dark:fill-dark-green-500 dark:group-hover:fill-dark-green-400',
    tooltip: 'bg-light-green-50 text-light-green-800 dark:bg-dark-green-950 dark:text-dark-green-400 -ml-[24px]',
    path: '/blog'
  } /* ,
  {
    name: 'Contact',
    image: ContactIcon,
    link: 'hover:bg-light-red-50 dark:hover:bg-dark-red-900',
    text: 'group-hover:text-light-red-800 dark:group-hover:text-dark-red-300 decoration-light-red-200  dark:decoration-dark-red-800',
    icon: 'fill-light-red-500 group-hover:fill-light-red-600 dark:fill-dark-red-500 dark:group-hover:fill-dark-red-400',
    tooltip: 'bg-light-red-50 text-light-red-800 dark:bg-dark-red-950 dark:text-dark-red-300 -ml-[26px]',
    path: '/'
  } */
];

export default function NavBar() {
  return (
    <nav className="flex">
      <ul className="flex gap-6">
        {navItems?.map(({ name, image: IconImage, link, text, icon, tooltip, path }, index) => (
          <li key={index} className={`group rounded px-2 py-1 ${link} transition duration-300`}>
            <Link href={path} className="flex items-center gap-2" aria-label={name}>
              <IconImage className="h-2 w-2" iconStyle={`${icon} transition-colors duration-300`} />
              <span
                className={`invisible absolute mt-[80px] rounded-[4px] px-2 py-1 group-hover:visible sm:!invisible ${tooltip} transition-colors duration-300`}
              >
                {name}
              </span>
              <span className={`${text} hidden underline decoration-4 underline-offset-4 group-hover:no-underline sm:block`}>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
