class monthlyPayment {
    constructor(
        name,
        surname,
        nickName,
        email,
        accountNumber,
        telephoneNumber,
        dailyRate,
        workingDay,
        transferAmount,
        submittedDate,
        remark
    )
    
    {
        this.name = name;
        this.surname = surname;
        this.nickName = nickName;
        this.email = email;
        this.accountNumber = accountNumber;
        this.telephoneNumber = telephoneNumber;
        this.dailyRate = dailyRate;
        this.workingDay = workingDay;
        this.transferAmount = transferAmount;
        this.submittedDate = submittedDate;
        this.remark = remark;
    }
}

export {monthlyPayment}