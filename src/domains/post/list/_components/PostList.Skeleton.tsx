export default function PostListSkeleton() {
  return (
    <div className="grid gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-lg border border-border bg-card p-4 shadow-sm dark:border-border dark:bg-card"
        >
          <div className="mb-2 h-6 w-3/4 rounded bg-muted"></div>
          <div className="mb-2 h-4 w-1/2 rounded bg-muted"></div>
          <div className="h-4 w-1/3 rounded bg-muted"></div>
        </div>
      ))}
    </div>
  );
}
