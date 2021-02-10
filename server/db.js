const Pool = require("pg").Pool;

const Pool = new Pool({
    user: "postgres",
    password: "allion.com123",
    host: "localhost",
    database: "perntodo"
});

module.exports = pool;