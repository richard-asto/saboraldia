
import React from 'react';
import { ChefHat, Search, Heart, Calendar, LogOut, Sparkles, Menu, X } from 'lucide-react';

const Header = ({ user, currentView, onNavigate, onLogout, favoritesCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', icon: Search, label: 'Buscar' },
    { id: 'favorites', icon: Heart, label: 'Favoritos', badge: favoritesCount },
    { id: 'planner', icon: Calendar, label: 'Planificador' },
  ];

  const handleNavigate = (view) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavigate('home')}
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-1.5 md:p-2 rounded-xl group-hover:scale-110 transition-transform">
              <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className="text-xl md:text-3xl font-bold gradient-text"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Saboría
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl font-semibold transition-all ${currentView === item.id
                    ? 'bg-orange-100 text-orange-700 shadow-md'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.badge > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="flex items-center gap-3 ml-4 pl-4 border-l-2 border-gray-200">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${user?.isGuest
                    ? 'bg-gradient-to-br from-purple-500 to-indigo-500'
                    : 'bg-gradient-to-br from-orange-500 to-red-500'
                  }`}>
                  {user?.isGuest ? <Sparkles className="w-5 h-5" /> : user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 max-w-[120px] truncate">{user?.name}</p>
                  {user?.isGuest && (
                    <p className="text-xs text-purple-600">Modo Invitado</p>
                  )}
                </div>
              </div>
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-red-600 transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col gap-2 pb-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${currentView === item.id
                    ? 'bg-orange-100 text-orange-700 shadow-md'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* User Info Mobile */}
            <div className="flex items-center gap-3 px-4 py-3 mt-2 border-t-2 border-gray-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${user?.isGuest
                  ? 'bg-gradient-to-br from-purple-500 to-indigo-500'
                  : 'bg-gradient-to-br from-orange-500 to-red-500'
                }`}>
                {user?.isGuest ? <Sparkles className="w-5 h-5" /> : user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
                {user?.isGuest && (
                  <p className="text-xs text-purple-600">Modo Invitado</p>
                )}
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors flex-shrink-0"
                title="Cerrar sesión"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
