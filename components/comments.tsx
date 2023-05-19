'use client';
import Giscus from '@giscus/react';

export default function Comment() {
	return (
		<Giscus
			id="comments"
			repo="ayoubkhial/ayoubkhial.com"
			mapping="pathname"
			category="Blog"
			repoId="R_kgDOJYEx6g"
			categoryId="DIC_kwDOJYEx6s4CWnDe"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="preferred_color_scheme"
			lang="en"
			loading="lazy"
		/>
	);
}
