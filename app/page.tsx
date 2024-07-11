import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { GithubIcon, LinkIcon, LinkedInIcon, MessageIcon, TwitterIcon } from '@components/icons';
import PostHighlight from '@components/post-highlight';
import HeroImage from '@public/img/hero.svg';
import NewsletterImage from '@public/img/newsletter.svg';

import Image from 'next/image';
import SubscriptionForm from '@components/subscription-form';

const HeroSection = () => {
  return (
    <>
      <section className="mx-2 rounded-lg bg-solitude-50 dark:bg-solitude-900 lg:flex lg:items-center lg:gap-4 xl:mx-0 xl:w-[1280px]">
        <div className="p-4 lg:w-2/3 lg:p-8 lg:pr-0 xl:w-3/4">
          <div className="mb-6 md:mb-0">
            <p className="mb-1 font-mono text-xs font-extrabold tracking-wide text-solitude-900 dark:text-solitude-200 lg:mb-2 lg:text-sm">
              Hello, my name is
            </p>
            <h1 className="mb-2 text-2xl font-bold text-solitude-950 dark:text-solitude-100 sm:text-3xl lg:mb-4 xl:text-4xl">
              Ayoub Khial
            </h1>
            <p className="mb-3 text-sm font-medium tracking-tight text-solitude-900 dark:text-solitude-200 lg:mb-6 lg:text-base">
              Welcome to my digital space, where I spill the beans on everything related to web development.
            </p>
            <p className="text-sm leading-relaxed text-solitude-900 dark:text-solitude-200 lg:text-base lg:leading-7">
              I’m a web developer with a knack for crafting beautiful, minimalist web experiences. My journey right now is all about
              mastering the MEAN stack where I team up with creative minds to forge business solutions that are not just efficient, but also
              strikingly impactful.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold md:hidden">
            <Link
              href="https://www.github.com/ayoubkhial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="Github"
            >
              <GithubIcon />
              <span className="hidden text-gray-700 underline decoration-gray-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-gray-400 dark:text-gray-400 dark:decoration-gray-700 dark:hover:decoration-gray-600 sm:inline-block">
                Github
              </span>
            </Link>
            <Link
              href="https://www.twitter.com/ayoubkhial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="Twitter"
            >
              <TwitterIcon />
              <span className="hidden text-slate-800 underline decoration-slate-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 dark:text-slate-400 dark:decoration-slate-700 dark:hover:decoration-slate-600 sm:inline-block">
                Twitter
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/akhial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
              <span className="hidden text-solitude-700 underline decoration-solitude-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-solitude-400 dark:text-solitude-400 dark:decoration-solitude-700 dark:hover:decoration-solitude-600 sm:inline-block">
                LinkedIn
              </span>
            </Link>
            <Link
              href="mailto:ayouub.khial@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2"
              aria-label="Email"
            >
              <MessageIcon />
              <span className="hidden text-chablis-600 underline decoration-chablis-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-chablis-400 dark:text-chablis-400 dark:decoration-chablis-700 dark:hover:decoration-chablis-600 sm:inline-block">
                Email
              </span>
            </Link>
            <Link href="/resume.pdf" download={true} className="flex items-center gap-2" aria-label="Resume">
              <LinkIcon />
              <span className="hidden text-madang-600 underline decoration-madang-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-madang-400 dark:text-madang-400 dark:decoration-madang-700 dark:hover:decoration-madang-600 sm:inline-block">
                Resume
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden pr-4 lg:block lg:w-1/3 xl:w-1/4">
          <Image
            src={HeroImage}
            alt="Welcome to my digital space, where I spill the beans on everything related to web development."
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

const BlogSection = () => {
  const posts = allPosts?.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))?.slice(0, 6);

  return (
    <>
      <section className="mx-2 xl:mx-0 xl:w-[1280px]">
        <div className="mb-4 flex gap-2 lg:mb-6 lg:gap-4">
          <h2 className="text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4 dark:decoration-slate-700 lg:text-2xl">
            The latest from my blog
          </h2>
          <Link
            href="/blog"
            className="self-end font-mono text-xs font-bold tracking-tight text-solitude-900 underline decoration-solitude-200 decoration-2 underline-offset-2 transition duration-300 hover:decoration-solitude-400 dark:text-solitude-300 dark:decoration-solitude-700 dark:hover:decoration-solitude-600"
          >
            See all
          </Link>
        </div>

        <p className="leading-txt mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-400 lg:mb-6 lg:text-base lg:leading-7">
          I’ve been sharing insights through my blog and newsletter for the past year. My approach is to simplify complex topics. You’ll
          discover posts about the latest technologies catching my interest alongside my professional growth and learning journey. As I
          evolve in my career, I enjoy passing on the knowledge I’ve gained.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="flex w-[98%] items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-6 lg:p-8 xl:mx-0 xl:w-[1280px]">
        <div>
          <h3 className="mb-3 text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4 dark:decoration-slate-700 lg:text-2xl">
            Get more updates...
          </h3>
          <p className="leading-txt mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400 lg:mb-8 lg:text-base lg:leading-7">
            Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found
            while surfing the web.
          </p>
          <SubscriptionForm />
          {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            By subscribing, you agree with ConvertKit's{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="text-blue-600 hover:underline dark:text-blue-500" href="#">
              Privacy Policy
            </a>
            . S
          </div> */}
        </div>
        <Image src={NewsletterImage} alt="newsletter image" width={300} height={0} />
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
