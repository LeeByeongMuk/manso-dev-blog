'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { BASE_URL } from '@lib/api/url';
import { Post } from '@lib/posts/postFactory';

interface Props {
  category: string;
  slug: string;
}

async function fetchPostDetail({ category, slug }: Props): Promise<Post> {
  const res = await fetch(
    `${BASE_URL}/api/posts/${encodeURIComponent(category)}/${encodeURIComponent(slug)}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export default function usePostDetail() {
  const params = useParams();
  const category = params.category as string;
  const slug = params.slug as string;

  return useSuspenseQuery({
    queryKey: ['post', { category, slug }],
    queryFn: () => fetchPostDetail({ category, slug }),
    staleTime: 1000 * 60 * 5,
  });
}
