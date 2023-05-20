import { allPosts } from 'contentlayer/generated';
import { Feed } from 'feed';
import { NextResponse } from 'next/server';

const SITE_URL = `https://www.ayoubkhial.com`;
const FULL_NAME = 'Ayoub Khial';

export async function GET() {
	const feed = new Feed({
		title: 'Ayoub Khial portfolio',
		description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
		id: SITE_URL,
		link: SITE_URL,
		language: 'en',
		favicon: `${SITE_URL}/favicon.ico`,
		copyright: `2023 ${FULL_NAME}`,
		author: {
			name: FULL_NAME,
			email: 'ayouub.khial@gmail.com',
			link: SITE_URL
		}
	});

	for (const post of allPosts) {
		const { title, slug, description, publishedAt, keywords } = post;

		feed.addItem({
			title,
			id: `${SITE_URL}/blog/${slug}`,
			link: `${SITE_URL}/blog/${slug}`,
			description,
			date: new Date(publishedAt),
			category: keywords?.split(',')?.map(tag => ({ name: tag }))
		});
	}

	const xml = feed.rss2();

	return new NextResponse(xml, {
		status: 200,
		headers: { 'Content-Type': 'application/xml' }
	});
}
