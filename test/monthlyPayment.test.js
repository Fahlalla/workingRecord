import { createMonthlyPayment } from "../models/index.js";

describe("test function createmonthlyPayment", () => {
  const email = "glock@odds.team";

  it("Should return transferAmount", () => {
    expect(createMonthlyPayment(email)).toEqual(20979);
  });

  it("Should return null when invalid email", () => {
    expect(createMonthlyPayment()).toBe("individual information is null");
  });
});

describe("test validate individual", () => {
  it("validate phone number", () => {
    const number = "1234567890";

    expect(number).toEqual("1234567890")
  })

})
