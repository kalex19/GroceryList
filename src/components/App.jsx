import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form';
import Container from './Container';

class App extends Component {
	state = {
		items: []
	};

	addItem = newItem => {
		this.setState({ items: [ ...this.state.items, newItem ] });
	};

	markComplete = (id, category) => {
		const item = this.state[category].find(item => item.id === id);
		item.completed = !item.completed;
		this.setState({ [category]: this.state[category] });
	};

	render() {
		return (
			<div className="App">
				<Form addItem={this.addItem} />
				<h1 className="siteTitle">Grocery List</h1>
				<Container items={this.state.items} complete={this.markComplete} />
			</div>
		);
	}
}

export default App;
