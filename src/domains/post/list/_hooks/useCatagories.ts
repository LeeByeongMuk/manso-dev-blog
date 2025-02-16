import { useQuery } from '@tanstack/react-query';

import { BASE_URL } from '@lib/api/url';

export type CategoriesResponse = string[];

async function fetchCategories(): Promise<CategoriesResponse> {
  const res = await fetch(`${BASE_URL}/api/posts/categories`);
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export default function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
    staleTime: 1000 * 60 * 5,
  });
}
