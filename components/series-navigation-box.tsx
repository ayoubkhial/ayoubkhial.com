'use client';
import { useState } from 'react';

type Props = {
	title: string;
	articles: { slug: string; title: string; url: string }[];
	current: string;
};

export default function SeriesNavigationBox({ title, articles, current }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleList = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div id="accordion-collapse" data-accordion="collapse">
			<div className="flex justify-between rounded-lg rounded-b-none border border-[#cc9dfb] bg-[#f7f0fe] p-4 dark:border-[#c8d2e9] dark:bg-[#1d2a49]">
				<h2 className="font-heading text-[1rem] font-semibold leading-loose tracking-wider text-[#26034a] dark:text-[#dae1f1] md:text-[1.1rem]">
					{title} - Article Series
				</h2>
				<button
					onClick={toggleList}
					data-accordion-target="#accordion-collapse-body"
					aria-expanded="true"
					aria-controls="accordion-collapse-body"
				>
					{isOpen && (
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
							<defs>
								<path
									id="ipOUpC0"
									d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
									clip-rule="evenodd"
								></path>
							</defs>
							<g fill="none" className="stroke-[#b36bfa] dark:stroke-[#edf0f8]" stroke-width="3">
								<use href="#ipOUpC0" clip-rule="evenodd"></use>
								<use href="#ipOUpC0" stroke-linejoin="round"></use>
								<path stroke-linecap="round" stroke-linejoin="round" d="m33 27l-9-9l-9 9"></path>
							</g>
						</svg>
					)}
					{!isOpen && (
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
							<g fill="none" className="stroke-[#b36bfa] dark:stroke-[#edf0f8]" stroke-linejoin="round" stroke-width="3">
								<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
								<path stroke-linecap="round" d="m33 21l-9 9l-9-9"></path>
							</g>
						</svg>
					)}
				</button>
			</div>
			{isOpen && (
				<div id="accordion-collapse-body" aria-labelledby="accordion-collapse-heading">
					<ul
						className="flex flex-col gap-4 border border-t-0  border-[#cc9dfb] bg-[#f2e6fe] p-4 text-[1rem] font-medium 
dark:border-[#c8d2e9] dark:bg-[#1d2a49]"
					>
						{articles?.map((article, index) => (
							<li key={index} className={article?.slug === current ? 'font-semibold underline underline-offset-[3px]' : ''}>
								<a
									href={'https://ayoubkhial.com/blog/' + article?.slug}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2"
								>
									<span className="font-bold">Part {index + 1}:</span> {article?.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
