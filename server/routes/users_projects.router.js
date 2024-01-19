const Router = require('express')
const router = new Router()
const users_projectsController = require('../controllers/users_projects.controller')

router.post('/user_projects', users_projectsController.createUser_projects)
router.get('/user_projects', users_projectsController.getUser_projects)
router.get('/user_projects/:id', users_projectsController.getOneUser_projects)
router.put('/user_projects', users_projectsController.updateUser_projects)
router.delete('/user_projects/:id', users_projectsController.deleteUser_projects)

module.exports = router