import React from 'react';
import styled from 'styled-components';

const ShowContainer = styled.div`
  text-align: center;
`;

const FashionShow = () => (
  <ShowContainer>
    <h2>Introducing Virtual Fashion Shows</h2>
    <button>CHECK OUT TOP TRENDS</button>
    <div>
      <img src="/path-to-fashion-show" alt="Fashion Show" />
    </div>
  </ShowContainer>
);

export default FashionShow;
