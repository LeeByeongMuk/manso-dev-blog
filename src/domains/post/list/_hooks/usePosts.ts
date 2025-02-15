import { useSuspenseQuery } from '@tanstack/react-query';

import { BASE_URL } from '@lib/api/constants';
import { Post } from '@lib/posts/postFactory';

export type PostsResponse = {
  posts: Post[];
  categories: string[];
};

async function fetchPosts(category: string): Promise<PostsResponse> {
  console.log('BASE_URL', BASE_URL);
  const url = `${BASE_URL}/api/posts?category=${encodeURIComponent(category)}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('res', res);

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default function usePosts(selectedCategory: string) {
  return useSuspenseQuery({
    queryKey: ['posts', selectedCategory],
    queryFn: () => fetchPosts(selectedCategory),
  });
}
