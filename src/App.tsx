import { useState } from 'react';
import type { Product } from './types/product';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { CategoryNav } from './components/CategoryNav/CategoryNav';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { ProductModal } from './components/ProductModal/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <HeroBanner />
        <CategoryNav />
        <ProductShowcase onSelectProduct={handleOpenProductModal} />
      </main>

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseProductModal}
      />
    </div>
  );
}
