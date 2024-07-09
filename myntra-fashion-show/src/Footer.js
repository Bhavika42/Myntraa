import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #f8f8f8;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Myntra. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
