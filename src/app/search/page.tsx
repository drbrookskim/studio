import { searchArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';
import { SearchBar } from '@/components/search-bar';
import { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const searchBarFallback = (
    <form className="flex w-full items-center">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="w-full pl-9"
          aria-label="Search articles"
          disabled
        />
      </div>
    </form>
  );

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = typeof searchParams?.q === 'string' ? searchParams.q : '';
  const articles = searchArticles(query);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-headline font-bold mb-4">Search Results</h1>
        <div className="w-full">
            <Suspense fallback={searchBarFallback}>
                <SearchBar />
            </Suspense>
        </div>
      </header>

      {query && (
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {articles.length} result{articles.length !== 1 && 's'} for{' '}
            <span className="font-semibold text-foreground">"{query}"</span>
          </p>
        </div>
      )}

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        query && (
          <div className="text-center py-16 border rounded-lg bg-card">
            <h2 className="text-2xl font-semibold mb-2">No results found</h2>
            <p className="text-muted-foreground">
              Try a different search term.
            </p>
          </div>
        )
      )}
    </div>
  );
}
