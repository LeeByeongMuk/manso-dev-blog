import PostListItem from '@domains/post/list/_components/PostListItem';
import usePosts from '@domains/post/list/_hooks/usePosts';

export interface PostListProps {
  category: string;
}

export default function PostList({ category }: PostListProps) {
  const { data } = usePosts(category);
  const posts = data?.posts || [];

  return (
    <div className="grid gap-4">
      {posts.length > 0 ? (
        posts.map(post => <PostListItem key={post.url} post={post} />)
      ) : (
        <p className="text-muted-foreground">
          No posts available in this category.
        </p>
      )}
    </div>
  );
}
