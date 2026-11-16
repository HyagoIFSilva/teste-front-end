import { useState } from 'react';
import type { Product } from './types/product';
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { CategoryNav } from './components/CategoryNav/CategoryNav';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { PromoBanners } from './components/PromoBanners/PromoBanners';
import { BrandShowcase } from './components/BrandShowcase/BrandShowcase';
import { Footer } from './components/Footer/Footer';
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
      {/* 1. Cabeçalho com Topbar, Busca e Navegação */}
      <Header />

      <main id="main-content">
        {/* 2. Banner Principal Black Friday */}
        <HeroBanner />

        {/* 3. Navegação por Categorias com Ícones Oficiais */}
        <CategoryNav />

        {/* 4. Primeira Vitrine de Produtos (com Abas de Categorias) */}
        <ProductShowcase
          title="Produtos relacionados"
          showTabs={true}
          showViewAllLink={false}
          onSelectProduct={handleOpenProductModal}
        />

        {/* 5. Primeiro Bloco de Banners Parceiros */}
        <PromoBanners />

        {/* 6. Segunda Vitrine de Produtos (com link 'Ver todos') */}
        <ProductShowcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAllLink={true}
          onSelectProduct={handleOpenProductModal}
        />

        {/* 7. Segundo Bloco de Banners Parceiros */}
        <PromoBanners />

        {/* 8. Seção Navegue por Marcas */}
        <BrandShowcase />

        {/* 9. Terceira Vitrine de Produtos (com link 'Ver todos') */}
        <ProductShowcase
          title="Produtos relacionados"
          showTabs={false}
          showViewAllLink={true}
          onSelectProduct={handleOpenProductModal}
        />
      </main>

      {/* 10. Rodapé Oficial com Faixa Roxa de Newsletter e Dados Institucionais */}
      <Footer />

      {/* 11. Modal Interativo de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseProductModal}
      />
    </div>
  );
}
