'use client';
import { useState } from 'react';
import { DownIcon, UpIcon } from './icons';
import Link from 'next/link';

type Props = {
  title: string;
  articles: { slug: string; title: string }[];
  current: string;
};

export default function SeriesNavigation({ title, articles, current }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <div
        className={`flex justify-between rounded rounded-b-none border border-slate-300 bg-slate-100 p-3 dark:border-slate-600 dark:bg-[#25334B] ${
          isOpen && 'border-b-slate-200 dark:border-b-slate-700'
        }`}
      >
        <h2 className="text-sm font-medium text-slate-900 md:text-base dark:text-slate-200">{title} - Article Series</h2>
        <button
          onClick={toggleList}
          data-accordion-target="#accordion-collapse-body"
          aria-expanded="true"
          aria-controls="accordion-collapse-body"
        >
          {isOpen ? <UpIcon /> : <DownIcon />}
        </button>
      </div>
      {isOpen && (
        <div id="accordion-collapse-body" aria-labelledby="accordion-collapse-heading">
          <ul className="flex flex-col gap-2 border border-t-0 border-slate-300 bg-slate-100 p-3 text-sm md:text-base dark:border-slate-600 dark:bg-[#25334B]">
            {articles?.map((article, index) => (
              <li
                key={index}
                className={
                  article?.slug === current
                    ? 'font-medium text-slate-900 underline decoration-slate-400 decoration-2 underline-offset-2 dark:text-slate-200 dark:decoration-slate-600'
                    : 'text-slate-700 hover:text-slate-900 dark:text-slate-400'
                }
              >
                <Link
                  href={'https://ayoubkhial.com/blog/' + article?.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="font-medium text-slate-900 dark:text-slate-100">Part {index + 1}:</span> {article?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
