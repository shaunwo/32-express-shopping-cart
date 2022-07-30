// defining the items, pulled from the fakeDb file
const items = require('./fakeDb');

class Item {
	// defining the items in the cart
	constructor(name, price) {
		this.name = name;
		this.price = price;
		items.push(this);
	}

	// returning ALL the items in the car
	static findAll() {
		return items;
	}

	// updating an item in the car
	static update(name, data) {
		let foundItem = Item.find(name);
		if (foundItem === undefined) {
			throw { message: 'Not Found', status: 404 };
		}
		foundItem.name = data.name;
		foundItem.price = data.price;

		return foundItem;
	}

	// verifying that the selected item exists, by name
	static find(name) {
		const foundItem = items.find((v) => v.name === name);
		if (foundItem === undefined) {
			throw { message: 'Not Found', status: 404 };
		}
		return foundItem;
	}

	// removing an item from the cart, by name, and then by the index
	static remove(name) {
		let foundIdx = items.findIndex((v) => v.name === name);
		if (foundIdx === -1) {
			throw { message: 'Not Found', status: 404 };
		}
		items.splice(foundIdx, 1);
	}
}

module.exports = Item;
