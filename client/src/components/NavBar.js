import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import { CALC_ROUTE } from "../utils/consts";

const NavBar = () => {
	const { user } = useContext(Context)
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink to={CALC_ROUTE}>Расчет по 3-Р</NavLink>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;