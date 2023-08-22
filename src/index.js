import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.css';
import './assets/global.css'

const App = React.lazy(() => import('./App.js'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense element={'Loading...'}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);
