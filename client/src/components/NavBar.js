import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CALC_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
	const { user } = useContext(Context)
	console.log(user);
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink style={{ color: 'lime' }} to={CALC_ROUTE}>РАСЧЕТ 3-Р </NavLink>
				{user.isAuth ?
					<Nav className="ml-auto" style={{ color: 'lime' }}>
						<Button variant={"outline-light"}>Админ панель</Button>
						<Button variant={"outline-light"}>Выйти</Button>
					</Nav>
					:
					<Nav className="ml-auto" style={{ color: 'lime' }}>
						<Button variant={"outline-light"}>Авторизаця</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	);
});

export default NavBar;