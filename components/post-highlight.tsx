import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Loader from './loader';
import ViewsCounter from './views-counter';

export const getShortDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(date);
};

export const getTagClass = (color: string) => {
  const colorVariants = {
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    blue: 'bg-light-blue-50 text-light-blue-900 dark:bg-dark-blue-950 dark:text-dark-blue-300',
    green: 'bg-light-green-50 text-light-green-900 dark:bg-dark-green-950 dark:text-dark-green-300',
    red: 'bg-light-red-50 text-light-red-900 dark:bg-dark-red-950 dark:text-dark-red-300',
    lime: 'bg-lime-100 text-lime-700 dark:bg-lime-800 dark:text-lime-300',
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-800 dark:text-violet-300',
    orange: 'bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-300'
  };
  return colorVariants[color];
};

const PostHighlight = ({ post, index }) => {
  const { slug, title, description, keywords, publishedAt, readingTime } = post;
  const tags = keywords.split(',').map((tag) => {
    const [label, color] = tag.match(/(.*)\((.*)\)/)?.slice(1);
    return { name: label, style: getTagClass(color) };
  });
  return (
    <div className="flex flex-col rounded-md border border-light-blue-100 transition duration-300 hover:border-light-blue-200 dark:border-light-blue-900 hover:dark:border-light-blue-800">
      <Link href={`/blog/${slug}`}>
        <Image
          src={`/img/blog/${slug}/og.webp`}
          alt={title}
          width={1200}
          height={630}
          priority={index <= 1 ? true : false}
          className="dark:hidden"
        />
        <Image
          src={`/img/blog/${slug}/og-dark.webp`}
          alt={title}
          width={1200}
          height={630}
          quality={90}
          priority={index <= 1 ? true : false}
          className="hidden dark:block"
        />
      </Link>
      <div className="flex h-full flex-col gap-4 px-3 pb-3 pt-2 sm:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-2 text-3 font-medium">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <div className="flex items-center gap-2 font-mono text-1 font-bold tracking-tight text-slate-800 dark:text-slate-200">
            <span>{getShortDate(new Date(publishedAt!))}</span>
            <span> - </span>
            <span>{readingTime} min read</span>
            <span> - </span>
            <div>
              <Suspense fallback={<Loader />}>
                <ViewsCounter slug={slug} />
              </Suspense>
            </div>
          </div>
        </div>
        <p className="line-clamp-4 text-2 leading-txt text-slate-700 dark:text-slate-300">{description}</p>
        <div className="flex justify-end gap-2 font-mono text-1 font-medium tracking-tight">
          {tags?.map((tag) => (
            <span key={tag?.name} className={`${tag?.style} rounded px-1 py-1`}>
              {tag?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostHighlight;
