import React from 'react';
import styled from 'styled-components';

const LoginButton = () => {
  const handleLoginClick = () => {
    // You can add the login logic or routing here
    alert('Login clicked!');
  };

  return <Button onClick={handleLoginClick}>Login</Button>;
};

// Styled Components
const Button = styled.button`
  background-color: #388e3c;
  color: white;
  padding: 10px 20px;
  font-family: 'Dosis', sans-serif; /* Change to Dosis */
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c6e2e;
  }
`;

export default LoginButton;
