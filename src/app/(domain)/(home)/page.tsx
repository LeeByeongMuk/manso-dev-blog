'use client';

import { useState } from 'react';

import PostList from '@domains/post/list/_components/PostList';
import PostListFilters from '@domains/post/list/_components/PostListFilters';
import usePosts from '@domains/post/list/_hooks/usePosts';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { data, isLoading, error } = usePosts(selectedCategory);

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;
  if (error || !data)
    return <p className="text-muted-foreground">Error loading posts.</p>;

  const { posts, categories } = data;

  return (
    <section className="mx-auto max-w-3xl bg-background px-6 py-10 text-foreground">
      <h2 className="mb-6 text-3xl font-bold text-foreground">Posts</h2>

      <PostListFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <PostList posts={posts} />
    </section>
  );
}
