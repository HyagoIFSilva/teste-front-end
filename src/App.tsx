import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { CategoryNav } from './components/CategoryNav/CategoryNav';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <HeroBanner />
        <CategoryNav />

        <div className="container" id="produtos">
          <header className="section-title">
            <h2 className="section-title__text">Produtos relacionados</h2>
          </header>
        </div>
      </main>
    </div>
  );
}
