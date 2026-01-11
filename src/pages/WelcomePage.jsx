import React, { useState } from 'react';
import { ChefHat, Search, Heart, Calendar, Play, Mail, Lock, Eye, EyeOff, User, ArrowLeft, Sparkles } from 'lucide-react';

const WelcomePage = ({ onLogin, onRegister, onForgotPassword, onGuestLogin }) => {
  const [authView, setAuthView] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [forgotEmail, setForgotEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(loginForm);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    onRegister(registerForm);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    onForgotPassword(forgotEmail);
    setAuthView('login');
    setForgotEmail('');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Imagen de fondo hero con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543846527-e850cf54e54f?w=2550&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-red-900/50 to-amber-900/50 backdrop-blur-[2px]"></div>
      </div>

      {/* Decoraciones de fondo animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Panel Izquierdo - Presentación */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl shadow-2xl animate-bounce-slow">
                <ChefHat className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-7xl font-bold text-white drop-shadow-2xl" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Sabor<span className="text-orange-600">ía</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-3xl font-semibold text-white drop-shadow-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                Tu compañero culinario perfecto
              </p>
              <p className="text-xl text-white text-orange-50 drop-shadow-md">
                Descubre, planifica y cocina las mejores recetas del mundo. 
                Todo en un solo lugar. 100% gratis.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Search className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-gray-800">Busca</h3>
                </div>
                <p className="text-sm text-gray-600">Miles de recetas disponibles</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-gray-800">Guarda</h3>
                </div>
                <p className="text-sm text-gray-600">Tus favoritas siempre a mano</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-gray-800">Planifica</h3>
                </div>
                <p className="text-sm text-gray-600">Tu menú semanal organizado</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Play className="w-6 h-6 text-purple-500" />
                  <h3 className="font-bold text-gray-800">Aprende</h3>
                </div>
                <p className="text-sm text-gray-600">Videos paso a paso</p>
              </div>
            </div>
          </div>

          {/* Panel Derecho - Formularios de Acceso */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 fade-in animation-delay-300">
            {authView === 'login' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" 
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    ¡Bienvenido de vuelta!
                  </h2>
                  <p className="text-gray-600">Inicia sesión para continuar</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="w-full pl-11 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAuthView('forgot')}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Iniciar Sesión
                  </button>
                </form>

                {/* BOTÓN DE INVITADO */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">O continúa como</span>
                  </div>
                </div>

                <button
                  onClick={onGuestLogin}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-600 transform hover:scale-[1.02] transition-all shadow-lg"
                >
                  <Sparkles className="w-6 h-6" />
                  Entrar como Invitado
                </button>

                <div className="text-center pt-4">
                  <span className="text-gray-600">¿No tienes cuenta? </span>
                  <button
                    onClick={() => setAuthView('register')}
                    className="text-orange-600 hover:text-orange-700 font-bold"
                  >
                    Regístrate gratis
                  </button>
                </div>
              </div>
            )}

            {authView === 'register' && (
              <div className="space-y-6">
                <button
                  onClick={() => setAuthView('login')}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Volver
                </button>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" 
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Crea tu cuenta
                  </h2>
                  <p className="text-gray-600">Es gratis y siempre lo será</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        required
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Mínimo 6 caracteres"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirmar contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        required
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Repite la contraseña"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Crear Cuenta
                  </button>
                </form>
              </div>
            )}

            {authView === 'forgot' && (
              <div className="space-y-6">
                <button
                  onClick={() => setAuthView('login')}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Volver
                </button>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2" 
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Recuperar contraseña
                  </h2>
                  <p className="text-gray-600">Te enviaremos un enlace de recuperación</p>
                </div>

                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3.5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Enviar Enlace
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
