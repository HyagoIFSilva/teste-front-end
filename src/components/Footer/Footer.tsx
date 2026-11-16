import React, { useState } from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__container">
          {/* Coluna 1: Sobre Nós */}
          <div className="footer__col">
            <h4 className="footer__col-title">Sobre nós</h4>
            <ul className="footer__nav-list">
              <li><a href="#conheca" className="footer__link">CONHEÇA</a></li>
              <li><a href="#como-comprar" className="footer__link">COMO COMPRAR</a></li>
              <li><a href="#indicacao" className="footer__link">INDICAÇÃO E DESCONTO</a></li>
            </ul>

            {/* Ícones Sociais */}
            <div className="footer__socials" aria-label="Redes sociais">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="YouTube">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Informações Úteis */}
          <div className="footer__col">
            <h4 className="footer__col-title">INFORMAÇÕES ÚTEIS</h4>
            <ul className="footer__nav-list">
              <li><a href="#fale-conosco" className="footer__link">FALE CONOSCO</a></li>
              <li><a href="#duvidas" className="footer__link">DÚVIDAS</a></li>
              <li><a href="#prazos" className="footer__link">PRAZOS DE ENTREGA</a></li>
              <li><a href="#formas-pagamento" className="footer__link">FORMAS DE PAGAMENTO</a></li>
              <li><a href="#privacidade" className="footer__link">POLÍTICA DE PRIVACIDADE</a></li>
              <li><a href="#trocas" className="footer__link">TROCAS E DEVOLUÇÕES</a></li>
            </ul>
          </div>

          {/* Coluna 3: Formas de Pagamento */}
          <div className="footer__col">
            <h4 className="footer__col-title">FORMAS DE PAGAMENTO</h4>
            <div className="footer__payment-methods" aria-label="Bandeiras de pagamento aceitas">
              <span className="footer__payment-badge" title="Visa">VISA</span>
              <span className="footer__payment-badge" title="Elo">ELO</span>
              <span className="footer__payment-badge" title="Mastercard">MASTERCARD</span>
              <span className="footer__payment-badge" title="Pix">PIX</span>
              <span className="footer__payment-badge" title="Boleto">BOLETO</span>
            </div>
          </div>

          {/* Coluna 4: Newsletter Box */}
          <div className="footer__newsletter-box">
            <h4 className="footer__newsletter-title">
              CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong>
            </h4>
            <p className="footer__newsletter-subtitle">
              Excepteur sint occaecat cupidatat non ent, sunt in culpa qui officia lorem ipsum.
            </p>

            <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="SEU E-MAIL"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="footer__newsletter-input"
                aria-label="Insira seu e-mail para receber ofertas"
              />
              <button type="submit" className="footer__newsletter-btn">
                OK
              </button>
            </form>

            {subscribed && (
              <span className="footer__newsletter-success">
                ✓ Inscrição confirmada com sucesso!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Barra Inferior (Copyright) */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">
            Copyright © 2026. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
            É vedada a reprodução, total ou parcial, de qualquer conteúdo sem prévia autorização.
          </p>

          <div className="footer__credits">
            <span className="footer__credit-item">
              <small>Powered by</small>
              <strong>VTEX</strong>
            </span>
            <span className="footer__credit-item">
              <small>Desenvolvido por</small>
              <strong className="footer__credit-highlight">Econverse</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
