import React from 'react';
import OutfitItem from './OutfitItem';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OutfitDetails = () => (
  <DetailsContainer>
    <OutfitItem image="myntra-fashion-show/public/top1.png" name="Top1" price="$20" />
    <OutfitItem image="myntra-fashion-show/public/top2.png" name="Top2" price="$30" />
    <OutfitItem image="myntra-fashion-show/public/top3.png" name="Top3" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/top4.png" name="Top4" price="$25" />
    <OutfitItem image="myntra-fashion-show/public/shoes1.png" name="Shoes1" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/shoes2.png" name="Shoes2" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/shoes3.png" name="Shoes3" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/earrings1.png" name="Earrings1" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/earring2.png" name="Earrings2" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/earrings3.png" name="Earrings3" price="$10" />
    <OutfitItem image="myntra-fashion-show/public/jewellery 1.png" name="Jewellery" price="$10" />
    
  </DetailsContainer>
);

export default OutfitDetails;
