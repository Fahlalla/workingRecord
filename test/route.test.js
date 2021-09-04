import request from "supertest";
import app from "../app.js";

describe("Test all basic functions", () => {
  it("should return 200 for root", async () => {
    const res = await request(app).get("/").send();
    expect(res.statusCode).toEqual(200);
  });
  it("should return 200 for root post", async () => {
    const res = await request(app).post("/").send({
      userId: 1,
      title: "My first title"
    });
    expect(res.statusCode).toEqual(200);
  });  
});
