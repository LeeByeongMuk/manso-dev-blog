'use client';

import { Suspense } from 'react';

import PostList from '@domains/post/list/_components/PostList';
import PostListSkeleton from '@domains/post/list/_components/PostList.Skeleton';

interface PostListContainerProps {
  category: string;
}

export default function PostListContainer({
  ...props
}: PostListContainerProps) {
  return (
    <Suspense fallback={<PostListSkeleton />}>
      <PostList {...props} />
    </Suspense>
  );
}
