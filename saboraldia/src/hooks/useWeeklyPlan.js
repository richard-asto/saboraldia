import { useLocalStorage } from './useLocalStorage';

export const useWeeklyPlan = () => {
    const [weeklyPlan, setWeeklyPlan] = useLocalStorage('saboriaWeeklyPlan', {});

    const addToWeeklyPlan = (day, recipe) => {
        setWeeklyPlan({
            ...weeklyPlan,
            [day]: recipe
        });
    };

    const removeFromWeeklyPlan = (day) => {
        const newPlan = { ...weeklyPlan };
        delete newPlan[day];
        setWeeklyPlan(newPlan);
    };

    const isRecipeInPlan = (recipeId) => {
        return Object.values(weeklyPlan).some(recipe => recipe?.idMeal === recipeId);
    };

    const getRecipeDay = (recipeId) => {
        const entry = Object.entries(weeklyPlan).find(([_, recipe]) => recipe?.idMeal === recipeId);
        return entry ? entry[0] : null;
    };

    const clearWeeklyPlan = () => {
        setWeeklyPlan({});
    };

    const plannedDaysCount = Object.keys(weeklyPlan).length;

    return {
        weeklyPlan,
        addToWeeklyPlan,
        removeFromWeeklyPlan,
        isRecipeInPlan,
        getRecipeDay,
        clearWeeklyPlan,
        plannedDaysCount
    };
};
