import {sum} from './sum.js';
import {app} from '../app.js';
import request from 'supertest';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test ('api path / should be return hello world',async() => {
  const res = await request(app).get('/')
 expect(res.statusCode).toEqual(200)
 expect(res.text).toBe("Hello World!")
 
});

//app.get("/999", (req, res) => {
 // res.send("Hello Siri!");
//});
