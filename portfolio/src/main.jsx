import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import LiquidWaveLoader from './components/LiquidWaveLoader.jsx';
import Interactive3DBackground from './components/Interactive3DBackground.jsx';

function Root() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  if (!loadingComplete) {
    return <LiquidWaveLoader onComplete={() => setLoadingComplete(true)} />;
  }

  return (
    <>
      {/* <Interactive3DBackground /> */}
      <App />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);