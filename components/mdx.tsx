import React from 'react';
import { InfoIcon, LightBulbIcon, QuestionIcon, WarningIcon } from './icons';
import Link from 'next/link';
import { default as NextImage } from 'next/image';

const P = (props) => {
  return <p className="my-1 md:my-[6px]" {...props} />;
};

const A = (props) => {
  const className =
    'font-medium text-slate-900 underline decoration-slate-300 hover:decoration-slate-500 underline-offset-2 decoration-2 transition duration-300';
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
  return <strong className="text-slate-900" {...props} />;
};

const H2 = (props) => {
  return (
    <h2
      className="mb-2 mt-4 text-lg font-semibold leading-loose underline decoration-slate-200 decoration-4 underline-offset-4 md:mb-4 md:mt-8 md:text-2xl"
      {...props}
    />
  );
};

const H3 = (props) => {
  return (
    <h3
      className="mb-1 mt-2 text-base font-semibold leading-loose underline decoration-slate-100 decoration-4 underline-offset-4 md:mb-2 md:mt-4 md:text-lg"
      {...props}
    />
  );
};

const Ul = (props) => {
  return <ul className="mb-1 list-inside list-none pl-7" {...props} />;
};

const Li = (props) => {
  return (
    <li className="mb-1 before:absolute before:-ml-6 before:text-slate-500 before:content-['\2013'] lg:before:content-['—']" {...props} />
  );
};

const Code = ({ children, ...props }) => {
  const isChildrenArray = Array.isArray(children);
  if (isChildrenArray || props?.['data-language']) {
    return (
      <code
        className="overflow-wrap-break-word grid max-w-full !bg-transparent p-0 font-mono text-xs font-semibold leading-5 md:text-[13px] md:leading-6"
        {...props}
      >
        {children}
      </code>
    );
  }
  return (
    <code
      className="overflow-wrap-break-word md:text-md mx-[1px] rounded bg-[#EBEFF5]  px-[3px] py-[2px] font-mono text-xs font-semibold text-chablis-500  md:px-[6px] md:py-[3px] md:text-[13px]"
      {...props}
    >
      {children}
    </code>
  );
};

const Pre = ({ children, ...props }) => {
  return (
    <pre className="whitespace-pre-wrap break-all rounded !bg-slate-100 p-3 md:p-4" {...props}>
      {children}
    </pre>
  );
};

const Callout = ({ type = 'INFO', children }) => {
  let color = 'purple';
  switch (type) {
    case 'INFO':
      color = 'blue';
      break;
    case 'WARNING':
      color = 'red';
      break;
    case 'TIP':
      color = 'green';
      break;
    default:
      color = 'purple';
  }
  const calloutColorVariants = {
    blue: 'border-solitude-200 bg-solitude-50 ',
    red: 'border-chablis-200 bg-chablis-50 ',
    green: 'border-madang-200 bg-madang-50 ',
    yellow: 'border-rice-cake-200 bg-rice-cake-50 ',
    purple: 'border-hawkes-blue-200 bg-hawkes-blue-50 '
  };
  const textColorVariants = {
    blue: 'text-solitude-900 [&_a]:text-solitude-900 [&_strong]:text-solitude-900 [&_pre]:!bg-solitude-100 [&_pre]:!border-solitude-200 [&_a]:decoration-slate-200 hover:[&_a]:decoration-slate-400 [&_code]:bg-solitude-100 [&_code]:text-solitude-800 ',
    red: 'text-chablis-900 [&_a]:text-chablis-900 [&_strong]:text-chablis-900 [&_pre]:!bg-chablis-100 [&_pre]:!border-chablis-200 [&_a]:decoration-slate-200 hover:[&_a]:decoration-slate-400 [&_code]:bg-chablis-100 [&_code]:text-chablis-800 ',
    green:
      'text-madang-900 [&_a]:text-madang-900 [&_strong]:text-madang-900 [&_pre]:!bg-madang-100 [&_pre]:!border-madang-200 [&_a]:decoration-slate-200 hover:[&_a]:decoration-slate-400 [&_code]:bg-madang-100 [&_code]:text-madang-800 ',
    purple:
      'text-hawkes-blue-900 [&_a]:text-hawkes-blue-900 [&_strong]:text-hawkes-blue-900 [&_pre]:!bg-hawkes-blue-100 [&_pre]:!border-hawkes-blue-200 [&_a]:decoration-slate-200 hover:[&_a]:decoration-slate-400 [&_code]:bg-hawkes-blue-100 [&_code]:text-hawkes-blue-800 ',
    yellow:
      'text-rice-cake-900 [&_a]:text-rice-cake-900 [&_strong]:text-rice-cake-900 [&_pre]:!bg-rice-cake-100 [&_pre]:!border-rice-cake-200 [&_a]:decoration-slate-200 hover:[&_a]:decoration-slate-400 [&_code]:bg-rice-cake-100 [&_code]:text-rice-cake-800 '
  };
  return (
    <aside
      className={`${type.toLocaleLowerCase()} my-2 flex w-full gap-5 rounded-md border border-dashed md:my-3 ${
        calloutColorVariants[color]
      } p-3 md:p-4 ${color === 'purple' ? '!mt-8' : ''}`}
    >
      <div>
        {type === 'INFO' ? <InfoIcon /> : type === 'WARNING' ? <WarningIcon /> : type === 'TIP' ? <LightBulbIcon /> : <QuestionIcon />}
      </div>
      <div className={`${textColorVariants[color]} overflow-x-auto [&>*:last-child]:my-0`}>
        {type === 'RESOURCES' && <h4 className="mb-3 font-medium text-madang-950">Read more</h4>}
        {children}
      </div>
    </aside>
  );
};

const Image = (params) => {
  const { filename, alt, priority = false } = params;
  const common = { alt, priority, width: 0, height: 0, sizes: '100vw' };
  const lastDotIndex = filename.lastIndexOf('.');
  const name = filename.slice(0, lastDotIndex);
  const extension = filename.slice(lastDotIndex + 1);
  const src = `/img/blog/${name}.${extension}`;
  return (
    <div className="my-4 rounded-lg border border-dashed border-slate-400 bg-slate-100 p-4 md:my-6">
      <NextImage className="block h-auto w-full" src={src} {...common} />
    </div>
  );
};

const Table = ({ headers, rows }) => (
  <div className="relative my-2 overflow-x-auto md:my-3">
    <table className="w-full text-left text-sm text-slate-700">
      <thead className="bg-slate-100 text-slate-900">
        <tr>
          {headers.map((header, index) => (
            <th className="px-6 py-3" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {row.map((cell, cellIndex) => (
              <td className="px-6 py-4" key={cellIndex}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

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
  Image,
  Table
};

export default MDXComponents;
