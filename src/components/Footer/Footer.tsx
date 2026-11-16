import React, { useState } from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && acceptedTerms) {
      setSubscribed(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setAcceptedTerms(false);
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      {/* 1. Faixa Superior da Newsletter (Fundo Roxo Escuro Oficial) */}
      <section className="footer__newsletter" aria-label="Inscrição na newsletter">
        <div className="container footer__newsletter-container">
          <div className="footer__newsletter-info">
            <h3 className="footer__newsletter-title">
              Inscreva-se na nossa newsletter
            </h3>
            <p className="footer__newsletter-subtitle">
              Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
            </p>
          </div>

          <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="footer__newsletter-inputs">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="footer__newsletter-input"
                aria-label="Digite seu nome"
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="footer__newsletter-input"
                aria-label="Digite seu e-mail"
              />
              <button type="submit" className="footer__newsletter-btn">
                INSCREVER
              </button>
            </div>

            <label className="footer__newsletter-checkbox-label">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                required
                className="footer__newsletter-checkbox"
              />
              <span>Aceito os termos e condições</span>
            </label>

            {subscribed && (
              <span className="footer__newsletter-success">
                ✓ Inscrição realizada com sucesso!
              </span>
            )}
          </form>
        </div>
      </section>

      {/* 2. Rodapé Principal (Fundo Branco/Claro) */}
      <div className="footer__main">
        <div className="container footer__container">
          {/* Coluna 1: Logo, Descrição e Redes Sociais */}
          <div className="footer__brand-col">
            <div className="footer__logo">
              <span className="footer__logo-circle"></span>
              <span className="footer__logo-text">econverse</span>
            </div>
            <p className="footer__brand-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="footer__socials" aria-label="Redes sociais">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Institucional */}
          <div className="footer__col">
            <h4 className="footer__col-title">Institucional</h4>
            <ul className="footer__col-list">
              <li><a href="#sobre-nos" className="footer__link">Sobre Nós</a></li>
              <li><a href="#movimento" className="footer__link">Movimento</a></li>
              <li><a href="#trabalhe-conosco" className="footer__link">Trabalhe conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Ajuda */}
          <div className="footer__col">
            <h4 className="footer__col-title">Ajuda</h4>
            <ul className="footer__col-list">
              <li><a href="#suporte" className="footer__link">Suporte</a></li>
              <li><a href="#fale-conosco" className="footer__link">Fale Conosco</a></li>
              <li><a href="#perguntas-frequentes" className="footer__link">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna 4: Termos */}
          <div className="footer__col">
            <h4 className="footer__col-title">Termos</h4>
            <ul className="footer__col-list">
              <li><a href="#termos-condicoes" className="footer__link">Termos e Condições</a></li>
              <li><a href="#politica-privacidade" className="footer__link">Política de Privacidade</a></li>
              <li><a href="#troca-devolucao" className="footer__link">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Barra Inferior de Copyright */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};
