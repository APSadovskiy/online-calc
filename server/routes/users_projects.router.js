const Router = require('express')
const router = new Router()
const users_projectsController = require('../controllers/users_projects.controller')

router.post('/', users_projectsController.createUser_projects)
router.get('/', users_projectsController.getUser_projects)
router.get('/:id', users_projectsController.getOneUser_projects)
router.put('/', users_projectsController.updateUser_projects)
router.delete('/:id', users_projectsController.deleteUser_projects)

module.exports = router