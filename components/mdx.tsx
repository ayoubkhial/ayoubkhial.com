import React from 'react';
import { InfoIcon, QuestionIcon, WarningIcon } from './icons';
import Link from 'next/link';
import { default as NextImage } from 'next/image';

const P = (props) => {
  return <p className="my-1 leading-txt" {...props} />;
};

const A = (props) => {
  const className =
    'font-medium text-slate-950 underline decoration-slate-500 hover:decoration-slate-950 dark:decoration-slate-500 underline-offset-2 decoration-[1.5px] dark:text-slate-50 dark:hover:decoration-slate-50 transition duration-300';
  const href = props.href;
  if (href.startsWith('/')) {
    return (
      <Link className={className} href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith('#')) return <a className={className} {...props} />;
  return <a className={className} target="_blank" rel="noopener noreferrer" {...props} />;
};

const Strong = (props) => {
  return <strong className="text-slate-950 dark:text-slate-50" {...props} />;
};

const H2 = (props) => {
  return (
    <h2
      className="mb-2 mt-5 bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-6 font-bold leading-loose text-transparent underline decoration-light-blue-100 decoration-4 underline-offset-4 dark:from-slate-200 dark:to-slate-300 dark:decoration-dark-blue-900"
      {...props}
    />
  );
};

const H3 = (props) => {
  return (
    <h3
      className="mb-1 mt-3 bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-4 font-bold leading-loose text-transparent underline decoration-light-green-100 decoration-4 underline-offset-4 dark:from-slate-200 dark:to-slate-300 dark:decoration-dark-green-950"
      {...props}
    />
  );
};

const Ul = (props) => {
  return <ul className="mb-1 list-inside list-none pl-8" {...props} />;
};

const Li = (props) => {
  return (
    <li
      className="before:absolute before:-ml-4 before:text-slate-500 before:content-['\2013']  dark:before:text-gray-400 lg:before:content-['—']"
      {...props}
    />
  );
};

const Code = ({ children, ...props }) => {
  const isChildrenArray = Array.isArray(children);
  if (isChildrenArray || props?.['data-language']) {
    return (
      <code
        className="overflow-wrap-break-word grid max-w-full !bg-transparent p-0 font-mono text-1 font-semibold leading-relaxed tracking-wide"
        {...props}
      >
        {children}
      </code>
    );
  }
  return (
    <code
      className="mx-[1px] rounded bg-slate-200 px-[6px] py-[4px] font-mono text-1 font-semibold text-light-red-500 dark:bg-slate-700 dark:text-light-red-400"
      {...props}
    >
      {children}
    </code>
  );
};

const Pre = ({ children, ...props }) => {
  return (
    <pre
      className="whitespace-pre-wrap break-all rounded-lg border border-dashed border-slate-400 !bg-slate-100 px-2 py-3 dark:border-slate-600 dark:!bg-[#1D273A]"
      {...props}
    >
      {children}
    </pre>
  );
};

const Callout = ({ type = 'INFO', children }) => {
  const color = type === 'INFO' ? 'blue' : type === 'WARNING' ? 'red' : 'green';
  const calloutColorVariants = {
    blue: 'border-light-blue-300 bg-light-blue-50 dark:border-dark-blue-600 dark:bg-dark-blue-950',
    red: 'border-light-red-300 bg-light-red-50 dark:border-dark-red-600 dark:bg-dark-red-950',
    green: 'border-light-green-300 bg-light-green-50 dark:border-dark-green-600 dark:bg-dark-green-950'
  };
  const textColorVariants = {
    blue: 'text-light-blue-800 dark:text-dark-blue-200 [&_strong]:text-light-blue-900 dark:[&_strong]:text-dark-blue-100 [&_pre]:!bg-light-blue-100 [&_pre]:!border-light-blue-300 [&_a]:text-light-blue-900 dark:[&_a]:text-dark-blue-100 [&_a]:decoration-light-blue-700 hover:[&_a]:decoration-light-blue-950 dark:[&_a]:decoration-dark-blue-300 dark:hover:[&_a]:decoration-dark-blue-50 [&_code]:bg-[#D0E8FC] [&_code]:text-light-blue-800 dark:[&_code]:bg-dark-blue-900 dark:[&_code]:text-dark-blue-300',
    red: 'text-light-red-800 dark:text-dark-red-200 [&_strong]:text-light-red-900 dark:[&_strong]:text-dark-red-100 [&_pre]:!bg-light-red-100 [&_a]:text-light-red-900 dark:[&_a]:text-dark-red-100 [&_a]:decoration-light-red-700 hover:[&_a]:decoration-light-red-950 dark:[&_a]:decoration-dark-red-300 dark:hover:[&_a]:decoration-dark-red-50 [&_code]:bg-light-red-200 [&_code]:text-light-red-800 dark:[&_code]:bg-dark-red-900 dark:[&_code]:text-dark-red-300',
    green:
      'text-light-green-800 dark:text-dark-green-200 [&_strong]:text-light-green-900 dark:[&_strong]:text-dark-green-100 [&_pre]:!bg-light-green-100  [&_a]:text-light-green-900 dark:[&_a]:text-dark-green-100 [&_a]:decoration-light-green-700 hover:[&_a]:decoration-light-green-950 dark:[&_a]:decoration-dark-green-300 dark:hover:[&_a]:decoration-dark-green-50'
  };
  return (
    <aside
      className={`${type.toLocaleLowerCase()} my-3 flex w-full gap-5 rounded-md border border-dashed ${calloutColorVariants[color]} p-3`}
    >
      <div className="mt-[2px] leading-txt">{type === 'INFO' ? <InfoIcon /> : type === 'WARNING' ? <WarningIcon /> : <QuestionIcon />}</div>
      <div className={`${textColorVariants[color]} overflow-x-auto [&>*:last-child]:my-0`}>
        {type === 'RESOURCES' && <h4 className="mb-3 font-medium">Read more</h4>}
        {children}
      </div>
    </aside>
  );
};

const Image = (params) => {
  const { filename, alt, priority = false, adaptive = true } = params;
  const common = { alt, priority, width: 0, height: 0, sizes: '100vw' };
  const lastDotIndex = filename.lastIndexOf('.');
  const name = filename.slice(0, lastDotIndex);
  const extension = filename.slice(lastDotIndex + 1);
  const src = `/img/blog/${name}.${extension}`;
  const darkSrc = adaptive ? `/img/blog/${name}_dark.${extension}` : src;
  return (
    <div className=" my-3 rounded-lg border border-dashed border-slate-400 bg-slate-100 p-4 dark:border-slate-600 dark:bg-[#1A2334]">
      <NextImage className="hidden h-auto w-full dark:block" src={darkSrc} {...common} />
      <NextImage className="block h-auto w-full dark:hidden" src={src} {...common} />
    </div>
  );
};

const MDXComponents = {
  p: P,
  a: A,
  strong: Strong,
  h2: H2,
  h3: H3,
  ul: Ul,
  li: Li,
  code: Code,
  pre: Pre,
  Callout,
  Image
};

export default MDXComponents;
