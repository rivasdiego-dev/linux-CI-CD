const request = require('supertest');
const app = require('../app');

describe('App', () => {
    it('GET / - should return status 200', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200);
    });
});