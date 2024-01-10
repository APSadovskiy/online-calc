/* require('dotenv').config() */
const Pool = require('pg').Pool
const pool = new Pool({
	user: USER_DB,
	password: PASSWORD_DB,
	host: HOST_DB,
	port: PORT_DB,
	database: NAME_DB 
})

module.exports = pool