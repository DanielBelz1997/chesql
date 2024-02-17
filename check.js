const chesql = require("./index");

const query = "SELECT * from me";
const result = chesql(query);
console.log(result);
