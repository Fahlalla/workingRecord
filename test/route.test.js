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
});
