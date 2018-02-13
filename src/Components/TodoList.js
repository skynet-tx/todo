/**
 * Created by skynetsaa on 13.02.18.
 */
import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import items from '../MoksData/TodoMocks'

import Todo from './Todo'

class TodoList extends Component {
	render() {
		return (
			<Segment inverted>
				<List divided inverted relaxed>
					{this.props.todos.map((item, index) => <Todo key={item.id} {...item}/>)}
				</List>
			</Segment>
		)
	}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList