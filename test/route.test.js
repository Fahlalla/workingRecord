import request from "supertest";
import { app, server, receiver, setIndividualInformationMap} from "../app.js";
import { DBManager } from "../helper/mongoMemoryServer.js";
import { IndividualInformation } from '../models/individualInformation.js';

describe("Post Endpoints", () => {
  const dbman = new DBManager();

  beforeAll(async () => await dbman.start());
  afterAll(async () => await dbman.stop());
  afterEach(async () => {
    dbman.cleanup();
    await server.close();
  });
  it("should return 200 for root", async () => {
    receiver("roof");
    
    const res = await request(app).get("/").send();
    expect(res.statusCode).toEqual(200);
  });
  
  test("api path / should be return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello World!");
  });
});

describe("When call api path /individual-information", () => {
  const dbman = new DBManager();
  const glock = new IndividualInformation(
    "glockMock",
    "glockMock",
    "glockMock",
    "0808080808",
    "glockza@odds.team",
    "Morchana",
    "100001",
    "2452453654645"
  );
  const map = new Map();
  map.set("glock@odds.team", glock);
  setIndividualInformationMap(map)
  
  const email = "glock@odds.team";
  const url = `/individual-information/${email}`;

  // beforeAll(async () => await dbman.start());
  // afterAll(async () => await dbman.stop());
  afterEach(async () => {
    // dbman.cleanup();
    await server.close();
  });

  test("Response should contain individual information data", async () => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(
      '{"name":"panudet","surname":"jitti","nickName":"Ford","phoneNumber":"1234567890","email":"glock@odds.team","site":"Saksiam","dailyRate":"999","accountNumber":"38475"}'
    );
  });
});

describe("When call api path /working-records", () => {
  const dbman = new DBManager();

  beforeAll(async () => await dbman.start());
  afterAll(async () => await dbman.stop());
  afterEach(async () => {
    dbman.cleanup();
    await server.close();
  });
  const email = "glock@odds.team";
  const url = `/working-records/${email}`;
  const urlWithOutEmail = "/working-records/";

  it("Should return response status 200", async () => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200);
  });
  it("Should return response contain workingDay", async () => {
    const res = await request(app).get(url);
    expect(res.text).toContain("workingDay");
  });

  it("Should fail when call api path without email", async () => {
    const res = await request(app).get(urlWithOutEmail);
    expect(res.statusCode).toBe(404);
  });
});

describe("When call api path /monthly-payment/", () => {
  const dbman = new DBManager();

  beforeAll(async () => await dbman.start());
  afterAll(async () => await dbman.stop());
  afterEach(async () => {
    dbman.cleanup();
    await server.close();
  });
  const email = "glock@odds.team";
  const url = `/monthly-payment/${email}`;
  const urlWithOutEmail = "/monthly-payment/";

  it("Should return response status 200", async () => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200);
  });

  it("Should return response contain monthlyPayment", async () => {
    const res = await request(app).get(url);
    expect(res.text).toBe(
      '{"name":"panudet","surname":"jitti","nickName":"Ford","email":"glock@odds.team","accountNumber":"38475","dailyRate":"999","workingDay":"21","transferAmount":20979,"submittedDate":"11/11/2021","remark":"100"}'
    );
  });

  it("Should fail when call api path without email", async () => {
    const res = await request(app).get(urlWithOutEmail);
    expect(res.statusCode).toBe(404);
  });
});

describe("When call api path /individual-information", () => {
  const dbman = new DBManager();

  beforeAll(async () => await dbman.start());
  afterAll(async () => await dbman.stop());
  afterEach(async () => {
    dbman.cleanup();
    await server.close();
  });
  const email = "fameanunn@odds.team";
  const url = `/individual-information/${email}`;

  test("Response should contain individual information data", async () => {
    const res = await request(app).get(url);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Fame");
  });
});
