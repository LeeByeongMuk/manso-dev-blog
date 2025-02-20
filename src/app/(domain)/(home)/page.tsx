'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const PostListContainer = dynamic(
  () => import('@domains/post/list/_components/PostListContainer'),
  {
    ssr: false,
  }
);

const PostListFiltersContainer = dynamic(
  () => import('@domains/post/list/_components/PostListFiltersContainer'),
  {
    ssr: false,
  }
);

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
