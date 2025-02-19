import { useSuspenseQuery } from '@tanstack/react-query';

import { BASE_URL } from '@lib/api/url';

export type CategoriesResponse = string[];

async function fetchCategories(): Promise<CategoriesResponse> {
  console.log(BASE_URL);
  const res = await fetch(`${BASE_URL}/api/posts/categories`);
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export default function useCategories() {
  return useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
    staleTime: 0,
  });
}
