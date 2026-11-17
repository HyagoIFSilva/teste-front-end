import React, { useState } from 'react';
import techIcon from '../../assets/categories/Tecnologia.png';
import supermarketIcon from '../../assets/categories/Supermercado.png';
import drinksIcon from '../../assets/categories/Bebida.png';
import toolsIcon from '../../assets/categories/ferramenta.png';
import healthIcon from '../../assets/categories/saude.png';
import fitnessIcon from '../../assets/categories/corrido.png';
import fashionIcon from '../../assets/categories/roupas.png';
import './CategoryNav.scss';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  hasColoredBg?: boolean;
}

const categories: CategoryItem[] = [
  { id: 'tecnologia', name: 'Tecnologia', image: techIcon, hasColoredBg: true },
  { id: 'supermercado', name: 'Supermercado', image: supermarketIcon },
  { id: 'bebidas', name: 'Bebidas', image: drinksIcon },
  { id: 'ferramentas', name: 'Ferramentas', image: toolsIcon },
  { id: 'saude', name: 'Saúde', image: healthIcon },
  { id: 'esportes', name: 'Esportes e Fitness', image: fitnessIcon },
  { id: 'moda', name: 'Moda', image: fashionIcon },
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
            const isActive = activeCategory === cat.id;

            return (
              <li key={cat.id} className="category-nav__item">
                <button
                  type="button"
                  className={`category-nav__button ${
                    isActive ? 'category-nav__button--active' : ''
                  }`}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-pressed={isActive}
                >
                  <div className="category-nav__icon-box">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className={`category-nav__image${cat.hasColoredBg ? ' category-nav__image--no-filter' : ''}`}
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
