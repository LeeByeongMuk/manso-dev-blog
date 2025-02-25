'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { fetchPostDetail } from '@lib/api/getPostDetail';

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
