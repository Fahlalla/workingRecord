import request from "supertest";
import { app, server } from "../app.js";

describe("Post Endpoints", () => {
  afterEach(async () => {
    await server.close();
  });
  it("should return 200 for root", async () => {
    // const res = await request(app).post("/api/posts").send({
    //   userId: 1,
    //   title: "test is cool",
    // });
    const res = await request(app).get("/").send();
    expect(res.statusCode).toEqual(200);
  });

  test ('api path / should be return hello world',async() => {

    const res = await request(app).get('/')
   expect(res.statusCode).toEqual(200)
   expect(res.text).toBe("Hello World!")
  });

  test('api path /individual-information/', async() => {
    const res = await request(app).get('/individual-information/glock@odds.team')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toBe("{\"name\":\"panudet\",\"surname\":\"jitti\",\"nickName\":\"Ford\",\"phoneNumber\":\"1234567890\",\"email\":\"glock@odds.team\",\"site\":\"Saksiam\",\"dailyRate\":\"999\"}")
  });
});

