const db = require('../db')
// !!!править
class UserController {
	async createUser(req, res) {
		try {
			const { name_text, id_user } = req.body
			const newUser_projects = await db.query(`INSERT INTO public.users_projects (name_text, id_user)
			 VALUES ($1, $2) RETURNING *`, [name_text, id_user])
			console.log(name_text, id_user);
			res.json(newUser_projects.rows[0])
		} catch (e) {
			console.log(e);
		}

	}
	async getUser(req, res) {
		try {
			const getUser_projects = await db.query(`SELECT * FROM public.user`)
			res.json(getUser_projects.rows)
		} catch (e) {
			console.log(e);
		}

	}
	async getOneUser(req, res) {

	}
	async updateUser(req, res) {

	}
	async deleteUser(req, res) {

	}
}

module.exports = new UserController()