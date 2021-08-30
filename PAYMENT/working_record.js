class WorkingRecord {
    constructor(
        email,
        workingDay,
        submittedDate,
        site,
        remark
    ){
        this.email = email;
        this.workingDay = workingDay;
        this.submittedDate = submittedDate;
        this.site = site;
        this.remark = remark;
    }
}

module.exports = WorkingRecord;