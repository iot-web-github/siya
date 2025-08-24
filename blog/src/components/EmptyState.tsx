import React from 'react';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  searchTerm: string;
  selectedCategory: string;
  onReset: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, selectedCategory, onReset }) => {
  return (
    <div className="text-center py-16">
      <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        No posts found
      </h3>
      <p className="text-slate-600 mb-6 max-w-md mx-auto">
        {searchTerm && selectedCategory 
          ? `No posts found for "${searchTerm}" in ${selectedCategory}`
          : searchTerm 
          ? `No posts found for "${searchTerm}"`
          : `No posts found in ${selectedCategory}`
        }
      </p>
      <button
        onClick={onReset}
        className="btn-primary"
      >
        Show All Posts
      </button>
    </div>
  );
};

export default EmptyState;