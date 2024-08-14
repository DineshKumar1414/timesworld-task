import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import banner from "../assets/images/Banner.svg";
import { faFacebookF, faTwitter, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include at least one capital letter, one number, and one symbol.');
      return;
    }

    dispatch(login({ email, password }));
    navigate('/home');
  };



  return (
    <Container>
      <Row className="justify-content-md-around justify-content-xs-center justify-content-sm-center">
        <Col md="4" className='mt-5'>
          <h2 className="text-start">Sign In</h2>
          <p className="mt-0 fs-6">New user? <button
            type="button"
            style={{ background: 'none', border: 'none', color: '#587FFF', cursor: 'pointer' }}
            onClick={(event) => { event.preventDefault(); }}>Create an account</button>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mt-2' controlId="formBasicEmail">
              <Form.Control
                className="custom-form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mt-4' controlId="formBasicPassword">
              <Form.Control
                className="custom-form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="text-danger">{error}</p>}
            </Form.Group>

            <Form.Group className="mt-4 custom-checkbox" controlId="formBasicCheckbox" >
              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 submit-button mt-4 ">
              Sign In
            </Button>
          </Form>
          <div style={{marginTop:"15px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}> <hr style={{ height: "13px", width: "25%", color: "black" }}></hr>
          <p>Or Sign In With</p><hr style={{ height: "13px", width: "25%", color: "black" }}></hr>
          </div>
          <Row className="justify-content-center">
          <Col md={12} className="social-icons">
            <Nav className="justify-content-center">
            <Nav.Link href="#">
                <FontAwesomeIcon icon={faGoogle} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faFacebookF} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
              </Nav.Link>
              
            </Nav>
          </Col>
        </Row>
        </Col>
        <Col xs="auto" md="3" className="d-none mt-3 d-md-block">
          <img
            className="d-block w-100" alt="banner"
            src={banner}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
