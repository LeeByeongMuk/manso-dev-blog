import Link from 'next/link';

import { Post } from '@lib/posts/postFactory';
import { cn } from '@lib/utils';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-4">
      {posts.length > 0 ? (
        posts.map(post => (
          <Link key={post.url} href={post.url} className="block">
            <div
              className={cn(
                'border border-border dark:border-border rounded-lg p-4 shadow-sm bg-card dark:bg-card transition-all hover:shadow-md'
              )}
            >
              <h4 className="text-xl font-semibold text-foreground dark:text-foreground">
                {post.title}
              </h4>
              <p className="text-muted-foreground">{post.description}</p>
              <p className="text-sm text-muted-foreground">{post.dateString}</p>
              <div className="my-2 border-t border-border dark:border-border"></div>
              <p className="text-sm font-medium text-primary dark:text-foreground">
                Read More →
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-muted-foreground">
          No posts available in this category.
        </p>
      )}
    </div>
  );
}
