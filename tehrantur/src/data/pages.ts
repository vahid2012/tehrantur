import type { PageData } from './page-types';
import { pagesBatch1 } from './pages-batch1';
import { pagesBatch2 } from './pages-batch2';
import { pagesBatch3 } from './pages-batch3';
import { pagesBatch4 } from './pages-batch4';
import { images } from './images';

const allPages: PageData[] = [
  ...pagesBatch1,
  ...pagesBatch2,
  ...pagesBatch3,
  ...pagesBatch4,
];

export const pages: PageData[] = allPages.map((page) => {
  const img = images[page.slug as keyof typeof images];
  return {
    ...page,
    image: img ? img.src : page.image,
  };
});

export function getPageBySlug(slug: string): PageData | undefined {
  return pages.find((p) => p.slug === slug);
}

export function getPagesByCategory(category: string): PageData[] {
  return pages.filter((p) => p.category === category);
}

export function getRelatedPages(slug: string): PageData[] {
  const page = getPageBySlug(slug);
  if (!page) return [];
  return page.relatedSlugs
    .map((s) => getPageBySlug(s))
    .filter((p): p is PageData => p !== undefined);
}

export function getImageAlt(slug: string): string {
  const img = images[slug as keyof typeof images];
  return img ? img.alt : '';
}

export type { PageData };
