const db =require('../db')

class User_projectsController {
	async createUser_projects(req, res) {
try {
			const {name_text, id_user}=req.body
			const newUser_projects = await db.query(`INSERT INTO public.users_projects (name_text, id_user)
			 VALUES ($1, $2) RETURNING *`, [name_text, id_user])
			console.log(name_text, id_user);
			res.json(newUser_projects.rows[0])
} catch (e) {
	console.log(e);
}

	}
	async getUser_projects(req, res) {

	}
	async getOneUser_projects(req, res) {

	}
	async updateUser_projects(req, res) {

	}
	async deleteUser_projects(req, res) {

	}
}

module.exports = new User_projectsController()
