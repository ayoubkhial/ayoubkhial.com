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
    <aside className="toc hidden max-h-[97vh] overflow-auto rounded-md border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-600 dark:bg-slate-900 lg:sticky lg:top-4 lg:block lg:flex-shrink-0 lg:flex-grow lg:basis-1/6 lg:self-start">
      <h4 className="mb-2 text-4 font-bold leading-txt tracking-tight text-slate-900 underline decoration-slate-200 decoration-2 underline-offset-4 dark:text-slate-100 dark:decoration-slate-700">
        Table of contents
      </h4>
      <ul className="list-inside list-none">
        {headers.map((header) => {
          return (
            <li key={`#${header.slug}`}>
              <a
                className="dark:data-[level=three]:before:text-slate-30 text-2 font-medium leading-txt text-slate-900 hover:text-slate-950 data-[level=three]:pl-3 data-[level=three]:font-normal data-[level=three]:text-slate-700 data-[level=three]:before:absolute data-[level=three]:before:-ml-3 data-[level=three]:before:text-slate-400 data-[level=three]:before:content-['\2013'] data-[level=three]:hover:text-slate-950 dark:text-slate-100 dark:hover:text-slate-100 dark:data-[level=three]:text-slate-300 dark:data-[level=three]:hover:text-slate-100"
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
    <aside className="newsletter hidden max-h-[97vh] overflow-auto rounded-md border border-slate-300 bg-slate-100 px-3 py-2 dark:border-slate-600 dark:bg-slate-900 lg:sticky lg:top-4 lg:block lg:flex-shrink-0 lg:flex-grow lg:basis-1/6 lg:self-start">
      <h4 className="mb-2 text-4 font-bold leading-txt tracking-tight text-slate-900 underline decoration-slate-300 decoration-2 underline-offset-4 dark:text-slate-100 dark:decoration-slate-700">
        Subscribe to my newsletter
      </h4>
      <p className="mb-3 text-2 text-slate-800 dark:text-slate-200">
        Get notified whenever I share new articles by subscribing to my newsletter. Also, I share exciting tools and resources I found while
        surfing the web.
      </p>
      <div className="flex flex-wrap items-center gap-5">
        <Link
          href="https://ayoubkhial.substack.com/"
          rel="noopener noreferrer"
          target="_blank"
          prefetch={false}
          className="group w-full rounded-[4px] border border-slate-300 bg-slate-200 px-2 py-1 text-center transition-colors duration-300 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 hover:dark:border-slate-600"
        >
          <span className="text-3 font-medium text-slate-900 dark:text-slate-100">Subscribe</span>
        </Link>
        <span className="text-center text-1 text-slate-700 underline dark:text-slate-300">
          No spam. I only send you relevant content. Unsubscribe at any time.
        </span>
      </div>
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
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:px-2">
        <TOC headers={post?.headings} />
        <section className="order-1 lg:order-none">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-4 font-mono text-1 font-medium tracking-tight text-slate-800 dark:text-slate-200">
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
            <div className="h-[1.5px] w-auto flex-grow bg-gradient-to-r from-light-blue-100 to-light-blue-50 dark:from-light-blue-900 dark:to-light-blue-950"></div>
            <div className="flex justify-end gap-2 font-mono text-1 font-medium tracking-tight">
              {tags?.map((tag) => (
                <span key={tag?.name} className={`${tag?.style} rounded-[4px] px-1 py-[4px]`}>
                  {tag?.name}
                </span>
              ))}
            </div>
          </div>
          <h1 className="mb-2 bg-gradient-to-r from-light-blue-950 to-light-blue-900 bg-clip-text text-7 font-black tracking-tight text-[transparent] dark:from-light-blue-50 dark:to-light-blue-100">
            {post?.title}
          </h1>
          <p className="mb-5 border-b-[1.5px] border-light-blue-50 pb-4 text-3 font-medium leading-txt text-slate-500 dark:border-dark-blue-950 dark:text-slate-400">
            {post?.description}
          </p>
          {post?.series && <SeriesNavigation title={post?.series} articles={seriesPosts} current={post?.slug}></SeriesNavigation>}
          <article className="article text-3 leading-txt text-slate-800 dark:text-slate-200">
            <Component components={MDXComponents} />
          </article>
        </section>
        <NewsLetter />
      </div>
    </>
  );
}
