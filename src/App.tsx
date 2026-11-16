import { Header } from './components/Header/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <h1 className="section-title">
            <span className="section-title__text">Produtos relacionados</span>
          </h1>
        </div>
      </main>
    </div>
  );
}
