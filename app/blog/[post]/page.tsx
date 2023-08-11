import Comments from '@components/comments';
import { PlayfulArrowIcon } from '@components/icons';
import MDXComponents from '@components/mdx';
import { LinkedinButton, TwitterButton } from '@components/share';

import { getPostViews, incrementPostViews } from '@lib/requests';
import { getShortDate } from '@lib/shared';
import { allPosts, type Post } from 'contentlayer/generated';
import { Metadata } from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Suspense } from 'react';

type Props = {
	params: { post: string };
};

const getPost = (slug: string): Post | undefined => {
	return allPosts.find(post => post._raw.flattenedPath.toLowerCase() === slug.toLowerCase());
};

export function generateMetadata({ params }: Props): Metadata {
	const { post: slug } = params;
	const post = getPost(slug);
	const index = allPosts
		.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
		.findIndex(p => p.slug === post?.slug);
	if (!post) return { title: slug };
	const { title, description, publishedAt, keywords } = post!;
	return {
		title,
		description,
		keywords: keywords,
		openGraph: {
			title,
			description,
			publishedTime: publishedAt,
			type: 'article',
			url: `https://ayoubkhial.com/blog/${slug}`,
			images: [
				{
					url: `https://raw.githubusercontent.com/ayoubkhial/ayoubkhial.com/main/public/img/blog/${index + 1}/og.png`,
					alt: title
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			site: '@ayoubkhial',
			creator: '@ayoubkhial',
			title,
			description,
			images: {
				url: `https://raw.githubusercontent.com/ayoubkhial/ayoubkhial.com/main/public/img/blog/${index + 1}/og.png`,
				alt: title
			}
		}
	};
}

const Views = ({ slug }: { slug: string }) => {
	const views = getPostViews(slug);
	return views;
};

export default function Post({ params }: Props) {
	const { post: slug } = params;
	const post = getPost(slug);
	if (!post) throw new Error('This post is not exist.');
	incrementPostViews(slug);
	const Component: any = getMDXComponent(post.body.code!);
	return (
		<>
			<div className="right-1 hidden xl:fixed xl:block">
				<p className="mb-4 max-w-[17rem] font-display tracking-wider text-primary-light dark:text-primary-dark">
					If you liked this post, sign up to get updates in your email when I write something new! No spam ever.
				</p>
				<div className="hidden items-end gap-2 xl:flex">
					<a
						className=" rounded-md bg-primary-light px-3 py-2 text-[15px] font-medium tracking-wide text-white"
						href="https://ayoubkhial.substack.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Subscribe
					</a>
					<PlayfulArrowIcon></PlayfulArrowIcon>
				</div>
			</div>
			<div className="mx-auto md:w-container">
				<article className="mt-28 px-4 md:mt-24">
					<h1 className="mb-4 font-display text-2xl font-semibold leading-10 tracking-wider md:mb-6 md:text-3xl">{post.title}</h1>
					<p className="mb-4 font-medium text-gray-500 dark:text-gray-400 md:mb-6 md:text-lg">{post.description}</p>
					<div className="mb-6 flex items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-100">
						<div>
							<span>Ayoub Khial - {getShortDate(new Date(post.publishedAt))}</span>
						</div>
						<div className="h-[0.2rem] w-auto flex-grow bg-gray-100 dark:bg-gray-700"></div>
						<div className="flex items-center gap-2">
							<span className="flex">{post.readingTime.text}</span>
							<div className="font-black">•</div>
							<span className="flex">
								<Suspense fallback={'. . . '}>
									{/*@ts-ignore*/}
									<Views slug={slug} />
								</Suspense>{' '}
								views
							</span>
						</div>
					</div>
					<ul className="mb-8 flex gap-2 text-sm">
						{post.keywords?.split(',').map(keyword => (
							<li key={keyword} className="font-medium">
								<span className="font-semibold text-primary-light dark:text-primary-dark">#</span> {keyword}
							</li>
						))}
					</ul>
					<div className="blog-content text-[0.95rem]">
						<h2 className="mb-5 mt-10 border-b border-gray-100 font-heading text-[1.2rem] font-semibold leading-loose tracking-wider dark:border-gray-800 md:text-[1.4rem]">
							Table of Contents
						</h2>
						<div className="toc">
							{post.headings.map((heading: any) => {
								return (
									<div key={`#${heading.slug}`}>
										<a
											className="text-[1rem] font-semibold leading-8 data-[level=three]:pl-6"
											data-level={heading.level}
											href={`#${heading.slug}`}
										>
											{heading.text}
										</a>
									</div>
								);
							})}
						</div>
						<Component components={MDXComponents} />
					</div>
				</article>
				<hr className="dark:border-gray-700; my-8 h-[1.5px] border-t-[1.5px] border-gray-100 px-4 dark:border-gray-700" />
				<div className="flex flex-col gap-4 px-4">
					<div className="flex items-center justify-between">
						<a
							href={`https://github.com/ayoubkhial/ayoubkhial.com/edit/main/content/${slug}.mdx`}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M3 6v2h11V6H3m0 4v2h11v-2H3m17 .1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V20h2.1l6.1-6.1l-2.1-2M3 14v2h7v-2H3Z"
								/>
							</svg>
							<span className="underline underline-offset-2">Submit an edit request on GitHub</span>
						</a>
						<div className="flex items-center gap-2">
							<TwitterButton url={`www.ayoubkhial.com/blog/${post.slug}`} title={post.title} />
							<LinkedinButton url={`www.ayoubkhial.com/blog/${post.slug}`} />
						</div>
					</div>

					<section
						id="contact"
						className="mb-6 mt-2 flex flex-col rounded-xl border-[0.2px] border-purple-300 bg-purple-100 p-5 text-purple-950 dark:border-purple-400 dark:bg-purple-900 dark:text-purple-50 md:mb-8 md:mt-4"
					>
						<h2 className="mb-6 font-heading text-lg font-extrabold tracking-wider md:text-xl">Subscribe to my newsletter</h2>
						<p className="mb-5 text-sm leading-6 md:text-base md:leading-7">
							If you liked this post, sign up to get updates in your email when I write something new! No spam ever.
						</p>
						<div className="flex items-center gap-3">
							<a
								className=" rounded-md bg-[#993af8] px-3 py-2 text-[15px] font-medium tracking-wide text-white
						dark:bg-[#993af8]"
								href="https://ayoubkhial.substack.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Subscribe
							</a>
							<span className="text-xs font-medium underline">
								No spam. I only send you relevant content. Unsubscribe at any time.
							</span>
						</div>
					</section>
					<section className="mb-6">
						<Comments />
					</section>
				</div>
			</div>
			{/* <div className="fixed right-8 top-96 md:max-w-[20%]">
				<section id="contact" className="flex flex-col items-center text-black dark:text-white md:mb-8 md:mt-4">
					<p className="mb-5 text-center text-sm font-medium leading-6 md:text-[16px] md:leading-7">
						Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and
						resources I found while surfing the web.
					</p>
					<div className="flex items-center gap-3">
						<a
							className=" rounded-md bg-[#993af8] px-3 py-2 text-[15px] font-medium tracking-wide text-white
			dark:bg-[#993af8]"
							href="https://ayoubkhial.substack.com/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Subscribe
						</a>
					</div>
				</section>
			</div> */}
		</>
	);
}
