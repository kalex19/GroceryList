import React from 'react';
import Fruit from './Fruit';
import Vegetables from './Vegetables';
import Meat from './Meat';
import Dairy from './Dairy';
import Grains from './Grains';
import Misc from './Misc';
import Homegoods from './Homegoods';

function Container({ fruit, vegetables, meat, dairy, grains, misc, homegoods }){
	return (
		<div>
			<Fruit className="fruitCard" data={fruit} />
			<Vegetables className="vegCard" data={vegetables} />
			<Meat className="meatCard" data={meat} />
			<Dairy className="dairyCard" data={dairy} />
			<Grains className="grainCard" data={grains} />
			<Misc className="miscCard" data={misc} />
			<Homegoods className="homegoodsCard" data={homegoods} />
		</div>
	);
}

export default Container;
