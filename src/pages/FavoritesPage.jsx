import React from 'react';
import { Heart } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const FavoritesPage = ({ favorites, onRecipeClick, onToggleFavorite, onNavigateHome }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 py-8 fade-in w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Heart className="w-7 h-7 text-white fill-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Mis Recetas Favoritas
          </h2>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-xl">
            <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Aún no tienes favoritos
            </h3>
            <p className="text-gray-600 mb-6">
              Explora recetas y guarda las que más te gusten
            </p>
            <button
              onClick={onNavigateHome}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg"
            >
              Explorar Recetas
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onClick={() => onRecipeClick(recipe.idMeal)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FavoritesPage;