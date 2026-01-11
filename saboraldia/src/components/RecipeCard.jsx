import React from 'react';
import { Heart } from 'lucide-react';

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite, onClick }) => {
    return (
        <div
            className="recipe-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(recipe);
                    }}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                    <Heart
                        className={`w-5 h-5 ${isFavorite
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400'
                            }`}
                    />
                </button>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    {recipe.strMeal}
                </h3>
                {recipe.strCategory && (
                    <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {recipe.strCategory}
                    </span>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
