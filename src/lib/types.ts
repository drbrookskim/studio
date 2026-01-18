export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
  avatarHint: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  category: Category;
  author: Author;
  publishedAt: string;
  summary: string;
}
