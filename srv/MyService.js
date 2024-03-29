module.exports = (cds) => {
 
    cds.on('hello', (req, res) => {
        return 'Welcome ' + req.data.name + ' to my world of capm service';
    });
}
const cds = require("@sap/cds");
const { employees } = cds.entities("yasaswini.db.master");
module.exports = (cds) => {
 
    const { ReadEmployeeSrv } = cds.entities;
 
    cds.on('hello', (req, res) => {
        return 'Welcome ' + req.data.name + ' to my world of capm service';
    });
 
    cds.on('READ', ReadEmployeeSrv, async (req, res) => {
        var oRecord = {
            ID: "DUMMY",
            nameFirst: "Aksayy",
            nameMiddle: "Reddy",
            nameLast: "Mothe",
            nameInitials: null,
            sex: "M",
            language: "E",
            phoneNumber: "+1 224 374 522",
            email: "nikola.genome@itelo.info",
            loginName: "NICOLAS",
            Currency_code: "USD",
            salaryAmount: 110962,
            accountNumber: "222333444",
            bankId: "510000655",
            bankName: "HDFC Bank"
            }
        var aEmp = [];
 
        const tx = cds.tx(req);
        aEmp =  await tx.run(SELECT.from(employees).where(
            `salaryAmount >= 84500 and nameFirst like 'p%'`
        ));
 
        aEmp.push(oRecord);
        return aEmp;
    });
 
}
 