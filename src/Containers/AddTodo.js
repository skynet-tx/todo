/**
 * Created by skynetsaa on 13.02.18.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Input, Message, Button } from 'semantic-ui-react'

import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
	let title,description;

	return (
		<Message>
			<form
				onSubmit={e => {
					e.preventDefault()
					let titleVal = title.inputRef.value;
					let descriptionVal = description.inputRef.value;
					if (!titleVal.trim() && !descriptionVal.trim()) {
						return
					}
					dispatch(addTodo(titleVal, descriptionVal))

					title.inputRef.value = '';
					description.inputRef.value = '';
				}}
			>
				<Input
					ref={node => {
						title = node
					}}
					placeholder='Type title'
				/>
				<Input
					name="description"
					ref={node => {
						description = node
					}}
					placeholder='Type Description'
				/>

				<Button
					inverted
					type="submit"
					content='Add Todo'
					floated="right"
					icon='add'
					color='green'
					labelPosition='right' />
			</form>
		</Message>
	)
}
AddTodo = connect()(AddTodo)

export default AddTodo