import React, { useState, useEffect } from 'react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/formatters';
import { CloseIcon } from '../common/Icons';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
    }
  }, [isOpen, product]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  const formattedPrice = formatCurrency(product.price);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    alert(`Produto adicionado ao carrinho!\n\n${product.productName}\nQuantidade: ${quantity}`);
    onClose();
  };

  return (
    <div
      className="product-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close-btn"
          onClick={onClose}
          aria-label="Fechar janela de detalhes do produto"
        >
          <CloseIcon size={22} color="#707070" />
        </button>

        <div className="product-modal__body">
          <div className="product-modal__image-col">
            <img
              src={product.photo}
              alt={product.productName}
              className="product-modal__image"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png';
              }}
            />
          </div>

          <div className="product-modal__info-col">
            <h2 id="modal-product-title" className="product-modal__title">
              {product.productName.toUpperCase()}
            </h2>

            <div className="product-modal__price">
              {formattedPrice}
            </div>

            <p className="product-modal__description">
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>

            <a
              href="#detalhes-completos"
              className="product-modal__details-link"
              onClick={(e) => e.preventDefault()}
            >
              Veja mais detalhes do produto &gt;
            </a>

            <div className="product-modal__actions">
              <div
                className="product-modal__quantity-control"
                aria-label="Controle de quantidade"
              >
                <button
                  type="button"
                  className="product-modal__qty-btn"
                  onClick={handleDecrease}
                  aria-label="Diminuir quantidade"
                  disabled={quantity <= 1}
                >
                  —
                </button>
                <span className="product-modal__qty-value" aria-live="polite">
                  {quantity.toString().padStart(2, '0')}
                </span>
                <button
                  type="button"
                  className="product-modal__qty-btn"
                  onClick={handleIncrease}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="product-modal__buy-btn"
                onClick={handleAddToCart}
                aria-label="Comprar produto agora"
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
