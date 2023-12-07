import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/UseContextAuth";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  if (!userLoggedIn) {
    return <Navigate to='/login' />
  }
  return children
}

export const getCookie = (name) => {
  const cookie =  document.cookie.split(';').find(c => c.trim().startsWith(`${name}=`))
  if (!cookie) {
    return null
  }
  return cookie.split('=')[1]
}