import { useState } from 'react';
import type { Product } from './types/product';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { CategoryNav } from './components/CategoryNav/CategoryNav';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenProductModal = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <HeroBanner />
        <CategoryNav />
        <ProductShowcase onSelectProduct={handleOpenProductModal} />
        {/* selectedProduct será utilizado no componente ProductModal no próximo passo */}
        {selectedProduct && <div style={{ display: 'none' }}>{selectedProduct.productName}</div>}
      </main>
    </div>
  );
}
