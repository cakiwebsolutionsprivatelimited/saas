import { Routes, Route, Navigate } from 'react-router-dom';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import ModuleDetail from '../pages/ModuleDetail';
import Pricing from '../pages/Pricing';
import Industries from '../pages/Industries';
import RequestDemo from '../pages/RequestDemo';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Marketing pages — with Header + Footer */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:slug" element={<ModuleDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        
        {/* Redirects for dead navigation / uncreated pages */}
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Navigate to="/request-demo" replace />} />
        <Route path="/privacy" element={<Navigate to="/" replace />} />
        <Route path="/terms" element={<Navigate to="/" replace />} />
        <Route path="/categories/*" element={<Navigate to="/apps" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Application auth pages — isolated, no marketing shell */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

