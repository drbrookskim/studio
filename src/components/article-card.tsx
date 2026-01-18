import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <Badge variant="secondary" className="mb-2">
            {article.category.name}
          </Badge>
          <CardTitle className="font-headline text-2xl leading-tight mb-3 group-hover:text-primary/80">
            {article.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {article.summary}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={article.author.avatarUrl} alt={article.author.name} data-ai-hint={article.author.avatarHint} />
              <AvatarFallback>
                {article.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{article.author.name}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
