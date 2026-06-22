import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Pricing from '../pages/Pricing';
import Industries from '../pages/Industries';
import RequestDemo from '../pages/RequestDemo';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

