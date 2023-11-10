import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><NavLink to='/'>STYLESHOES</NavLink></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to='/'>
                        <span className="nav-link">Home</span>
                    </NavLink>
                    <NavLink to='/category/moda'>
                        <span className="nav-link">Featured</span>
                    </NavLink>
                    <NavLink to='/category/retro'>
                        <span className="nav-link">Retro</span>
                    </NavLink>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}