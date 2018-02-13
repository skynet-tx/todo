/**
 * Created by skynetsaa on 13.02.18.
 */
let nextTodoId = 0
export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}
