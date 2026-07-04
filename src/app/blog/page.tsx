import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | TekNova Dijital Ajans',
  description: 'İşletmeler için web tasarım, özel yazılım, dijital pazarlama ve SEO ipuçları. TekNova blogu ile işinizi büyütün.',
};

export default function BlogList() {
  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-bl-[10rem] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-widest uppercase mb-4 border border-blue-100 shadow-sm">
            BİLGİ BANKASI
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Dijital dünyada <br className="hidden sm:block" />
            <span className="text-blue-600">büyüme rehberiniz.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            İşletmenizi bir adım öteye taşıyacak teknoloji trendleri, SEO ipuçları ve yazılım tavsiyeleri.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Cover Image */}
                <div className="h-56 w-full relative overflow-hidden bg-slate-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold tracking-wide shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-500 text-sm font-medium mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <div className="text-sm font-bold text-slate-900">
                      {post.author.name}
                    </div>
                    <div className="text-blue-600 flex items-center text-sm font-bold group-hover:translate-x-1 transition-transform">
                      Oku <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
