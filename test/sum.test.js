import {sum} from './sum.js';
import {app} from '../app.js';
import request from 'supertest';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('api path /individual-information/', async() => {
  const res = await request(app).get('/individual-information/glock@odds.team')
  expect(res.statusCode).toEqual(200)
  expect(res.text).toBe("{\"name\":\"panudet\",\"surname\":\"jitti\",\"nickName\":\"Ford\",\"phoneNumber\":\"1234567890\",\"email\":\"glock@odds.team\",\"site\":\"Saksiam\",\"dailyRate\":\"999\"}")
});