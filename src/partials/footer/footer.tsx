import React from 'react';
import './footer.css';

const Footer: React.FC = () => (
  <footer className="footer-wrapper">
    <div className="navbar">
      <section className="navbar-section">
        <div className="text-gray">
          Copyright © {new Date().getFullYear()} <strong>Binary Studio</strong>.
          All rights reserved.
        </div>
      </section>
      <section className="navbar-section">
        <div className="text-gray">Made with 🧠🤲💻❤️</div>
      </section>
    </div>
  </footer>
);

export { Footer };
