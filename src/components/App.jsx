import React, { Component } from 'react';
import '../styles/App.css';
import Form from './Form';
import Container from './Container';

class App extends Component {
	state = {
		fruit: [],
		vegetables: [],
		meat: [],
		dairy: [],
		grains: [],
		misc: [],
		homegoods: []
	};

	addItem = () => {
		//if item category = fruit add it to the fruit array, if veg ad to veg array, etc
	};

	markComplete = () => {
		//toggle completed to mark off todo
	};
	render() {
		return (
			<div className="App">
				<h1 className="siteTitle">Grocery List</h1>
				<Form addItem={this.addItem} />
				<Container
					fruit={this.state.fruit}
					vegetables={this.state.vegetables}
					meat={this.state.meat}
					dairy={this.state.dairy}
					grains={this.state.grains}
					misc={this.state.misc}
					homegoods={this.state.homegoods}
					markComplete={this.markComplete}
				/>
			</div>
		);
	}
}

export default App;
