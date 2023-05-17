import Callout from '@components/callout';
import Like from '@components/like';
import { LinkedinButton, TwitterButton } from '@components/share';
import { getPostLikes, getPostViews, incrementPostLikes, incrementPostViews } from '@lib/requests';
import { getShortDate } from '@lib/shared';
import { allPosts, type Post } from 'contentlayer/generated';
import { Metadata } from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';

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

export default async function Post({ params }: Props) {
	const { post: slug } = params;
	const post = getPost(slug);
	if (!post) throw new Error('This post is not exist.');
	let [views, likes] = await Promise.all([getPostViews(slug), getPostLikes(slug), incrementPostViews(slug)]);
	const Component = getMDXComponent(post.body.code!);

	const incrementLikes = async (): Promise<void> => {
		'use server';
		likes++;
		await incrementPostLikes(slug);
	};

	return (
		<article className="mb-12 mt-28 px-4 md:mb-20 md:mt-24 md:gap-8">
			<h1 className="mb-4 font-heading text-2xl font-semibold leading-10 tracking-wider md:mb-6 md:text-3xl">{post.title}</h1>
			<div className="mb-6 flex items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-100">
				<div>
					<span>Ayoub Khial - {getShortDate(new Date(post.publishedAt))}</span>
				</div>
				<div className="h-[0.2rem] w-auto flex-grow bg-gray-100 dark:bg-gray-700"></div>
				<div className="flex items-center gap-2">
					<span className="flex">{post.readingTime.text}</span>
					<div className="font-black">•</div>
					<span className="flex">{views} views</span>
					<div className="font-black">•</div>
					<span className="flex">{likes} likes</span>
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
			<div className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						<form action={incrementLikes} className="leading-none">
							<button type="submit">
								<Like slug={slug} likes={likes} />
							</button>
						</form>
					</div>
					<div className="flex items-center gap-2">
						<TwitterButton url={`www.ayoubkhial.com/blog/${post.slug}`} title={post.title} />
						<LinkedinButton url={`www.ayoubkhial.com/blog/${post.slug}`} />
					</div>
				</div>

				<p className="text-[15px]">
					If you have found this article useful, kindly consider sharing it with other fellow developers. Your support will help
					me create more helpful content in the future. Additionally, if you have any questions or suggestions, feel free to reach
					out to me{' '}
					<a
						href="https://www.twitter.com/ayoubkhial"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline underline-offset-2"
					>
						on Twitter
					</a>
					.
				</p>
			</div>
			<section
				id="contact"
				className="mt-10 flex flex-col rounded-xl border-[0.2px] border-[#cc9dfb] bg-[#f2e6fe] p-5 text-[#26034a] dark:border-[#e1d8f3] dark:bg-[#53319b] dark:text-[#f0ecf9]"
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
		</article>
	);
}
