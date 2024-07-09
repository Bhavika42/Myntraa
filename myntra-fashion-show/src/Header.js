import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const UserOptions = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = () => (
  <HeaderContainer>
    <img src="myntra-fashion-show/public/Myntra-Logo_PNG1.png" alt="Myntra Logo" />
    <NavLinks>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home & Living</a>
      <a href="#">Beauty</a>
      <a href="#">Studio</a>
    </NavLinks>
    <input type="text" placeholder="Search for products, brands and more" />
    <UserOptions>
      <a href="#">Profile</a>
      <a href="#">Wishlist</a>
      <a href="#">Bag</a>
    </UserOptions>
  </HeaderContainer>
);

export default Header;
