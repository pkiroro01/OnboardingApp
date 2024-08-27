// server.test.js
const request = require('supertest');
const express = require('express');
const app = require('../server'); // Make sure your server exports the app

describe('Server-side API tests', () => {

    test('POST /submit should return the submitted data and a success message', async () => {
        const response = await request(app)
            .post('/submit')
            .send({
                fullName: 'John Doe',
                startDate: '2024-08-01',
                jobRole: 'engineering'
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            fullName: 'John Doe',
            startDate: '2024-08-01',
            jobRole: 'engineering',
            message: 'Form data received. Learning path selection is handled in the client application.'
        });
    });

});