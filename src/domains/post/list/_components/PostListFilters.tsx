'use client';

import { Dispatch, SetStateAction } from 'react';

import useCategories from '@domains/post/list/_hooks/useCatagories';

export interface PostListFiltersProps {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

export default function PostListFilters({
  selectedCategory,
  setSelectedCategory,
}: PostListFiltersProps) {
  const { data } = useCategories();

  const categories = data?.categories || [];

  return (
    <div className="mb-6">
      <select
        className="w-full rounded-md border border-border bg-card p-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-border dark:bg-card dark:text-foreground md:w-64"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {['all', ...categories].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
