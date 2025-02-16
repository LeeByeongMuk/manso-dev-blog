import { useSuspenseQuery } from '@tanstack/react-query';

import { BASE_URL } from '@lib/api/url';

export type CategoriesResponse = {
  categories: string[];
};

async function fetchCategories(): Promise<CategoriesResponse> {
  console.log('BASE_URL', BASE_URL);
  const url = `${BASE_URL}/api/posts/categories`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export default function useCategories() {
  return useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
}
