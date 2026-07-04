import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

interface Props {
  params: { slug: string };
}

// Dinamik SEO Meta Verileri
export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı | TekNova Blog',
    };
  }

  return {
    title: `${post.title} | TekNova Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostDetail({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <article className="flex-grow pt-32 pb-16 lg:pt-40 lg:pb-24">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="mb-6">
            <Link 
              href="/blog"
              className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Blog'a Dön
            </Link>
          </div>
          
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 font-medium">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-slate-400" />
              {post.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-slate-400" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-slate-400" />
              {post.readTime} Okuma
            </div>
          </div>
        </header>

        {/* Content Section using Tailwind Typography */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="w-5 h-5 text-slate-400" />
              {post.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
