import React, { useState, useRef } from 'react';

export default function HeroWindow() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, shineX: 0, shineY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const xRatio = (x - centerX) / centerX; // -1 to 1
    const yRatio = (y - centerY) / centerY; // -1 to 1

    setTilt({
      rx: -yRatio * 5, // rotateX degrees
      ry: xRatio * 6,  // rotateY degrees
      shineX: xRatio * 60,
      shineY: yRatio * 20,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, shineX: 0, shineY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="section-hero"
      style={{ position: 'relative' }}
    >
      {/* Scroll Down Indicator */}
      <div className="hero-fade">
        <div className="scroll-wrapper" style={{ opacity: 1 }}>
          <img
            src="/images/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg"
            loading="lazy"
            alt="Scroll down"
            className="icon-scroll-down"
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>

      {/* Main 3D Window Container */}
      <div
        className="container-hero-image"
        style={{
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className="glare-item-top outer-edge" style={{ opacity: 0.8 }}></div>
        <div
          className="window-outline"
          style={{
            transform: isHovered
              ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="glare-item-top hero-inner"></div>
          <div className="window-main">
            {/* Interactive Light Sheen Glare */}
            <div
              className="shine-wrapper"
              style={{
                transform: `translate3d(calc(-25vw + ${tilt.shineX}px), ${tilt.shineY}px, 0) rotate(15deg)`,
                opacity: isHovered ? 0.25 : 0.15,
                transition: 'transform 0.15s ease-out, opacity 0.3s ease',
              }}
            >
              <div className="shine-small"></div>
              <div className="shine-big"></div>
            </div>

            {/* macOS Window Title Bar */}
            <div className="window-bar">
              <div className="window-dots-wrapper">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <img
                src="/images/64647bd0f92c6bb858b22871_icon-plus.svg"
                loading="lazy"
                alt="Expand"
                className="icon-windowbar-plus"
              />
            </div>

            {/* Hero Window Inner Content */}
            <div className="window-content">
              <div className="hero-text-content">
                <h1 className="text-hero">
                  I craft software, systems &amp;{' '}
                  <span className="text-hero-serif">experiences.</span>
                </h1>
                <div className="hero-about-grid">
                  <div className="hero-about-null"></div>
                  <div>
                    <p className="text-hero-about">
                      Software Engineer &amp; Architect. Made by QuolyTech.
                      <br />
                      <span className="text-hero-about-formerly">
                        Specializing in Full-Stack Systems, Real-Time Architecture &amp; AI.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="window-grain"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Ambient Background Gradient & Noise */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-noise"></div>
    </div>
  );
}
