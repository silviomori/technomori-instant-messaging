import React from 'react';
import ReactDOM from 'react-dom/client';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rgcjprrpeiwe46rr.us.auth0.com"
      clientId="I1RAT3SCF9zC92l369bK2iXf1fTtMF9P"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'snap-message-api',
        scope: 'openid profile email',
      }}
    >
      <div style={{ height: '100vh' }}>
        <App />
      </div>
    </Auth0Provider>
  </React.StrictMode>,
);
