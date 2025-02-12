interface PostListFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function PostListFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
}: PostListFiltersProps) {
  return (
    <div className="mb-6">
      <select
        className="w-full rounded-md border border-border bg-card p-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-border dark:bg-card dark:text-foreground md:w-64"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        {['all', ...categories].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
