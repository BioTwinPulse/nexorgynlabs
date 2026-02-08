
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Platforms from './pages/Platforms';
import Technology from './pages/Technology';
import Security from './pages/Security';
import Portal from './pages/Portal';
import Governance from './pages/Governance';
import InstitutionalHub from './pages/InstitutionalHub';
import Operations from './pages/Operations';
import ResearchOffice from './pages/ResearchOffice';
import Enterprise from './pages/Enterprise';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/platforms/:id" element={<Platforms />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/security" element={<Security />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/manifesto" element={<InstitutionalHub activeTab="manifesto" />} />
          <Route path="/transparency" element={<InstitutionalHub activeTab="transparency" />} />
          <Route path="/esg" element={<InstitutionalHub activeTab="esg" />} />
          <Route path="/corporate" element={<InstitutionalHub activeTab="corporate" />} />
          <Route path="/policy" element={<InstitutionalHub activeTab="policy" />} />
          <Route path="/operations" element={<Operations activeTab="map" />} />
          <Route path="/research" element={<ResearchOffice activeTab="labs" />} />
          <Route path="/roadmap" element={<ResearchOffice activeTab="roadmap" />} />
          <Route path="/status" element={<Operations activeTab="status" />} />
          <Route path="/deployment" element={<Enterprise activeTab="deployment" />} />
          <Route path="/resources" element={<Enterprise activeTab="resources" />} />
          <Route path="/procurement" element={<Enterprise activeTab="procurement" />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
