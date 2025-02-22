import { Suspense } from 'react';

import PostDetail from '@domains/post/detail/_components/PostDetail';

export default function PostDetailContainer() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PostDetail />
    </Suspense>
  );
}
