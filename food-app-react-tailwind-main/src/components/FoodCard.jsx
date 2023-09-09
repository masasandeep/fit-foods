import React from 'react';
import FoodList from '../backend/FoodList';
const FoodCard = ({ food }) => {
  return (
    <div className="items-center">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden py-20">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-contain object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{food.name}</h2>
        <div className="mt-2">
          <p>Calories: {food.nutrition.calories}</p>
          <p>Carbohydrates: {food.nutrition.carbohydrates}g</p>
          <p>Fat: {food.nutrition.fat}g</p>
          <p>Protein: {food.nutrition.protein}g</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FoodCard;