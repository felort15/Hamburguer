interface MealDBResponse {
    meals: {
        strMeal: string;
        strMealThumb: string;
        strInstructions: string;
        idMeal: string;
    }[];
}

export const fetchRandomMeal = async (): Promise<MealDBResponse> => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    if (!response.ok) {
        throw new Error('Failed to fetch meal');
    }
    return response.json();
}; 