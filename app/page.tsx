import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { GithubIcon, LinkIcon, LinkedInIcon, MessageIcon, TwitterIcon } from '@components/icons';
import PostHighlight from '@components/post-highlight';
import HeroImage from '@public/hero.svg';
import NewsletterImage from '@public/newsletter.svg';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <section className="bg-solitude-50 mx-2 rounded-lg lg:flex lg:items-center lg:gap-4 xl:mx-0 xl:w-[1280px]">
        <div className="p-4 lg:w-2/3 lg:p-8 lg:pr-0 xl:w-3/4">
          <div className="mb-6 md:mb-0">
            <p className="text-solitude-900 mb-1 font-mono text-xs font-extrabold tracking-wide lg:mb-2 lg:text-sm">Hello, my name is</p>
            <h1 className="text-solitude-950 mb-2 text-2xl font-bold sm:text-3xl lg:mb-4 xl:text-4xl">Ayoub Khial</h1>
            <p className="text-solitude-900 mb-3 text-sm font-medium tracking-tight lg:mb-6 lg:text-base">
              Welcome to my digital space, where I spill the beans on everything related to web development.
            </p>
            <p className="text-solitude-900 text-sm leading-relaxed lg:text-base lg:leading-7">
              I’m a web developer with a knack for crafting beautiful, minimalist web experiences. My journey right now is all about
              mastering the MEAN stack where I team up with creative minds to forge business solutions that are not just efficient, but also
              strikingly impactful.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold md:hidden">
            <Link href="https://www.github.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GithubIcon />
              <span className="hidden text-gray-700 underline decoration-gray-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-gray-400 sm:inline-block">
                Github
              </span>
            </Link>
            <Link href="https://www.twitter.com/ayoubkhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <TwitterIcon />
              <span className="hidden text-slate-800 underline decoration-slate-300 decoration-2 underline-offset-2 transition duration-300 hover:decoration-slate-400 sm:inline-block">
                Twitter
              </span>
            </Link>
            <Link href="https://www.linkedin.com/in/akhial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <LinkedInIcon />
              <span className="text-solitude-700 decoration-solitude-200 hover:decoration-solitude-400 hidden underline decoration-2 underline-offset-2 transition duration-300 sm:inline-block">
                LinkedIn
              </span>
            </Link>
            <Link href="mailto:ayouub.khial@gmail.com" rel="noopener noreferrer" target="_blank" className="flex items-center gap-2">
              <MessageIcon />
              <span className="text-chablis-600 decoration-chablis-200 hover:decoration-chablis-400 hidden underline decoration-2 underline-offset-2 transition duration-300 sm:inline-block">
                Email
              </span>
            </Link>
            <Link href="/resume.pdf" download={true} className="flex items-center gap-2">
              <LinkIcon />
              <span className="text-madang-600 decoration-madang-200 hover:decoration-madang-400 hidden underline decoration-2 underline-offset-2 transition duration-300 sm:inline-block">
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
          <h2 className="text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4 lg:text-2xl">
            The latest from my blog
          </h2>
          <Link
            href="/blog"
            className="text-solitude-900 decoration-solitude-200 hover:decoration-solitude-400 self-end font-mono text-xs font-bold tracking-tight underline decoration-2 underline-offset-2 transition duration-300"
          >
            See all
          </Link>
        </div>

        <p className="leading-txt mb-4 text-sm leading-relaxed text-slate-700 lg:mb-6 lg:text-base lg:leading-7">
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
      <section className="bg-solitude-50 mx-2 rounded-lg lg:flex lg:items-center lg:gap-4 xl:mx-0 xl:w-[1280px]">
        <div className="p-4 lg:w-3/4 lg:p-8 lg:pr-0">
          <h2 className="text-solitude-950 mb-4 text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4 lg:mb-6 lg:text-2xl">
            Subscribe to my newsletter
          </h2>
          <p className="text-solitude-900 mb-3 text-sm leading-relaxed lg:mb-6 lg:text-base lg:leading-7">
            Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found
            while surfing the web.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="https://ayoubkhial.substack.com/"
              rel="noopener noreferrer"
              target="_blank"
              prefetch={false}
              className="border-solitude-200 bg-solitude-100 hover:border-solitude-300 group rounded border px-2 py-1 transition-colors duration-300"
            >
              <span className="text-solitude-900 text-sm font-medium">Subscribe</span>
            </Link>
            <Link
              href="https://ayoubkhial.substack.com/archive"
              rel="noopener noreferrer"
              target="_blank"
              prefetch={false}
              className="border-solitude-200 hover:border-solitude-300 group rounded border px-2 py-1 transition-colors duration-300"
            >
              <span className="text-solitude-900 text-sm font-medium">Explore Previous Issues</span>
            </Link>
            <span className="text-solitude-950 ml-1 text-xs underline lg:text-sm">
              No spam. I only send you relevant content. Unsubscribe at any time.
            </span>
          </div>
        </div>
        <div className="hidden pr-4 lg:block lg:w-1/4">
          <Image src={NewsletterImage} alt="Subscribe to Ayoub's newsletter." className="w-full" />
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
