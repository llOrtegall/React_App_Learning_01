import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { useAuth } from './Auth/UseContextAuth.jsx';

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
