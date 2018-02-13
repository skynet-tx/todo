/**
 * Created by skynetsaa on 13.02.18.
 */
let nextTodoId = 0
export const addTodo = (title, description) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		title,
		description,
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
