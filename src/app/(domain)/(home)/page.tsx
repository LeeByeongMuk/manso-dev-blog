'use client';

import { useState } from 'react';

import PostListContainer from '@domains/post/list/_components/PostListContainer';
import PostListFiltersContainer from '@domains/post/list/_components/PostListFiltersContainer';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section className="mx-auto max-w-3xl bg-background px-6 py-10 text-foreground">
      <h2 className="mb-6 text-3xl font-bold text-foreground">Posts</h2>

      <PostListFiltersContainer
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <PostListContainer category={selectedCategory} />
    </section>
  );
}
