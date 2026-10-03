import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({
  to,
  title,
  company,
  description,
  image,
  colorClass,
  isExternal = false,
}) {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = (e) => {
    if (isExternal) {
      return; // Standard external link navigation
    }
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 400);
  };

  const CardContent = (
    <>
      <div className="glare-item-top inner-edge" style={{ opacity: 0.7 }}></div>
      <div className="projectcard-top">
        <div className="projectcard-title-row">
          <div className="text-projectcard-title">{title}</div>
          <img
            src="/images/641284285486aaab07feafaa_icon-arrow-project.svg"
            loading="lazy"
            alt="View project"
            className="icon-projectcard-arrow"
          />
        </div>
        <div className="text-projectcard-description">
          <span className="text-projectcard-description-company">{company}</span> —{' '}
          {description}
        </div>
      </div>
      <img
        src={image}
        loading="lazy"
        alt={title}
        className="project-thumbnail"
      />
      <div className={`project-card-colour ${colorClass}`}></div>
    </>
  );

  return (
    <div className="project-card-outline">
      <div className="glare-item-top outer-edge" style={{ opacity: 0.6 }}></div>
      {isExternal ? (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card w-inline-block"
          style={{ textDecoration: 'none' }}
        >
          {CardContent}
        </a>
      ) : (
        <a
          href={to}
          onClick={handleClick}
          className={`project-card w-inline-block ${isNavigating ? 'is-navigating' : ''}`}
          style={{
            textDecoration: 'none',
            opacity: isNavigating ? 0.7 : 1,
            transform: isNavigating ? 'scale(0.98)' : 'none',
            transition: 'all 0.35s ease',
          }}
        >
          {CardContent}
        </a>
      )}
    </div>
  );
}
