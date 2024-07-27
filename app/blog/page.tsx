import PostHighlight from '@components/post-highlight';
import SubscriptionForm from '@components/subscription-form';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import NewsletterImage from '@public/img/newsletter.svg';

export const metadata = {
  title: 'Blog',
  description: 'Web Developer.',
  openGraph: {
    title: 'Ayoub Khial - Blog',
    description: 'Web developer.',
    url: 'https://ayoubkhial.com/blog',
    siteName: 'Ayoub Khial',
    images: [
      {
        url: `img/og-blog.jpg`,
        alt: 'Ayoub Khial - software engineer specializing in building beautiful and minimalist web experiences.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

const NewsletterSection = () => {
  return (
    <>
      <section className="flex w-[98%] items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm  sm:p-6 lg:p-8 xl:mx-0 xl:w-[1280px]">
        <div>
          <h3 className="mb-3 text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4  lg:text-2xl">
            Get more updates...
          </h3>
          <p className="leading-txt mb-6 text-sm leading-relaxed text-slate-600 lg:mb-8 lg:text-base lg:leading-7">
            Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found
            while surfing the web.
          </p>
          <SubscriptionForm />
        </div>
        <Image className="hidden w-[200px] md:block lg:w-[300px]" src={NewsletterImage} alt="newsletter image" width={300} height={0} />
      </section>
    </>
  );
};

export default function Blog() {
  const posts = allPosts.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1));
  return (
    <>
      <section className="mx-2 xl:mx-0 xl:w-[1280px]">
        <h1 className="mb-4 text-xl font-semibold tracking-tight text-solitude-950 underline decoration-slate-200 decoration-4 underline-offset-4 lg:mb-6 lg:text-2xl">
          Writing
        </h1>
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
      <NewsletterSection />
    </>
  );
}
