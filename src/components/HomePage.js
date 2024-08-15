import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, loadMoreCountries } from '../features/countrySlice';
import { Container, Row, Col, Button, Card, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Slider from './Slider';
import Footer from './Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { countries, visibleCountries } = useSelector((state) => state.country);
  const portraitImage = "https://picsum.photos/600/800";
  const landscapeImage = "https://picsum.photos/800/600";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const image = isMobile ? landscapeImage : portraitImage;

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCountries());
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <h1 className="welcome-text">Countries</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
     
      <div className="d-none d-md-flex">
        <Nav.Link >Asia</Nav.Link>
        <Nav.Link >Europe</Nav.Link>
      </div>

     
      <div className="d-flex d-md-none">
        <NavDropdown title="All" id="basic-nav-dropdown">
          <NavDropdown.Item href="#asia">Asia</NavDropdown.Item>
          <NavDropdown.Item href="#europe">Europe</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Row className='justify-content-md-between'>
        <Col xs="12" md="4"><hr style={{ marginTop: "0px"}} className='custom-hr'></hr>
        </Col>
        <Col xs="12" md="4"> <h1 className="text-center">WELCOME</h1>
        </Col>
        <Col xs="12" md="4"><hr className='custom-hr' style={{marginTop: isMobile ? "0px" : "40px"}}></hr>
        </Col>
    </Row>
    <Row className='justify-content-md-between align-items-stretch'>
      {isMobile ? (
        <>
          <Col xs="12" className="mb-3">
            <img src={image} alt="Responsive" className="responsive-img" />
          </Col>
          <Col xs="12">
            <Slider />
          </Col>
        </>
      ) : (
        <>
          <Col md="8">
            <Slider />
          </Col>
          <Col md="4">
            <img src={image} alt="Responsive" className="responsive-img" />
          </Col>
        </>
      )}
    </Row>


      <h3 className="mt-5">Countries</h3>
      <Row>
        {visibleCountries.map((country, index) => (
          <Col md={4} key={index} className="my-2">
            <Card>
            <Row><Col>
              <Card.Img className="rounded-img" variant="top" src={country.flag} /></Col><Col>
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>{country.region}</Card.Text>
              </Card.Body></Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCountries.length < countries.length && (
        <div className="text-center my-4">
          <Button className='submit-button' onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
      {countries && countries.length ? <Footer /> : <></> }
    </Container>
  );
};

export default Home;
