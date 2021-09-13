# Function tax3 คำนวณภาษี หัก ณ ที่จ่าย 3%
## รับค่า dailyRate กับ workingDay เป็นตัวเลข มา แล้วนำมาคูณกัน จะได้เป็น monthlySalaryAmount
### นำ monthlySalaryAmount คูณด้วย 0.03 จะต้องได้เป็น tax3Amount
### นำ monthlySalaryAmount ไปลบกับ tax3Amount จะได้ netTransferAmount
### เช่น dailyRate = 100, workingDay = 10 จะได้ monthlySalaryAmount = 1000
#### เช่น monthlySalaryAmount = 1000, tax3 = 0.03 จะได้ tax3Amount = 30
### นำ monthlySalaryAmount = 1000, tax3Amount = 30 จะได้ netTransferAmount = 970

input: dailyRate:number, workingDay:number
output: 
{
    monthlySalaryAmount,tax3Amount,netTransferAmount
}
ex. output
{
    monthlySalaryAmount:1000,
    tax3Amount:30,
    netTransferAmount:970
}