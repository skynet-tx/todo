import React, { Component } from 'react';
import { Container, Advertisement } from 'semantic-ui-react'

import TodoApp from './Components'

class App extends Component {
	render() {
		return (
			<Container text>
				<Advertisement unit='leaderboard' test='TODO LIST' />
				<TodoApp/>
			</Container>
		);
	}
}

export default App;
