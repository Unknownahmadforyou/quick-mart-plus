
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types/category';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="category-item block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3">
        <div className="h-20 w-20 mx-auto mb-2">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-sm font-medium text-quickmart-darkGray">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
