import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchSection = ({ 
  searchTerm, 
  setSearchTerm, 
  searchIngredient, 
  setSearchIngredient, 
  onSearch 
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
      {/* Búsqueda por nombre */}
      <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
          <Search className="w-6 h-6 text-orange-600" />
          Buscar por nombre
        </label>
        <p className="text-xs text-gray-500 mb-4">
          Español o inglés: pollo/chicken, pasta, pizza
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch('name')}
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Ej: pollo, pasta, sopa..."
          />
          <button
            onClick={() => onSearch('name')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Búsqueda por ingrediente */}
      <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
          <Filter className="w-6 h-6 text-orange-600" />
          Buscar por ingrediente
        </label>
        <p className="text-xs text-gray-500 mb-4">
          Encuentra recetas con: tomate, queso, arroz
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchIngredient}
            onChange={(e) => setSearchIngredient(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch('ingredient')}
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Ej: tomate, queso, pollo..."
          />
          <button
            onClick={() => onSearch('ingredient')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
