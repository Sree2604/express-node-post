const {Pool} = require('pg')

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"postgres",
    password: "sreearangs2604",
    port:5432,
})

module.exports = pool;