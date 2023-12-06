import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './Auth/UseContextAuth.jsx';
import { Dashboard } from './pages/Dashboard.jsx'
import { Layout } from './components/Layout.jsx';
import { Activos } from './pages/Activos.jsx';
import { Login } from './pages/Login.jsx'
import { useEffect } from 'react';
import { CrearArticulo } from './pages/CrearArticulo.jsx';
import { VerArticulo } from './pages/VerArticulo.jsx';
import { CrearMovimiento } from './pages/CrearMovimiento.jsx';
import { VerMovimiento } from './pages/VerMovimiento.jsx';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return <Navigate to='/login' />
  }
  return children
}

export function App() {
  const { login } = useAuth();

  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: document.cookie.split('=')[1] })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          return console.log(data.error)
        }
        login({ user: data.user })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='activos/*' element={<Activos />}>
          <Route path='crearArt' element={<CrearArticulo />} />
          <Route path='verArt' element={<VerArticulo />} />
          <Route path='crearMovi' element={<CrearMovimiento />} />
          <Route path='verMovi' element={<VerMovimiento />} />
        </Route>
      </Route>
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}