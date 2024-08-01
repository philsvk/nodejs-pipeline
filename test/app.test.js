// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('App', () => {
  // it('should return welcome message', async () => {
  //   const res = await request(app).get('/');
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toHaveProperty('message', 'Welcome to the test application!');
  // });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ username: 'testuser', password: 'password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User created successfully');
    expect(res.body).toHaveProperty('userId');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});