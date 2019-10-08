import {ADD_MEAL,EDIT_MEAL,DELETE_MEAL} from "../actionTypes";


const mealsState ={
  meals: [
        {"mealId" : "001", "mealName":"Dish", "calories":"200", "date":"12-09-2020"},
        {"mealId" : "002", "mealName":"Dish-2", "calories":"1200", "date":"12-09-2020"},
        {"mealId" : "003", "mealName":"Dish-3", "calories":"2200", "date":"24-10-2019"},
        {"mealId" : "004", "mealName":"Dish-4", "calories":"2030", "date":"09-12-2008"},
        {"mealId" : "005", "mealName":"Dish-5", "calories":"2004", "date":"12-09-2020"},
        {"mealId" : "006", "mealName":"Dish-6", "calories":"400", "date":"09-12-2008"}
     ]
};

const meals = (state= mealsState,action) => {

    switch(action.type){

        case ADD_MEAL : {
            // Good place to add mealId ? or it should be in actionCreator ?
            const newMeal = {
                ...action.payload ,
                mealsId : Math.floor(Math.random()*2000).toString().padStart(4,'0')
            }
            console.log("Meal Added ! :- ", newMeal);
            // return the updated state
            return {
                ...state,
                meals : [...state.meals, newMeal]
            }

        }
        case EDIT_MEAL : {
            let newMeals = state.meals.map((meal)=> meal.mealId === action.payload.mealId ? action.payload : meal);
            console.log("Meals Updated (EDITED! :- ",newMeals);
            return{
                ...state,
                meals: newMeals
            }

        }
        case DELETE_MEAL : {
            let newMeals = state.meals.filter((meal)=> meal.mealId !==action.payload.mealId );
            console.log("Meals Updated (DELTED! :- ",newMeals);
            return{
                ...state,
                meals: newMeals
            }

        }
        default : {
            return state;
        }

    }

}

export default meals;