'use client';

import PostDetailHeader from '@domains/post/detail/_components/PostDetailHeader';
import usePostDetail from '@domains/post/detail/_hooks/usePostDetail';
import MDXRenderer from '@shared/components/MDX/MDXRenderer';

export default function PostDetail() {
  const { data: post } = usePostDetail();

  return (
    <article className="prose prose-neutral dark:prose-invert w-full">
      <PostDetailHeader post={post} />

      <MDXRenderer content={post.content} />
    </article>
  );
}
