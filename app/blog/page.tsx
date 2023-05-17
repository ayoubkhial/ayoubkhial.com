import PostHighlight from '@components/post-highlight';
import Skeleton from '@components/skeleton';
import { allPosts, type Post } from 'contentlayer/generated';
import { Suspense } from 'react';

export const metadata = {
	title: 'Blog - Ayoub Khial',
	description: 'Articles about web development with a focus on the javascript ecosystem.'
};

const getPosts = (): Post[] => {
	return allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

export default function Blog() {
	const posts = getPosts();

	return (
		<section className="mb-12 mt-28 px-4 md:mb-20 md:mt-24 md:gap-8">
			<h1 className="mb-6 font-heading text-xl font-bold tracking-wider md:text-2xl">My writing</h1>
			<p className="mb-9 text-sm leading-6 tracking-wide md:mb-12 md:text-base md:leading-7">
				Here I share my writing about web development with a focus on the javascript ecosystem. Thanks for stopping by and happy
				coding!
			</p>
			<ul className="flex flex-col gap-3 md:gap-5">
				{posts.map(post => (
					<li key={post.slug}>
						<Suspense fallback={<Skeleton></Skeleton>}>
							<PostHighlight post={post} />
						</Suspense>
					</li>
				))}
			</ul>
		</section>
	);
}
