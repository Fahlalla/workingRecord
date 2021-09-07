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
});

describe("When call api path /individual-information", () => {
  const email = "glock@odds.team";
  const url = `/individual-information/${email}`;

  test('Response should contain individual information data', async() => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200)
    expect(res.text).toBe("{\"name\":\"panudet\",\"surname\":\"jitti\",\"nickName\":\"Ford\",\"phoneNumber\":\"1234567890\",\"email\":\"glock@odds.team\",\"site\":\"Saksiam\",\"dailyRate\":\"999\"}")
  });
})

describe("When call api path /working-records", () => {
  const email = "glock@odds.team";
  const url = `/working-records/${email}`;
  const urlWithOutEmail = "/working-records/";

  it("Should return response status 200", async () => {
    const res = await request(app).get(url)
    expect(res.statusCode).toEqual(200);
  })
  it("Should return response contain workingDay", async () => {
    const res = await request(app).get(url)
    expect(res.text).toContain("workingDay");
  })

  it("Should fail when call api path without email", async () => {
    const res = await request(app).get(urlWithOutEmail);
    expect(res.statusCode).toBe(404);
  })
})

describe("When call api path /monthly-payment/", () => {
  const email = "glock@odds.team";
  const url = `/monthly-payment/${email}`;
  const urlWithOutEmail = "/monthly-payment/";

  it("Should return response status 200", async () => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200);
  })

  it("Should return response contain transferAmount", async () => {
    const res = await request(app).get(url)
    expect(res.text).toContain("transferAmount");
  })

  it("Should fail when call api path without email", async () => {
    const res = await request(app).get(urlWithOutEmail);
    expect(res.statusCode).toBe(404);
  })

})