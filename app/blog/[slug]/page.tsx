import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogBySlug, blogPosts } from '@/lib/blog';
import { blogContent } from '@/lib/blogContent';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function renderContent(content: string) {
  const sections = content.split(/\n## /).filter(Boolean);
  return sections.map((section, i) => {
    const firstNewline = section.indexOf('\n\n');
    const isFirstBlock = i === 0;
    const heading = !isFirstBlock && firstNewline !== -1
      ? section.slice(0, firstNewline).trim()
      : null;
    const body = !isFirstBlock && firstNewline !== -1
      ? section.slice(firstNewline + 2)
      : section;
    return (
      <div key={i} className="mt-8 first:mt-0">
        {heading && (
          <h2 className="font-display font-semibold text-fluid-2xl text-brand-dark mb-3">
            {heading}
          </h2>
        )}
        <div className="prose prose-lg max-w-none text-text">
          {body.split(/\n\n+/).map((para, j) => (
            <p key={j} className="mb-4 last:mb-0">
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  const content = blogContent[slug];

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="py-section-sm">
      <article className="max-w-content mx-auto px-4 sm:px-6">
        <nav className="text-fluid-sm text-text-muted mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/blog" className="hover:text-brand">Blog</Link></li>
            <li aria-hidden>/</li>
            <li className="text-text line-clamp-1" aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <header className="max-w-3xl">
          <p className="text-accent font-medium text-fluid-sm">{post.category}</p>
          <h1 className="font-display font-semibold text-fluid-3xl text-brand-dark mt-1">
            {post.title}
          </h1>
          <p className="mt-2 text-text-muted text-fluid-sm">
            {post.date} · {post.readTime} read · {post.author}
          </p>
        </header>

        <div className="mt-8 relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-alt">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1280px"
          />
        </div>

        <div className="mt-10 max-w-3xl">
          {content ? renderContent(content.content) : (
            <p className="text-text-muted">{post.excerpt}</p>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="max-w-content mx-auto px-4 sm:px-6 mt-16 pt-16 border-t border-border">
          <h2 className="font-display font-semibold text-fluid-2xl text-brand-dark mb-6">
            More from the blog
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <h3 className="font-display font-semibold text-fluid-lg text-brand-dark group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="text-text-muted text-fluid-sm mt-1">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
