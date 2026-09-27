import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// 11 Dedicated Pages + Sample Blog Post Template
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { NewListingsPage } from './pages/NewListingsPage';
import { AboutPage } from './pages/AboutPage';
import { GuaranteedServicePage } from './pages/GuaranteedServicePage';
import { FairHousingPage } from './pages/FairHousingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';

// Modals and Data Types
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { MortgageCalculatorModal } from './components/MortgageCalculatorModal';
import { AgentContactModal } from './components/AgentContactModal';
import { Property } from './data/properties';
import { Agent } from './data/agents';
import { BlogPost, BLOG_POSTS } from './data/blogPosts';

export default function App() {
  // Initialize page from URL hash if available (e.g., #new-listings, #about, #privacy-policy)
  const getInitialPage = (): string => {
    try {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = [
        'home', 
        'properties', 
        'new-listings', 
        'about', 
        'guaranteed-service', 
        'fair-housing', 
        'testimonials', 
        'contact', 
        'blog', 
        'blog-post', 
        'privacy-policy', 
        'terms-conditions'
      ];
      if (validPages.includes(hash)) {
        return hash;
      }
    } catch {
      // Fallback
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost>(BLOG_POSTS[0]);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Synchronize hash changes (browser back/forward button support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mint_homes_favorites');
      return saved ? JSON.parse(saved) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  const [activePropertyFilters, setActivePropertyFilters] = useState<{
    town: string;
    propertyType: string;
    priceRange: string;
    beds: string;
  }>({
    town: 'All',
    propertyType: 'All',
    priceRange: 'All',
    beds: 'All',
  });

  useEffect(() => {
    try {
      localStorage.setItem('mint_homes_favorites', JSON.stringify(favorites));
    } catch {
      // Ignore in restricted environments
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplySearchFilters = (filters: {
    town: string;
    propertyType: string;
    priceRange: string;
    beds: string;
  }) => {
    setActivePropertyFilters(filters);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    try {
      window.location.hash = page;
    } catch {
      // Ignore in iframe sandboxes if restricted
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 font-sans antialiased selection:bg-amber-100 selection:text-amber-950">
      {/* 1. Global Sticky Navigation Header with Working Dropdowns */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        favoritesCount={favorites.length}
      />

      {/* 2. Main Page Content (Multi-Page Architecture) */}
      <main className="flex-1">
        {/* Page 1: Home */}
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onApplySearchFilters={handleApplySearchFilters}
          />
        )}

        {/* Page 2: Property Search (Main Listings Page) */}
        {currentPage === 'properties' && (
          <PropertiesPage
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            initialFilters={activePropertyFilters}
          />
        )}

        {/* Page 3: New Listings (Sub-page under Property Search) */}
        {currentPage === 'new-listings' && (
          <NewListingsPage
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {/* Page 4: About Us */}
        {currentPage === 'about' && (
          <AboutPage
            onSelectAgent={(agent) => setSelectedAgent(agent)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {/* Page 5: Guaranteed Service (Sub-page under About Us) */}
        {currentPage === 'guaranteed-service' && (
          <GuaranteedServicePage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {/* Page 6: Fair Housing Program (Sub-page under About Us) */}
        {currentPage === 'fair-housing' && (
          <FairHousingPage />
        )}

        {/* Page 7: Testimonials */}
        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {/* Page 8: Contact Us */}
        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {/* Page 9: Blog (Listing Page) */}
        {currentPage === 'blog' && (
          <BlogPage
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={handleNavigate}
            onSelectPost={(post) => setSelectedBlogPost(post)}
          />
        )}

        {/* Page 10: Sample Blog Post Template */}
        {currentPage === 'blog-post' && (
          <BlogPostDetailPage
            post={selectedBlogPost}
            onBackToBlog={() => handleNavigate('blog')}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectPost={(post) => setSelectedBlogPost(post)}
          />
        )}

        {/* Page 11: Privacy Policy */}
        {currentPage === 'privacy-policy' && (
          <PrivacyPolicyPage />
        )}

        {/* Page 12: Terms and Conditions */}
        {currentPage === 'terms-conditions' && (
          <TermsConditionsPage />
        )}
      </main>

      {/* 3. Global Footer Shared Across All Pages */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* 4. Interactive Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onOpenConsultation={() => {
          setSelectedProperty(null);
          setIsConsultationOpen(true);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <MortgageCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenConsultation={() => {
          setIsCalculatorOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      <AgentContactModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />
    </div>
  );
}
