import { getArticleBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatDate } from '@/lib/utils';
import { Lightbulb } from 'lucide-react';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const contentParagraphs = article.content.split('\n\n');

  return (
    <article className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto mb-8 text-center">
          <LinkBadge category={article.category} />
          <h1 className="font-headline text-4xl md:text-5xl font-bold my-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <AuthorInfo author={article.author} />
            <span>&bull;</span>
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>
        </header>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={article.imageHint}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <section className="mb-8">
            <div className="bg-accent/50 border-l-4 border-accent-foreground/50 p-6 rounded-r-lg">
              <h2 className="flex items-center text-lg font-semibold mb-2">
                <Lightbulb className="h-5 w-5 mr-2 text-accent-foreground/80" />
                AI-Powered Summary
              </h2>
              <p className="text-muted-foreground italic">
                {article.summary}
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground">
            {contentParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function LinkBadge({ category }: { category: { name: string; slug: string } }) {
  return (
    <a href={`/category/${category.slug}`}>
      <Badge variant="secondary">{category.name}</Badge>
    </a>
  );
}

function AuthorInfo({
  author,
}: {
  author: { name: string; avatarUrl: string, avatarHint: string };
}) {
  return (
    <div className="flex items-center space-x-2">
      <Avatar className="h-6 w-6">
        <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.avatarHint} />
        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <span className="font-medium">{author.name}</span>
    </div>
  );
}
