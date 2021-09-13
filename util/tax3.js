function monthlySalaryAmount (dailyRate,workingDay){
    return dailyRate*workingDay
}

function tax3Amount (monthlySalaryAmount){
    return monthlySalaryAmount*0.03
}

function netTransferAmount (monthlySalaryAmount,tax3Amount){
    return monthlySalaryAmount-tax3Amount
}

export {monthlySalaryAmount,tax3Amount,netTransferAmount}
