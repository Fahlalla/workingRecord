// function monthlySalaryAmount (dailyRate,workingDay){
//     return dailyRate*workingDay
// }

function tax3Amount (monthlySalaryAmount){
    return monthlySalaryAmount*0.03
}

function netTransferAmount (monthlySalaryAmount,tax3Amount){
    return monthlySalaryAmount-tax3Amount
}

export { monthlySalaryAmount,tax3Amount,netTransferAmount}

/*
function tax3(dailyRate,workingDay){
    let MonthlySalaryAmount = monthlySalaryAmount (dailyRate,workingDay);
    let Tax3Amount =  tax3Amount(_monthlySalaryAmount);
    let TransferAmount =netTransferAmount(MonthlySalaryAmount,Tax3Amount);
    return {
        monthlySalaryAmount:MonthlySalaryAmount,
        tax3Amount:Tax3Amount,
        netTransferAmount:TransferAmount
    };
}

export { tax3,monthlySalaryAmount,tax3Amount,netTransferAmount}

*/