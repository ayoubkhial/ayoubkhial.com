import { unstable_noStore as noStore } from 'next/cache';
import { createClient } from '../supabase/server';

export const incrementViews = async (slug: string) => {
  const supabase = createClient();
  const { data } = await supabase.from('PostInfo').select('views').eq('slug', slug).maybeSingle();
  if (!data) {
    await supabase.from('PostInfo').insert([{ slug, views: 1 }]);
  } else {
    await supabase
      .from('PostInfo')
      .update({ views: data.views + 1 })
      .eq('slug', slug);
  }
};

const ViewsCounter = async ({ slug }) => {
  noStore();
  let post: { views: number };
  const supabase = createClient();

  const { data, error } = await supabase.from('PostInfo').select('views').eq('slug', slug).maybeSingle();
  console.log('ViewsCounter - data:', data);
  if (!data) {
    await supabase.from('PostInfo').insert([{ slug, views: 1 }]);
    post = { views: 1 };
  } else if (error) {
    post = { views: 1 };
  } else {
    post = data;
  }

  return <span>{post?.views} views</span>;
};

export default ViewsCounter;
