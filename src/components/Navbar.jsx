import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isInfo = location.pathname === '/info';
  const isProjectPage = [
    '/stadia-bluetooth',
    '/test-hub-next',
    '/spotlight',
    '/corporate-cards-portal',
  ].includes(location.pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="section-nav" style={{ opacity: 1, pointerEvents: 'none' }}>
        <div className="nav-bar">
          {/* Left: Either Back button on project pages OR Logo on main pages */}
          <div className="nav-left-wrapper" style={{ pointerEvents: 'auto' }}>
            {isProjectPage ? (
              <Link to="/" className="nav-back-button" style={{ textDecoration: 'none' }}>
                <img
                  src="/images/645b5e5d57552962d27c0020_icon-back-2.svg"
                  loading="lazy"
                  alt="Back"
                  className="icon-back-to-home"
                  style={{ width: '15px', height: '15px' }}
                />
                <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                  Back
                </span>
              </Link>
            ) : (
              <Link
                to="/"
                className="logo-block"
                style={{ pointerEvents: 'auto', textDecoration: 'none', color: '#ffffff' }}
              >
                <img
                  src="/images/64196e9f623177d26bd812da_wch-logomark-vert-fill.svg"
                  loading="lazy"
                  alt="Kris Sipri Logo"
                  className="logomark"
                />
                <div className="logo-text">
                  <div
                    className="text-logo"
                    style={{
                      color: '#ffffff',
                      fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontWeight: 500,
                      fontSize: '20px',
                    }}
                  >
                    Kris Sipri
                  </div>
                  <div
                    className="text-underlogo"
                    style={{
                      color: 'rgba(255, 255, 255, 0.45)',
                      fontFamily: "'Neue Montreal', -apple-system, BlinkMacSystemFont, sans-serif",
                      fontSize: '13px',
                    }}
                  >
                    Software Engineer
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Center: Work / Info Toggle Pill (shown on main & info pages) */}
          <div className="nav-pill-wrapper" style={{ pointerEvents: 'auto' }}>
            {!isProjectPage ? (
              <>
                <div className="nav-indicator-glow"></div>
                <div className="nav-pill">
                  <Link
                    to="/"
                    className={`nav-toggle work w-inline-block ${!isInfo ? 'active' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="text-nav-toggle">Work</div>
                  </Link>
                  <Link
                    to="/info"
                    className={`nav-toggle w-inline-block ${isInfo ? 'active' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="text-nav-toggle">Info</div>
                  </Link>
                  <div
                    className="nav-indicator-pill"
                    style={{
                      left: isInfo ? 'calc(50% + 1px)' : '3px',
                      width: 'calc(50% - 4px)',
                    }}
                  ></div>
                </div>
              </>
            ) : null}
          </div>

          {/* Right: Download CV, Social Chips & Mobile Menu */}
          <div className="nav-right-wrapper" style={{ pointerEvents: 'auto' }}>
            <div className="chip-socials-wrapper">
              {/* DOWNLOAD CV BUTTON */}
              <a
                href="/Kris_Sipri_CV.pdf"
                download="Kris_Sipri_CV.pdf"
                className="chip-socials chip-download-cv w-inline-block"
                style={{ textDecoration: 'none' }}
                title="Download CV"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <div className="text-socialnav" style={{ color: '#ffffff', fontWeight: 500 }}>
                  Download CV
                </div>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">LinkedIn</div>
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
                className="chip-socials w-inline-block"
              >
                <div className="text-socialnav">QuolyTech</div>
                <img
                  src="/images/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                  loading="lazy"
                  alt=""
                  className="icon-external"
                />
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-menu-button w-inline-block"
              aria-label="Menu"
              style={{
                cursor: 'pointer',
                background: 'transparent',
                border: 'none',
                padding: 0,
              }}
            >
              <img
                src="/images/644c8981f87a7036b4c7fa64_icon-%40.svg"
                loading="lazy"
                alt="Contact"
                className="icon-contact"
                style={{
                  display: mobileMenuOpen ? 'none' : 'block',
                  transition: 'opacity 0.2s',
                }}
              />
              <img
                src="/images/645a01ff46a1cf3d85d90049_icon-close.svg"
                loading="lazy"
                alt="Close"
                className="icon-contact-close"
                style={{
                  display: mobileMenuOpen ? 'block' : 'none',
                  opacity: 1,
                  transition: 'opacity 0.2s',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Popup Menu */}
      <div className={`mobile-popup-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a
          href="/Kris_Sipri_CV.pdf"
          download="Kris_Sipri_CV.pdf"
          className="popup-menu-item w-inline-block"
          style={{ textDecoration: 'none' }}
        >
          <div className="text-popup-menu" style={{ color: '#ffffff', fontWeight: 600 }}>
            Download CV (PDF)
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-popup-external"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="popup-menu-item w-inline-block"
        >
          <div className="text-popup-menu">LinkedIn</div>
          <img
            src="/images/644ca61c76573b18898f41f8_icon-open.svg"
            loading="lazy"
            alt=""
            className="icon-popup-external"
          />
        </a>
        <a
          href="https://quolytech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="popup-menu-item w-inline-block"
        >
          <div className="text-popup-menu">QuolyTech</div>
          <img
            src="/images/644ca61c76573b18898f41f8_icon-open.svg"
            loading="lazy"
            alt=""
            className="icon-popup-external"
          />
        </a>
      </div>
    </>
  );
}
