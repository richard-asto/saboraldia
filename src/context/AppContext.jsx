import React, { createContext, useContext, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRecipes } from '../hooks/useRecipes';
import { useFavorites } from '../hooks/useFavorites';
import { useWeeklyPlan } from '../hooks/useWeeklyPlan';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Estados de navegación
  const [currentView, setCurrentView] = useState('welcome');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchIngredient, setSearchIngredient] = useState('');

  // Custom hooks para lógica de negocio
  const auth = useAuth();
  const recipesState = useRecipes();
  const favoritesState = useFavorites();
  const weeklyPlanState = useWeeklyPlan();

  // Navegación
  const navigate = (view) => {
    setCurrentView(view);
  };

  // Manejo de autenticación mejorado
  const handleLogin = async (loginData) => {
    const user = auth.login(loginData);
    if (user) {
      setCurrentView('home');
    }
  };

  const handleRegister = async (registerData) => {
    const user = auth.register(registerData);
    if (user) {
      setCurrentView('home');
    }
  };

  const handleGuestLogin = () => {
    auth.loginAsGuest();
    setCurrentView('home');
  };

  const handleLogout = () => {
    auth.logout();
    setCurrentView('welcome');
    recipesState.clearRecipes();
    recipesState.clearSelectedRecipe();
  };

  const handleForgotPassword = async (email) => {
    const result = await auth.forgotPassword(email);
    if (result.success) {
      alert(result.message);
    }
  };

  // Manejo de recetas mejorado
  const handleSearch = async (type = 'name') => {
    const query = type === 'name' ? searchTerm : searchIngredient;
    if (query.trim()) {
      await recipesState.searchRecipes(query, type);
    }
  };

  const handleRecipeClick = async (id) => {
    const recipe = await recipesState.getRecipeDetails(id);
    if (recipe) {
      setCurrentView('detail');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    recipesState.clearSelectedRecipe();
  };

  // Valor del contexto
  const value = {
    // Estados
    currentView,
    searchTerm,
    searchIngredient,
    
    // Auth
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    isGuest: auth.isGuest,
    
    // Recipes
    recipes: recipesState.recipes,
    selectedRecipe: recipesState.selectedRecipe,
    loading: recipesState.loading,
    error: recipesState.error,
    
    // Favorites
    favorites: favoritesState.favorites,
    favoritesCount: favoritesState.favoritesCount,
    
    // Weekly Plan
    weeklyPlan: weeklyPlanState.weeklyPlan,
    plannedDaysCount: weeklyPlanState.plannedDaysCount,
    
    // Setters
    setSearchTerm,
    setSearchIngredient,
    
    // Acciones de navegación
    navigate,
    
    // Acciones de auth
    handleLogin,
    handleRegister,
    handleGuestLogin,
    handleLogout,
    handleForgotPassword,
    
    // Acciones de recetas
    handleSearch,
    handleRecipeClick,
    handleBackToHome,
    
    // Acciones de favoritos
    toggleFavorite: favoritesState.toggleFavorite,
    isFavorite: favoritesState.isFavorite,
    
    // Acciones de planificador
    addToWeeklyPlan: weeklyPlanState.addToWeeklyPlan,
    removeFromWeeklyPlan: weeklyPlanState.removeFromWeeklyPlan,
    isRecipeInPlan: weeklyPlanState.isRecipeInPlan,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
};
