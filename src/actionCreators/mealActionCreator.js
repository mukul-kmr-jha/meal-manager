import {ADD_MEAL,EDIT_MEAL,DELETE_MEAL} from "../actionTypes";

export const a_addMeal=(meal)=>{

    return {
        type:ADD_MEAL,
        payload: meal
    }

};

export const a_editMeal=(meal)=>{

    return {
        type:EDIT_MEAL,
        payload: meal
    }

};

export const a_deleteMeal=(mealId)=>{

    return {
        type:DELETE_MEAL,
        payload: mealId
    }

};