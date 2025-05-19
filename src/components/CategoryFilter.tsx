import React from 'react';
import { categories } from '../data/categories';
import { Droplet, Paintbrush, Hammer, Utensils, Zap } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplet':
        return <Droplet className="h-5 w-5" />;
      case 'Paintbrush':
        return <Paintbrush className="h-5 w-5" />;
      case 'Hammer':
        return <Hammer className="h-5 w-5" />;
      case 'Utensils':
        return <Utensils className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      default:
        return <Droplet className="h-5 w-5" />;
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onSelectCategory(null)}
          className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{getIcon(category.icon)}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;