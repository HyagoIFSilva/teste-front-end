import React, { useState } from 'react';
import {
  TechIcon,
  SupermarketIcon,
  DrinksIcon,
  ToolsIcon,
  HealthIcon,
  FitnessIcon,
  FashionIcon,
} from '../common/Icons';
import './CategoryNav.scss';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.FC<{ size?: number; color?: string }>;
}

const categories: CategoryItem[] = [
  { id: 'tecnologia', name: 'Tecnologia', icon: TechIcon },
  { id: 'supermercado', name: 'Supermercado', icon: SupermarketIcon },
  { id: 'bebidas', name: 'Bebidas', icon: DrinksIcon },
  { id: 'ferramentas', name: 'Ferramentas', icon: ToolsIcon },
  { id: 'saude', name: 'Saúde', icon: HealthIcon },
  { id: 'esportes', name: 'Esportes e Fitness', icon: FitnessIcon },
  { id: 'moda', name: 'Moda', icon: FashionIcon },
];

interface CategoryNavProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>('tecnologia');

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <section className="category-nav" aria-label="Navegue por categorias">
      <div className="container category-nav__container">
        <ul className="category-nav__list">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <li key={cat.id} className="category-nav__item">
                <button
                  type="button"
                  className={`category-nav__button ${isActive ? 'category-nav__button--active' : ''}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-pressed={isActive}
                >
                  <div className="category-nav__icon-box">
                    <Icon
                      size={36}
                      color={isActive ? '#F71963' : '#4E4E4E'}
                    />
                  </div>
                  <span className="category-nav__name">{cat.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

