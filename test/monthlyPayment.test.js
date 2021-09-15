import { createMonthlyPayment } from "../models/index.js";
import { individualInformationMap } from "../models/individualInformation.js";
import {IndividualInformation} from "../models/individualInformation.js";

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


describe("test validate individual", () => {
  it("validate phone number", () => {
    const number = "1234567890";

    expect(number).toEqual("1234567890");
  });

});
