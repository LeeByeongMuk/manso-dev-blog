import { Suspense } from 'react';

import PostDetail from '@domains/post/detail/_components/PostDetail';
import PostDetailSkeleton from '@domains/post/detail/_components/PostDetail.Skeleton';
import { fetchPostDetail } from '@lib/api/getPostDetail';

export default async function PostDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;
  const post = await fetchPostDetail({ category, slug });

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <Suspense fallback={<PostDetailSkeleton />}>
        <PostDetail post={post} />
      </Suspense>

      {/*<AuthorCard />*/}
    </section>
  );
}
