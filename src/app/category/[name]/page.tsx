import { getArticlesByCategory, getCategoryBySlug, getCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    name: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { name: string } }) {
  const category = getCategoryBySlug(params.name);
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12 border-b pb-8">
        <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-2">Category</p>
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          {category.name}
        </h1>
      </header>
      
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-2">No articles yet</h2>
          <p className="text-muted-foreground">Check back later for articles in this category.</p>
        </div>
      )}
    </div>
  );
}
