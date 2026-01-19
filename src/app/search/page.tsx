import { SearchBar } from '@/components/search-bar';
import { SearchResults } from '@/components/search-results';
import { Skeleton } from '@/components/ui/skeleton';
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

const searchResultsFallback = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex flex-col rounded-lg border bg-card shadow-sm">
        <Skeleton className="h-full w-full aspect-[3/2] rounded-t-lg rounded-b-none" />
        <div className="flex-grow p-6 space-y-4">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-7 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
        <div className="p-6 pt-0 flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-[100px]" />
            </div>
        </div>
      </div>
    ))}
  </div>
);


export default function SearchPage() {
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

      <Suspense fallback={searchResultsFallback}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
