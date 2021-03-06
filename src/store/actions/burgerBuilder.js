import * as actionTypes from './actionTypes'
export const addIngredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	}
}

export const removeIngredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	}
}

export const setIngredient = (ingredients) => {
	return {
		type: actionTypes.SET_INGREDIENT,
		ingredients: ingredients
	}
}

export const fetchIngredientFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENT_FAILED
	}
}

export const initIngredient = () => {
	return {
		type: actionTypes.INIT_INGREDIENTS
	}
}