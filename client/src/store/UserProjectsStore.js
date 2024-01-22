import { makeAutoObservable } from "mobx";

export default class UserProjectsStore {
	constructor() {
		this._userProjects = [{ "id": 1, "name_text": "Тест 1", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T10:36:43.104Z", "upd__datetime": null, "del_datetime": null, "id_user": 0 }, { "id": 2, "name_text": "Тест 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": true, "ins_datetime": "2024-01-10T10:37:46.987Z", "upd__datetime": null, "del_datetime": null, "id_user": 0 }, { "id": 4, "name_text": "Наименование проекта", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T11:46:39.371Z", "upd__datetime": null, "del_datetime": null, "id_user": 0 }, { "id": 3, "name_text": "Наименование проекта", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T11:47:46.917Z", "upd__datetime": null, "del_datetime": null, "id_user": 0 }, { "id": 7, "name_text": "Наименование проекта", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T11:54:24.430Z", "upd__datetime": null, "del_datetime": null, "id_user": 0 }, { "id": 8, "name_text": "тестовая строка 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T13:07:32.268Z", "upd__datetime": null, "del_datetime": null, "id_user": 111 }, { "id": 9, "name_text": "тестовая строка 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T13:08:38.087Z", "upd__datetime": null, "del_datetime": null, "id_user": 222 }, { "id": 10, "name_text": "тестовая строка 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-10T13:09:39.098Z", "upd__datetime": null, "del_datetime": null, "id_user": 333 }, { "id": 11, "name_text": "тестовая строка 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-12T05:42:08.891Z", "upd__datetime": null, "del_datetime": null, "id_user": null }, { "id": 12, "name_text": "тестовая строка 2", "mt1_n32": "1.00", "mt2_n32": "1.00", "ref": false, "ins_datetime": "2024-01-12T05:42:41.111Z", "upd__datetime": null, "del_datetime": null, "id_user": 333 }]

		makeAutoObservable(this)
	}

	setUserProjects(userProjects) {
		this._userProjects = userProjects
	}

	get userProjects() {
		return this._userProjects
	}

}