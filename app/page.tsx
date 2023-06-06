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
		<>
			<section className="my-28 px-4 md:my-32">
				<div className="mb-4 font-heading text-2xl font-bold tracking-wide md:text-3xl">
					<span>Hello, I’m</span> <h1 className="inline-block">Ayoub Khial</h1>.
				</div>
				<p className="mb-10 text-base leading-6 tracking-small md:leading-7">
					I’m a full-stack engineer specializing in building beautiful and minimalist web experiences. Currently, I’m helping
					build a centered business solution as a MEAN stack developer at{' '}
					<a
						className="text-primary hover:underline hover:underline-offset-2"
						href="https://www.irevolution.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						iRevolution
					</a>
					.
				</p>
				<div className="grid grid-cols-2 gap-6 font-medium leading-none md:flex md:gap-6">
					<a
						href="https://www.github.com/ayoubkhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<GithubIcon />
						<span className="text-[#24292e] hover:underline hover:underline-offset-2 dark:text-[#c6ccd2]">Github</span>
					</a>
					<a
						href="https://www.twitter.com/ayoubkhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<TwitterIcon />
						<span className="text-[#1e9bef] hover:underline hover:underline-offset-2">Twitter</span>
					</a>
					<a
						href="https://www.linkedin.com/in/akhial"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						<LinkedinIcon />
						<span className="text-[#0d65c2] hover:underline hover:underline-offset-2">Linkedin</span>
					</a>
					<a href="/resume.pdf" className="flex items-center gap-2" download>
						<ResumeIcon />
						<span className="text-primary hover:underline hover:underline-offset-2">Resume</span>
					</a>
					<a href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
						<EmailIcon />
						<span className="text-[#DC3535] hover:underline hover:underline-offset-2">Email</span>
					</a>
				</div>
			</section>
			<section className="mb-28 px-4 md:mb-32">
				<div className="mb-6 flex items-center justify-between md:mb-7">
					<h2 className="font-heading text-lg font-semibold tracking-wider md:text-xl">Latest posts</h2>
					<Link href={'/blog'} prefetch={false} className="group/button text-base font-medium tracking-wider text-primary">
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
			<section className="mx-2 mb-28 flex flex-col rounded-2xl border-[0.2px] border-[#cc9dfb] bg-[#f2e6fe] p-9 text-[#26034a] dark:border-[#e1d8f3] dark:bg-[#53319b] dark:text-[#f0ecf9]">
				<h2 className="mb-6 font-heading text-lg tracking-wider md:mb-8 md:text-xl">Subscribe to my newsletter</h2>
				<p className="mb-5 text-sm leading-6 md:mb-6 md:text-base md:leading-7">
					Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I
					found while surfing the web.
				</p>
				<div className="flex items-center gap-3">
					<a
						className="rounded-md bg-[#993af8] px-4 py-2 text-[15px] font-medium tracking-wide text-white"
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
			{/* <section id="contact" className="mx-2 mb-28 flex flex-col rounded-2xl bg-gray-50 p-9 dark:bg-gray-700 md:mb-32">
				<h2 className="mb-6 font-heading text-lg font-extrabold tracking-wider md:mb-8 md:text-xl">Get in touch</h2>
				<p className="mb-8 text-sm leading-6 md:text-base md:leading-7">
					Although I’m not actively looking for new job opportunities, my inbox is always open for a friendly hello or a casual
					chat. So feel free to message me anytime, and let’s catch up!
				</p>
				<div className="flex gap-5">
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer rounded-md bg-primary px-4 py-3 text-sm font-medium tracking-wide text-white md:text-base"
					>
						Download my resume
					</a>
					<a
						className="
							cursor-pointer rounded-md border border-solid border-primary px-4 py-3 text-sm font-medium tracking-wide text-primary
							dark:border-white dark:text-white dark:hover:border-primary md:text-base"
						href="mailto:ayouub.khial@gmail.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						Say Hello
					</a>
				</div>
			</section> */}
		</>
	);
}
