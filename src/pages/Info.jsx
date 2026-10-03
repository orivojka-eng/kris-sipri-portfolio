import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Info() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper page-info">
      {/* Desktop Info Hero */}
      <div className="section-info-hero desktop">
        <div className="hero-fade info-hero"></div>
        <div className="container-info hero">
          <div className="overline-info-wrapper">
            <div className="overline-wrapper">
              <div className="icon-section-dot"></div>
              <div className="text-projectpage-overline">ABOUT ME</div>
            </div>
            <div className="text-hero info-hero">
              I'm passionate about engineering software that{' '}
              <span className="text-info-hero-serif">empowers millions.</span>
            </div>
          </div>

          {/* First Double Column Block */}
          <div className="double-column-block info-hero">
            <div className="content-info-hero">
              <div className="container-hero-image info-hero">
                <div className="glare-item-top outer-edge"></div>
                <div className="window-outline info-hero">
                  <div className="glare-item-top hero-inner"></div>
                  <div className="window-main">
                    <div className="window-bar info-hero">
                      <div className="window-dots-wrapper">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="window-content info-hero">
                      <img
                        src="/images/kris_sipri_portrait.jpg"
                        loading="lazy"
                        alt="Kris Sipri - Software Engineer"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">My Foundation in Software Engineering.</span>
                <br />
                <br />
                I'm Kris Sipri, a full-stack software engineer and system architect driven by an obsession with writing elegant, performant, and reliable code.
                <br />
                <br />
                I specialize in modern JavaScript/TypeScript, React ecosystems, scalable distributed backends in Node.js, Python, and Go, alongside database design and cloud infrastructure.
              </div>
            </div>

            <div className="content-info-hero has-offset">
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">
                  Made By QuolyTech — Engineering with No Compromises.
                </span>
                <br />
                <br />
                At QuolyTech, I craft end-to-end digital solutions that unite technical rigor with top-tier user experiences.
                <br />
                <br />
                From real-time WebSockets and low-latency microservices to slick micro-interactions and interactive 3D web interfaces, I believe high-quality engineering makes software feel like magic.
              </div>
              <div className="container-hero-image info-hero">
                <div className="glare-item-top outer-edge"></div>
                <div className="window-outline info-hero">
                  <div className="glare-item-top hero-inner"></div>
                  <div className="window-main">
                    <div className="window-bar info-hero">
                      <div className="window-dots-wrapper">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="window-content info-hero">
                      <img
                        src="/images/643ecb1ff3e9aa457d70f041_thn-banner-mobile.png"
                        loading="lazy"
                        alt="System Architecture & Cloud Tech"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Double Column Block */}
          <div className="double-column-block info-hero">
            <div className="content-info-hero">
              <div className="container-hero-image info-hero">
                <div className="glare-item-top outer-edge"></div>
                <div className="window-outline info-hero">
                  <div className="glare-item-top hero-inner"></div>
                  <div className="window-main">
                    <div className="window-bar info-hero">
                      <div className="window-dots-wrapper">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="window-content info-hero">
                      <img
                        src="/images/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile.png"
                        loading="lazy"
                        alt="Hardware and Protocol Engineering"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">Full-Stack Craftsmanship &amp; Architecture.</span>
                <br />
                <br />
                I care deeply about architecture: domain-driven design, clean APIs, resilient data models, and sub-millisecond execution.
                <br />
                <br />
                Whether building real-time collaboration engines, high-throughput financial portals, or WebBluetooth hardware bridges, every detail is engineered to scale seamlessly under heavy load.
              </div>
            </div>

            <div className="content-info-hero has-offset">
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">Continuous Learning &amp; Tech Innovation.</span>
                <br />
                <br />
                The tech landscape moves fast, and that's what makes programming exhilarating. I am constantly diving into emerging technologies—from LLMs and AI agent workflows to WASM, edge computing, and distributed event streaming.
              </div>
              <div className="container-hero-image info-hero">
                <div className="glare-item-top outer-edge"></div>
                <div className="window-outline info-hero">
                  <div className="glare-item-top hero-inner"></div>
                  <div className="window-main">
                    <div className="window-bar info-hero">
                      <div className="window-dots-wrapper">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="window-content info-hero">
                      <img
                        src="/images/6484164c1fe228802d311e8e_spotlight-tb.png"
                        loading="lazy"
                        alt="WebRTC and Streaming Innovation"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Double Column Block */}
          <div className="double-column-block info-hero">
            <div className="content-info-hero">
              <div className="container-hero-image info-hero">
                <div className="glare-item-top outer-edge"></div>
                <div className="window-outline info-hero">
                  <div className="glare-item-top hero-inner"></div>
                  <div className="window-main">
                    <div className="window-bar info-hero">
                      <div className="window-dots-wrapper">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                    </div>
                    <div className="window-content info-hero">
                      <img
                        src="/images/648415f4acafd703035dd314_rbc-tb.png"
                        loading="lazy"
                        alt="Enterprise FinTech Development"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-hero-ending-wrapper">
                <div className="text-projectpage-body info-hero">
                  <span className="text-body-info-emphasis">When I'm Not Coding,</span>
                  <br />
                  <br />
                  You'll find me benchmarking new developer rigs, analyzing open-source repositories, contributing to tech communities, playing strategy games, and sipping high-grade espresso.
                  <br />
                  <br />
                  <span className="text-body-info-emphasis">Let's build something remarkable together!</span>
                </div>
              </div>
            </div>

            <div className="content-info-hero has-offset">
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">Tech Stack &amp; Core Toolkit:</span>
                <br />
                <br />
                • <strong>Languages:</strong> TypeScript, JavaScript, Python, Go, Rust, SQL, HTML/CSS
                <br />
                • <strong>Frontend:</strong> React 19, Next.js, Vite, TailwindCSS, WebGL, Lenis
                <br />
                • <strong>Backend &amp; Cloud:</strong> Node.js, FastAPI, Docker, Kubernetes, AWS, PostgreSQL, Redis, GraphQL
                <br />
                • <strong>Specialties:</strong> Distributed Systems, WebSockets, WebRTC, API Architecture
                <br />
                <div style={{ marginTop: '24px' }}>
                  <a
                    href="/Kris_Sipri_CV.pdf"
                    download="Kris_Sipri_CV.pdf"
                    className="chip-socials chip-download-cv w-inline-block"
                    style={{ textDecoration: 'none', padding: '10px 22px', display: 'inline-flex' }}
                  >
                    <svg
                      width="15"
                      height="15"
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
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>Download Full CV (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-noise"></div>
      </div>

      {/* Divider */}
      <div className="section-divider">
        <div className="container-general">
          <div className="divider-wrapper">
            <div className="divider-line"></div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="section-general info">
        <div className="container-info info-content">
          <div className="overline-wrapper">
            <div className="icon-section-dot"></div>
            <div className="text-projectpage-overline">EXPERIENCE &amp; BACKGROUND</div>
          </div>
          <div className="info-content-wrapper">
            <div className="double-column-block info-experiences">
              <div className="content-leading">
                <div className="text-projectpage-heading info-experience">QuolyTech</div>
              </div>
              <div className="content-trailing null">
                <div className="experience-block">
                  <div className="experience-title-date">
                    <div className="text-projectpage-subheading info">Lead Software Engineer &amp; Architect</div>
                    <div className="text-info-meta">2023 - Present</div>
                  </div>
                  <div className="text-projectpage-body info">
                    Founding and leading engineering initiatives at QuolyTech. Designing scalable multi-tenant cloud platforms, distributed API services, and high-performance React frontends.
                  </div>
                </div>
              </div>
            </div>

            <div className="double-column-block info-experiences">
              <div className="content-leading">
                <div className="text-projectpage-heading info-experience">Google Projects</div>
              </div>
              <div className="content-trailing null">
                <div className="experience-block">
                  <div className="experience-title-date">
                    <div className="text-projectpage-subheading info">Systems &amp; Web Engineer (Contract)</div>
                    <div className="text-info-meta">2022 - 2023</div>
                  </div>
                  <div className="text-projectpage-body info">
                    Contributed to developer platform tooling, Chromium WebBluetooth APIs, firmware flashing protocols, and cloud QA automation pipelines.
                  </div>
                </div>
              </div>
            </div>

            <div className="double-column-block info-experiences">
              <div className="content-leading">
                <div className="text-projectpage-heading info-experience">FinTech Enterprise</div>
              </div>
              <div className="content-trailing null">
                <div className="experience-block">
                  <div className="experience-title-date">
                    <div className="text-projectpage-subheading info">Full-Stack Software Engineer</div>
                    <div className="text-info-meta">2021 - 2022</div>
                  </div>
                  <div className="text-projectpage-body info">
                    Engineered enterprise financial management portals, corporate card ledger integrations, and real-time transaction reconciliation engines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider">
        <div className="container-general">
          <div className="divider-wrapper">
            <div className="divider-line"></div>
          </div>
        </div>
      </div>

      {/* Engineering Network & Partners Section */}
      <div className="section-general info last">
        <div className="container-info info-content">
          <div className="overline-wrapper">
            <div className="icon-section-dot"></div>
            <div className="text-projectpage-overline">COLLABORATORS &amp; NETWORK</div>
          </div>
          <div className="friends-grid">
            <div className="friend-block">
              <div className="friend-name-role">
                <div className="text-projectpage-subheading info">QuolyTech Labs</div>
                <div className="text-info-meta friends">Core Engineering Hub</div>
              </div>
              <a href="https://quolytech.com" target="_blank" rel="noopener noreferrer" className="friend-portfolio-link w-inline-block">
                <div className="text-friend-portfolio">quolytech.com</div>
                <img src="/images/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="" className="icon-friend-portfolio" />
              </a>
            </div>

            <div className="friend-block">
              <div className="friend-name-role">
                <div className="text-projectpage-subheading info">GitHub Profile</div>
                <div className="text-info-meta friends">Open Source Repositories</div>
              </div>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="friend-portfolio-link w-inline-block">
                <div className="text-friend-portfolio">github.com</div>
                <img src="/images/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="" className="icon-friend-portfolio" />
              </a>
            </div>

            <div className="friend-block">
              <div className="friend-name-role">
                <div className="text-projectpage-subheading info">CloudScale Research</div>
                <div className="text-info-meta friends">Distributed Systems Collective</div>
              </div>
              <a href="https://quolytech.com" target="_blank" rel="noopener noreferrer" className="friend-portfolio-link w-inline-block">
                <div className="text-friend-portfolio">research.quolytech.com</div>
                <img src="/images/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="" className="icon-friend-portfolio" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
