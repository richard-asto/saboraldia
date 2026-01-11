import React from 'react';
import { Search, Utensils } from 'lucide-react';
import SearchSection from '../components/SearchSection';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const HomePage = ({
    searchTerm,
    setSearchTerm,
    searchIngredient,
    setSearchIngredient,
    recipes,
    loading,
    favorites,
    onSearch,
    onRecipeClick,
    onToggleFavorite
}) => {
    const suggestedTerms = ['pollo', 'pasta', 'pizza', 'sopa', 'ensalada', 'postre'];

    return (
        <div className="min-h-screen relative">
            {/* Hero Section con imagen de fondo */}
            <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                {/* Imagen de fondo sutil para el hero */}
                <div
                    className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1920&q=80')`,
                    }}
                ></div>

                <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 fade-in">
                    {/* Encabezado con gradiente de texto */}
                    <div className="text-center mb-12 relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Utensils className="w-64 h-64 text-orange-500" />
                        </div>
                        <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: 'Playfair Display, serif' }}>
                            ¿Qué vamos a cocinar hoy?
                        </h2>
                        <p className="relative text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
                            style={{ fontFamily: 'Crimson Text, serif' }}>
                            Busca en español o inglés. Tenemos miles de recetas para ti.
                        </p>
                    </div>

                    <SearchSection
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchIngredient={searchIngredient}
                        setSearchIngredient={setSearchIngredient}
                        onSearch={onSearch}
                    />
                </div>
            </div>

            {/* Sección de resultados con fondo degradado */}
            <div className="bg-gradient-to-b from-yellow-50 to-orange-50/30">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {loading && (
                        <div className="text-center py-12">
                            <div className="inline-block w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
                            <p className="mt-4 text-lg text-gray-600 font-semibold">Buscando recetas deliciosas...</p>
                        </div>
                    )}

                    {!loading && recipes.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Encontramos {recipes.length} receta{recipes.length !== 1 ? 's' : ''}
                                </h3>
                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                                    <Utensils className="w-5 h-5 text-orange-500" />
                                    <span>¡Deliciosas opciones!</span>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {recipes.map((recipe) => (
                                    <RecipeCard
                                        key={recipe.idMeal}
                                        recipe={recipe}
                                        isFavorite={favorites.some(fav => fav.idMeal === recipe.idMeal)}
                                        onToggleFavorite={onToggleFavorite}
                                        onClick={() => onRecipeClick(recipe.idMeal)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {!loading && recipes.length === 0 && (searchTerm || searchIngredient) && (
                        <div className="text-center py-16 bg-white rounded-3xl shadow-xl">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No encontramos recetas</h3>
                            <p className="text-gray-600 mb-6">Intenta con otros términos o ingredientes</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {suggestedTerms.map(term => (
                                    <button
                                        key={term}
                                        onClick={() => {
                                            setSearchTerm(term);
                                            setTimeout(() => onSearch('name'), 100);
                                        }}
                                        className="px-4 py-2 bg-orange-50 border-2 border-orange-200 text-orange-600 rounded-xl font-semibold hover:bg-orange-100 hover:border-orange-300 transition-all"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {!loading && recipes.length === 0 && !searchTerm && !searchIngredient && (
                        <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl relative overflow-hidden">
                            {/* Patrón decorativo de fondo */}
                            <div
                                className="absolute inset-0 opacity-5 bg-repeat"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=400&q=80')`,
                                    backgroundSize: '200px'
                                }}
                            ></div>

                            <div className="relative">
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <Utensils className="w-12 h-12 text-orange-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-3"
                                    style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Comienza tu aventura culinaria
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                                    Busca por nombre de receta o por ingrediente que tengas en casa
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <p className="w-full text-sm text-gray-500 mb-2">Sugerencias populares:</p>
                                    {suggestedTerms.map(term => (
                                        <button
                                            key={term}
                                            onClick={() => {
                                                setSearchTerm(term);
                                                setTimeout(() => onSearch('name'), 100);
                                            }}
                                            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-md"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;