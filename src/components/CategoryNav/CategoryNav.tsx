import React, { useState } from 'react';
import supermarketIcon from '../../assets/categories/Supermercado.png';
import drinksIcon from '../../assets/categories/Bebida.png';
import toolsIcon from '../../assets/categories/ferramenta.png';
import healthIcon from '../../assets/categories/saude.png';
import fitnessIcon from '../../assets/categories/corrido.png';
import fashionIcon from '../../assets/categories/roupas.png';
import './CategoryNav.scss';

// Ícone vetorial limpo de Tecnologia (Monitor + Smartphone) idêntico ao Figma, sem artefatos ou fundo
const TechVectorIcon: React.FC<{ color?: string }> = ({ color = 'currentColor' }) => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="category-nav__tech-svg"
  >
    {/* Monitor */}
    <rect x="6" y="10" width="36" height="26" rx="4" stroke={color} strokeWidth="3" />
    <path d="M19 36v6m-7 0h14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Tablet / Smartphone sobreposto à direita */}
    <rect x="32" y="18" width="18" height="28" rx="4" fill="#FFFFFF" stroke={color} strokeWidth="3" />
    <circle cx="41" cy="41" r="1.5" fill={color} />
  </svg>
);

interface CategoryItem {
  id: string;
  name: string;
  image?: string;
  isVector?: boolean;
}

const categories: CategoryItem[] = [
  { id: 'tecnologia', name: 'Tecnologia', isVector: true },
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
                    {cat.isVector ? (
                      <TechVectorIcon color={isActive ? '#3442B5' : '#4E4E4E'} />
                    ) : (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="category-nav__image"
                      />
                    )}
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
