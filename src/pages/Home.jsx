import React from 'react';
import HeroWindow from '../components/HeroWindow';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    to: '/stadia-bluetooth',
    title: 'Stadia Bluetooth & IoT Gateway',
    company: "Google, '23",
    description: 'Reverse-engineering WebBluetooth & firmware flashing to save 1M+ controllers.',
    image: '/images/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile.png',
    colorClass: 'stadiabt',
    isExternal: false,
  },
  {
    to: '/test-hub-next',
    title: 'Test Hub Next — Cloud QA Runner',
    company: "Google, '22",
    description: 'Distributed automated test orchestration engine with real-time WebSockets.',
    image: '/images/643ecb1ff3e9aa457d70f041_thn-banner-mobile.png',
    colorClass: 'thn',
    isExternal: false,
  },
  {
    to: '/spotlight',
    title: 'Spotlight — WebRTC Streaming Protocol',
    company: "Adobe x Netflix, '21",
    description: 'Real-time peer-to-peer video synchronization engine & messaging pipeline.',
    image: '/images/6484164c1fe228802d311e8e_spotlight-tb.png',
    colorClass: 'spotlight',
    isExternal: false,
  },
  {
    to: '/corporate-cards-portal',
    title: 'Corporate Cards Financial Portal',
    company: "RBC, '21",
    description: 'High-throughput event-driven ledger & banking API infrastructure.',
    image: '/images/648415f4acafd703035dd314_rbc-tb.png',
    colorClass: 'rbc',
    isExternal: false,
  },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      {/* Mobile Swipe Indicator */}
      <div className="swipe-indicator-wrapper">
        <div className="text-swipe-to-see-work">SWIPE TO</div>
        <img
          src="/images/64097027d8cc0cb902ffc6bd_icon-swipe-up.svg"
          loading="lazy"
          alt=""
          className="icon-hero-swipe"
        />
        <div className="text-swipe-to-see-work">SEE WORK</div>
      </div>

      {/* Desktop / Tablet Hero Window */}
      <HeroWindow />

      {/* Mobile Hero View (shown via media queries) */}
      <div className="section-hero-portrait">
        <div className="hero-portrait-main">
          <div className="hero-portrait-top">
            <div className="overline-wrapper">
              <div className="icon-section-dot"></div>
              <div className="text-portrait-overline">Kris Sipri — Software Engineer</div>
            </div>
            <div className="text-hero portrait">
              I craft software, systems <span>&amp;</span>{' '}
              <span className="text-hero-serif">experiences.</span>
            </div>
          </div>
          <div className="hero-portrait-bottom">
            <div className="text-portrait-secondary">
              <span className="text-open-to-new-opportunities">
                Software Engineer &amp; Architect. Made by QuolyTech.
                <br />
              </span>
              Building high-performance software &amp; scalable systems.
            </div>
          </div>
        </div>
        <div className="divider-scroll-wrapper">
          <div className="hero-portrait-divider"></div>
          <div className="hero-portrait-scroll">
            <img
              src="/images/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg"
              loading="lazy"
              alt=""
              className="icon-scroll-down portrait"
            />
            <div className="text-portrait-overline selected-work">Selected Projects '23–'25</div>
          </div>
        </div>
        <div className="hero-noise"></div>
      </div>

      {/* Projects Section */}
      <section className="section-projects" style={{ opacity: 1 }}>
        <div className="container-projects" style={{ opacity: 1, transform: 'none' }}>
          {projects.map((proj) => (
            <ProjectCard key={proj.to} {...proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
