import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">STYLESHOES</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#featured">Featured</Nav.Link>
                    <Nav.Link href="#retro">Retro</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}