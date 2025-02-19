'use client';

import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import PostListFilters from '@domains/post/list/_components/PostListFilters';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <section className="mx-auto max-w-3xl bg-background px-6 py-10 text-foreground">
      <h2 className="mb-6 text-3xl font-bold text-foreground">Posts</h2>

      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostListFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Suspense>
      </ErrorBoundary>

      {/*<Suspense fallback={<PostListSkeleton />}>*/}
      {/*  <PostList category={selectedCategory} />*/}
      {/*</Suspense>*/}
    </section>
  );
}
