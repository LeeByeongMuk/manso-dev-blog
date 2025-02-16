'use client';

import { Suspense, useState } from 'react';

import PostList from '@domains/post/list/_components/PostList';
import PostListSkeleton from '@domains/post/list/_components/PostList.Skeleton';

export default function Home() {
  const [selectedCategory] = useState<string>('all');

  return (
    <section className="mx-auto max-w-3xl bg-background px-6 py-10 text-foreground">
      <h2 className="mb-6 text-3xl font-bold text-foreground">Posts</h2>

      {/*<PostListFiltersContainer*/}
      {/*  selectedCategory={selectedCategory}*/}
      {/*  setSelectedCategory={setSelectedCategory}*/}
      {/*/>*/}

      <Suspense fallback={<PostListSkeleton />}>
        <PostList category={selectedCategory} />
      </Suspense>
    </section>
  );
}
