const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getSalesProducts(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
productId,
name,
productNumber,
color
listPrice
FROM
salesLT.Product
`);
console.log(`Returned SQL results`);
return results;
};

async function getCustomers(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT 
          CustomerID
          ,NameStyle
          ,Title
          ,FirstName
          ,MiddleName
          ,LastName
          ,Suffix
          ,CompanyName
          ,SalesPerson
          ,EmailAddress
          ,Phone
          ,PasswordHash
          ,PasswordSalt
          ,rowguid
          ,ModifiedDate
    FROM
    salesLT.Customer
    `);
    console.log(`Returned SQL results`);
    return results;
    }


//Export
module.exports = {getSalesProducts :getSalesProducts,
                  getCustomers :getCustomers};