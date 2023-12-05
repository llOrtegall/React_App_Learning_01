import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true
  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return children
}

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard/*' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}
