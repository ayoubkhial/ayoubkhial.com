import { allPosts } from 'contentlayer/generated';
import RSS from 'rss';
import { NextResponse } from 'next/server';

const SITE_URL = `https://www.ayoubkhial.com`;
const FULL_NAME = 'Ayoub Khial';

export async function GET() {
  const feed = new RSS({
    title: 'Ayoub Khial',
    description: 'A software engineer specializing in building beautiful and minimalist web experiences.',
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `2023 ${FULL_NAME}`
  });

  for (const post of allPosts) {
    const { title, slug, description, publishedAt, keywords } = post;

    feed.item({
      title,
      id: `${SITE_URL}/blog/${slug}`,
      link: `${SITE_URL}/blog/${slug}`,
      description,
      date: new Date(publishedAt),
      category: keywords?.split(',')?.map((tag) => ({ name: tag }))
    });
  }

  return new NextResponse(feed.xml(), {
    status: 200,
    headers: { 'Content-Type': 'application/xml' }
  });
}
