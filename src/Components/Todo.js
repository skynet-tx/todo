/**
 * Created by skynetsaa on 13.02.18.
 */
import React, { Component } from 'react'
import { List, Checkbox, Button, Icon, Grid } from 'semantic-ui-react'

class Todo extends Component {
	render() {
		const {onClick, completed, title, description} = this.props;

		return(
			<List.Item onClick={onClick}>
				<List.Content>
					<Grid>
						<Grid.Column floated='left' width={1}>
							<Checkbox className="left floated" />
						</Grid.Column>
						<Grid.Column
							style={ {
								textDecoration: completed ? 'line-through' : 'none'
							}}
							floated='left' width={12}>
							<List.Header>{title}</List.Header>
							{description}
						</Grid.Column>
						<Grid.Column floated='left' width={3}>
							<Button.Group inverted className="right floated">
								<Button color="blue"  icon>
									<Icon name='edit' />
								</Button>
								<Button color="red" icon>
									<Icon name='remove' />
								</Button>
							</Button.Group>
						</Grid.Column>
					</Grid>
				</List.Content>
			</List.Item>
		)
	}
}

export default Todo;