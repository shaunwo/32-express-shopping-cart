# 32.2 | Express Shopping List

A simple JSON API application where we store a shopping list.  Each item is a JavaScript object with the keys of name, and price. This application has the following routes:

1. ***GET /items*** - this should render a list of shopping items.

	Here is what a response looks like:

	`[{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]`

2. ***POST /items*** - this route should accept JSON data and add it to the shopping list.

	Here is what a sample request/response looks like:

	`{“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}`

3. ***GET /items/:name*** - this route should display a single item’s name and price.

	Here is what a sample response looks like:

	`{“name”: “popsicle”, “price”: 1.45}`

4. ***PATCH /items/:name***, this route should modify a single item’s name and/or price.

	Here is what a sample request/response looks like:

	`{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}`

5. ***DELETE /items/:name*** - this route should allow you to delete a specific item from the array.

	Here is what a sample response looks like:

	`{message: “Deleted”}`
	
JEST and Supertest testing is included as well.

## Instructions for Running Code
To get this application running, do the following in the Terminal:

1. `npm init`
2. `nodemon server.js`
3. `use your favorite HTTP client (or your browser) to do some GET calls and see the JSON results`
4. `jest shopping.test.js` to see the results of testing the functions in the shopping.js file
