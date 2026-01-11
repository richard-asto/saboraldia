import React from 'react';
import { ArrowLeft, Play, BookOpen, Utensils, Calendar, Heart, Check } from 'lucide-react';
import { getIngredients, DAYS } from '../utils/helpers';

const RecipeDetail = ({ recipe, favorites, weeklyPlan, onBack, onToggleFavorite, onAddToPlan }) => {
  const isFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal);
  const ingredients = getIngredients(recipe);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 fade-in">
      
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-semibold bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver a resultados
      </button>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-6">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full rounded-2xl shadow-lg"
            />
            
            {recipe.strYoutube && (
              <div>
                <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  <Play className="w-6 h-6 text-red-600" />
                  Video de Preparación
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
              >
                <BookOpen className="w-5 h-5" />
                Ver Receta Original
              </a>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-3" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {recipe.strMeal}
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    {recipe.strCategory}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    {recipe.strArea}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onToggleFavorite(recipe)}
                className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart className={`w-7 h-7 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                <Utensils className="w-6 h-6 text-orange-600" />
                Ingredientes
              </h3>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {ingredients.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">
                      <strong className="text-orange-600">{item.measure}</strong> {item.ingredient}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                <Calendar className="w-6 h-6 text-orange-600" />
                Agregar al Planificador
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {DAYS.map(day => (
                  <button
                    key={day}
                    onClick={() => onAddToPlan(day, recipe)}
                    className={`px-4 py-2.5 rounded-xl font-semibold transition-all ${
                      weeklyPlan[day]?.idMeal === recipe.idMeal
                        ? 'bg-green-500 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50">
          <h3 className="flex items-center gap-2 text-3xl font-bold text-gray-900 mb-6" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            <BookOpen className="w-7 h-7 text-orange-600" />
            Instrucciones de Preparación
          </h3>
          <div className="prose prose-lg max-w-none">
            {recipe.strInstructions.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed text-lg" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                  {paragraph}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
