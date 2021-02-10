const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "allion.com123",
    host: "localhost",
    database: "perntodo"
});

module.exports = pool;