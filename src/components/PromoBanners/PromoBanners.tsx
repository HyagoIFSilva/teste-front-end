import React from 'react';
import './PromoBanners.scss';

interface PromoBannerItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  link: string;
}

const defaultPromos: PromoBannerItem[] = [
  {
    id: 'parceiros-1',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    imageUrl:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
    link: '#parceiros',
  },
  {
    id: 'parceiros-2',
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'CONFIRA',
    imageUrl:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    link: '#parceiros',
  },
];

export const PromoBanners: React.FC = () => {
  return (
    <section className="promo-banners" aria-label="Banners promocionais">
      <div className="container promo-banners__container">
        {defaultPromos.map((promo) => (
          <article
            key={promo.id}
            className="promo-banners__card"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.7)), url(${promo.imageUrl})`,
            }}
          >
            <div className="promo-banners__content">
              <h3 className="promo-banners__title">{promo.title}</h3>
              <p className="promo-banners__description">{promo.description}</p>
              <a href={promo.link} className="promo-banners__cta">
                {promo.buttonText}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
