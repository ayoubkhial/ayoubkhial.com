import PostHighlight from '@components/post-highlight';
import { allPosts } from 'contentlayer/generated';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
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
    <section className="lg:w-[1024px]">
      <h1 className="mb-3 text-6 font-bold tracking-tight underline decoration-slate-200 decoration-4 underline-offset-[6px] dark:decoration-slate-600">
        My writing
      </h1>
      <p className="mb-5 text-3 leading-txt text-slate-600 dark:text-slate-300">
        Here, I share my writing about web development, focusing on the Javascript ecosystem. Thanks for stopping by, and happy coding!
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {posts.map((post, index) => (
          <PostHighlight key={post?.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
