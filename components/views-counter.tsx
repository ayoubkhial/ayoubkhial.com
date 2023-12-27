import { queryBuilder } from '@lib/planetscale';
import { unstable_noStore as noStore } from 'next/cache';

export const incrementViews = (slug: string) => {
  queryBuilder
    .updateTable('PostInfo')
    .set((eb) => ({ views: eb('views', '+', 1) }))
    .where('slug', '=', slug)
    .execute();
};

const ViewsCounter = async ({ slug }) => {
  noStore();
  const post = await queryBuilder.selectFrom('PostInfo').selectAll().where('slug', '=', slug).executeTakeFirst();
  return <span>{post?.views} views</span>;
};

export default ViewsCounter;
