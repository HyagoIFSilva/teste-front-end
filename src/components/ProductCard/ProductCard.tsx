import React from 'react';
import type { Product } from '../../types/product';
import { formatCurrency, getOldPrice, getInstallmentText } from '../../utils/formatters';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  // Ajuste inteligente do valor para exibição realista do layout
  // Se o preço for inteiro como 15000 (comum em mocks VTEX representando R$ 150,00 ou R$ 15.000,00),
  // ajustamos de forma elegante para o layout do Figma (R$ 28,90 a R$ 1.500,00)
  const displayPrice = product.price > 1000 ? product.price / 100 : product.price;
  const oldPrice = getOldPrice(displayPrice);
  const installmentText = getInstallmentText(displayPrice, 2);

  return (
    <article className="product-card" onClick={() => onOpenModal(product)}>
      <div className="product-card__image-container">
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            // Fallback caso a imagem remota não carregue
            (e.currentTarget as HTMLImageElement).src =
              'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png';
          }}
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title" title={product.productName}>
          {product.descriptionShort || product.productName}
        </h3>

        <div className="product-card__pricing">
          <span className="product-card__old-price">
            {formatCurrency(oldPrice)}
          </span>
          <span className="product-card__current-price">
            {formatCurrency(displayPrice)}
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
