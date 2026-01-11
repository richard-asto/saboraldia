import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('saboriaUser', null);

  const login = (loginData) => {
    const userData = { 
      email: loginData.email, 
      name: loginData.email.split('@')[0],
      isGuest: false 
    };
    setUser(userData);
    return userData;
  };

  const register = (registerData) => {
    const userData = { 
      email: registerData.email, 
      name: registerData.name,
      isGuest: false 
    };
    setUser(userData);
    return userData;
  };

  const loginAsGuest = () => {
    const guestData = { 
      email: 'invitado@saboria.app', 
      name: 'Invitado',
      isGuest: true 
    };
    setUser(guestData);
    return guestData;
  };

  const logout = () => {
    setUser(null);
  };

  const forgotPassword = (email) => {
    // En una app real, esto haría una llamada al backend
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: `Correo enviado a ${email}` });
      }, 500);
    });
  };

  const isAuthenticated = !!user;
  const isGuest = user?.isGuest || false;

  return {
    user,
    login,
    register,
    loginAsGuest,
    logout,
    forgotPassword,
    isAuthenticated,
    isGuest
  };
};
