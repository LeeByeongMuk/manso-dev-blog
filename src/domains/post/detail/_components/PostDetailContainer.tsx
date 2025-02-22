import { Suspense } from 'react';

import PostDetail from '@domains/post/detail/_components/PostDetail';
import PostDetailSkeleton from '@domains/post/detail/_components/PostDetail.Skeleton';

export default function PostDetailContainer() {
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <PostDetail />
    </Suspense>
  );
}
