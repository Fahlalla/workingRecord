import { transferAmount } from "../models";
import { individualInformationMap } from "../models/individualInformation";
import { workingRecordMap } from "../models/workingRecords";

describe("test transferAmount function", () => {
  it("เมื่อใส่อีเมลล์ glock@odds.team จะได้ data ใน format ที่ถูกต้อง", () => {
    const email = "glock@odds.team";
    let expectedFormat = {
      accountNumber: "38475",
      dailyRate: "999",
      email: "glock@odds.team",
      name: "panudet",
      nickName: "Ford",
      remark: "100",
      submittedDate: "11/11/2021",
      surname: "jitti",
      telephoneNumber: undefined,
      transferAmount: 20979,
      workingDay: "21",
    };
    expect(transferAmount(email)).toEqual(expectedFormat);
  });

  it("เมื่อใส่อีเมลล์ tadsika@odds.team จะได้ data ใน format ที่ถูกต้อง", () => {
    const email = "tadsika@odds.team";
    let expectedFormat = {
      accountNumber: "1234",
      dailyRate: "560",
      email: "tadsika@odds.team",
      name: "tadsika",
      nickName: "Fah",
      remark: "",
      submittedDate: "11/11/2021",
      surname: "khongkasawan",
      telephoneNumber: undefined,
      transferAmount: 12880,
      workingDay: "23",
    };
    expect(transferAmount(email)).toEqual(expectedFormat);
  });
});
