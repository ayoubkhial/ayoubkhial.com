import { allPosts } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://ayoubkhial.com/blog/${post.slug}`,
    lastModified: post.publishedAt
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `https://ayoubkhial.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}
