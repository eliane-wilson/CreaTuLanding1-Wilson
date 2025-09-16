import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="px-3 knewave-regular">
      
      
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src="https://i.imgur.com/fxgDxNO.png"
          alt="Logo"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          className="me-2"
        />
        Triativ 3D
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" />

      <Navbar.Collapse id="navbarNav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
          <Nav.Link as={NavLink} to="/category/gadgets">Gadgets</Nav.Link>
          <Nav.Link as={NavLink} to="/category/souvenirs">Souvenirs</Nav.Link>
          <Nav.Link as={NavLink} to="/category/novedades">Novedades</Nav.Link>
          <Nav.Link as={NavLink} to="/category/juguetes">Juguetes</Nav.Link>
          <Nav.Link as={NavLink} to="/category/personalizado">Tu diseño Personalizado</Nav.Link>
        </Nav>

        
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
