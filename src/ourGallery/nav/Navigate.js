import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg"> 
      <Container>
        <Navbar.Brand src="https://p1.hiclipart.com/preview/940/88/895/symbolize-black-music-note-png-clipart.jpg"href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Our Gallery</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guitar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Piano
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drums</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Singing
              </NavDropdown.Item>
            </NavDropdown>
{/*              <div className='container'>
            <a className='navbar-brand' href="/">
                <img
                src="https://p7.hiclipart.com/preview/1013/406/343/musical-note-clip-art-music-notes-png.jpg"
                width="30"
                height="30"
            alt="Music"/>
            </a>
          </div> */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;