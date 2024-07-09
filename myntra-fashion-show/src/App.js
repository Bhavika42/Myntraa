import React from 'react';
import Header from './src/Header';
import MainContent from './src/MainContent';
import Footer from './src/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const App = () => (
  <AppContainer>
    <Header />
    <MainContent />
    <Footer />
  </AppContainer>
);

export default App;
