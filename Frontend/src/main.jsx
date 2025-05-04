import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'; // ✅ You forgot this import


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
