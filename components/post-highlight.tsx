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
    slate: 'bg-slate-100 text-slate-700',
    blue: 'bg-solitude-50 text-solitude-900',
    green: 'bg-madang-50 text-madang-900',
    red: 'bg-chablis-50 text-chablis-900',
    purple: 'bg-hawkes-blue-50 text-hawkes-blue-900',
    orange: 'bg-vivid-tangerine-50 text-vivid-tangerine-900'
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
    <div className="flex flex-col">
      <Link href={`/blog/${slug}`} className="mb-2">
        <Image
          src={`/img/blog/${slug}/og.webp`}
          alt={title}
          width={900}
          height={210}
          priority={index <= 1 ? true : false}
          className="rounded-md"
        />
      </Link>
      <div className="flex h-full flex-col gap-4 sm:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-2 text-base font-medium">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-tight text-slate-600">
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
        <p className="line-clamp-4 h-full text-sm leading-[1.7] text-slate-600">{description}</p>
        <div className="flex flex-wrap justify-end gap-1 font-mono text-xs font-medium tracking-tight">
          {tags?.map((tag) => (
            <span key={tag?.name} className={`${tag?.style} rounded px-2 py-1`}>
              {tag?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostHighlight;
