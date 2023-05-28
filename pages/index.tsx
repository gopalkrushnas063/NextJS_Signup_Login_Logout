import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import SignupModal from '../components/SignupModal';



const inter = Inter({ subsets: ['latin'] })
const HomePage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignupModalClose = (success) => {
    setShowSignupModal(false);
    if (success) {
      // Show success alert here
    }
  };

  return (
    <div>
      <AppNavbar user={user} />
      <Container>
        <h1>Welcome to the Homepage</h1>
       
      </Container>
    </div>
  );
};

export default HomePage;
