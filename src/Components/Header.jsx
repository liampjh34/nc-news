import { Link } from "react-router-dom"
import  Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap"

export default function Header() {
    return <Navbar 
        collapseOnSelect 
        expand="sm" 
        data-bs-theme="light"
        bg="primary"
        id="header">
        <Container>
            <Navbar.Brand id="navbar-brand" href='/'>big news</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link href='/articles' className="nav-linked">articles</Nav.Link>
                    <Nav.Link href='/topics'>topics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}