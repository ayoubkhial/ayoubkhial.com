import Callout from '@components/callout';
import Comments from '@components/comments';
import { LinkedinButton, TwitterButton } from '@components/share';
import { getPostViews, incrementPostViews } from '@lib/requests';
import { getShortDate } from '@lib/shared';
import { allPosts, type Post } from 'contentlayer/generated';
import { Metadata } from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = {
	params: { post: string };
};

const getPost = (slug: string): Post | undefined => {
	return allPosts.find(post => post._raw.flattenedPath === slug);
};

export function generateMetadata({ params }: Props): Metadata {
	const { post: slug } = params;
	const post = getPost(slug);
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
			url: `https://www.ayoubkhial.com/blog/${slug}`,
			images: [
				{
					url: `${process.env.API_URL}/og?title=${title}&keywords=${keywords}`,
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
			images: [
				{
					url: `${process.env.API_URL}/og?title=${title}&keywords=${keywords}`,
					alt: title
				}
			]
		}
	};
}

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
	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Views = async ({ slug }: { slug: string }) => {
	const views = getPostViews(slug);
	return views;
};

export default async function Post({ params }: Props) {
	const { post: slug } = params;
	const post = getPost(slug);
	if (!post) throw new Error('This post is not exist.');
	incrementPostViews(slug);
	const Component = getMDXComponent(post.body.code!);
	return (
		<>
			<article className="mt-28 px-4 md:mt-24">
				<h1 className="mb-4 font-heading text-2xl font-semibold leading-10 tracking-wider md:mb-6 md:text-3xl">{post.title}</h1>
				<div className="mb-6 flex items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-100">
					<div>
						<span>Ayoub Khial - {getShortDate(new Date(post.publishedAt))}</span>
					</div>
					<div className="h-[0.2rem] w-auto flex-grow bg-gray-100 dark:bg-gray-700"></div>
					<div className="flex items-center gap-2">
						<span className="flex">{post.readingTime.text}</span>
						<div className="font-black">•</div>
						<span className="flex">
							<Suspense fallback={'. .. '}>
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
							<span className="font-semibold text-primary">#</span> {keyword}
						</li>
					))}
				</ul>
				<div className="blog-content">
					<Component components={{ Callout, Image, a: CustomLink }} />
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
					className="mb-6 mt-2 flex flex-col rounded-xl border-[0.2px] border-[#cc9dfb] bg-[#f2e6fe] p-5 text-[#26034a] dark:border-[#e1d8f3] dark:bg-[#53319b] dark:text-[#f0ecf9] md:mb-8 md:mt-4"
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
		</>
	);
}
