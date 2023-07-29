'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
	num: string;
	label: string;
	path: string;
	targetSegment: string | null;
	samePage?: boolean;
};

const scrollTo = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
	event.preventDefault();
	const href = event.currentTarget.href;
	const targetId = href.replace(/.*\#/, '');
	const element = document.getElementById(targetId);
	window.scrollTo({
		top: element?.getBoundingClientRect().top,
		behavior: 'smooth'
	});
};

export default function NavLink(props: Props) {
	const activeSegment = useSelectedLayoutSegment();
	const { num, label, path, targetSegment, samePage } = props;
	return (
		<Link
			href={path}
			className={`
				font-heading text-sm font-normal tracking-wider underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-colors duration-300 hover:decoration-primary-light
				hover:dark:decoration-primary-dark md:text-base ${activeSegment === targetSegment ? 'text-primary-light dark:text-primary-dark' : ''}
			`}
			onClick={samePage ? scrollTo : undefined}
			prefetch={false}
		>
			<span className="font-display text-base tracking-wider md:text-lg">{num}.</span> {label}
		</Link>
	);
}
