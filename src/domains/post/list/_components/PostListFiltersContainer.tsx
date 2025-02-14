import { Suspense } from 'react';

import PostListFilters, {
  PostListFiltersProps,
} from '@domains/post/list/_components/PostListFilters';
import PostListFiltersSkeleton from '@domains/post/list/_components/PostListFilters.Skeleton';

export default function PostListFiltersContainer({
  ...props
}: PostListFiltersProps) {
  return (
    <Suspense fallback={<PostListFiltersSkeleton />}>
      <PostListFilters {...props} />
    </Suspense>
  );
}
