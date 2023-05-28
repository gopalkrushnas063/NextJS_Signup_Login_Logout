import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LoginModal';

const AppNavbar = ({ onLogout, loggedInUser }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const openSignupModal = () => {
    setShowSignupModal(true);
  };

  const closeSignupModal = (success) => {
    setShowSignupModal(false);
    if (success) {
      // Handle success, such as showing a success message
    }
  };

  const openSigninModal = () => {
    setShowSigninModal(true);
  };

  const closeSigninModal = () => {
    setShowSigninModal(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => openSignupModal()}>Signup</Nav.Link>
            <Nav.Link onClick={openSigninModal}>Signin</Nav.Link>
          </Nav>
          {loggedInUser ? (
            <Nav>
              <Navbar.Text className="mr-3">Welcome, {loggedInUser.name}</Navbar.Text>
              <Button variant="primary" onClick={onLogout}>Logout</Button>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showSignupModal} onHide={closeSignupModal}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupModal show={showSignupModal} onClose={closeSignupModal} />
        </Modal.Body>
      </Modal>

      <Modal show={showSigninModal} onHide={closeSigninModal}>
        <Modal.Header closeButton>
          <Modal.Title>Signin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal show={showSigninModal} onClose={closeSigninModal} onLogin={loggedInUser => setLoggedInUser(loggedInUser)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AppNavbar;
