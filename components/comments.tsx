'use client';
import { useEffect, useRef } from 'react';

const Comments = () => {
	const commentBox: any = useRef(null);

	useEffect(() => {
		const commentScript = document.createElement('script');
		const theme = document.documentElement.className.includes('dark') ? 'github-dark' : 'github-light';

		commentScript.async = true;
		commentScript.src = 'https://utteranc.es/client.js';
		commentScript.setAttribute('repo', 'ayoubkhial/blog-comments');
		commentScript.setAttribute('issue-term', 'pathname');
		commentScript.setAttribute('id', 'utterances');
		commentScript.setAttribute('theme', theme);
		commentScript.setAttribute('crossorigin', 'anonymous');
		if (commentBox && commentBox.current) {
			commentBox.current.appendChild(commentScript);
		} else {
			console.error(`Error adding utterances comments on: ${commentBox}`);
		}
	}, []);

	return (
		<div id="post-comments" className="mb-12">
			<h2 className="mb-5 border-b border-gray-100 text-[1.2rem] font-semibold leading-loose tracking-small dark:border-gray-800 md:text-[1.4rem]">
				Comments
			</h2>
			<div ref={commentBox} />
		</div>
	);
};

export default Comments;
