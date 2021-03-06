'use strict';

const server = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);

describe('Testing Authorization routes', () => {

  let user = null;
  it('Users with role \'user\' should only be able to read', async () => {

    // const newUser = await request.post('/signup').send({
    //   username: 'name',
    //   password: 'test',
    //   role: 'user',
    // });

    // console.log('this is new user', newUser.body);
    // expect(newUser.status).toEqual(201);
    // user = newUser.body;
    // expect(newUser.body.capabilities).toEqual(['read']);

    // const readFood = await request.get('api/v1/food').set('Authorization', `Bearer ${newUser.body.token}`);
    // expect(readFood.status).toEqual(200);
    // expect(readFood.body).toBeTruthy();
  });


  it('Should deny user that can\'t write', async () => {

    // const writeFood = await request.post('api/v2/food').set('Authorization', `Bearer ${user.token}`);

    // expect(writeFood.status).toEqual(500);
  });
});