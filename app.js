const express = require('express');
const app = express();
const shoppingRoutes = require('./routes/shopping');
const ExpressError = require('./expressError');

app.use(express.json());
app.use('/items', shoppingRoutes);

// global handler for a requested URL that doesn't have a route
// in the application
app.use(function (req, res, next) {
	return new ExpressError('Not Found', 404);
});

// global error message that will catch a variety of things that
// may come up from errant data passed into application
app.use((err, req, res, next) => {
	res.status(err.status || 500);

	return res.json({
		error: err.message,
	});
});

module.exports = app;
