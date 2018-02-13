import React, { Component } from 'react';
import { Container, Advertisement } from 'semantic-ui-react'

import TodoList from './Components/TodoList'

class App extends Component {
	render() {
		return (
			<Container text>
				<Advertisement unit='leaderboard' test='TODO LIST' />
				<TodoList/>
			</Container>
		);
	}
}

export default App;
