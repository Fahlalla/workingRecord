import { IndividualInformation } from "../models/individualInformation.js";
import {
  validateIndividualInformation,
  createMonthlyPayment,
} from "../models/index.js";
import { individualInformationMap } from "../models/individualInformation.js";

describe("test function createmonthlyPayment", () => {
  const email = "glock@odds.team";

  it("Should return transferAmount", () => {
    expect(createMonthlyPayment(email)).toEqual(20979);
  });
});
describe("test function createmonthlyPayment", () => {  
  const email = "fameanunn@odds.team";
  it("Should return transferAmount", () => {
    expect(createMonthlyPayment(email)).toEqual(10000);
  });
});

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
