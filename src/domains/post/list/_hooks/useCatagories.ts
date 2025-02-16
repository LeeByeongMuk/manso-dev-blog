import { useSuspenseQuery } from '@tanstack/react-query';

// import { BASE_URL } from '@lib/api/url';

export type CategoriesResponse = {
  categories: string[];
};

async function fetchCategories(): Promise<CategoriesResponse> {
  const url = `/api/posts/categories`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

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
