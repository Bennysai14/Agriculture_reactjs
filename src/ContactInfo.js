import React from 'react';
import styled from 'styled-components';

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <Email href="mailto:agriculture.999@gmail.com">agriculture.999@gmail.com</Email>
      <PhoneNumber>Call Anytime: 012345678910</PhoneNumber>
    </ContactInfoContainer>
  );
};

// Styled Components
const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Email = styled.a`
  color: #388e3c;
  text-decoration: none;
  font-size: 14px;
`;

const PhoneNumber = styled.div`
  font-size: 14px;
  color: #333;
`;

export default ContactInfo;
