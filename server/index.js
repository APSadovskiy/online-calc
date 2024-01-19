require('dotenv').config()
const express = require('express')
const user_projectsRouter = require('./routes/users_projects.router')

const PORT = process.env.PORT || 8080

const app = express()

/* app.get('/', (req, res) => {
	res.send('POSTGRID и NODEJS!!!')
}) */
app.use(express.json())
app.use('/api', user_projectsRouter)
const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Сервер стартовал на порту ${PORT}`))
	} catch (e) {
		console.log(e);
	}

}

start()
