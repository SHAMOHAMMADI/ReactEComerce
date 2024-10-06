import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ShoppingCartProvider>

  <StrictMode>
    <App />
  </StrictMode>
  </ShoppingCartProvider>

  </BrowserRouter>
)
