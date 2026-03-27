import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { registerSW } from 'virtual:pwa-register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const updateSW = registerSW({
  onNeedRefresh() {
    (window as any).updatePWA = async () => {
      // Dispatch an event to show "Updating..." state in UI
      window.dispatchEvent(new CustomEvent('pwa-updating'));
      await updateSW(true);
    };
    window.dispatchEvent(new CustomEvent('pwa-update-available'));
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
  onRegistered(r) {
    if (r) {
      // Check for updates every 30 minutes
      setInterval(() => {
        r.update();
      }, 30 * 60 * 1000);
    }
  }
});
