'use client';

import { useParams } from 'next/navigation';

import PostDetail from '@domains/post/detail/_components/PostDetail';
import usePostDetail from '@domains/post/detail/_hooks/usePostDetail';

export default function PostDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const slug = params.slug as string;
  const { data, isLoading, error } = usePostDetail({ category, slug });

  if (isLoading) return <p className="text-muted-foreground">Loading...</p>;
  if (error || !data)
    return <p className="text-muted-foreground">Error loading post.</p>;

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <PostDetail post={data} />

      {/*<AuthorCard />*/}
    </section>
  );
}
