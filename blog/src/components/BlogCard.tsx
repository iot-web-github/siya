import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick, featured = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article
      onClick={onClick}
      className={`card cursor-pointer group ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-600 text-white">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.publishedAt)}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readingTime} min read
          </div>
        </div>
        
        <h2 className={`font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 ${
          featured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl'
        }`}>
          {post.title}
        </h2>
        
        <p className={`text-slate-600 mb-4 ${
          featured ? 'text-lg leading-relaxed' : 'text-base'
        }`}>
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-10 w-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-medium text-slate-900">{post.author.name}</p>
              <p className="text-xs text-slate-500">Author</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-slate-400" />
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;