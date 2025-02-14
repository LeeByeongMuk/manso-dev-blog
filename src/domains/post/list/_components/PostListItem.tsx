import Link from 'next/link';

import { Post } from '@lib/posts/postFactory';
import { cn } from '@lib/utils';

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={post.url} className="block">
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
  );
}
