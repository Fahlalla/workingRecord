import { app, server } from "../app.js";
import request from "supertest";

describe("ทดสอบการใช้งาน api /monthly-payment", () => {
  afterEach(() => { server.close() });
  const email = "glock@odds.team";

  it("Should return transferAmount result", async () => {
    const res = await request(app).get(`/monthly-payment/${email}`);
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('{"name":"panudet","surname":"jitti","nickName":"Ford","email":"glock@odds.team","accountNumber":"38475","dailyRate":"999","workingDay":"21","transferAmount":20979,"submittedDate":"11/11/2021","remark":"100"}');
  });
});
