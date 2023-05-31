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
				text-xs font-semibold tracking-normal after:block after:scale-x-0 after:border-b-[1.5px] after:border-solid after:border-primary after:transition-transform
				after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100
				md:text-sm ${activeSegment === targetSegment ? 'text-primary' : ''}
			`}
			onClick={samePage ? scrollTo : undefined}
		>
			<span className="font-heading text-sm font-bold tracking-wider md:text-base md:font-extrabold">{num}.</span> {label}
		</Link>
	);
}
