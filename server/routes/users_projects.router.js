const Router = require('express')
const router = new Router()
const users_projectsController = require('../controllers/users_projects.controller')

router.post('/user_projects', users_projectsController.createUser_projects)

module.exports = router