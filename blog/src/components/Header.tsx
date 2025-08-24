import React from 'react';
import { Search, Menu, X, Home, BookOpen } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: { id: string; name: string; count: number }[];
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">ModernBlog</h1>
            </div>
          </div>
          
          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onCategoryChange('')}
              className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                selectedCategory === '' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-50">
                <span>Categories</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => onCategoryChange(category.name)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center justify-between ${
                        selectedCategory === category.name 
                          ? 'text-indigo-600 bg-indigo-50' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all duration-200 bg-slate-50 focus:bg-white"
                />
              </div>
            </div>
            
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-slate-50 focus:bg-white"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="space-y-1">
              <button
                onClick={() => {
                  onCategoryChange('');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left flex items-center space-x-3 px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  selectedCategory === '' 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </button>
              
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Categories</p>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        onCategoryChange(category.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.name 
                          ? 'text-indigo-600 bg-indigo-50' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;