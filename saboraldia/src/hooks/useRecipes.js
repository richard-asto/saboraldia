import { useState } from 'react';
import { recipeAPI } from '../utils/api';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (query, type = 'name') => {
    setLoading(true);
    setError(null);
    try {
      const results = await recipeAPI.searchRecipes(query, type);
      setRecipes(results);
      return results;
    } catch (err) {
      setError('Error al buscar recetas. Intenta nuevamente.');
      console.error('Error:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getRecipeDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const recipe = await recipeAPI.getRecipeDetails(id);
      if (recipe) {
        setSelectedRecipe(recipe);
        return recipe;
      }
      return null;
    } catch (err) {
      setError('Error al cargar los detalles de la receta.');
      console.error('Error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  const clearRecipes = () => {
    setRecipes([]);
  };

  return {
    recipes,
    selectedRecipe,
    loading,
    error,
    searchRecipes,
    getRecipeDetails,
    clearSelectedRecipe,
    clearRecipes
  };
};
