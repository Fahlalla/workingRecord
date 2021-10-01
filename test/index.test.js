import { app, server } from "../app.js";
import supertest from "supertest";
import { DBManager } from "../helper/mongoMemoryServer.js";

describe("ทดสอบการใช้งาน api /monthly-payment", () => {
  const dbman = new DBManager();

  beforeAll(async () => await dbman.start());
  afterAll(async () => await dbman.stop());
  afterEach(async () => {
    dbman.cleanup();
    await server.close();
  });
  const email = "glock@odds.team";

  it("Should return transferAmount result", () => {
        supertest(app)
      .get(`/monthly-payment/${email}`)
      .expect(200)
      .expect(
        '{"name":"panudet","surname":"jitti","nickName":"Ford","email":"glock@odds.team","accountNumber":"38475","dailyRate":"999","workingDay":"21","transferAmount":20979,"submittedDate":"11/11/2021","remark":"100"}'
      )
  });
});
