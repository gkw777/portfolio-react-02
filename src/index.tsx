import App from 'app';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
);
