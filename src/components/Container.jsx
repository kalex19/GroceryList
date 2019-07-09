import React from 'react';
import Card from './Card';
import '../styles/Container.css';

function Container({ items, complete }){
	const fruit = items.filter(item => item.category === 'fruit');
	const vegetables = items.filter(item => item.category === 'vegetables');
	const meat = items.filter(item => item.category === 'meat');
	const dairy = items.filter(item => item.category === 'dairy');
	const grains = items.filter(item => item.category === 'grains');
	const misc = items.filter(item => item.category === 'misc');
	const homegoods = items.filter(item => item.category === 'homegoods');

	return (
		<div className="cardContainer">
			{!items.length ? (
				<h2 className="no-items-text">Please add items to a grocery list</h2>
			) : (
				<React.Fragment>
					<Card items={fruit} category="fruit" complete={complete} />
					<Card items={vegetables} category="vegetables" complete={complete} />
					<Card items={meat} category="meat" complete={complete} />
					<Card items={dairy} category="dairy" complete={complete} />
					<Card items={grains} category="grains" complete={complete} />
					<Card items={misc} category="misc" complete={complete} />
					<Card items={homegoods} category="homegoods" complete={complete} />
				</React.Fragment>
			)}
		</div>
	);
}

export default Container;
