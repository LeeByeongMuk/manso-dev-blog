import { Post } from '@lib/posts/postFactory';

interface PostDetailHeaderProps {
  post: Post;
}

export default function PostDetailHeader({ post }: PostDetailHeaderProps) {
  return (
    <header className="mb-4 border-b border-border pb-4">
      <h1 className="mb-2 text-3xl font-bold leading-tight">{post.title}</h1>

      <div className="flex flex-wrap items-center text-sm text-muted-foreground [&>*+*]:before:mx-2 [&>*+*]:before:content-['•']">
        <time>{post.dateString}</time>
        <div>{post.readingMinutes}분 소요</div>
        {post.tags && (
          <div className="flex items-center space-x-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
