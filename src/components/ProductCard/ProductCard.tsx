import React from 'react';
import type { Product } from '../../types/product';
import { formatCurrency, getOldPrice, getInstallmentText } from '../../utils/formatters';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const currentPrice = product.price;
  const oldPrice = getOldPrice(currentPrice);
  const installmentText = getInstallmentText(currentPrice, 2);

  return (
    <article className="product-card" onClick={() => onOpenModal(product)}>
      <div className="product-card__image-container">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png';
          }}
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title" title={product.productName}>
          {product.productName}
        </h3>

        <div className="product-card__pricing">
          <span className="product-card__old-price">
            {formatCurrency(oldPrice)}
          </span>
          <span className="product-card__current-price">
            {formatCurrency(currentPrice)}
          </span>
          <span className="product-card__installments">
            {installmentText}
          </span>
        </div>

        <span className="product-card__shipping">Frete grátis</span>

        <button
          type="button"
          className="product-card__buy-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          aria-label={`Comprar ${product.productName}`}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};
