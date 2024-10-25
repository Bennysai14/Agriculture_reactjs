import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import LoginButton from './LoginButton';
import logoImage from './assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logoImage} alt="FarmVates Logo" />
        <LogoText>FarmVates</LogoText> {/* Added LogoText component */}
      </LogoContainer>
      <Navigation />
      <LoginButton />
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
font-family: 'Dosis', sans-serif; /* Change to Dosis */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: white;  /* White background */
  width: 100%;  /* Ensure it spans the full width */
  box-sizing: border-box;  /* Ensure padding is included in width */
  border-bottom: 2px solid #ddd;  /* Optional bottom border */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
`;

const Logo = styled.img`
  width: 35px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 8px; /* Space between logo and text */
`;

const LogoText = styled.span`
  font-size: 24px; /* Adjust font size as needed */
  font-weight: bold; /* Bold text */
  color: #388e3c; /* Match your theme color */
`;

export default Header;
