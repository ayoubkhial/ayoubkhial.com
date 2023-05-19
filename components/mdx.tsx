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
	a: CustomLink,
	h2(props: any) {
		return (
			<h2
				className="mb-5 mt-10 border-b border-gray-100 text-[1.2rem] font-semibold leading-loose tracking-small dark:border-gray-800 md:text-[1.4rem]"
				{...props}
			/>
		);
	},
	strong(props: any) {
		return <strong className="font-semibold text-black dark:text-white" {...props} />;
	}
};

export default MDXComponents;
