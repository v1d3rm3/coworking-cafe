import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
            <Navbar style={{marginBottom: "40px"}} bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Coworking Café</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/About">Sobre nós</Nav.Link>
                    <Nav.Link href="/Places">Locais</Nav.Link>
                    <Nav.Link href="/Register">Criar conta</Nav.Link>
                    <Nav.Link href="/SignIn">Entrar</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}