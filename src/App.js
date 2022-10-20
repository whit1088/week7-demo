import React, { useState, useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';
import Women from './components/Women'

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className='App'>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={ <Card data={data}/>} />
          <Route path='/women' element={ <Women data={data}/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
