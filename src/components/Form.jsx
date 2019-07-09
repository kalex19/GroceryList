import React, { Component } from 'react';
import '../styles/Form.css';

export class Form extends Component {
	state = {
		category: '',
		item: '',
		quantity: ''
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
			completed: false,
			id: Date.now()
		};
		this.props.addItem(newItem);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			item: '',
			quantity: ''
		});
	};

	render() {
		return (
			<main>
				<form onSubmit={this.submitItem} className="form">
					<h1>Select a Category</h1>
					<article className="dropdown-content">
						<input
							type="radio"
							className="formBtn"
							id="fruit"
							name="category"
							value="fruit"
							onClick={this.handleChange}
						/>
						<label for="fruit">Fruit</label>
						<input
							type="radio"
							className="formBtn"
							id="vegetables"
							name="category"
							value="vegetables"
							onChange={this.handleChange}
						/>
						<label for="vegetables">Vegetables</label>
						<input
							type="radio"
							className="formBtn"
							id="meat"
							name="category"
							value="meat"
							onChange={this.handleChange}
						/>
						<label for="meat">Meat</label>
						<input
							type="radio"
							className="formBtn"
							id="dairy"
							name="category"
							value="dairy"
							onChange={this.handleChange}
						/>
						<label for="dairy">Dairy</label>
						<input
							type="radio"
							className="formBtn"
							id="grains"
							name="category"
							value="grains"
							onChange={this.handleChange}
						/>
						<label for="grains">Grains</label>
						<input
							type="radio"
							className="formBtn"
							id="misc"
							name="category"
							value="misc"
							onChange={this.handleChange}
						/>
						<label for="misc">Misc</label>
						<input
							type="radio"
							className="formBtn"
							id="homegoods"
							name="category"
							value="homegoods"
							onChange={this.handleChange}
						/>
						<label for="homegoods">Homegoods</label>
					</article>
					<input
						type="text"
						name="item"
						value={this.state.item}
						placeholder="grocery item"
						onChange={this.handleChange}
						className="itemInput"
					/>
					<input
						type="text"
						name="quantity"
						value={this.state.quantity}
						placeholder="item quantity"
						onChange={this.handleChange}
						className="quantityInput"
					/>
					<input type="submit" className="submitBtn" />
				</form>
			</main>
		);
	}
}

export default Form;
