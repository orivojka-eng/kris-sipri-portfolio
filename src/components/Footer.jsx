import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="container-footer">
        <div className="footer-top-wrapper">
          <img
            src="/images/64196e9f623177d26bd812da_wch-logomark-vert-fill.svg"
            loading="lazy"
            alt="Kris Sipri"
            className="logomark-footer"
          />
          <div className="footer-links-column-wrapper">
            <div className="footer-links-column">
              <div className="text-footer-links-overline">MAIN</div>
              <div className="footer-links-wrapper">
                <Link to="/" className="footer-link w-inline-block">
                  <div className="text-footer-link">Work</div>
                </Link>
                <Link to="/info" className="footer-link w-inline-block">
                  <div className="text-footer-link">Info</div>
                </Link>
              </div>
            </div>
            <div className="footer-links-column">
              <div className="text-footer-links-overline">CONTACT &amp; SOCIAL</div>
              <div className="footer-links-wrapper">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link">GitHub</div>
                  <img
                    src="/images/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                    loading="lazy"
                    alt=""
                    className="icon-external"
                  />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link">LinkedIn</div>
                  <img
                    src="/images/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                    loading="lazy"
                    alt=""
                    className="icon-external"
                  />
                </a>
                <a
                  href="/Kris_Sipri_CV.pdf"
                  download="Kris_Sipri_CV.pdf"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link" style={{ color: '#fff', fontWeight: 500 }}>Download CV (PDF)</div>
                  <img
                    src="/images/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                    loading="lazy"
                    alt=""
                    className="icon-external"
                  />
                </a>
                <a
                  href="https://quolytech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link w-inline-block"
                >
                  <div className="text-footer-link">QuolyTech</div>
                  <img
                    src="/images/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                    loading="lazy"
                    alt=""
                    className="icon-external"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-left">
            <div className="text-footer-copyright">
              © 2025 Kris Sipri. All Rights Reserved.
            </div>
            <div className="text-under-copyright">
              Made By QuolyTech — Built with React, performance &amp; craft.
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="text-last-updated" style={{ color: '#fff', fontWeight: 500 }}>
              Made By QuolyTech 🚀
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
