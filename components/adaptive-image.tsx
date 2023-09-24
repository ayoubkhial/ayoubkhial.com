/* eslint-disable jsx-a11y/alt-text */
import { unstable_getImgProps as getImgProps } from 'next/image';

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
	priority: boolean;
	adaptive: boolean;
};

export default function AdaptiveImage({ src, alt, width, height, priority = false, adaptive = true }: Props) {
	const common = { alt, width, height, priority };
	const [extension, ...filename] = src.split('.').reverse();

	const {
		props: { srcSet: dark }
	} = getImgProps({ ...common, src: `${filename}_dark.${extension}` });
	const {
		props: { srcSet: light, ...rest }
	} = getImgProps({ ...common, src });

	return (
		<picture>
			<source media="(prefers-color-scheme: dark)" srcSet={dark} />
			<source media="(prefers-color-scheme: light)" srcSet={light} />
			<img
				className="my-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-900"
				{...rest}
			/>
		</picture>
	);
}
