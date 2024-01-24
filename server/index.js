require('dotenv').config()
const express = require('express')
const router = require('./routes/index.router')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())

/* app.get('/', (req, res) => {
	res.send('POSTGRID и NODEJS!!!')
}) */
app.use(express.json())
app.use('/api', router)
const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Сервер стартовал на порту ${PORT}`))
	} catch (e) {
		console.log(e);
	}

}

start()
