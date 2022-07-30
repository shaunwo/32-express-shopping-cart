process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
let items = require('../fakeDb');

let item = { name: 'Stereo', price: 300 };

// before/after data changes for testing
beforeEach(async () => {
	items.push(item);
});
afterEach(async () => {
	items = [];
});

// check pulling the complete list of items
describe('GET /items', () => {
	test('Pulls a list of items', async () => {
		const res = await request(app).get(`/items`);
		const { items } = res.body;
		expect(res.statusCode).toBe(200);
		expect(items).toHaveLength(1);
	});
});

// check retrieving an item by name
describe('GET /items/:name', () => {
	test('Pulls a single item', async () => {
		const res = await request(app).get(`/items/${item.name}`);
		expect(res.statusCode).toBe(200);
		expect(res.body.item).toEqual(item);
	});

	test("Responds with 404 if can't find item", async function () {
		const res = await request(app).get(`/items/0`);
		expect(res.statusCode).toBe(404);
	});
});

// check adding a new item
describe('POST /items', () => {
	test('Adds a new item', async () => {
		const res = await request(app).post(`/items`).send({
			name: 'Baconator',
			price: 4.59,
		});
		expect(res.statusCode).toBe(200);
		expect(res.body.added.name).toEqual('Baconator');
		expect(res.body.added.price).toEqual(4.59);
	});
});

// check patching (updating) an item
describe('PATCH /items/:name', () => {
	test('Updates a single item', async () => {
		const res = await request(app)
			.patch(`/items/${item.name}`)
			.send({ name: 'Testing' });
		expect(res.statusCode).toBe(200);
		expect(res.body.updated).toEqual({ name: 'Testing' });
	});

	test("Responds with 404 if item can't be found", async () => {
		const res = await request(app).patch(`/items/0`);
		expect(res.statusCode).toBe(404);
	});
});

// check deleting an item
describe('DELETE /items/:name', () => {
	test('Deletes a single a item', async () => {
		const res = await request(app).delete(`/items/${item.name}`);
		expect(res.statusCode).toBe(200);
		expect(res.body).toEqual({ message: 'Deleted' });
	});
});
