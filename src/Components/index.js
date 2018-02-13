/**
 * Created by skynetsaa on 13.02.18.
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'

const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default TodoApp