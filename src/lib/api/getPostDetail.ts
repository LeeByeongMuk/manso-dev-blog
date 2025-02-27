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
  try {
    const res = await fetch(
      `${BASE_URL}/api/posts/${encodeURIComponent(category)}/${encodeURIComponent(slug)}`,
      {
        cache: 'no-store',
      }
    );

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch post');
  }
}
