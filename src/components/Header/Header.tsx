import React, { useState } from 'react';
import {
  ShieldIcon,
  TruckIcon,
  CreditCardIcon,
  SearchIcon,
  BoxIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  CrownIcon,
} from '../common/Icons';
import './Header.scss';

export const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando por:', searchValue);
  };

  return (
    <header className="header">
      {/* 1. Topbar de Benefícios */}
      <div className="header__topbar">
        <div className="container header__topbar-container">
          <div className="header__benefit-item">
            <ShieldIcon size={18} color="#9F9F9F" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>

          <div className="header__benefit-item">
            <TruckIcon size={18} color="#9F9F9F" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>

          <div className="header__benefit-item">
            <CreditCardIcon size={18} color="#9F9F9F" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </div>

      {/* 2. Barra Principal (Logo Econverse, Busca e Ícones de Ação) */}
      <div className="header__main">
        <div className="container header__main-container">
          {/* Botão Menu Mobile */}
          <button
            className="header__mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Alternar menu de navegação"
          >
            <span className="header__mobile-burger"></span>
          </button>

          {/* Logotipo Oficial Econverse */}
          <a href="/" className="header__logo" aria-label="Página inicial Econverse">
            <div className="header__logo-wrapper">
              <span className="header__logo-circle"></span>
              <span className="header__logo-text">econverse</span>
            </div>
          </a>

          {/* Campo de Busca */}
          <form className="header__search" onSubmit={handleSearchSubmit} role="search">
            <input
              type="text"
              className="header__search-input"
              placeholder="O que você está buscando?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Campo de busca de produtos"
            />
            <button
              type="submit"
              className="header__search-button"
              aria-label="Buscar produtos"
            >
              <SearchIcon size={20} color="#9F9F9F" />
            </button>
          </form>

          {/* Ações do Usuário (Ícones) */}
          <nav className="header__actions" aria-label="Ações da conta e pedidos">
            <a href="#pedidos" className="header__action-item" title="Meus Pedidos">
              <BoxIcon size={24} color="#9F9F9F" />
            </a>
            <a href="#favoritos" className="header__action-item" title="Favoritos">
              <HeartIcon size={24} color="#9F9F9F" />
            </a>
            <a href="#conta" className="header__action-item" title="Minha Conta">
              <UserIcon size={24} color="#9F9F9F" />
            </a>
            <a href="#carrinho" className="header__action-item header__action-item--cart" title="Carrinho">
              <CartIcon size={24} color="#9F9F9F" />
              <span className="header__cart-badge">2</span>
            </a>
          </nav>
        </div>
      </div>

      {/* 3. Menu de Categorias */}
      <nav
        className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
        aria-label="Categorias principais"
      >
        <div className="container header__nav-container">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#todas-categorias" className="header__nav-link">
                TODAS CATEGORIAS
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#supermercado" className="header__nav-link">
                SUPERMERCADO
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#livros" className="header__nav-link">
                LIVROS
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#moda" className="header__nav-link">
                MODA
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#lancamentos" className="header__nav-link">
                LANÇAMENTOS
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#ofertas-dia" className="header__nav-link header__nav-link--highlight">
                OFERTAS DO DIA
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#assinatura" className="header__nav-link">
                <CrownIcon size={16} color="#9F9F9F" />
                <span>ASSINATURA</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
