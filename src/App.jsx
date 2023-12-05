import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { useAuth } from './Auth/UseContextAuth.jsx';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    console.log('user not logged in');
    return <Navigate to='/' />
  }
  return children
}

export function App() {
  const { login} = useAuth();

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
    <main className='h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </main>
  )
}
