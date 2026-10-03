import React, { useState, useEffect } from 'react';

export default function LoadingOverlay() {
  const [faded, setFaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFaded(true);
    }, 400);

    const timer2 = setTimeout(() => {
      setRemoved(true);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-overlay ${faded ? 'fade-out' : ''}`}>
      <img
        src="/images/645df90657e6ec4e4ed2e236_loading-dots.gif"
        alt="Loading"
        className="logo-loading"
      />
      <div className="text-loading">Just a moment.</div>
    </div>
  );
}
