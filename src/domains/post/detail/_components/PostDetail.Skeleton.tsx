export default function PostDetailSkeleton() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full">
      <header className="mb-4 border-b border-border pb-4">
        <div className="mb-2 h-8 w-3/4 animate-pulse rounded-md bg-muted"></div>

        <div className="flex flex-wrap items-center text-sm text-muted-foreground [&>*+*]:before:mx-2 [&>*+*]:before:content-['•']">
          <div className="h-4 w-20 animate-pulse rounded-md bg-muted"></div>
          <div className="h-4 w-16 animate-pulse rounded-md bg-muted"></div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-12 animate-pulse rounded-md bg-muted"></div>
            <div className="h-4 w-14 animate-pulse rounded-md bg-muted"></div>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <div className="h-6 w-full animate-pulse rounded-md bg-muted"></div>
        <div className="h-6 w-5/6 animate-pulse rounded-md bg-muted"></div>
        <div className="h-6 w-4/5 animate-pulse rounded-md bg-muted"></div>
        <div className="h-6 w-3/5 animate-pulse rounded-md bg-muted"></div>
      </div>
    </article>
  );
}
