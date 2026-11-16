import React from 'react';
import './BrandShowcase.scss';

const BRANDS = [1, 2, 3, 4, 5];

export const BrandShowcase: React.FC = () => {
  return (
    <section className="brand-showcase" aria-label="Navegue por marcas">
      <div className="container">
        <header className="section-title">
          <h2 className="section-title__text">Navegue por marcas</h2>
        </header>

        <div className="brand-showcase__list">
          {BRANDS.map((item) => (
            <div key={`brand-${item}`} className="brand-showcase__item">
              <div className="brand-showcase__circle">
                <div className="brand-showcase__logo-wrapper">
                  <span className="brand-showcase__logo-dot"></span>
                  <span className="brand-showcase__logo-text">econverse</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
