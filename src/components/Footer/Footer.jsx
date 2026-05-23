import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <h2>Origen</h2>
        <p>
          Café de especialidad y métodos seleccionados para una experiencia
          moderna y minimalista.
        </p>
      </div>

      <div className="team-container">
        <article className="team-card">
          <h3>Lucía Campos</h3>
          <span>Selección de origen</span>
        </article>

        <article className="team-card">
          <h3>Tomás Ferrer</h3>
          <span>Tueste artesanal</span>
        </article>

        <article className="team-card">
          <h3>Valentina Costa</h3>
          <span>Experiencia de marca</span>
        </article>
      </div>

      <nav className="footer-nav">
        <ul className="footer-links">
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </footer>
  );
};