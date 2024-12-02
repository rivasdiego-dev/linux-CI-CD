const request = require('supertest');
const app = require('../app');

describe('App', () => {
    it('GET /todos - should List of todos', async () => {
        const response = await request(app).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('List of todos');
    });
});