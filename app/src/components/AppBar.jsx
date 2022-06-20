import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Coworking Café</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/About">Sobre nós</Nav.Link>
                    <Nav.Link href="/Places">Locais</Nav.Link>
                    <Nav.Link href="/SigIn">Entrar</Nav.Link>z
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}