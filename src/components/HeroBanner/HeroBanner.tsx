import React from 'react';
import './HeroBanner.scss';

export const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner" aria-label="Promoção em destaque">
      <div className="hero-banner__overlay">
        <div className="container hero-banner__container">
          <div className="hero-banner__content">
            <h1 className="hero-banner__title">
              Venha conhecer nossas promoções
            </h1>
            <p className="hero-banner__subtitle">
              <span className="hero-banner__highlight">50% Off</span> nos produtos
            </p>
            <a href="#produtos" className="hero-banner__cta">
              Ver produto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
