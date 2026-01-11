
import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RecipeDetail from './pages/RecipeDetail';
import FavoritesPage from './pages/FavoritesPage';
import PlannerPage from './pages/PlannerPage';
import './styles/animations.css';

// Componente interno que usa el contexto
const AppContent = () => {
  const {
    currentView,
    user,
    recipes,
    selectedRecipe,
    loading,
    favorites,
    weeklyPlan,
    searchTerm,
    searchIngredient,
    setSearchTerm,
    setSearchIngredient,
    favoritesCount,
    navigate,
    handleLogin,
    handleRegister,
    handleGuestLogin,
    handleLogout,
    handleForgotPassword,
    handleSearch,
    handleRecipeClick,
    handleBackToHome,
    toggleFavorite,
    addToWeeklyPlan,
    removeFromWeeklyPlan,
  } = useApp();

  // Si no hay usuario autenticado, mostrar pantalla de bienvenida
  if (!user) {
    return (
      <WelcomePage
        onLogin={handleLogin}
        onRegister={handleRegister}
        onForgotPassword={handleForgotPassword}
        onGuestLogin={handleGuestLogin}
      />
    );
  }

  // Renderizar la aplicación principal
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header
        user={user}
        currentView={currentView}
        onNavigate={navigate}
        onLogout={handleLogout}
        favoritesCount={favoritesCount}
      />

      {currentView === 'home' && (
        <HomePage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchIngredient={searchIngredient}
          setSearchIngredient={setSearchIngredient}
          recipes={recipes}
          loading={loading}
          favorites={favorites}
          onSearch={handleSearch}
          onRecipeClick={handleRecipeClick}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {currentView === 'detail' && selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          favorites={favorites}
          weeklyPlan={weeklyPlan}
          onBack={handleBackToHome}
          onToggleFavorite={toggleFavorite}
          onAddToPlan={addToWeeklyPlan}
        />
      )}

      {currentView === 'favorites' && (
        <FavoritesPage
          favorites={favorites}
          onRecipeClick={handleRecipeClick}
          onToggleFavorite={toggleFavorite}
          onNavigateHome={() => navigate('home')}
        />
      )}

      {currentView === 'planner' && (
        <PlannerPage
          weeklyPlan={weeklyPlan}
          onRecipeClick={handleRecipeClick}
          onRemoveFromPlan={removeFromWeeklyPlan}
          onNavigateHome={() => navigate('home')}
        />
      )}
    </div>
  );
};

// Componente principal con Provider
export default function SaboralDia() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
