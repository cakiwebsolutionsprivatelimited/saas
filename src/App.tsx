import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/saas_public_site">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
