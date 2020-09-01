import React from 'react';
import './App.css';
import {Container } from '@material-ui/core';

import Search from './components/search/Search';
import Header from './components/header/Header';
import ParentCard from './components/result-parent/ParentCard'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container maxWidth="sm">
        <Search></Search>
      </Container>
      <Container maxWidth="lg">
        <ParentCard></ParentCard>
      </Container>
    </div>
  );
}

export default App;
