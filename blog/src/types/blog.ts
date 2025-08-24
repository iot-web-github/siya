export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}