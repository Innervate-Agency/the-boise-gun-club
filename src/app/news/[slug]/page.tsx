// import { BlogDetail } from '@/components/ui/blog-article';
// import { client } from '@/lib/strapi';
// import { CMSNews } from '@/types/content';

// async function getArticle(slug: string) {
//   const articles: { results: CMSNews[] } = await client.find('news-articles', {
//     filters: { slug: { $eq: slug } },
//     populate: 'deep',
//   });
//   return articles.results[0];
// }

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // const article = await getArticle(params.slug);

  // if (!article) {
  //   return <div>Article not found</div>;
  // }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">News Article</h1>
          <p className="text-muted-foreground">Article slug: {params.slug}</p>
          <p className="text-muted-foreground mt-4">CMS integration coming soon...</p>
        </div>
      </div>
    </main>
  );
}
