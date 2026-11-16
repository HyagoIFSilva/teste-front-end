import React from 'react';
import './BrandShowcase.scss';

const BRANDS = [
  { id: 'brand-1', name: 'VTEX' },
  { id: 'brand-2', name: 'VTEX' },
  { id: 'brand-3', name: 'VTEX' },
  { id: 'brand-4', name: 'VTEX' },
  { id: 'brand-5', name: 'VTEX' },
];

export const BrandShowcase: React.FC = () => {
  return (
    <section className="brand-showcase" aria-label="Navegue por marcas">
      <div className="container">
        <header className="section-title">
          <h2 className="section-title__text">Navegue por marcas</h2>
        </header>

        <div className="brand-showcase__list">
          {BRANDS.map((brand, index) => (
            <div key={`${brand.id}-${index}`} className="brand-showcase__item">
              <div className="brand-showcase__circle">
                <svg
                  className="brand-showcase__logo"
                  width="90"
                  height="26"
                  viewBox="0 0 140 40"
                  fill="none"
                >
                  <path
                    d="M14.5 7L24.5 24.32L34.5 7H41L26.5 32H22.5L8 7H14.5Z"
                    fill="#F71963"
                  />
                  <circle cx="24.5" cy="18" r="4" fill="#F71963" />
                  <text
                    x="45"
                    y="26"
                    fontFamily="Poppins, sans-serif"
                    fontSize="24"
                    fontWeight="800"
                    fill="#2A2A2A"
                  >
                    vtex
                  </text>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
