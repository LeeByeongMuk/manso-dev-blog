import { useSuspenseQuery } from '@tanstack/react-query';

import { Post } from '@lib/posts/postFactory';

interface Props {
  category: string;
  slug: string;
}

async function fetchPostDetail({ category, slug }: Props): Promise<Post> {
  const res = await fetch(
    `http://localhost:3000/api/posts/${encodeURIComponent(category)}/${encodeURIComponent(slug)}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default function usePostDetail({ category, slug }: Props) {
  return useSuspenseQuery({
    queryKey: ['post', { category, slug }],
    queryFn: () => fetchPostDetail({ category, slug }),
    staleTime: 1000 * 60 * 5,
  });
}
