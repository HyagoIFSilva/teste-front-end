<div align="center">

# 🛍️ Econverse – Teste Técnico Front-End

<p align="center">
  <strong>Desenvolvimento de E-commerce Pixel-Perfect com React, TypeScript e Sass</strong>
</p>

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![HTML5 Semantics](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![WCAG 2.1 AA](https://img.shields.io/badge/Acessibilidade-WCAG_2.1-005A9C?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/standards-guidelines/wcag/)

<br />

[Visualizar Demonstração](#-como-rodar-o-projeto-localmente) • [Requisitos Cumpridos](#-checklist-de-especificações-técnicas) • [Estrutura do Projeto](#-arquitetura-e-estrutura-de-pastas) • [Decisões Técnicas](#-decisões-técnicas-e-diferenciais)

</div>

---

## 📌 Visão Geral do Projeto

Este projeto é a solução do **Teste Técnico para a vaga de Desenvolvedor Front-End da Econverse**. A aplicação consiste em uma página completa de e-commerce inspirada no ecossistema VTEX, desenvolvida com foco em **fidelidade pixel a pixel ao layout do Figma**, **Clean Code**, **HTML semântico**, **SEO avançado** e **alta performance**.

Todo o layout foi implementado artesanalmente utilizando **Sass (SCSS puro)**, respeitando integralmente a restrição de **não utilizar bibliotecas de interface prontas** (como Bootstrap, Tailwind, MUI ou afins), demonstrando pleno domínio sobre CSS moderno, Flexbox, CSS Grid, variáveis e design responsivo.

---

## ✅ Checklist de Especificações Técnicas

| Requisito do Desafio | Status | Detalhes da Implementação |
| :--- | :---: | :--- |
| **React + TypeScript** | ✅ Concluído | Aplicação tipada rigorosamente com interfaces e contratos de dados sólidos. |
| **Sass (SCSS) sem libs de UI** | ✅ Concluído | SCSS estruturado com tokens de design, variáveis, mixins e metodologia BEM. |
| **Consumo da API de Produtos** | ✅ Concluído | Consumo assíncrono via `fetch` com proxy no Vite e mecanismo resiliente de fallback. |
| **Vitrine / Carrossel de Produtos** | ✅ Concluído | Slider responsivo com navegação `<` `>`, abas de filtro e cards completos. |
| **Modal de Detalhes do Produto** | ✅ Concluído | Janela modal com foto ampliada, descrição, preço real do JSON, seletor de quantidade e atalho `Esc`. |
| **Fidelidade Pixel a Pixel** | ✅ Concluído | Paleta oficial Figma: Azul `#3442B5`, Amarelo `#F7BC06`, Roxo `#271C47`. |
| **HTML Semântico & SEO** | ✅ Concluído | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, Open Graph e meta tags. |
| **Acessibilidade (a11y)** | ✅ Concluído | `aria-modal`, `aria-label`, foco acessível, suporte a teclado e alto contraste WCAG. |
| **Histórico de Commits Semântico** | ✅ Concluído | Commits estruturados passo a passo em Português seguindo *Conventional Commits*. |

---

## 🚀 Funcionalidades Chave

### 1. Cabeçalho Completo (`Header`)
- **Barra de Vantagens (Topbar):** Destaque de *Compra 100% segura*, *Frete grátis acima de R$ 200* e *Parcele suas compras* com ícones SVG vetoriais.
- **Barra Principal:** Logotipo oficial Econverse (ponto amarelo + texto roxo), campo de busca com botão de lupa e ícones de pedidos, favoritos, conta e carrinho com badge de contagem.
- **Menu de Categorias:** Navegação fluida com links e destaque especial para *OFERTAS DO DIA* e *ASSINATURA* com ícone de coroa.

### 2. Banner Principal Promocional (`HeroBanner`)
- Chamada de impacto (*"Venha conhecer nossas promoções"* e *"50% Off nos produtos"*).
- Botão Call To Action (CTA) amarelo com efeitos de elevação e transição no hover.
- Imagem oficial exportada do Figma como background com gradiente escuro para contraste.

### 3. Navegação por Categorias em Destaque (`CategoryNav`)
- Caixas arredondadas para 7 segmentos com ícones PNG oficiais do Figma: *Tecnologia, Supermercado, Bebidas, Ferramentas, Saúde, Esportes e Fitness, Moda*.
- **Estado ativo visual completo:** borda azul `#3442B5` no card, ícone com filtro de cor azul e texto azul em negrito ao clicar.
- Suporte a toque/scroll em dispositivos móveis.

### 4. Vitrine e Carrossel de Produtos (`ProductShowcase` & `ProductCard`)
- **Abas de Segmentação:** Abas retangulares (`CELULAR`, `ACESSÓRIOS`, `TABLETS`, `NOTEBOOKS`, `TVS`, `VER TODOS`) com divisores verticais e destaque ativo em azul.
- **Carrossel Responsivo:** Setas laterais funcionais com transição suave, exibindo 4 cards por tela no desktop e adaptando-se via *CSS scroll-snap* no mobile.
- **Card de Produto:** Imagem via URL do JSON, título/descrição limitada a 2 linhas, preço original riscado, preço com desconto em destaque, condição de parcelamento em 2x sem juros, tag *Frete grátis* e botão azul **COMPRAR**.
- **Dados 100% do JSON:** todos os campos (nome, foto, preço) são consumidos diretamente da API `app.econverse.com.br`.

### 5. Modal Rápido de Produto (`ProductModal`)
- Aberto ao clicar no botão **COMPRAR** do card.
- **Informações Dinâmicas:** Nome, foto e preço alimentados diretamente pelo JSON da API.
- **Preço exato:** exibe o valor real do campo `price` do JSON formatado em R$ (ex: `12000` → R$ 12.000,00).
- **Controle de Quantidade:** Botões funcionais `[-]` e `[+]` com limite mínimo de 1 unidade.
- **Experiência do Usuário (UX):** Fechamento via clique no botão `(X)`, clique fora no backdrop ou pressionando a tecla `Esc`, além de bloqueio de rolagem do fundo (`body overflow: hidden`).
- Botão **COMPRAR** amarelo oficial (`#F7BC06`).

### 6. Banners Parceiros, Marcas e Rodapé (`Footer`)
- Banners duplos promocionais com imagem oficial do Figma e botão amarelo *"CONFIRA"*.
- Carrossel de marcas parceiras com círculos brancos sombreados.
- Rodapé institucional rico com colunas informativas (Institucional, Ajuda, Termos), ícones de redes sociais e caixa de captura de Newsletter com validação e feedback de sucesso.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/) (inicialização instantânea e compilação otimizada)
- **Estilização:** [Sass (SCSS)](https://sass-lang.com/) com variáveis, mixins e metodologia BEM
- **Tipografia:** Google Fonts – [Poppins](https://fonts.google.com/specimen/Poppins) (pesos 400, 500, 600, 700, 800)
- **Ícones:** SVGs vetoriais puros para a UI + PNGs oficiais do Figma para as categorias

---

## 📁 Arquitetura e Estrutura de Pastas

A organização do código foi estruturada seguindo o padrão de **Component-Driven Development** e separação clara de responsabilidades:

```text
teste-front-end/
├── public/                     # Favicons e manifestos públicos
├── src/
│   ├── assets/                 # Imagens estáticas e recursos visuais
│   │   ├── categories/         # Ícones PNG oficiais exportados do Figma
│   │   ├── container_inicial.jpg       # Imagem oficial do Hero Banner
│   │   └── container_parceiria.jpg     # Imagem oficial dos banners parceiros
│   ├── components/             # Componentes encapsulados (TSX + SCSS BEM)
│   │   ├── BrandShowcase/      # Seção "Navegue por marcas"
│   │   ├── CategoryNav/        # Navegação de categorias com ícones do Figma
│   │   ├── common/             # Componentes transversais e ícones SVG
│   │   ├── Footer/             # Rodapé institucional e newsletter
│   │   ├── Header/             # Cabeçalho, busca e navegação principal
│   │   ├── HeroBanner/         # Banner promocional principal
│   │   ├── ProductCard/        # Card individual de produto
│   │   ├── ProductModal/       # Janela modal de detalhes e compra
│   │   ├── ProductShowcase/    # Vitrine com abas e carrossel
│   │   └── PromoBanners/       # Banners secundários parceiros
│   ├── data/                   # Mock de segurança para resiliência de API
│   ├── services/               # Camada de comunicação HTTP / API Service
│   ├── styles/                 # Design System SCSS global
│   │   ├── _mixins.scss        # Mixins de breakpoints, container e flexbox
│   │   ├── _variables.scss     # Cores, fontes, sombras e transições
│   │   └── global.scss         # Reset e estilos fundamentais da página
│   ├── types/                  # Contratos de tipos e interfaces TypeScript
│   ├── utils/                  # Utilitários de formatação de moeda e parcelas
│   ├── App.tsx                 # Composição da página principal
│   └── main.tsx                # Ponto de entrada da aplicação
├── index.html                  # HTML com tags semânticas, SEO e meta tags
├── tsconfig.json               # Configurações estritas do TypeScript
├── vite.config.ts              # Configurações do Vite e proxy reverso para CORS
└── README.md                   # Documentação completa do projeto
```

---

## ⚡ Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
- Gerenciador de pacotes `npm` (ou `yarn` / `pnpm`)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/HyagoIFSilva/teste-front-end.git
   cd teste-front-end
   ```

2. **Instalar as Dependências:**
   ```bash
   npm install
   ```

3. **Executar em Ambiente de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   *A aplicação iniciará automaticamente no endereço: `http://localhost:5173` (ou porta indicada no terminal).*

4. **Gerar a Build de Produção:**
   ```bash
   npm run build
   ```

5. **Visualizar a Build de Produção localmente:**
   ```bash
   npm run preview
   ```

---

## 💡 Decisões Técnicas e Diferenciais

1. **Paleta de Cores Oficial do Figma:**
   - Azul `#3442B5` → botões COMPRAR, títulos de seção, estado ativo de abas e categorias.
   - Amarelo `#F7BC06` → botão do Hero Banner, botão CONFIRA e botão COMPRAR do modal.
   - Roxo `#271C47` → fundo da newsletter, logo *econverse* e títulos do rodapé.

2. **Resiliência de API e Contorno de CORS:**
   - Em testes técnicos com URLs externas (`https://app.econverse.com.br/...`), os navegadores costumam bloquear requisições disparadas de `localhost` por política de CORS.
   - **Solução implementada:** Foi configurado um proxy reverso no `vite.config.ts` apontando para a rota `/api/produtos`, aliado a uma camada de *fallback transparente* em `src/services/productService.ts`. Dessa forma, os dados são sempre carregados e o avaliador nunca se depara com tela em branco, independente do ambiente de teste.

3. **Zero Bibliotecas de UI (Conformidade com o Edital):**
   - Não foram utilizados componentes do Bootstrap, Tailwind, Ant Design, Material UI ou Chakra.
   - Toda a estrutura de grid, alinhamentos, carrossel e efeitos visuais foi codificada à mão em **Sass (SCSS)** com mixins modulares e seletores BEM de alta legibilidade.

4. **Acessibilidade (a11y) & SEO:**
   - Tags estruturais semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Meta tags Open Graph completas para compartilhamento em redes sociais.
   - Atributos `aria-label`, `aria-modal`, `role="dialog"` e suporte total a navegação por teclado (como fechar o modal com `Esc`).

5. **Commits Semânticos em Português:**
   - Histórico de versionamento limpo e incremental, documentando a evolução do projeto passo a passo (`chore:`, `style:`, `feat:`, `fix:`, `refactor:`, `docs:`).

---

## 📩 Contato e Envio

- **Candidato:** Hyago Silva
- **Vaga:** Estágio em Desenvolvimento Front-end
- **Empresa:** Econverse
- **Repositório:** [https://github.com/HyagoIFSilva/teste-front-end](https://github.com/HyagoIFSilva/teste-front-end)
- **E-mail de Envio:** `gustavo.cipriano@econverse.com.br`
- **Título do E-mail:** `Teste Vaga FrontEnd`

---

<div align="center">
  <p>Desenvolvido com dedicação e carinho por <strong>Hyago Silva</strong> para o processo seletivo da <strong>Econverse</strong>. 🚀</p>
</div>
