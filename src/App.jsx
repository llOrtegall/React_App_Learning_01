import { CrearMovimiento } from './pages/CrearMovimiento.jsx';
import { Navigate, Route, Routes } from 'react-router-dom'
import { VerMovimiento } from './pages/VerMovimiento.jsx';
import { CrearArticulo } from './pages/CrearArticulo.jsx';
import { VerArticulos } from './pages/VerArticulos.jsx';
import { useAuth } from './Auth/UseContextAuth.jsx';
import { Activos } from './components/Activos.jsx';
import { Dashboard } from './pages/Dashboard.jsx'
import { Layout } from './components/Layout.jsx';
import { Login } from './pages/Login.jsx'
import { useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return <Navigate to='/login' />
  }
  return children
}

const getCookie = (name) => {
  const cookie = document.cookie.split(';').find(c => c.trim().startsWith(`${name}=`))
  if (!cookie) {
    return null
  }
  return cookie.split('=')[1]
}

export function App() {

  const { login } = useAuth();

  useEffect(() => {
    const token = getCookie('token')
    axios.get('http://172.20.1.160:3000/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.status === 200) {
        login(res.data.auth)
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='activos/*' element={<Activos />}>
          <Route path='crearArt' element={<CrearArticulo />} />
          <Route path='verArt' element={<VerArticulos />} />
          <Route path='crearMovi' element={<CrearMovimiento />} />
          <Route path='verMovi' element={<VerMovimiento />} />
        </Route>
      </Route>
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}