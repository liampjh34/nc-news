import { Link } from "react-router-dom"
import  Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap"

export default function Header() {
    return <Navbar 
        collapseOnSelect 
        expand="lg" 
        className="bg-body-tertiary"
        data-bs-theme='blue'
        id="header">
        <Container>
            <Navbar.Brand href='/'>big news.</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link href='/articles'>Articles</Nav.Link>
                    <Nav.Link href='/topics'>Topics</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}