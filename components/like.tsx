'use client';

import { useEffect, useState } from 'react';
import { HeartIcon } from './icons';

const like = (slug: string): void => {
	if (isLiked(slug)) return;

	const likes = localStorage.getItem('likes');
	if (likes) {
		const likesArr = likes.split(',');
		likesArr.push(slug);
		localStorage.setItem('likes', likesArr.join(','));
	} else {
		localStorage.setItem('likes', [slug].toString());
	}
};

const isLiked = (slug: string): boolean => {
	if (typeof window !== 'undefined') {
		const likes = localStorage.getItem('likes');
		return !!likes && likes.split(',').includes(slug);
	}
	return false;
};

export default function Like({ slug, likes: postLikes }: { slug: string; likes: number }) {
	const [hasMounted, setHasMounted] = useState(false);
	const [liked, setLiked] = useState(isLiked(slug));
	const [likes, setLikes] = useState(postLikes);
	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		if (liked) like(slug);
	}, [liked, slug]);

	const click = async () => {
		setLiked(true);
		setLikes(likes + 1);
	};

	return (
		<>
			<span onClick={click} className="group/like-button flex items-center gap-2">
				{hasMounted && <HeartIcon filled={liked} />}
				<span className="text-sm font-medium tracking-wide">{likes} likes</span>
			</span>
		</>
	);
}
