import React, { Component } from 'react';

export class Form extends Component {
	state = {
		category: '',
		item: '',
		quantity: '',
		completed: false
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitItem = e => {
		e.preventDefault();
		const newItem = {
			...this.state,
			id: Date.now()
		};
		this.props.addItem(newItem);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			item: '',
			quantity: '',
			category: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitItem}>
					<div class="dropdown">
						<button class="dropbtn">Category</button>
						<div class="dropdown-content">
							<button name="category" value="fruit" onChange={this.handleChange}>
								Fruit
							</button>
							<button name="category" value="vegetable" onChange={this.handleChange}>
								Vegetables
							</button>
							<button name="category" value="meat" onChange={this.handleChange}>
								Meat
							</button>
							<button name="category" value="dairy" onChange={this.handleChange}>
								Dairy
							</button>
							<button name="category" value="grains" onChange={this.handleChange}>
								Grains
							</button>
							<button name="category" value="misc" onChange={this.handleChange}>
								Misc
							</button>
							<button name="category" value="homegoods" onChange={this.handleChange}>
								Homegoods
							</button>
						</div>
					</div>
					<input
						type="text"
						name="item"
						value={this.state.item}
						placeholder="grocery item"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="quantity"
						value={this.state.quantity}
						placeholder="item quantity"
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Form;
