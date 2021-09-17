import {monthlySalaryAmount} from "./tax3.js"
import {tax3Amount} from "./tax3.js"
import {netTransferAmount} from "./tax3.js"

describe('การคำนวณภาษี ณ ที่จ่ายที่rate 3%', () => {
    test('dailyRate = 999, workingDay = 21 should return 20979',() => {
        expect(monthlySalaryAmount(999,21)).toBe(20979);
    })
    
    test('monthlySalaryAmount = 20979 should return 629.37',() => {
        expect(tax3Amount(20979,0.03)).toBe(629.37);
    })
    
    test('monthlySalaryAmount = 20979, tax3Amount = 629.37 should return 20349.63',() => {
        expect(netTransferAmount(20979,629.37)).toBe(20349.63);
    })
})
