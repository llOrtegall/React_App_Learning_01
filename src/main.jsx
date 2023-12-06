import { AuthProvider } from './Auth/UseContextAuth.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <section className='w-6/6 h-screen'>
          <App />
        </section>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
