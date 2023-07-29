import { EmailIcon, GithubIcon, LinkedinIcon, ResumeIcon, RightArrowIcon, TwitterIcon } from '@components/icons';
import PostHighlight from '@components/post-highlight';
import Skeleton from '@components/skeleton';
import { allPosts, type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { Suspense } from 'react';

const getLatestPosts = (): Post[] => {
	return allPosts.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))?.slice(0, 3);
};

export default function Home() {
	const posts = getLatestPosts();
	return (
		<div className="mx-auto md:w-container">
			<section className="mb-24 mt-28 px-4 md:my-32">
				<div className="mb-4 font-display text-2xl font-bold tracking-wider md:text-3xl">
					<span>Hello, I’m</span> <h1 className="inline-block">Ayoub Khial</h1>.
				</div>
				<p className="mb-10 leading-6 tracking-small md:leading-7">
					I’m a full-stack engineer specializing in building beautiful and minimalist web experiences. Currently, I’m helping
					build a centered business solution as a MEAN stack developer at{' '}
					<a
						className="text-primary-light underline decoration-transparent decoration-[1.3px] underline-offset-[3px] transition-colors duration-300 hover:decoration-inherit dark:text-primary-dark"
						href="https://www.irevolution.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						iRevolution
					</a>
					.
				</p>
				<div className="grid grid-cols-2 gap-6 font-heading font-medium leading-none tracking-wider md:flex md:gap-6">
					<a
						href="https://www.github.com/ayoubkhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<GithubIcon />
						<span className="text-gray-800 hover:underline hover:underline-offset-2 dark:text-[#c6ccd2]">Github</span>
					</a>
					<a
						href="https://www.twitter.com/ayoubkhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<TwitterIcon />
						<span className="text-sky-500 hover:underline hover:underline-offset-2">Twitter</span>
					</a>
					<a
						href="https://www.linkedin.com/in/akhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<LinkedinIcon />
						<span className="text-blue-500 hover:underline hover:underline-offset-2">Linkedin</span>
					</a>
					<a href="/resume.pdf" className="flex items-center gap-2" download>
						<ResumeIcon />
						<span className="text-purple-500 hover:underline hover:underline-offset-2">Resume</span>
					</a>
					<a href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
						<EmailIcon />
						<span className="text-red-500 hover:underline hover:underline-offset-2">Email</span>
					</a>
				</div>
			</section>
			<section className="mb-20 px-4 md:mb-32">
				<div className="mb-6 flex items-center justify-between md:mb-7">
					<h2 className="font-heading text-lg font-semibold tracking-[0.15rem] md:text-xl">Latest posts</h2>
					<Link
						href={'/blog'}
						prefetch={false}
						className="group/button text-[16px] font-semibold tracking-wider text-primary-light dark:text-primary-dark"
					>
						View all posts <RightArrowIcon />
					</Link>
				</div>
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
			<section className="mx-1 mb-20 flex flex-col rounded-2xl border-[0.4px] border-purple-300 bg-purple-100 p-9 text-purple-950 dark:border-purple-400 dark:bg-purple-900 dark:text-purple-50">
				<h2 className="mb-6 font-display text-lg tracking-wider md:mb-8 md:text-xl">Subscribe to my newsletter</h2>
				<p className="mb-5 text-sm leading-6 md:mb-6 md:text-base md:leading-loose">
					Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I
					found while surfing the web.
				</p>
				<div className="flex items-center gap-3">
					<a
						className="rounded-md bg-purple-500 px-4 py-2 text-[15px] font-medium tracking-wide text-purple-50"
						href="https://ayoubkhial.substack.com/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Subscribe
					</a>
					<span className="text-xs font-medium leading-5 underline underline-offset-2">
						No spam. I only send you relevant content. Unsubscribe at any time.
					</span>
				</div>
			</section>
		</div>
	);
}
