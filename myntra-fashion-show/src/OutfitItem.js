import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eaeaea;
  padding: 10px;
  margin: 10px;
`;

const OutfitItem = ({ image, name, price }) => (
  <ItemContainer>
    <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
    <h4>{name}</h4>
    <p>{price}</p>
  </ItemContainer>
);

export default OutfitItem;
