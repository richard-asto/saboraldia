import React from 'react';
import { Calendar, Plus, Trash2 } from 'lucide-react';
import { DAYS } from '../utils/helpers';
import Footer from '../components/Footer';

const PlannerPage = ({ weeklyPlan, onRecipeClick, onRemoveFromPlan, onNavigateHome }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 max-w-7xl mx-auto px-4 py-8 fade-in w-full">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                        Planificador Semanal
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {DAYS.map((day) => (
                        <div
                            key={day}
                            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                                style={{ fontFamily: 'Playfair Display, serif' }}>
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                {day}
                            </h3>

                            {weeklyPlan[day] ? (
                                <div className="space-y-4">
                                    <div
                                        className="cursor-pointer group"
                                        onClick={() => onRecipeClick(weeklyPlan[day].idMeal)}
                                    >
                                        <img
                                            src={weeklyPlan[day].strMealThumb}
                                            alt={weeklyPlan[day].strMeal}
                                            className="w-full h-32 object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform"
                                        />
                                        <h4 className="font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                            {weeklyPlan[day].strMeal}
                                        </h4>
                                    </div>
                                    <button
                                        onClick={() => onRemoveFromPlan(day)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Eliminar
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <Plus className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                                    <p className="text-sm text-gray-500 mb-3">Sin planificar</p>
                                    <button
                                        onClick={onNavigateHome}
                                        className="text-sm text-orange-600 hover:text-orange-700 font-semibold"
                                    >
                                        Buscar receta
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PlannerPage;