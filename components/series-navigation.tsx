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
        className={`flex justify-between rounded rounded-b-none border border-slate-300 bg-slate-100 p-3 ${isOpen && 'border-b-slate-200'}`}
      >
        <h2 className="text-sm font-medium text-slate-900 md:text-base">{title} - Article Series</h2>
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
          <ul className="flex flex-col gap-2 border border-t-0 border-slate-300 bg-slate-100 p-3 text-sm md:text-base">
            {articles?.map((article, index) => (
              <li
                key={index}
                className={
                  article?.slug === current
                    ? 'font-medium text-slate-900 underline decoration-slate-400 decoration-2 underline-offset-2'
                    : 'text-slate-700 hover:text-slate-900 '
                }
              >
                <Link
                  href={'https://ayoubkhial.com/blog/' + article?.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="font-medium text-slate-900">Part {index + 1}:</span> {article?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
