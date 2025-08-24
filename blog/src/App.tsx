import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import BlogCard from './components/BlogCard';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import EmptyState from './components/EmptyState';
import { blogPosts, categories } from './data/mockData';
import { BlogPost } from './types/blog';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Welcome to <span className="text-indigo-600">ModernBlog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover insights, stories, and ideas from passionate writers across technology, 
            design, business, and lifestyle. Join our community of forward-thinking readers.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
                featured={post.featured && index === 0}
              />
            ))}
          </div>
        ) : (
          <EmptyState 
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onReset={handleReset}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;