import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const navigate = useNavigate();

  const login = ({ user }) => {
    setUserLoggedIn(user);
    navigate('/dashboard');
  };

  const logout = () => {
    userLoggedIn(null);
  };

  return (
    <AuthContext.Provider value={{ userLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error('You forgot to use AuthProvider');
  }
  return auth;
}
