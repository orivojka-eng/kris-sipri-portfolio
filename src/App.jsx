import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingOverlay from './components/LoadingOverlay';
import SmoothScroll from './components/SmoothScroll';

import Home from './pages/Home';
import Info from './pages/Info';
import StadiaBluetooth from './pages/StadiaBluetooth';
import TestHubNext from './pages/TestHubNext';
import Spotlight from './pages/Spotlight';
import CorporateCardsPortal from './pages/CorporateCardsPortal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <SmoothScroll>
      <LoadingOverlay />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/stadia-bluetooth" element={<StadiaBluetooth />} />
          <Route path="/test-hub-next" element={<TestHubNext />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/corporate-cards-portal" element={<CorporateCardsPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
