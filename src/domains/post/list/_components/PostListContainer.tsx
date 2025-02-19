import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import PostList from '@domains/post/list/_components/PostList';
import PostListSkeleton from '@domains/post/list/_components/PostList.Skeleton';

interface PostListContainerProps {
  category: string;
}

export default function PostListContainer({
  ...props
}: PostListContainerProps) {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
