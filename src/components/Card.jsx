import React from 'react';
import '../styles/Card.css';

const Card = ({ category, items }) => {
	const displayCard = items.map(item => {
		return (
			<div className="item-container">
				<input type="checkbox" className="checkbox" />
				<p className="card-item">{item.item}</p>
				<p className="item-quantity">{item.quantity}</p>
			</div>
		);
	});

	return (
		<div className={`card ${category}-card`}>
			<h1 className="card-header">{category}</h1>
			{displayCard}
		</div>
	);
};

export default Card;
