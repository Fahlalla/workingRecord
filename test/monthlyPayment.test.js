import { createMonthlyPayment } from "../models/index.js";

describe("test function createmonthlyPayment", () => {
	const email = "glock@odds.team";


	it("Should return tranferamount", () => {
		expect(createMonthlyPayment(email)).toEqual(20979);
	});
});

