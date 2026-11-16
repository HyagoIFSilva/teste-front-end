import React, { useState, useEffect, useRef } from 'react';
import type { Product, CategoryTab } from '../../types/product';
import { fetchProducts } from '../../services/productService';
import { ProductCard } from '../ProductCard/ProductCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../common/Icons';
import './ProductShowcase.scss';

const TABS: CategoryTab[] = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

interface ProductShowcaseProps {
  onSelectProduct: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<CategoryTab>('CELULAR');
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        console.error('Falha ao carregar produtos na vitrine:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselTrackRef.current) return;

    // Rola a largura de um card + gap
    const container = carouselTrackRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 20
      : 300;

    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="product-showcase" aria-label="Vitrine de produtos relacionados">
      <div className="container">
        {/* Título com linhas horizontais laterais */}
        <div className="section-title">
          <h2 className="section-title__text">Produtos relacionados</h2>
        </div>

        {/* Abas de Categorias */}
        <nav className="product-showcase__tabs-container" aria-label="Filtrar por categoria">
          <ul className="product-showcase__tabs">
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <li key={tab} className="product-showcase__tab-item">
                  <button
                    type="button"
                    className={`product-showcase__tab-btn ${
                      isActive ? 'product-showcase__tab-btn--active' : ''
                    }`}
                    onClick={() => setActiveTab(tab)}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Carrossel de Produtos */}
        <div className="product-showcase__carousel-wrapper">
          {/* Botão Anterior */}
          <button
            type="button"
            className="product-showcase__nav-btn product-showcase__nav-btn--prev"
            onClick={() => handleScroll('left')}
            aria-label="Ver produtos anteriores"
          >
            <ChevronLeftIcon size={28} color="#3F3F40" />
          </button>

          {/* Trilho dos Produtos */}
          <div className="product-showcase__track" ref={carouselTrackRef}>
            {loading ? (
              <div className="product-showcase__loading">
                <div className="product-showcase__spinner"></div>
                <p>Carregando produtos da vitrine...</p>
              </div>
            ) : (
              products.map((product, index) => (
                <div key={`${product.productName}-${index}`} className="product-showcase__item">
                  <ProductCard product={product} onOpenModal={onSelectProduct} />
                </div>
              ))
            )}
          </div>

          {/* Botão Próximo */}
          <button
            type="button"
            className="product-showcase__nav-btn product-showcase__nav-btn--next"
            onClick={() => handleScroll('right')}
            aria-label="Ver próximos produtos"
          >
            <ChevronRightIcon size={28} color="#3F3F40" />
          </button>
        </div>
      </div>
    </section>
  );
};
