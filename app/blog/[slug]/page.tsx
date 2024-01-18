import { CalendarIcon, TimeIcon, ViewsIcon } from '@components/icons';
import Loader from '@components/loader';
import MDXComponents from '@components/mdx';
import { getShortDate, getTagClass } from '@components/post-highlight';
import ViewsCounter, { incrementViews } from '@components/views-counter';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SeriesNavigation from '@components/series-navigation';
import Comment from '@components/comments';

export function generateMetadata({ params }): Metadata {
  const { slug } = params;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase());
  if (!post) return { title: slug };
  const { title, description, publishedAt, keywords } = post!;
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      url: `https://ayoubkhial.com/blog/${slug}`,
      images: [
        {
          url: `img/blog/${slug}/og.jpg`,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@ayoubkhial',
      creator: '@ayoubkhial',
      images: {
        url: `img/blog/${slug}/og.jpg`,
        alt: title
      }
    },
    alternates: {
      canonical: `https://ayoubkhial.com/blog/${slug}`
    }
  };
}

const TOC = ({ headers }) => {
  return (
    <aside className="hidden max-h-[97vh] 2xl:sticky 2xl:top-4 2xl:ml-8 2xl:block 2xl:flex-1 2xl:self-start">
      <h4 className="mb-2 text-lg font-semibold text-slate-900 underline decoration-slate-200 decoration-2 underline-offset-4 dark:text-slate-100 dark:decoration-slate-700">
        Table of contents
      </h4>
      <ul className="list-inside list-none">
        {headers.map((header) => {
          return (
            <li key={`#${header.slug}`}>
              <a
                className="text-sm font-medium leading-7 text-slate-900 hover:text-slate-950 data-[level=three]:pl-3 data-[level=three]:font-normal data-[level=three]:text-slate-700 data-[level=three]:before:absolute data-[level=three]:before:-ml-3 data-[level=three]:before:text-slate-400 data-[level=three]:before:content-['\2013'] data-[level=three]:hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 dark:data-[level=three]:text-slate-400 dark:data-[level=three]:hover:text-slate-100"
                data-level={header.level}
                href={`#${header.slug}`}
              >
                {header.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const NewsLetter = () => {
  return (
    <aside className="newsletter hidden overflow-auto rounded-md border border-hawkes-blue-200 bg-hawkes-blue-50 p-4 xl:sticky xl:top-4 xl:mr-4 xl:block xl:flex-1 xl:self-start 2xl:mr-8 dark:border-hawkes-blue-800 dark:bg-hawkes-blue-950">
      <h4 className="mb-4 text-lg font-semibold text-hawkes-blue-950 underline decoration-slate-200 decoration-2 underline-offset-4 dark:text-hawkes-blue-100 dark:decoration-slate-700">
        Subscribe to my newsletter
      </h4>
      <p className="mb-4 text-hawkes-blue-950 dark:text-hawkes-blue-300">
        Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found while
        surfing the web.
      </p>
      <Link
        href="https://ayoubkhial.substack.com/"
        rel="noopener noreferrer"
        target="_blank"
        prefetch={false}
        className="group mx-auto mb-2 block w-11/12 rounded border border-hawkes-blue-300 bg-hawkes-blue-100 px-2 py-1 text-center transition-colors duration-300 hover:border-hawkes-blue-400 dark:border-hawkes-blue-700 dark:bg-hawkes-blue-900 dark:hover:border-hawkes-blue-600"
      >
        <span className="font-medium text-hawkes-blue-950 dark:text-hawkes-blue-200">Subscribe</span>
      </Link>
      <span className="block text-center text-sm text-hawkes-blue-900 underline dark:text-hawkes-blue-300">
        No spam. I only send you relevant content. Unsubscribe at any time.
      </span>
    </aside>
  );
};

export default function Post(params) {
  const {
    params: { slug }
  } = params;
  const post = allPosts.find((post) => post.slug.toLowerCase() === slug.toLowerCase());
  const tags = post?.keywords.split(',').map((tag) => {
    const [label, color] = tag.match(/(.*)\((.*)\)/)?.slice(1);
    return { name: label, style: getTagClass(color) };
  });

  if (!post) notFound();
  let seriesPosts = [];
  if (post?.series) {
    seriesPosts = allPosts
      .filter((p) => p?.series === post?.series)
      ?.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
      ?.map((post) => ({ slug: post?.slug, title: post?.title }));
  }

  incrementViews(slug);
  const Component: any = getMDXComponent(post.body.code!);
  return (
    <>
      <div className="flex justify-center gap-8">
        <TOC headers={post?.headings} />
        <section className="mx-4 lg:min-w-[1000px] lg:max-w-[100px] 2xl:mx-0">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3 md:mb-4">
            <div className="flex items-center gap-2 font-mono font-semibold tracking-tight text-slate-700 sm:text-xs md:text-sm dark:text-slate-400">
              <div className="flex items-center gap-1">
                <CalendarIcon />
                <span>{getShortDate(new Date(post?.publishedAt))}</span>
              </div>
              <div className="flex items-center gap-1">
                <TimeIcon />
                <span>{post?.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <ViewsIcon />
                <Suspense fallback={<Loader />}>
                  <ViewsCounter slug={slug} />
                </Suspense>
              </div>
            </div>
            <div className="h-[1.5px] w-auto flex-grow bg-gradient-to-r from-solitude-100 to-solitude-50 dark:from-slate-600 dark:to-slate-700"></div>
            <div className="flex justify-end gap-1 font-mono text-xs font-medium tracking-tight md:text-sm">
              {tags?.map((tag) => (
                <span key={tag?.name} className={`${tag?.style} rounded px-2 py-1`}>
                  {tag?.name}
                </span>
              ))}
            </div>
          </div>
          <h1 className="mb-2 bg-gradient-to-r from-solitude-950 to-solitude-900 bg-clip-text text-xl font-extrabold text-[transparent] md:mb-4 md:text-4xl dark:from-solitude-100 dark:to-solitude-200">
            {post?.title}
          </h1>
          <p className="mb-4 border-b-2 border-solitude-50 pb-2 text-sm font-medium text-slate-600 md:mb-8 md:pb-4 md:text-base md:leading-7 dark:border-slate-700 dark:text-slate-400">
            {post?.description}
          </p>
          {post?.series && <SeriesNavigation title={post?.series} articles={seriesPosts} current={post?.slug}></SeriesNavigation>}
          <article className="article mb-8 border-b-2 border-solitude-50 pb-8 text-sm leading-6 md:text-base md:leading-7 dark:border-slate-700">
            <Component components={MDXComponents} />
          </article>
          <Comment />
        </section>
        <NewsLetter />
      </div>
    </>
  );
}
