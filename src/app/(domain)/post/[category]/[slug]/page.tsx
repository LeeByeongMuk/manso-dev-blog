'use client';

import { Suspense } from 'react';

import PostDetail from '@domains/post/detail/_components/PostDetail';

export default function PostDetailPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetail />
      </Suspense>

      {/*<AuthorCard />*/}
    </section>
  );
}
