import { BASE_URL } from '@lib/api/url';
import { Post } from '@lib/posts/postFactory';

type Props = {
  category: string;
  slug: string;
};

export async function fetchPostDetail({
  category,
  slug,
}: Props): Promise<Post> {
  const res = await fetch(
    `${BASE_URL}/api/posts/${encodeURIComponent(category)}/${encodeURIComponent(slug)}`,
    {
      cache: 'no-store',
    }
  );

  console.log(res);

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}
