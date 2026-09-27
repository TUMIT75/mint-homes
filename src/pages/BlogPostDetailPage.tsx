import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  Bookmark, 
  Phone, 
  Mail, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  ChevronRight,
  Printer
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../data/blogPosts';

interface BlogPostDetailPageProps {
  post?: BlogPost;
  onBackToBlog: () => void;
  onOpenConsultation: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  post = BLOG_POSTS[0],
  onBackToBlog,
  onOpenConsultation,
  onSelectPost
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs">
        <button
          onClick={onBackToBlog}
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-800 font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Market Insights</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-stone-50 transition-colors cursor-pointer"
            title="Copy Article Link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-stone-50 transition-colors cursor-pointer"
            title="Print Article"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* 2. ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto space-y-5 text-center sm:text-left">
        <div className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-200">
          {post.category}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.2]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Unboxed Metadata with clean typographic separators */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-slate-500 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900">{post.author}</span>
            <span className="text-slate-400">·</span>
            <span>{post.authorRole}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">·</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Published {post.date}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* 3. HERO IMAGE */}
      <div className="max-w-5xl mx-auto aspect-16/9 rounded-2xl overflow-hidden shadow-md bg-slate-950">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. MAIN ARTICLE CONTENT WITH SIDEBAR */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Article Body */}
        <article className="lg:col-span-8 space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
          {/* Executive Summary Box */}
          <div className="p-6 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-2">
            <div className="font-display font-bold text-amber-950 text-base flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Key Advisory Takeaway</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Real estate acquisition and disposition in Nassau and Suffolk counties involves complex village property tax rates, school district boundaries, and municipal certificate of occupancy compliance. Preparing verified documentation prior to entering the market gives buyers and sellers unmatched leverage.
            </p>
          </div>

          {/* Paragraphs */}
          {post.content.map((paragraph, idx) => (
            <div key={idx} className="space-y-3">
              <p className="leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}

          {/* Author Bio Box */}
          <div className="p-6 bg-stone-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8">
            <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-display font-bold text-2xl shrink-0">
              {post.author.charAt(0)}
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-display font-bold text-base text-slate-950">
                {post.author}
              </div>
              <div className="text-xs text-amber-800 font-medium">
                {post.authorRole} · Mint Homes Real Estate Brokerage
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Advising homeowners, buyers, and investors across Long Island. Based at our headquarters on 900 Rockaway Ave, Valley Stream, NY 11581.
              </p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Advisory Session CTA */}
          <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-900 px-2.5 py-1 rounded border border-amber-500/30 inline-block">
              Free Consultation
            </span>
            <h3 className="font-display text-xl font-bold text-white">
              Need Specific Advice For Your Property?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect with our licensed advisory team for an individualized assessment of your property value or purchase criteria.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Schedule Advisory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-center pt-1 text-[11px] text-slate-400">
              Direct Phone: <a href="tel:5169005542" className="text-white hover:underline font-semibold">(516) 900-5542</a>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Long Island Market Brief
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Jurisdictions</span>
                <span className="font-semibold text-slate-900">Nassau & Suffolk</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Broker Response</span>
                <span className="font-semibold text-emerald-800">Under 2 Hours</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Listing Guarantee</span>
                <span className="font-semibold text-slate-900">Cancel-Anytime</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. RELATED ARTICLES GRID */}
      <section className="max-w-5xl mx-auto pt-10 border-t border-slate-200 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-slate-950">
            Related Real Estate Guides
          </h3>
          <button
            onClick={onBackToBlog}
            className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Insights</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((related) => (
            <div
              key={related.id}
              onClick={() => onSelectPost(related)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-amber-800">{related.category}</span>
                  <span>·</span>
                  <span>{related.readTime}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors leading-snug">
                  {related.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {related.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-semibold text-amber-800">
                <span>Read Full Article</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
