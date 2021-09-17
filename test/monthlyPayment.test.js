import { IndividualInformation } from "../models/individualInformation.js";
import {
  validateIndividualInformation,
  createMonthlyPayment,
} from "../models/index.js";
import { individualInformationMap } from "../models/individualInformation.js";
import workingRecord, { workingRecordMap } from "../models/workingRecords.js";

describe("test function createMonthlyPayment", () => {
  const email = "glock@odds.team";
  let individualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);
  it("dailyRate = 999, workingDay = 21 should return 20979", () => {
    expect(createMonthlyPayment(individualInformation, workingRecord)).toEqual(20979);
  });
});

// describe("test function createMonthlyPayment", () => {  
//   const email = "fameanunn@odds.team";
//   it("Should return transferAmount", () => {
//     expect(createMonthlyPayment(email)).toEqual(10000);
//   });
// });

// describe("test function createMonthlyPayment", () => {
//   const email = "smile@odds.team";
//   it("Should return transferAmount", () => {
//     expect(createMonthlyPayment(email)).toEqual(12100);
//   });
// });

// describe("test function createMonthlyPayment", () => {
//   const email = "tadsika@odds.team";
//   it("Should return transferAmount", () => {
//     expect(createMonthlyPayment(email)).toEqual(12880);
//   });
// });

// describe("test function createMonthlyPayment", () => {
//   const email = "glockza@odds.team";
//   it("Should return transferAmount", () => {
//     expect(createMonthlyPayment(email)).toEqual(2200022);
//   });
// });

  /*it("Should return null when invalid email", () => {
    expect(createMonthlyPayment("glock@onvrdisplaydisconnect.team")).toBe("individual information is null");
  });*/

describe("test function validateIndividualInformation", () => {
  it("Should return undefined when email invalid", () => {
    const individualInformationWithInvalidEmail =
      individualInformationMap.get("glock@odds.teamkkk");
    expect(
      validateIndividualInformation(individualInformationWithInvalidEmail)
    ).toBe("");
  });

  it("Should return complete when email valid", () => {
    const individualInformationWithInvalidEmail =
      individualInformationMap.get("glock@odds.team");
    expect(
      validateIndividualInformation(individualInformationWithInvalidEmail)
    ).toBe("complete");
  });

  it("Should return invalid phone number when phone number invalid", () => {
    const MOCK_DATA = new IndividualInformation(
      "test",
      "test",
      "test",
      "01234567890",
      "inValid@odds.team",
      "test",
      "10"
    );

    individualInformationMap.set("tadsika@odds.team", MOCK_DATA);

    const individualInformation =
      individualInformationMap.get("tadsika@odds.team");

    expect(validateIndividualInformation(individualInformation)).toBe(
      "invalid phone number"
    );
  });

  it("Should return invalid daily rate when daily rate = 0", () => {
    const MOCK_DATA = new IndividualInformation(
      "test",
      "test",
      "test",
      "0123456789",
      "inValid@odds.teamsss",
      "test",
      "0"
    );

    individualInformationMap.set("tadsika@odds.team", MOCK_DATA);

    const individualInformation =
      individualInformationMap.get("tadsika@odds.team");

    expect(validateIndividualInformation(individualInformation)).toBe(
      "invalid daily rate"
    );
  });
});
