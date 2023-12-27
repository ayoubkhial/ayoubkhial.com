import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { GithubIcon, LinkIcon, LinkedInIcon, RSSIcon, TwitterIcon } from '@components/icons';
import PostHighlight from '@components/post-highlight';

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col gap-7 rounded-lg bg-light-blue-50 p-4 dark:bg-dark-blue-950 lg:w-[1024px]">
        <div>
          <h1 className="mb-1 text-7 font-extrabold tracking-tight text-light-blue-800 dark:text-dark-blue-200">Ayoub Khial</h1>
          <p className="mb-3 text-4 font-medium tracking-tight text-light-blue-900 dark:text-dark-blue-100">
            Welcome to my digital space, where I spill the beans on everything related to web development.
          </p>
          <p className="text-3 leading-txt text-light-blue-900 dark:text-dark-blue-100">
            I’m a web developer with a knack for crafting beautiful, minimalist web experiences. My journey right now is all about mastering
            the MEAN stack where I team up with creative minds to forge business solutions that are not just efficient, but also strikingly
            impactful.
          </p>
        </div>
        <div className="flex items-center gap-6 text-3 font-medium">
          <Link href="https://www.github.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GithubIcon className="h-1 w-1" iconStyle="fill-gray-700 dark:fill-gray-300" />
            <span className="text-gray-700 underline decoration-gray-300 decoration-2 underline-offset-2 hover:decoration-gray-400 dark:text-gray-300 dark:decoration-gray-500 hover:dark:decoration-gray-400">
              Github
            </span>
          </Link>
          <Link href="https://www.twitter.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <TwitterIcon className="h-1 w-1" iconStyle="fill-gray-900 dark:fill-gray-100" />
            <span className="text-gray-900 underline decoration-gray-400 decoration-2 underline-offset-2 hover:decoration-gray-500 dark:text-gray-100 dark:decoration-gray-400 hover:dark:decoration-gray-300">
              Twitter
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/akhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <LinkedInIcon className="h-1 w-1" iconStyle="fill-light-blue-600 dark:fill-dark-blue-400" />
            <span className="text-light-blue-600 underline decoration-light-blue-200 decoration-2 underline-offset-2 hover:decoration-light-blue-400 dark:text-dark-blue-400 dark:decoration-dark-blue-700 hover:dark:decoration-dark-blue-500">
              LinkedIn
            </span>
          </Link>
          <Link href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
            <RSSIcon className="h-1 w-1" iconStyle="fill-light-red-600 dark:fill-dark-red-500" />
            <span className="text-light-red-600 underline decoration-light-red-200 decoration-2 underline-offset-2 hover:decoration-light-red-400 dark:text-dark-red-400 dark:decoration-dark-red-600 hover:dark:decoration-dark-red-400">
              Email
            </span>
          </Link>
          <Link href="/resume.pdf" download={true} className="flex items-center gap-2">
            <LinkIcon className="h-1 w-1" iconStyle="fill-light-green-600 dark:fill-dark-green-500" />
            <span className="text-light-green-600 underline decoration-light-green-200 decoration-2 underline-offset-2 hover:decoration-light-green-400 dark:text-dark-green-400 dark:decoration-dark-green-600 hover:dark:decoration-dark-green-400">
              Resume
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

const BlogSection = () => {
  const posts = allPosts?.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))?.slice(0, 4);

  return (
    <>
      <section className="lg:w-[1024px]">
        <h2 className="mb-3 text-6 font-bold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-[6px] dark:decoration-slate-600">
          The latest from my blog
        </h2>
        <p className="mb-5 text-3 leading-txt text-slate-600 dark:text-slate-300">
          I’ve been sharing insights through my blog and newsletter for the past year. My approach is to simplify complex topics. You’ll
          discover posts about the latest technologies catching my interest alongside my professional growth and learning journey. As I
          evolve in my career, I enjoy passing on the knowledge I’ve gained.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((post, index) => (
            <PostHighlight key={post?.slug} post={post} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

const NewsletterSection = () => {
  return (
    <>
      <section className="lg:w-[1024px]">
        <h2 className="mb-4 text-6 font-bold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-[6px] dark:decoration-slate-600">
          Subscribe to my newsletter
        </h2>
        <p className="mb-4 text-3 leading-txt text-slate-600 dark:text-slate-300">
          Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found
          while surfing the web.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="https://ayoubkhial.substack.com/"
            rel="noopener noreferrer"
            target="_blank"
            prefetch={false}
            className="group rounded border border-light-blue-200 bg-light-blue-100 px-2 py-1 transition-colors duration-300 hover:border-light-blue-300 dark:border-dark-blue-800 dark:bg-dark-blue-950 dark:text-dark-blue-400 hover:dark:border-dark-blue-700"
          >
            <span className="text-3 font-medium text-light-blue-900 dark:text-dark-blue-100">Subscribe</span>
          </Link>
          <Link
            href="https://ayoubkhial.substack.com/archive"
            rel="noopener noreferrer"
            target="_blank"
            prefetch={false}
            className="group rounded-[4px] border border-light-blue-200 px-2 py-1 transition-colors duration-300 hover:border-light-blue-300 dark:border-dark-blue-800 hover:dark:border-dark-blue-700"
          >
            <span className="text-3 font-medium text-light-blue-800 dark:text-dark-blue-200">Explore Previous Issues</span>
          </Link>
          <span className="ml-1 text-1 text-light-blue-950 underline dark:text-dark-blue-100">
            No spam. I only send you relevant content. Unsubscribe at any time.
          </span>
        </div>
      </section>
    </>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
