import { getArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';

export default function Home() {
  const articles = getArticles();

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-2">
          Planning Lens
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring the world through a planning perspective. Curated articles
          for the modern strategist.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
