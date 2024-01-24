const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const users_projectsRouter = require('./users_projects.router')

router.use('/user',userRouter)
router.use('/users_projects',users_projectsRouter)


module.exports = router