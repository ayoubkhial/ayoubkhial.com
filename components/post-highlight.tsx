import { getPostViews } from '@lib/requests';
import { getShortDate } from '@lib/shared';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = {
	post: Partial<Post>;
};

const Views = async ({ slug }: { slug: string }) => getPostViews(slug);

export default (async function PostHighlight({ post }: Props) {
	return (
		<Link
			className="w-full rounded-lg bg-gray-50 p-5 duration-300 hover:bg-gray-100 dark:bg-[#212736] dark:hover:bg-[#262d40]"
			href={`/blog/${post.slug}`}
			prefetch={false}
		>
			<div className="flex flex-col gap-[0.6rem]">
				<h3 className="font-heading text-sm font-medium tracking-wider md:text-[1rem]">{post.title}</h3>
				<div className="mb-2 flex gap-[0.4rem] font-heading text-xs font-normal tracking-wider text-gray-700 dark:text-gray-200 md:text-[0.8rem]">
					<span>{getShortDate(new Date(post.publishedAt!))}</span>
					<div className="font-black md:text-[1rem]">•</div>
					<span className="flex">{post.readingTime.text}</span>
					<div className="font-black md:text-[1rem]">•</div>
					<span className="flex">
						<Suspense fallback={'. . .'}>
							<Views slug={post.slug!} />
						</Suspense>
						<span>&nbsp;views</span>
					</span>
				</div>
				<p className="text-sm leading-relaxed tracking-wide text-gray-600 dark:text-gray-200 md:text-base">{post.description}</p>
			</div>
		</Link>
	);
} as unknown as (props: Props) => JSX.Element);
