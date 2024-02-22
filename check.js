const chesql = require("./index");

const query = "SELECT * me";
const result = chesql(query);
console.log(result);
