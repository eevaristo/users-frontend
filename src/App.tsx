import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import './reset.css';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
