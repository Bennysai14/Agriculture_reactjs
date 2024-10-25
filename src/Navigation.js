import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Pages</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>News</NavItem>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  display: flex;
  font-family: 'Dosis', sans-serif; /* Change to Dosis */
  gap: 54px;
  padding: 10px 20px; /* Added padding for better spacing */
  /* Removed background color */
  
  
`;

const NavItem = styled.div`
  font-size: 20px; /* Increased font size for better readability */
  color: #333;
  cursor: pointer;
  position: relative; /* For absolute positioning of the underline */
  transition: color 0.5s, transform 0.2s; /* Smooth transition for hover effects */

  &:hover {
    color: #388e3c; /* Change color on hover */
    transform: translateY(-2px); /* Lift effect on hover */
  }

  &:after {
    content: ''; /* Creates an underline effect */
    position: absolute;
    left: 50%;
    bottom: -5px; /* Positioning under the text */
    width: 0; /* Initial width */
    height: 1px; /* Thickness of the underline */
    background-color: #388e3c; /* Underline color */
    transition: width 0.5s ease, left 0.3s ease; /* Smooth transition for underline */
  }

  &:hover:after {
    width: 100%; /* Expand underline to full width on hover */
    left: 0; /* Align to the left */
  }
`;

export default Navigation;
