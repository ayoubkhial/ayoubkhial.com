import PostHighlight from '@components/post-highlight';
import { allPosts } from 'contentlayer/generated';

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
        url: `images/og-blog.jpg`,
        alt: 'Ayoub Khial - software engineer specializing in building beautiful and minimalist web experiences.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function Blog() {
  const posts = allPosts.sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1));
  return (
    <section className="mx-2 xl:mx-0 xl:w-[1280px]">
      <h1 className="text-solitude-950 mb-4 text-xl font-semibold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-4 lg:mb-6 lg:text-2xl">
        Writing
      </h1>
      <p className="leading-txt mb-4 text-sm leading-relaxed text-slate-700 lg:mb-6 lg:text-base lg:leading-7">
        I’ve been sharing insights through my blog and newsletter for the past year. My approach is to simplify complex topics. You’ll
        discover posts about the latest technologies catching my interest alongside my professional growth and learning journey. As I evolve
        in my career, I enjoy passing on the knowledge I’ve gained.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostHighlight key={post?.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
