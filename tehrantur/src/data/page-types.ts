export interface PageData {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  relatedSlugs: string[];
  faq: Array<{ q: string; a: string }>;
  content: string;
}
