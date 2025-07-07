import { BlogList } from '@/components/ui/blog-article';
import { client } from '@/lib/strapi';
import { CMSNews } from '@/types/content';

async function getNews() {
  const news: { results: CMSNews[] } = await client.find('news-articles', {
    sort: 'publishedAt:desc',
    populate: 'deep',
  });
  return news.results;
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">News & Announcements</h1>
        <BlogList articles={articles} />
      </div>
    </main>
  );
}
