import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Calc from './pages/Calc_3r';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, CALC_ROUTE } from "./utils/consts";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: Admin
	},


]

export const publicRoutes = [
	{
		path: CALC_ROUTE,
		Component: Calc
	},
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	},
	/* 	{
			path: ADMIN_ROUTE,
			Component: Admin
		}, */

]