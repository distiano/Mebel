import './navbar.css';
import { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logoDiv">
            <a href="" className="logo d-flex align-items-center">
              <h3 className="fw-bold">Meubel</h3>
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} className="order-2" />

        <Offcanvas show={show} onHide={handleClose} className="offCanvas">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="mx-auto navItem">
              <Nav.Link className="navLink border-bottom">
                <a href="/home" onClick={() => navigate('/home')}>
                  Home
                </a>
              </Nav.Link>
              <Nav.Link className="navLink border-bottom">
                <a href="/search" onClick={() => navigate('/search')}>
                  Kategori
                </a>
              </Nav.Link>
              <Nav.Link className="navLink border-bottom">
                <a href="/about">Pekerjaan</a>
              </Nav.Link>
              <Nav.Link className="navLink border-bottom">
                <a href="#link">Contact</a>
              </Nav.Link>
            </Nav>
            <div className="text-center mt-3 d-flex justify-content-evenly">
              <button className="btnDaftar">Daftar</button>
              <button className="btnLogin">Login</button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Nav className="mx-auto text-center navItem d-none d-lg-flex ">
          <Nav.Link className="navLink">
            <a href="/home" onClick={() => navigate('/home')}>
              Home
            </a>
          </Nav.Link>
          <Nav.Link className="navLink">
            <a href="/search" onClick={() => navigate('/search')}>
              Kategori
            </a>
          </Nav.Link>
          <Nav.Link className="navLink">
            <a href="/about">Pekerjaan</a>
          </Nav.Link>
        </Nav>
        <div className="text-center d-none d-md-flex order-1">
          <button className="btnDaftar mx-2">Daftar</button>
          <button className="btnLogin">Login</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
