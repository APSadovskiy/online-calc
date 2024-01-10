require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
	res.send('POSTGRID и NODEJS!!!')
})

app.listen(PORT, () => console.log(`Сервер стартовал на порту ${PORT}`))