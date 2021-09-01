class monthlyPayment {
    constructor(
        name,
        surname,
        email,
        accountNumber,
        telephoneNumber,
        workingDay,
        transferAmount,
        submittedDate,
        remark
    )
    
    {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.accountNumber = accountNumber;
        this.telephoneNumber = telephoneNumber;
        this.workingDay = workingDay;
        this.transferAmount = transferAmount;
        this.submittedDate = submittedDate;
        this.remark = remark;
    }
}

export {monthlyPayment}