import AdaptiveImage from '@components/adaptive-image';
import Callout from '@components/callout';
import Image from 'next/image';
import Link from 'next/link';

const CustomLink = (props: any) => {
	const href = props.href;
	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}
	if (href.startsWith('#')) return <a {...props} />;
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="font-medium leading-4 text-black underline underline-offset-2 dark:text-white"
			{...props}
		/>
	);
};

const MDXComponents = {
	p(props: any) {
		return <p className="mb-3 leading-6" {...props} />;
	},
	h2(props: any) {
		return (
			<h2
				className="mb-5 mt-10 border-b border-gray-100 text-[1.2rem] font-semibold leading-loose tracking-small dark:border-gray-800 md:text-[1.4rem]"
				{...props}
			/>
		);
	},
	h3(props: any) {
		return <h3 className="mb-5 mt-6 text-[1rem] font-medium leading-loose tracking-small md:text-[1.1rem]" {...props} />;
	},
	a(props: any) {
		const className = 'font-medium leading-4 text-black underline underline-offset-2 dark:text-white';
		const href = props.href;
		if (href.startsWith('/')) {
			return (
				<Link className={className} href={href} {...props}>
					{props.children}
				</Link>
			);
		}
		if (href.startsWith('#')) return <a className={className} {...props} />;
		return <a className={className} target="_blank" rel="noopener noreferrer" {...props} />;
	},
	strong(props: any) {
		return <strong className="font-medium text-black dark:text-white" {...props} />;
	},
	ul(props: any) {
		return <ul className="mb-3 list-none pl-8" {...props} />;
	},
	li(props: any) {
		return (
			<li
				className="mb-[6px] leading-6 marker:text-gray-700 before:absolute before:ml-[-20px] before:content-['\2013'] dark:marker:text-gray-200"
				{...props}
			/>
		);
	},
	Callout,
	Image,
	AdaptiveImage
};

export default MDXComponents;
