import { IndividualInformation } from "../models/individualInformationModel.js";
import { validateIndividualInformation, createMonthlyPayment } from "../models/index.js";
import { individualInformationMap } from "../models/individualInformationModel.js";
import { workingRecordMap } from "../models/workingRecordsModel.js";

describe("test function createMonthlyPayment", () => {
  const email = "glock@odds.team";
  let individualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);
  it("dailyRate = 999, workingDay = 21 should return 20979", () => {
    expect(createMonthlyPayment(individualInformation, workingRecord)).toEqual(20979);
  });
});

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
