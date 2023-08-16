'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
	priority: boolean;
	adaptive: boolean;
};

export default function AdaptiveImage({ src, alt, width, height, priority = false, adaptive = true }: Props) {
	let source;
	const { resolvedTheme } = useTheme();
	if (!adaptive) source = src;
	else {
		const [extension, ...filename] = src.split('.').reverse();
		source = resolvedTheme === 'dark' ? `${filename}_dark.${extension}` : src;
	}

	return (
		<Image
			className="my-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-900"
			src={source}
			alt={alt}
			width={width}
			height={height}
			priority={priority}
		/>
	);
}
