import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper page-notfound" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="utility-page-wrap">
        <div className="utility-page-content" style={{ textAlign: 'center', padding: '40px' }}>
          <img
            src="https://cdn.prod.website-files.com/static/page-not-found.211a85e40c.svg"
            alt="Page not found"
            style={{ marginBottom: '24px', maxWidth: '120px' }}
          />
          <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#fff' }}>Page Not Found</h2>
          <div style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px' }}>
            The page you are looking for doesn't exist or has been moved.
          </div>
          <Link
            to="/"
            className="chip-socials"
            style={{ display: 'inline-flex', padding: '12px 24px', borderRadius: '999px', textDecoration: 'none' }}
          >
            <div className="text-socialnav">Return to Work</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
