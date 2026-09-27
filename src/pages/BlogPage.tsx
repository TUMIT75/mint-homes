import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  X, 
  Share2, 
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogPosts';

interface BlogPageProps {
  onOpenConsultation: () => void;
  onNavigate?: (page: string) => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  onOpenConsultation, 
  onNavigate,
  onSelectPost 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Buying Guide', 'Selling Strategy', 'Market Intelligence', 'Financing and Tax'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const handleOpenPost = (post: BlogPost) => {
    if (onSelectPost && onNavigate) {
      onSelectPost(post);
      onNavigate('blog-post');
    } else {
      setActivePost(post);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block">
          Market Intelligence and Guides
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Long Island Real Estate Insights
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Objective analyses on Nassau and Suffolk housing trends, municipal property taxes, mortgage interest rates, and strategic seller renovations.
        </p>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
              selectedCategory === cat
                ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-stone-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => handleOpenPost(post)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-slate-300"
          >
            <div>
              {/* Media Frame */}
              <div className="aspect-16/10 overflow-hidden bg-slate-100 relative">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-amber-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                {/* Unboxed Metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-950 group-hover:text-amber-800 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            {/* Author Byline & Read Action */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
              <div className="font-medium text-slate-800">
                By {post.author}
              </div>

              <div className="text-amber-800 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Read Full Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 4. FULL ARTICLE READER MODAL (FALLBACK IF OPENED DIRECTLY) */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                {activePost.category}
              </span>
              <div className="flex items-center gap-2">
                {onNavigate && onSelectPost && (
                  <button
                    onClick={() => {
                      onSelectPost(activePost);
                      onNavigate('blog-post');
                    }}
                    className="flex items-center gap-1 text-xs text-amber-800 font-semibold hover:underline"
                  >
                    <span>Dedicated Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setActivePost(null)}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={activePost.coverImage}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Published {activePost.date}</span>
                  <span>·</span>
                  <span>{activePost.readTime}</span>
                  <span>·</span>
                  <span className="font-semibold text-slate-700">{activePost.author} ({activePost.authorRole})</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
                  {activePost.title}
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-100">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-6 bg-stone-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-display text-lg font-bold text-slate-950">
                  Have Questions Regarding This Strategy?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our licensed advisory team provides custom market analyses for individual properties across Long Island.
                </p>
                <button
                  onClick={() => {
                    setActivePost(null);
                    onOpenConsultation();
                  }}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  Schedule Advisory Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
