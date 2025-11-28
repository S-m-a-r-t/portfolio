import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import LiquidWaveLoader from './components/LiquidWaveLoader';
import Interactive3DBackground from './components/Interactive3DBackground.jsx';


createRoot(document.getElementById('root')).render(
    <LiquidWaveLoader onComplete={() => {
      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <Interactive3DBackground />
          <App />
        </StrictMode>
      );
    }} />
)
