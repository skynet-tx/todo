/**
 * Created by skynetsaa on 13.02.18.
 */
import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'

import Todo from './Todo'

import items from '../MoksData/TodoMocks'

class TodoList extends Component {
	render() {
		return (
			<Segment inverted>
				<List divided inverted relaxed>
					{items.map((item, index) => <Todo key={item.id} {...item}/>)}
				</List>
			</Segment>
		)
	}
}

export default TodoList