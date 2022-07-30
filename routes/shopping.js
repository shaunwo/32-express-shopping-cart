const Item = require('../item');
const express = require('express');
const router = express.Router();

// displaying all the items currently in the shopping cart
router.get('', function (req, res, next) {
	try {
		return res.json({ items: Item.findAll() });
	} catch (err) {
		return next(err);
	}
});

// adding a new item to the shopping cart
router.post('', (req, res, next) => {
	try {
		let newItem = new Item(req.body.name, req.body.price);
		return res.json({ added: newItem });
	} catch (err) {
		return next(err);
	}
});

// pulling item details, by name
router.get('/:name', (req, res, next) => {
	try {
		let foundItem = Item.find(req.params.name);
		return res.json({ item: foundItem });
	} catch (err) {
		return next(err);
	}
});

// patching the item, by name
router.patch('/:name', (req, res, next) => {
	try {
		let foundItem = Item.update(req.params.name, req.body);
		return res.json({ updated: foundItem });
	} catch (err) {
		return next(err);
	}
});

// deleting the item, by name
router.delete('/:name', (req, res, next) => {
	try {
		Item.remove(req.params.name);
		return res.json({ message: 'Deleted' });
	} catch (err) {
		return next(err);
	}
});

module.exports = router;
