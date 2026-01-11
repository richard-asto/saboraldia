// Diccionario de traducción español-inglés
export const translationDict = {
  'pollo': 'chicken', 
  'carne': 'beef', 
  'cerdo': 'pork', 
  'pescado': 'fish',
  'camarones': 'shrimp', 
  'arroz': 'rice', 
  'pasta': 'pasta', 
  'sopa': 'soup',
  'ensalada': 'salad', 
  'postre': 'dessert', 
  'pastel': 'cake', 
  'galletas': 'cookies',
  'pan': 'bread', 
  'pizza': 'pizza', 
  'hamburguesa': 'burger', 
  'sandwich': 'sandwich',
  'huevos': 'egg', 
  'queso': 'cheese', 
  'tomate': 'tomato', 
  'cebolla': 'onion',
  'ajo': 'garlic', 
  'papa': 'potato', 
  'patata': 'potato', 
  'zanahoria': 'carrot',
  'frijoles': 'beans', 
  'lentejas': 'lentil', 
  'aguacate': 'avocado',
  'chocolate': 'chocolate', 
  'fresa': 'strawberry', 
  'manzana': 'apple',
  'plátano': 'banana', 
  'limón': 'lemon', 
  'naranja': 'orange', 
  'leche': 'milk',
  'mantequilla': 'butter', 
  'azúcar': 'sugar', 
  'sal': 'salt', 
  'pimienta': 'pepper'
};

// Función para traducir términos de búsqueda
export const translateSearchTerm = (term) => {
  const lowerTerm = term.toLowerCase().trim();
  return translationDict[lowerTerm] || term;
};

// Obtener ingredientes de una receta
export const getIngredients = (recipe) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`]
      });
    }
  }
  return ingredients;
};

// Días de la semana
export const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
