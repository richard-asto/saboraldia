import { translateSearchTerm } from '../utils/helpers';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const recipeAPI = {
    // Buscar recetas por nombre o ingrediente
    searchRecipes: async (query, type = 'name') => {
        try {
            const translatedQuery = translateSearchTerm(query);

            const endpoint = type === 'name'
                ? `${BASE_URL}/search.php?s=${encodeURIComponent(translatedQuery)}`
                : `${BASE_URL}/filter.php?i=${encodeURIComponent(translatedQuery)}`;

            const response = await fetch(endpoint);
            const data = await response.json();

            if (data.meals) {
                return data.meals;
            }

            // Fallback: intentar con el término original
            const fallbackEndpoint = type === 'name'
                ? `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
                : `${BASE_URL}/filter.php?i=${encodeURIComponent(query)}`;

            const fallbackResponse = await fetch(fallbackEndpoint);
            const fallbackData = await fallbackResponse.json();

            return fallbackData.meals || [];
        } catch (error) {
            console.error('Error fetching recipes:', error);
            throw error;
        }
    },

    // Obtener detalles de una receta
    getRecipeDetails: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
            const data = await response.json();

            if (data.meals && data.meals[0]) {
                return data.meals[0];
            }

            return null;
        } catch (error) {
            console.error('Error fetching recipe details:', error);
            throw error;
        }
    }
};
