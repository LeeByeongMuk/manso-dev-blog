import PostDetailHeader from '@domains/post/detail/_components/PostDetailHeader';
import { Post } from '@lib/posts/postFactory';
import MDXRenderer from '@shared/components/MDX/MDXRenderer';

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full">
      <PostDetailHeader post={post} />

      <MDXRenderer content={post.content} />
    </article>
  );
}
